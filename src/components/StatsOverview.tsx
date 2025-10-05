"use client"

import { StatCard } from "@/components/ui/stat-card";
import { useMarkers } from '../contexts/MarkersContext'
import { useMemo } from 'react'
export default function StatsOverview() {
  const { markers } = useMarkers();
  const totalResolved = useMemo(() => markers.reduce((prev, cur) => prev + (cur.status === 'Resolved' ? 1: 0), 0), [markers])
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
      <StatCard
        title="Total Reports"
        value={markers.length}
        description="All time reports"
        trend={{ value: 12.5, label: "from last month", direction: "up" }}
      />
      <StatCard
        title="Active Issues"
        value={markers.length - totalResolved}
        description="Pending resolution"
        trend={{ value: 5.2, label: "from last week", direction: "down" }}
      />
      <StatCard
        title="Resolved"
        value={totalResolved}
        description="Successfully closed"
        trend={{ value: 8.1, label: "from last month", direction: "up" }}
      />
    </div>
  );
}
