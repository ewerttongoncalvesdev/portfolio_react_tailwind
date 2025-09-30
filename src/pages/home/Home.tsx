import perfil from "../../assets/img/perfil.jpg";

function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 flex justify-center min-h-screen">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 mt-12">
        
        {/* Sobre mim */}
        <div className="flex flex-col gap-4 justify-center order-2 lg:order-1">
          <div className="space-y-3">
            <h2 className="text-5xl font-bold text-gray-800 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Sobre
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
          </div>
          
          <div className="space-y-3 text-gray-700">
            <p className="text-justify leading-relaxed">
              Sou <span className="font-semibold text-gray-900">Ewertton Gonçalves</span>, atualmente curso Engenharia de Software, consolidando minha base acadêmica para evoluir na área de tecnologia.
            </p>
            <p className="text-justify leading-relaxed">
              Praticante de jiu-jitsu, desenvolvo valores como disciplina, foco e resiliência — princípios que aplico em minha trajetória profissional. Essa prática esportiva me inspira a manter constância no aprendizado, evolução contínua e superação de desafios, competências que levo para meus projetos e equipes.
            </p>
            <p className="text-justify leading-relaxed">
              Estou consolidando conhecimentos em <span className="font-medium text-cyan-700">JavaScript, TypeScript, HTML, CSS, React, Tailwind, Node.js, NestJS, Git</span> e bancos de dados relacionais <span className="font-medium text-cyan-700">(MySQL / PostgreSQL)</span>. Possuo experiência anterior em engenharia e manutenção, que me proporcionou habilidades transferíveis como resolução de problemas, comunicação eficaz, trabalho em equipe e gestão de tempo.
            </p>
          </div>
        </div>
        
        {/* Foto Perfil */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <img 
              className="relative rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition duration-300"
              src={perfil} 
              alt="Ewertton Gonçalves"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
