'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { MarkerData } from '../types/Marker'

export interface MarkersContextType {
  allMarkers: MarkerData[],
  setAllMarkers: React.Dispatch<React.SetStateAction<MarkerData[]>>
  markers: MarkerData[]
  setMarkers: React.Dispatch<React.SetStateAction<MarkerData[]>>
  activeMarker: MarkerData
  setActiveMarker: React.Dispatch<React.SetStateAction<MarkerData>>
}

export const MarkersContext = createContext<MarkersContextType | undefined>(undefined)

interface MarkersProviderProps {
  children: ReactNode
}

export function MarkersProvider({ children }: MarkersProviderProps) {

  const fakeActiveMarker: MarkerData = {
    id: 0,
    position: [0, 0] as [number, number],
    description: '',
    title: '',
    urgency: '',
    category: '',
    status: '',
    timestamp: '',
    address_id: null,
    address: {},
  }
  const [allMarkers, setAllMarkers] = useState<MarkerData[]>([]);
  const [markers, setMarkers] = useState<MarkerData[]>([])
  const [activeMarker, setActiveMarker] = useState<MarkerData>(fakeActiveMarker)

  return (
    <MarkersContext.Provider value={{ allMarkers, setAllMarkers, markers, setMarkers, activeMarker, setActiveMarker }}>
      {children}
    </MarkersContext.Provider>
  )
}

export function useMarkers() {
  const context = useContext(MarkersContext)
  if (context === undefined) {
    throw new Error('useMarkers must be used within a MarkersProvider')
  }
  return context
}