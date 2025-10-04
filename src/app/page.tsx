"use client"

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="font-sans bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
              Report. Track. Improve.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your community reporting platform. Help make your neighborhood better by reporting issues and tracking their resolution in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/map">
                <Button size="lg" className="w-full sm:w-auto">
                  View Live Map
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Submit a Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, effective community reporting in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary-foreground">📍</span>
                </div>
                <CardTitle>Report Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Spot a problem? Report it instantly with our easy-to-use interface. Add photos, locations, and descriptions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary-foreground">🗺️</span>
                </div>
                <CardTitle>Track in Real-Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  View all reported issues on our interactive map. See what's happening in your community at a glance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary-foreground">✅</span>
                </div>
                <CardTitle>Get Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay informed as issues are addressed. Get notifications when your reports are updated or resolved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,234</div>
              <div className="text-muted-foreground">Total Reports</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,145</div>
              <div className="text-muted-foreground">Issues Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">93%</div>
              <div className="text-muted-foreground">Resolution Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to make a difference?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Join thousands of community members working together to improve our neighborhoods.
          </p>
          <Link href="/map">
            <Button size="lg" variant="secondary">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-muted-foreground text-sm text-center">© 2025 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
