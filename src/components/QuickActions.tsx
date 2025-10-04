"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="default" className="w-full">
          Submit New Report
        </Button>
        <Button variant="outline" className="w-full">
          View All Reports
        </Button>
        <Button variant="outline" className="w-full">
          Download Data
        </Button>
      </CardContent>
    </Card>
  );
}
