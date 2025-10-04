"use client"

import { MarkerData } from '../../types/Marker'

interface PopupDetailProps {
  data: MarkerData
}

export default function PopupDetail({ data }: PopupDetailProps) {
  const timestamp = new Date(data.timestamp)
  return (
    <div className="flex flex-col space-y-2 p-2 min-w-[200px]">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700">Report ID</span>
        <span className="text-sm text-gray-900">{data.id}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700">Title</span>
        <span className="text-sm text-gray-900 capitalize">{data.title}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700">Position</span>
        <span className="text-sm text-gray-900">
          {data.position[0].toFixed(4)}, {data.position[1].toFixed(4)}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700">Report Time</span>
        <span className="text-sm text-gray-900">{timestamp.toLocaleString()}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700">Status</span>
        <span className={`text-sm font-medium px-2 py-1 rounded-full text-center ${
          data.status === 'CLEANED'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {data.status}
        </span>
      </div>
    </div>
  )
}