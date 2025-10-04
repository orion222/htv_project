"use client"

import { StatCard } from "@/components/ui/stat-card";

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Total Reports"
        value="1,234"
        description="All time reports"
        trend={{ value: 12.5, label: "from last month", direction: "up" }}
      />
      <StatCard
        title="Active Issues"
        value="89"
        description="Pending resolution"
        trend={{ value: 5.2, label: "from last week", direction: "down" }}
      />
      <StatCard
        title="Resolved"
        value="1,145"
        description="Successfully closed"
        trend={{ value: 8.1, label: "from last month", direction: "up" }}
      />
    </div>
  );
}
