"use client"

import { StatCard } from "@/components/ui/stat-card";
import { useMarkers } from '../contexts/MarkersContext'
import { useMemo } from 'react'
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

export default function StatsOverview() {
  const { markers } = useMarkers();
  const totalResolved = useMemo(() => markers.reduce((prev, cur) => prev + (cur.status === 'Resolved' ? 1 : 0), 0), [markers]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
      <StatCard
        title="Total Reports"
        value={markers.length}
        description="All time reports"
        icon={<FaInfoCircle className="text-blue-500" />}
      />
      <StatCard
        title="Active Issues"
        value={markers.length - totalResolved}
        description="Pending resolution"
        icon={<FaExclamationTriangle className="text-yellow-500" />}
      />
      <StatCard
        title="Resolved"
        value={totalResolved}
        description="Successfully closed"
        icon={<FaCheckCircle className="text-green-500" />}
      />
    </div>
  );
}
