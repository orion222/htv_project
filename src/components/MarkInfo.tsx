"use client"

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from './ui/input';
import { useMarkers } from '../contexts/MarkersContext'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Address = {
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | number | null;
};

export default function MapInfoPanel() {
  const [isExpanded, setIsExpanded] = useState(() => {
    const phoneWidth = 870;
    if (typeof window !== "undefined") {
      return window.innerWidth >= phoneWidth;
    }
    return false;
  });
  const { activeMarker } = useMarkers();
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

  const handleResetFilters = () => {
    setFilters({
      date: "",
      category: "",
      status: "",
      urgency: ""
    });
    console.log("Filters reset");
    // TODO: Reset map data to show all markers
  }

  const addressConcat = (address?: Address | null, sep = ", ", fallback = "N/A"): string => {
  if (!address || typeof address !== "object") return fallback;
    const { street, city, state: region, zip } = address;

    const parts = [street, city, region, zip]
      .map(v => (v == null ? "" : String(v).trim()))
      .filter(s => s.length > 0);

    return parts.length ? parts.join(sep) : fallback;
  }

  return (
    <div className={`absolute top-8 right-8 transition-all duration-300 z-40 ${
      isExpanded ? 'w-64 h-[90%]' : 'w-16 h-16'
    }`}>
      {isExpanded ? (
        <Card className="h-full bg-card rounded-3xl shadow-lg border-none">
          <CardHeader className="">
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
          <div className="border-t border-border/30 mx-4"></div>
          <CardContent className="text-card-foreground overflow-y-auto h-[calc(100%-80px)]">
            {state === "Mark Info" ? (
              <>
                <div className="flex flex-col space-y-2">
                  <div className='mb-4 flex flex-col'>
                    <Label className="text-sm font-semibold text-gray-700">Description:</Label>
                    <div className='text-sm text-gray-900'>{activeMarker?.description}</div>
                  </div>

                  <div className='mb-4 flex flex-col'>
                    <Label className="text-sm font-semibold text-gray-700">Category:</Label>
                    <div className='text-sm text-gray-900'>{activeMarker?.category}</div>
                  </div>

                  <div className='mb-4 flex flex-col'>
                    <Label className="text-sm font-semibold text-gray-700">Urgency:</Label>
                    <div className='text-sm text-gray-900'>{activeMarker?.urgency}</div>
                  </div>

                  <div className='mb-4 flex flex-col'>
                    <Label className="text-sm font-semibold text-gray-700">Address:</Label>
                    <div className='text-sm text-gray-900'>{addressConcat(activeMarker?.address)}</div>
                  </div>

                  <div className='mb-4 flex flex-col'>
                    <Label className="text-sm font-semibold text-gray-700">Address ID:</Label>
                    <div className='text-sm text-gray-900'>{activeMarker?.address_id}</div>
                  </div>
                </div>
              </>
            ):(
              <>
                <div className="flex flex-col gap-2">
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
                  <div className="flex gap-2 mt-2">
                    <Button onClick={handleApplyFilters} className="flex-1">
                      Apply Filters
                    </Button>
                    <Button 
                      onClick={handleResetFilters} 
                      variant="outline" 
                      className="flex-1"
                    >
                      Reset
                    </Button>
                  </div>
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
