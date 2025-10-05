'use client'
import dynamic from 'next/dynamic';
import { useMarkers } from '../../contexts/MarkersContext'

const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});

export default function MapWrapper() {
  const { markers } = useMarkers();

  const default_position: [number, number] = markers.length ? markers[0].position: [0, 0]
  return (
    <DynamicMap markers={markers} center={default_position}/>
  )
}

