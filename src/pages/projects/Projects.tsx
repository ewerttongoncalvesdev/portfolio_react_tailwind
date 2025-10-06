import { useState } from "react";

const projects = [
  {
    src: "https://ik.imagekit.io/lfhdhvrkd/nexos.png?updatedAt=1759186481574",
    title: "Nexo Seguros",
    desc: "Aplicação Full Stack desenvolvida em equipe, com backend estruturado para gerenciar dados e segurança, e frontend focado em uma interface moderna e intuitiva. O sistema conta com dois perfis de acesso (Cliente e Administrador), cada um com seu próprio painel e funcionalidades específicas. O projeto inclui autenticação segura, banco de dados relacional e documentação da API, além de estar disponível online e versionado de forma colaborativa no GitHub.",
    tech: ["NestJS", "Node.JS", "TypeScript", "Autenticação JWT", "PostgreSQL", "Documentação Swagger", "React", "Tailwind", "Git", "Github", "Notion", "Trello"],
    siteLink: "https://nexoseguro.netlify.app/",
    backendLink: "https://github.com/Grupo-05-Turma-JavaScript-08/nexo_back",
    frontendLink: "https://github.com/Grupo-05-Turma-JavaScript-08/nexo_front"
  },
  {
    src: "https://picsum.photos/800/400?2",
    title: "Projeto 2",
    desc: "Descrição do projeto 2",
    tech: ["Node.js", "PostgreSQL", "NestJS"],
    siteLink: "#",
    backendLink: "#",
    frontendLink: "#"
  },
  {
    src: "https://picsum.photos/800/400?3",
    title: "Projeto 3",
    desc: "Descrição do projeto 3",
    tech: ["JavaScript", "HTML", "CSS"],
    siteLink: "#",
    backendLink: "#",
    frontendLink: "#"
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-12 px-6">
      <div className="relative w-full max-w-4xl">
        
        {/* Título da seção */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-400 mb-3">
            Meus Projetos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto"></div>
        </div>

        {/* Card do Projeto */}
        <div className="relative bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-blue-500/30">
          
          {/* Imagem com overlay gradient */}
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
            <img
              src={projects[current].src}
              alt={projects[current].title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Botões de navegação */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-gray-900/70 hover:bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center font-bold text-xl hover:scale-110"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-gray-900/70 hover:bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center font-bold text-xl hover:scale-110"
            >
              ❯
            </button>
          </div>

          {/* Conteúdo do Card */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-400 mb-3">
              {projects[current].title}
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {projects[current].desc}
            </p>

            {/* Tags de tecnologias */}
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[current].tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-700 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-4">
              <a
                href={projects[current].siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300"
              >
                🌐 Ver Site
              </a>

              <a
                href={projects[current].backendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300"
              >
                🖥️ Back-end
              </a>

              <a
                href={projects[current].frontendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300"
              >
                💻 Front-end
              </a>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current 
                  ? "w-12 h-3 bg-gradient-to-r from-cyan-500 to-blue-500" 
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
