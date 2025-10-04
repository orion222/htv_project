"use client"

import dynamic from 'next/dynamic';
import MapInfoPanel from "@/components/MarkInfo";
import StatsOverview from "@/components/StatsOverview";
import RecentActivity from "@/components/RecentActivity";
import QuickActions from "@/components/QuickActions";

const Map = dynamic(() => import("../../components/map/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});

export default function MapPage() {
  return (
    <div className="font-sans bg-background min-h-screen">
      <main>
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Live Map</h1>
            <p className="text-muted-foreground">Track and monitor real-time reports</p>
          </div>

          <StatsOverview />
        </div>

        <div className="h-[500px] w-full relative">
          <Map/>
          <MapInfoPanel />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            <div>
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-muted-foreground text-sm text-center">© 2025 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
