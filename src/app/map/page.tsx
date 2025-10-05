'use client'
import MapInfoPanel from "@/components/MarkInfo";
import StatsOverview from "@/components/StatsOverview";
import RecentActivity from "@/components/RecentActivity";
import QuickActions from "@/components/QuickActions";
import MapWrapper from '../../components/map/MapWrapper'
import { useEffect, useState } from 'react'
import { MarkersProvider, useMarkers } from '../../contexts/MarkersContext'
import { BACKEND_URL } from '../../lib/constants'

export function MapPage() {
    const { markers, setMarkers, setAllMarkers, setActiveMarker, activeMarker } = useMarkers()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      const fetchMarkers = async () => {
        try {
          const response = await fetch(`${BACKEND_URL}/marker`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const data = await response.json()
          setMarkers(data?.markers || [])
          setAllMarkers(data?.markers || []);
          setActiveMarker(data?.markers[0] ?? activeMarker)
        } catch (error) {
          console.error('Error fetching markers:', error)
          setMarkers([])
        } finally {
          setMounted(true)
        }
      }

      fetchMarkers()
    }, [setMarkers, setAllMarkers])

    if (!mounted || !markers) {
      return (
        <div className={`flex items-center justify-center bg-gray-100 h-96 w-full`}>
          <div className="text-gray-500">Loading interactive map...</div>
        </div>
      )
    }


  return (
    <div className="font-sans bg-background min-h-screen">
      <main>
        <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Live Map</h1>
            <p className="text-muted-foreground">Track and monitor real-time reports</p>
          </div>
        </div>

        <div className="h-[500px] w-full relative">
          <MapWrapper/>
          <MapInfoPanel />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <StatsOverview />
              <RecentActivity />
            </div>
            <div>
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function MapPageWrapper() {
  return (
    <MarkersProvider>
      <MapPage />
    </MarkersProvider>
  )
}