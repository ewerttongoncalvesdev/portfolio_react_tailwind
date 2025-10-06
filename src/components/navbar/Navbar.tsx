import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="w-full bg-[#1a1f25] text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Nome à esquerda */}
        <Link
          to="/"
          className="text-2xl font-bold hover:text-[#00aaff] transition-colors"
        >
          Ewertton Gonçalves
        </Link>

        {/* Links à direita */}
        <div className="flex gap-8 text-lg">
          <Link
            to="/projetos"
            className="hover:text-[#00aaff] transition-colors"
          >
            Projetos
          </Link>

          {/*<Link
            to="/contato"
            className="hover:text-[#00aaff] transition-colors"
          >
            Contato
          </Link>*/}
        </div>
      </nav>
    </header>
  )
}

export default Navbar