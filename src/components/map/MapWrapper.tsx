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
  const setDefault = true
  const center: [number, number] = [0, 0];
  const utsc_position: [number, number] = [43.78472822909501, -79.1861080766575]
  return (
    <DynamicMap markers={markers} center={setDefault ? utsc_position: center}/>
  )
}

