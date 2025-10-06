import perfil from "../../assets/img/perfil.jpg";
import { FaJs, FaNodeJs, FaReact, FaDatabase } from "react-icons/fa";

function Home() {
  return (
    <main className="flex-grow bg-[#0e141b] text-white flex flex-col items-center py-16">
      {/* Container Principal */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        
        {/* Foto com brilho */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl bg-blue-500 opacity-40 animate-pulse"></div>
            <img
              src={perfil}
              alt="Ewertton Gonçalves"
              className="relative rounded-full w-72 h-72 object-cover shadow-[0_0_60px_#00bfff]"
            />
          </div>
        </div>

        {/* Texto Sobre */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-[#00aaff]">Sobre</h2>
          <p className="leading-relaxed text-gray-300">
            <span className="font-semibold text-white">Desenvolvedor Full Stack JavaScript</span> e estudante de Engenharia de Software, consolidando minha base acadêmica para avançar na área de tecnologia.
          </p>
          <p className="leading-relaxed text-gray-300">
            Praticante de jiu-jitsu, desenvolvo valores como disciplina, foco e resiliência — princípios que aplico em minha trajetória profissional. Essa prática esportiva me inspira a manter constância no aprendizado, evolução contínua e superação de desafios, competências que levo para meus projetos e equipes.
          </p>
        </div>
      </div>

      {/* Stacks */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-[#00aaff] mb-8">Stacks</h3>
        <div className="flex justify-center gap-10 flex-wrap">
          <FaJs className="text-6xl text-[#00aaff] border-2 border-[#00aaff] rounded-full p-3 hover:scale-110 transition-transform duration-300" />
          <FaNodeJs className="text-6xl text-[#00aaff] border-2 border-[#00aaff] rounded-full p-3 hover:scale-110 transition-transform duration-300" />
          <FaReact className="text-6xl text-[#00aaff] border-2 border-[#00aaff] rounded-full p-3 hover:scale-110 transition-transform duration-300" />
          <FaDatabase className="text-6xl text-[#00aaff] border-2 border-[#00aaff] rounded-full p-3 hover:scale-110 transition-transform duration-300" />
        </div>
      </section>
    </main>
  );
}

export default Home;