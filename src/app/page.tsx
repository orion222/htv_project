"use client"

import dynamic from 'next/dynamic';

const Map = dynamic(() => import("../components/map/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});

export default function App() {
  return (
    <div className="font-sans">
      <main className="p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Live Map</h1>
          <div className="h-[500px] w-full rounded-lg border">
            <Map/>
          </div>
        </div>
        <div className="text-center">
          <p>Submit a report</p>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
