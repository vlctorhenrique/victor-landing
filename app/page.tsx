"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiZap, FiCpu } from "react-icons/fi";

const phrases = [
  "sites modernos",
  "bots de WhatsApp",
  "ferramentas com IA",
];

const longestPhrase = phrases.reduce(
  (acc, cur) => (cur.length > acc.length ? cur : acc),
  ""
);

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), 900);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 40 : 110
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <span
      className="typewriter-caret inline-block"
      style={{
        minWidth: "18ch",  // TAMANHO FIXO IDEAL PARA SUAS FRASES
        whiteSpace: "nowrap",
      }}
    >
      {phrases[index].substring(0, subIndex)}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#050816] to-[#020617] text-white">
      {/* NAV FIXA */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050816]/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6">
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between py-4"
          >
            <span className="font-semibold text-lg tracking-tight">
              Victor Rocha
            </span>

            <nav className="hidden md:flex gap-6 text-sm text-gray-300">
              <a href="#sobre" className="hover:text-white transition">
                Sobre
              </a>
              <a href="#servicos" className="hover:text-white transition">
                Serviços
              </a>
              <a href="#projetos" className="hover:text-white transition">
                Projetos
              </a>
              <a href="#contato" className="hover:text-white transition">
                Contato
              </a>
            </nav>
          </motion.header>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-5xl mx-auto px-6 pt-24">
        {/* HERO */}
        <motion.section
          className="min-h-[80vh] py-16 md:py-24 flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Texto */}
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">
              Desenvolvedor • Web • IA • Automação
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Eu ajudo negócios a vender mais com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                <Typewriter />
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8">
              Crio landings modernas, automações em WhatsApp e sistemas com IA
              para tirar tarefas repetitivas da sua mão e deixar você focar no
              que importa.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5551998227560"
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
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-3xl blur-2xl opacity-40" />

              {/* Card */}
              <div className="relative bg-[#0B1020] rounded-3xl p-6 md:p-8 border border-white/5 shadow-xl">
                <p className="text-sm text-gray-400 mb-4">O que você ganha:</p>

                <ul className="space-y-3 text-sm text-gray-200">
                  <li>✅ Bots de WhatsApp prontos para uso comercial</li>
                  <li>✅ Integrações com IA para atendimento e conteúdo</li>
                  <li>✅ Landing pages prontas para tráfego pago</li>
                </ul>

                <div className="mt-6 text-xs text-gray-500">
                  Próximo passo: transformar seu negócio em uma máquina
                  automatizada.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* SOBRE MIM */}
        <motion.section
          id="sobre"
          className="py-16 md:py-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar / futuro cartoon */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 p-[2px] shrink-0">
              <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center text-xs text-gray-400 text-center px-2">
                Sua foto / avatar aqui
              </div>
            </div>

            {/* Texto */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">Quem é o Victor?</h2>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                Sou desenvolvedor focado em transformar necessidades de negócios
                em soluções práticas: sites rápidos, bots que realmente atendem
                clientes e automações que economizam horas de trabalho por
                semana.
              </p>

              <p className="text-gray-400 text-sm md:text-base mb-4">
                Curto especialmente juntar{" "}
                <span className="text-purple-300">programação</span> com{" "}
                <span className="text-cyan-300">design</span> e{" "}
                <span className="text-pink-300">inteligência artificial</span>,
                criando experiências que são bonitas, boas de usar e que
                resolvem problemas reais.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                  "Bots de WhatsApp",
                  "OpenAI API",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs md:text-[13px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ESPECIALIDADES */}
        <motion.section
          id="servicos"
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Minhas especialidades</h2>
          <p className="text-gray-400 mb-8">
            O que eu mais gosto de construir e onde posso ajudar sua empresa
            agora.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-[#0B1020] rounded-2xl p-6 border border-white/5"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              <FiGlobe className="text-2xl text-cyan-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Web</h3>
              <p className="text-gray-400 text-sm">
                Landing pages, sites institucionais e dashboards modernos
                prontos para receber tráfego.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#0B1020] rounded-2xl p-6 border border-white/5"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              <FiZap className="text-2xl text-purple-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Automação</h3>
              <p className="text-gray-400 text-sm">
                Bots de WhatsApp, integrações com planilhas e sistemas que tiram
                trabalho repetitivo da sua equipe.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#0B1020] rounded-2xl p-6 border border-white/5"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              <FiCpu className="text-2xl text-pink-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2">
                Inteligência Artificial
              </h3>
              <p className="text-gray-400 text-sm">
                IA para atendimento, geração de conteúdo, análise de dados e
                fluxos inteligentes para o seu negócio.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJETOS */}
        <motion.section
          id="projetos"
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Projetos em destaque</h2>
          <p className="text-gray-400 mb-8">
            Alguns tipos de soluções que eu já construí e posso adaptar para o
            seu cenário.
          </p>

          <div className="space-y-4">
            <motion.div
              className="bg-[#0B1020] rounded-2xl p-6 border border-white/5"
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.15 }}
            >
              <h3 className="text-xl font-semibold mb-2">
                Bot comercial para gráfica
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Bot no WhatsApp que responde orçamentos, envia catálogo de
                produtos, coleta dados do cliente e salva tudo em uma planilha.
              </p>
              <p className="text-xs text-gray-500">
                Stack: Node.js, Venom-Bot, Google Sheets API, OpenAI.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#0B1020] rounded-2xl p-6 border border-white/5"
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.15 }}
            >
              <h3 className="text-xl font-semibold mb-2">
                Gerador de posts com IA
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Ferramenta que cria textos e ideias de posts para Instagram com
                base na área do negócio, tom de voz e público alvo.
              </p>
              <p className="text-xs text-gray-500">
                Stack: Next.js, Tailwind, OpenAI API.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CONTATO / FOOTER */}
        <motion.section
          id="contato"
          className="py-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Bora automatizar o seu negócio?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Me chama no WhatsApp e a gente conversa sobre o que você precisa.
            Posso adaptar um projeto pronto ou criar algo do zero para sua
            operação.
          </p>

          <a
            href="https://wa.me/5519982027560"
            target="_blank"
            className="inline-block px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm font-semibold transition"
          >
            Chamar no WhatsApp
          </a>

          <footer className="mt-10 text-xs text-gray-500">
            © {new Date().getFullYear()} Victor Rocha — Desenvolvedor Web, IA e
            Automação
          </footer>
        </motion.section>
      </div>
    </main>
  );
}
