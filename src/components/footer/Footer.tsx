import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#1a1f25] text-white py-8 mt-auto">
      <div className="text-center">
        <p className="text-gray-300 mb-4 text-lg">
          Acesse minhas redes sociais!
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/ewerttongoncalves/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin className="text-3xl text-[#00aaff] hover:text-[#33cfff] transition-colors" />
          </a>

          <a
            href="https://github.com/ewerttongoncalvesdev"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaGithub className="text-3xl text-gray-300 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer