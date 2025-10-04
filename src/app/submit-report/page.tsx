
"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ReportFormData {
  animal: string,
  status: string,
  location: string,
  position: Number[]
  description?: string,
  reporterName?: string,
  reporterEmail?: string,
  contactNumber?: string,
}

export default function SubmitReportPage() {
  const [formData, setFormData] = useState<ReportFormData>({
    animal: '',
    status: '',
    location: '',
    position: []
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
      // TODO: Replace with your actual API endpoint
      const response = await fetch('http://localhost:8000/marker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Report submitted successfully!')
        // Reset form
        setFormData({
          animal: '',
          status: '',
          location: '',
          position: []
        })
      } else {
        alert('Error submitting report. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting report. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Submit Animal Report</CardTitle>
          <CardDescription>
            Help us keep track of wildlife in your area by submitting a detailed report.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="animal">Animal Type *</Label>
              <Select 
                value={formData.animal} 
                onValueChange={(value) => handleInputChange('animal', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select animal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="squirrel">Squirrel</SelectItem>
                  <SelectItem value="raccoon">Raccoon</SelectItem>
                  <SelectItem value="bird">Bird</SelectItem>
                  <SelectItem value="cat">Cat</SelectItem>
                  <SelectItem value="dog">Dog</SelectItem>
                  <SelectItem value="deer">Deer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="Enter the location where you spotted the animal"
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
                placeholder="Provide details about the animal, its condition, behavior, or any concerns..."
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
                  <SelectItem value="low">Low - General observation</SelectItem>
                  <SelectItem value="medium">Medium - Requires attention</SelectItem>
                  <SelectItem value="high">High - Immediate action needed</SelectItem>
                  <SelectItem value="emergency">Emergency - Animal in distress</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reporter Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reporterName">Your Name *</Label>
                  <Input
                    id="reporterName"
                    placeholder="Enter your full name"
                    value={formData.reporterName}
                    onChange={(e) => handleInputChange('reporterName', e.target.value)}
                    required
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
                <Label htmlFor="reporterEmail">Email Address *</Label>
                <Input
                  id="reporterEmail"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.reporterEmail}
                  onChange={(e) => handleInputChange('reporterEmail', e.target.value)}
                  required
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