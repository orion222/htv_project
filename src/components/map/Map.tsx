'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MarkerData } from '@types/Marker'
import PopupDetail from './PopupDetail'

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})



interface MapProps {
  className?: string
}

function LocationMarker() {
  const [position, setPosition] = useState<[number, number] | null>(null)

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition([e.latlng.lat, e.latlng.lng])
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default function Map({ className }: MapProps) {
  const [mounted, setMounted] = useState(false)
  const [markers, setMarkers] = useState<MarkerData[]>([])

    useEffect(() => {
      const fetchMarkers = async () => {
        try {
          const response = await fetch("http://localhost:8000/marker", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          
          const data = await response.json()
          setMarkers(data?.markers)
        } catch (error) {
          console.error('Error fetching markers:', error)
          // Set empty array as fallback
          setMarkers([])
        } finally {
          setMounted(true)
        }
      }

      fetchMarkers()
  }, [])
  
  if (!mounted) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className || 'h-96 w-full'}`}>
        <div className="text-gray-500">Loading interactive map...</div>
      </div>
    )
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={6}
      className={`${className || 'h-96 w-full left-0'} z-0`}
      style={{ height: '100%', width: '120vw', marginLeft: '-10vw' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
      />
      {
      markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>
            <PopupDetail data={marker}/>
          </Popup>
        </Marker>
      ))}
      <LocationMarker />
    </MapContainer>
  )
}