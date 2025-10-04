"use client"

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function MapInfoPanel() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [state, setState] = useState("Mark Info")
  const [filters, setFilters] = useState({
    date: "",
    category: "",
    status: "",
    urgency: ""
  })

  const handleApplyFilters = () => {
    console.log("Applying filters:", filters);
    // TODO: Apply filters to map data
  }

  return (
    <div className={`absolute top-8 right-8 transition-all duration-300 z-40 ${
      isExpanded ? 'w-64 h-[90%]' : 'w-16 h-16'
    }`}>
      {isExpanded ? (
        <Card className="h-full bg-card rounded-3xl shadow-lg border-none">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-card-foreground flex gap-4 ">
                {state === "Mark Info" ? (
                  <>
                    <h1 className='underline cursor-pointer'>Mark Info</h1>
                    <h1 className='cursor-pointer' onClick={() => setState("Filters")}>Filters</h1>
                  </>
                ):
                (
                 <>
                  <h1 className='cursor-pointer' onClick={() => setState("Mark Info")}>Mark Info</h1>
                  <h1 className='underline cursor-pointer'>Filters</h1>
                 </>
                )}

              </CardTitle>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsExpanded(false)}
                className="hover:bg-muted"
              >
                <h1 className="text-base">-</h1>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="text-card-foreground overflow-y-auto h-[calc(100%-80px)]">
            {state === "Mark Info" ? (
              <>
              </>
            ):(
              <>
                <div className="flex flex-col gap-4">
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date-input"
                      type="date"
                      value={filters.date}
                      onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor="category">Category</Label>
                      <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                        <SelectTrigger id="category-select">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="infrastructure">Infrastructure</SelectItem>
                          <SelectItem value="environment">Environment</SelectItem>
                          <SelectItem value="safety">Safety</SelectItem>
                          <SelectItem value="health">Health</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor="status">Status</Label>
                      <Select value={filters.status} onValueChange={(value) => setFilters({ ...filters, status: value })}>
                        <SelectTrigger id="status-select">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="complete">Complete</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor="urgency">Urgency</Label>
                      <Select value={filters.urgency} onValueChange={(value) => setFilters({ ...filters, urgency: value })}>
                        <SelectTrigger id="urgency-select">
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>
                  <Button className='mt-2' onClick={handleApplyFilters}>Apply Filters</Button>
                </div>

              </>
            )}
          </CardContent>
        </Card>
      ) : (
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsExpanded(true)}
          className="w-full h-full bg-card rounded-3xl shadow-lg hover:bg-card/90"
        >
          <h1 className="text-base">+</h1>
        </Button>
      )}
    </div>
  );
}
