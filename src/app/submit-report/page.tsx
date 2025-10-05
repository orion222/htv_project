
"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {NEXT_PUBLIC_GEOAPIFY_API_KEY} from '@/lib/constants'
import { useRouter } from 'next/navigation'

interface ReportFormData {
  issue_category: string,
  status: string,
  location: string,
  description?: string,
  reporterName?: string,
  reporterEmail?: string,
  contactNumber?: string,
}

export default function SubmitReportPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<ReportFormData>({
    issue_category: '',
    status: '',
    location: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ReportFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {      
      let gemini_arg = ''
      for (const [k, v] of Object.entries(formData)) {
        gemini_arg += `${k}: ${v}, `
      }
      
      console.log({
        'description': gemini_arg
      })
      const response = await fetch('http://localhost:8000/submit-report-gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'description': gemini_arg})
      })
      console.log(response);
      if (response.status === 200) {
        alert('Report submitted successfully!')
        // Reset form
        setFormData({
          issue_category: '',
          status: '',
          location: '',
        })
      } else {
        alert('Error submitting report. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting report. Please try again.')
    } finally {
      setIsSubmitting(false)
      router.push('/map')
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Submit City Issue Report</CardTitle>
          <CardDescription className="mt-2">
            Help us maintain a safe, clean, and accessible city by reporting public issues you encounter.
          </CardDescription>
          <CardDescription>
            Use this form to notify city staff about problems in your community — such as damaged roads, broken streetlights, flooding, graffiti, garbage, or safety hazards.
          </CardDescription>
          <CardDescription>
            Your report will help city maintenance teams identify, prioritize, and resolve issues more efficiently.
          </CardDescription>
          <CardDescription>
            Please include as much detail as possible about the location, type, and severity of the issue. You do not need to provide personal contact information to submit a report.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="Enter the location where you spotted the issue (Ex. address, intersection, landmark)..."
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide details about the issue, its condition, behavior, or any concerns..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                required
              />
            </div>

            {/* Urgency Level */}
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency Level *</Label>
              <Select 
                value={formData.status} 
                onValueChange={(value) => handleInputChange('status', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low - Minor issue (no immediate hazard)</SelectItem>
                  <SelectItem value="Medium">Medium - Requires attention</SelectItem>
                  <SelectItem value="High">High - Urgent or safety concern</SelectItem>
                  <SelectItem value="Critical">Critical - Emergency / public danger</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reporter Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reporterName">Your Name</Label>
                  <Input
                    id="reporterName"
                    placeholder="Enter your full name"
                    value={formData.reporterName}
                    onChange={(e) => handleInputChange('reporterName', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.contactNumber}
                    onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <Label htmlFor="reporterEmail">Email Address</Label>
                <Input
                  id="reporterEmail"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.reporterEmail}
                  onChange={(e) => handleInputChange('reporterEmail', e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Report...' : 'Submit Report'}
              </Button>
            </div>

            <p className="text-sm text-gray-600 text-center">
              * Required fields. Your information will be kept confidential and used only for follow-up purposes.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}