"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarkers } from '../contexts/MarkersContext'
export default function RecentActivity() {
  const { markers } = useMarkers();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="max-h-70 overflow-y-auto pr-2">
            {markers.map((marker) => (
              <div key={marker.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="flex-1">
                  <p className="text-sm font-medium">{marker.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{new Date(marker.timestamp).toLocaleString()}</p>
                </div>
                <Badge variant={marker.status === "Resolved" ? "success" : (marker.status === 'Pending' ? "warning": "secondary")}>
                  {marker.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
