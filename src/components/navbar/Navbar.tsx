import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className='w-full flex justify-center py-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 shadow-lg backdrop-blur-sm'>
            <div className="container flex justify-between items-center text-2xl font-bold px-6 py-2">
                <Link 
                    to='/sobre' 
                    className="relative text-2xl font-bold text-gray-800 hover:text-gray-900 transition-all duration-300 group"
                >
                    Ewertton Gonçalves
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <div className='flex gap-8 items-center'>
                    <Link 
                        to='/projetos' 
                        className="relative text-xl font-semibold text-gray-800 hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
                    >
                        Projetos
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
