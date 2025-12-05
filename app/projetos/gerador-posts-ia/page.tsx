import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gerador de posts com IA | Portfólio Victor Rocha",
  description:
    "Ferramenta que gera ideias e textos de posts para redes sociais usando IA.",
};

export default function GeradorPostsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
        <Link
          href="/#projetos"
          className="text-sm text-gray-400 hover:text-gray-200"
        >
          ← Voltar para o portfólio
        </Link>

        <section className="mt-6 md:mt-10 space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Gerador de posts com IA
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            Ferramenta feita para pequenos negócios e freelancers que precisam
            postar com frequência, mas não têm tempo de ficar criando texto toda hora.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#0B1020] border border-white/5 rounded-2xl p-5 text-sm text-gray-300 space-y-2">
              <h2 className="text-lg font-semibold mb-1">Como funciona</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>O usuário informa área do negócio e público alvo.</li>
                <li>Escolhe tom de voz (formal, descontraído, técnico, etc.).</li>
                <li>A IA sugere ideias de posts com legenda pronta.</li>
                <li>As ideias podem ser copiadas direto pro Instagram.</li>
              </ul>
            </div>

            <div className="bg-[#0B1020] border border-white/5 rounded-2xl p-5 text-sm text-gray-300 space-y-2">
              <h2 className="text-lg font-semibold mb-1">Tecnologias</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Next.js + React</li>
                <li>Tailwind CSS</li>
                <li>OpenAI API</li>
                <li>Deploy em Vercel</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0B1020] border border-white/5 rounded-2xl p-5 text-sm text-gray-300 space-y-3 mt-4">
            <h2 className="text-lg font-semibold mb-1">
              Benefício para o usuário
            </h2>
            <p>
              Em poucos minutos, a pessoa consegue um calendário básico de
              conteúdo com várias ideias de posts e textos prontos para usar,
              sem travar no “o que eu posto hoje?”.
            </p>
          </div>

          {/* Quando esse app existir de verdade com deploy, você pluga o link aqui */}
          {/* <a
            href="https://link-da-ferramenta.com"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
          >
            Acessar demo da ferramenta
          </a> */}
        </section>
      </div>
    </main>
  );
}
