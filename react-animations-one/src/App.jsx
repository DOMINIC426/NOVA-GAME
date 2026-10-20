export default function App() {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
          

            <nav className="flex items-center justify-between p-6 bg-white m-2">
                <h1 className="text-2xl font-bold text-blue-500">
                    NOVA
                </h1>

                <button className="rounded-lg bg-blue-600 px-5 py-2 transition-transform duration-300 hover:scale-110">
                    Explore Games
                </button>
            </nav>
            

            <main className="flex min-h-[80vh] flex-col items-center justify-center text-center">
                <h2 className="text-5xl font-bold">
                    ENTER THE NEXT LEVEL
                </h2>

                <p className="mt-4 text-gray-400">
                    Discover your next gaming adventure.
                </p>
            </main>

        </div>
    );
}