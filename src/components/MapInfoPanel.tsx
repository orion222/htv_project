"use client"

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MapInfoPanel() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`absolute top-8 right-8 transition-all duration-300 z-[1000] ${
      isExpanded ? 'w-64 h-[90%]' : 'w-16 h-16'
    }`}>
      {isExpanded ? (
        <Card className="h-full bg-card rounded-3xl shadow-lg border-none">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-card-foreground">Map Info</CardTitle>
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
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2">View all markers and locations on the map.</p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-medium mb-2">Recent Reports</p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <p className="font-medium">Report #1</p>
                    <p className="text-muted-foreground text-xs">2 hours ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Report #2</p>
                    <p className="text-muted-foreground text-xs">5 hours ago</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-medium mb-2">Quick Actions</p>
                <Button variant="default" className="w-full">Submit Report</Button>
              </div>
            </div>
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
