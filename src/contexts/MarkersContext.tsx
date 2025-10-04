'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { MarkerData } from '../types/Marker'

export interface MarkersContextType {
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
  const [markers, setMarkers] = useState<MarkerData[]>([])
  const [activeMarker, setActiveMarker] = useState<MarkerData>(null)

  return (
    <MarkersContext.Provider value={{ markers, setMarkers, activeMarker, setActiveMarker }}>
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