

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <div>
                    <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">Home</a>
                    <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">About</a>
                    <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">Contact</a>
                </div>
            </div>
        </nav>
    );
}