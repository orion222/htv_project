"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RecentActivity() {
  const activities = [
    { id: 1, title: "Pothole reported on Main St", status: "pending", time: "5 min ago" },
    { id: 2, title: "Street light out on Oak Ave", status: "success", time: "1 hour ago" },
    { id: 3, title: "Graffiti on Park bench", status: "pending", time: "2 hours ago" },
    { id: 4, title: "Tree branch blocking road", status: "success", time: "3 hours ago" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
              <Badge variant={activity.status === "success" ? "success" : "warning"}>
                {activity.status === "success" ? "Resolved" : "Pending"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
