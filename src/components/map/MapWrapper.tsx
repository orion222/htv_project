'use client'
import { useState, useEffect } from 'react'
import { MarkerData } from '../../types/Marker'
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});


export default function MapWrapper() {
    const [mounted, setMounted] = useState(false)
    const [markers, setMarkers] = useState<MarkerData[]>([])

    const setDefault = true
    const center: [number, number] = [0, 0];
    const utsc_position: [number, number] = [43.78472822909501, -79.1861080766575]
    useEffect(() => {
      const fetchMarkers = async () => {
        try {
          const response = await fetch("http://localhost:8000/marker", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const data = await response.json()
          console.log(data);
          setMarkers(data?.markers)
        } catch (error) {
          console.error('Error fetching markers:', error)
          setMarkers([])
        } finally {
          setMounted(true)
        }
      }

      fetchMarkers()
    }, [])

    if (!mounted) {
      return (
        <div className={`flex items-center justify-center bg-gray-100 'h-96 w-full'}`}>
          <div className="text-gray-500">Loading interactive map...</div>
        </div>
      )
    }

    return (
      <DynamicMap markers={markers} center={setDefault ? utsc_position: center}/>
    )
}