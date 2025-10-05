"use client"

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-card px-8 py-4 border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">City Watch</Link>
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all">Home</Link>
                    <Link href="/map" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all">Map</Link>
                    <Link href="/api" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all">API</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/submit-report" className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">Report</Link>
                </div>
            </div>
        </nav>
    );
}