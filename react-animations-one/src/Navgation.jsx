
export default function Navigation(){

    return(
        <nav className="flex items-center justify-around p-4 m-2 rounded-xl">
                <h1 className="text-2xl font-bold text-blue-500">
                    NOVA
                </h1>

                    <a href="#" className="text-gray-500 text-shadow-indigo-200 font-bold hover:border-b-2 border-blue-400  ">HOME</a>
                    <a href="#" className="hover:border-b-2 border-blue-400">ABOUT US</a>
                    <a href="#" className="hover:border-b-2 border-blue-400">NEWS</a>
                    <a href="#" className="hover:border-b-2 border-blue-400">CONTACT</a>

                <a href="#games">
                    <button className="rounded-lg bg-blue-600 px-5 py-2 transition-transform duration-300 hover:scale-110">
                    Explore Games
                </button>
                </a>
            </nav>
    )
}