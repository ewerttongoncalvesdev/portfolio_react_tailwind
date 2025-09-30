import { useState } from "react";

const projects = [
  {
    src: "https://ik.imagekit.io/lfhdhvrkd/nexos.png?updatedAt=1759186481574",
    title: "Nexo Seguros",
    desc: "Aplicação Full Stack desenvolvida em equipe, com backend estruturado para gerenciar dados e segurança, e frontend focado em uma interface moderna e intuitiva. O sistema conta com dois perfis de acesso (Cliente e Administrador), cada um com seu próprio painel e funcionalidades específicas. O projeto inclui autenticação segura, banco de dados relacional e documentação da API, além de estar disponível online e versionado de forma colaborativa no GitHub.",
    tech: ["NestJS", "Node.JS", "TypeScript", "Autenticação JWT", "PostgreSQL", "Documentação Swagger", "React", "Tailwind", "Git", "Github", "Notion", "Trello"],
    siteLink: "#",
    backendLink: "#",
    frontendLink: "#"
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
    <div className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="relative w-full max-w-4xl">
        
        {/* Título da seção */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3">
            Meus Projetos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto"></div>
        </div>

        {/* Card do Projeto */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-cyan-200/50">
          
          {/* Imagem com overlay gradient */}
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <img
              src={projects[current].src}
              alt={projects[current].title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Botões de navegação sobre a imagem */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/90 hover:bg-cyan-500 hover:text-white text-gray-800 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center font-bold text-xl hover:scale-110"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/90 hover:bg-cyan-500 hover:text-white text-gray-800 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center font-bold text-xl hover:scale-110"
            >
              ❯
            </button>
          </div>

          {/* Conteúdo do Card */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {projects[current].title}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {projects[current].desc}
            </p>

            {/* Tags de tecnologias */}
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[current].tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-semibold border border-cyan-200"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                Ver Site
              </a>

              <a
                href={projects[current].backendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Back-end
              </a>

              <a
                href={projects[current].frontendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Front-end
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
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;