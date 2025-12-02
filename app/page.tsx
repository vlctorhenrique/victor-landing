export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Container geral */}
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <header className="flex items-center justify-between py-6">
          <span className="font-semibold text-lg tracking-tight">
            Victor Rocha
          </span>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#sobre" className="hover:text-white transition">Sobre</a>
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#projetos" className="hover:text-white transition">Projetos</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">
              Desenvolvedor • Web • IA • Automação
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Eu ajudo negócios a vender mais com{" "}
              <span className="text-purple-400">sites, bots</span> e{" "}
              <span className="text-cyan-300">inteligência artificial.</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8">
              Crio landings modernas, automações em WhatsApp e sistemas com IA
              para tirar tarefas repetitivas da sua mão e deixar você focar no que importa.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/55SEUNUMERO"
                target="_blank"
                className="px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm font-semibold transition"
              >
                Falar comigo
              </a>

              <a
                href="#projetos"
                className="px-7 py-3 rounded-xl border border-purple-500 text-sm font-semibold text-purple-300 hover:bg-purple-500/10 transition"
              >
                Ver portfólio
              </a>
            </div>
          </div>

          {/* Card visual */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-3xl blur-2xl opacity-40" />

              {/* Card */}
              <div className="relative bg-[#0B1020] rounded-3xl p-6 md:p-8 border border-white/5 shadow-xl">
                <p className="text-sm text-gray-400 mb-4">Status</p>

                <ul className="space-y-3 text-sm text-gray-200">
                  <li>✅ Bots de WhatsApp prontos para uso comercial</li>
                  <li>✅ Integrações com IA para atendimento e conteúdo</li>
                  <li>✅ Entrega rápida e focada em resultado</li>
                </ul>

                <div className="mt-6 text-xs text-gray-500">
                  Próximo passo: transformar seu negócio em uma máquina automatizada.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE / SERVIÇOS */}
        <section id="servicos" className="py-16">
          <h2 className="text-3xl font-semibold mb-4">Minhas especialidades</h2>
          <p className="text-gray-400 mb-8">
            O que eu mais gosto de construir e onde posso ajudar sua empresa agora.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Web</h3>
              <p className="text-gray-400 text-sm">
                Landing pages, sites institucionais e dashboards modernos prontos para receber tráfego.
              </p>
            </div>

            <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Automação</h3>
              <p className="text-gray-400 text-sm">
                Bots de WhatsApp, integrações com planilhas e sistemas que tiram trabalho repetitivo da sua equipe.
              </p>
            </div>

            <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Inteligência Artificial</h3>
              <p className="text-gray-400 text-sm">
                IA para atendimento, geração de conteúdo, análise de dados e fluxos inteligentes para o seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="py-16">
          <h2 className="text-3xl font-semibold mb-4">Projetos em destaque</h2>
          <p className="text-gray-400 mb-8">
            Alguns tipos de soluções que eu já construí e posso adaptar para o seu cenário.
          </p>

          <div className="space-y-4">
            <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Bot comercial para gráfica</h3>
              <p className="text-gray-400 text-sm mb-2">
                Bot no WhatsApp que responde orçamentos, envia catálogo de produtos, coleta dados do cliente
                e salva tudo em uma planilha.
              </p>
              <p className="text-xs text-gray-500">
                Stack: Node.js, Venom-Bot, Google Sheets API, OpenAI.
              </p>
            </div>

            <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Gerador de posts com IA</h3>
              <p className="text-gray-400 text-sm mb-2">
                Ferramenta que cria textos e ideias de posts para Instagram com base na área do negócio,
                tom de voz e público alvo.
              </p>
              <p className="text-xs text-gray-500">
                Stack: Next.js, Tailwind, OpenAI API.
              </p>
            </div>
          </div>
        </section>

        {/* CONTATO / FOOTER */}
        <section id="contato" className="py-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Bora automatizar o seu negócio?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Me chama no WhatsApp e a gente conversa sobre o que você precisa. 
            Posso adaptar um projeto pronto ou criar algo do zero para sua operação.
          </p>

          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            className="inline-block px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm font-semibold transition"
          >
            Chamar no WhatsApp
          </a>

          <footer className="mt-10 text-xs text-gray-500">
            © {new Date().getFullYear()} Victor Rocha — Desenvolvedor Web, IA e Automação
          </footer>
        </section>
      </div>
    </main>
  );
}
