export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6">

      {/* Hero */}
      <section className="max-w-4xl mx-auto py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Victor Rocha — Desenvolvedor Web, IA e Automação
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Eu construo sites, bots de WhatsApp e sistemas inteligentes para 
          empresas que querem automatizar processos e vender mais.
        </p>

        <a
          href="https://wa.me/55SEUNUMERO"
          className="inline-block mt-8 px-8 py-4 bg-purple-600 rounded-xl text-lg font-semibold hover:bg-purple-700 transition"
        >
          Falar comigo
        </a>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Minhas especialidades</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Web</h3>
            <p className="text-gray-300">Landing pages, dashboards e sites modernos.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Automação</h3>
            <p className="text-gray-300">Bots de WhatsApp, integrações e processos automatizados.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Inteligência Artificial</h3>
            <p className="text-gray-300">Ferramentas com OpenAI, geração de conteúdo e análise.</p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">Projetos</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Bot de WhatsApp</h3>
            <p className="text-gray-300 mb-4">
              Bot comercial completo conectado ao Google Sheets e IA.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Gerador de Posts com IA</h3>
            <p className="text-gray-300 mb-4">
              Mini-SaaS que cria posts e legendas automaticamente.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-12">
        © {new Date().getFullYear()} Victor Rocha
      </footer>
    </main>
  );
}
