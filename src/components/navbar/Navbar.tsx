import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-cyan-300 text-black '>

                <div className="container flex justify-between text-2xl font-bold p-2">
                    <Link to='/sobre' className="text-2xl font-bold">Ewertton Gonçalves</Link>

                    <div className='flex gap-6'>
                        <Link to='/projetos' className="text-2xl font-bold">Projetos</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar