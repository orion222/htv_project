import { Map } from "./map";

export default function App() {
  return (
    <div className="font-sans">
      <main className="p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Live Map</h1>
          <div className="h-[500px] w-full rounded-lg border">
            <Map className="h-full w-full rounded-lg" />
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
