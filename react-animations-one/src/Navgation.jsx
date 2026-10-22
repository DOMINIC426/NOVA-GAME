
export default function Navigation(){

    return(
        <nav className="flex items-center justify-between p-4 m-2 rounded-xl">
                <h1 className="text-2xl font-bold text-blue-500">
                    NOVA
                </h1>

                <a href="#games">
                    <button className="rounded-lg bg-blue-600 px-5 py-2 transition-transform duration-300 hover:scale-110">
                    Explore Games
                </button>
                </a>
            </nav>
    )
}