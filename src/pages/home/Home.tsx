import perfil from "../../assets/img/perfil.jpg";

function Home() {
  return (
    <>
      {/* Background home */}
      <div className="bg-white flex justify-center">

        {/* Configurando grid com 2 colunas para ter Sobre e Imagem */}
        <div className="container grid grid-cols-2">

          {/* Grid sobre mim */}
          <div className="flex flex-col gap-4 items-center justify-center py-4">

            <h2 className="text-5xl font-bold">
              Sobre:
            </h2>
              <p className="text-justify p-6 leading-relaxed">
              Sou Ewertton Gonçalves, atualmente curso Engenharia de Software, consolidando minha base acadêmica para evoluir na área de tecnologia.
Praticante de jiu-jitsu, desenvolvo valores como disciplina, foco e resiliência — princípios que aplico em minha trajetória profissional. Essa prática esportiva me inspira a manter constância no aprendizado, evolução contínua e superação de desafios, competências que levo para meus projetos e equipes.
Estou consolidando conhecimentos em JavaScript, TypeScript, HTML, CSS, React, Tailwind, Node.js, NestJS, Git e bancos de dados relacionais (MySQL / PostgreSQL). Possuo experiência anterior em engenharia e manutenção, que me proporcionou habilidades transferíveis como resolução de problemas, comunicação eficaz, trabalho em equipe e gestão de tempo. 
              
              </p>
          </div>
          
          {/* Grid Foto Perfil */}
          <div className="flex justify-center py-4">
          <img className="rounded-full w-73"
          src={perfil} 
          alt=""/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
