import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bot comercial para gráfica | Portfólio Victor Rocha",
  description:
    "Bot de WhatsApp para gráfica: responde orçamentos, envia catálogo e salva pedidos automaticamente.",
};

export default function BotGraficaPage() {
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
            Bot comercial para gráfica
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            Esse bot foi pensado para gráficas que recebem muitos pedidos
            repetitivos no WhatsApp e perdem tempo respondendo as mesmas
            perguntas todos os dias.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-[#0B1020] border border-white/5 rounded-2xl p-5 text-sm text-gray-300 space-y-2">
              <h2 className="text-lg font-semibold mb-1">O que ele faz</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Responde orçamentos automaticamente com base nas opções do cliente.</li>
                <li>Envia catálogo de serviços e preços.</li>
                <li>Coleta nome, contato e detalhes do pedido.</li>
                <li>Salva tudo em uma planilha ou sistema.</li>
              </ul>
            </div>

            <div className="bg-[#0B1020] border border-white/5 rounded-2xl p-5 text-sm text-gray-300 space-y-2">
              <h2 className="text-lg font-semibold mb-1">Tecnologias</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js</li>
                <li>Biblioteca de integração com WhatsApp (ex: Venom-Bot)</li>
                <li>Google Sheets API / banco de dados</li>
                <li>OpenAI para respostas mais inteligentes (quando necessário)</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0B1020] border border-white/5 rounded-2xl p-5 text-sm text-gray-300 space-y-3 mt-4">
            <h2 className="text-lg font-semibold mb-1">
              Resultado para o cliente
            </h2>
            <p>
              O atendimento básico ficou 100% automático, o que liberou tempo
              da equipe para focar nos pedidos que realmente fecham. O bot
              mantém um padrão de resposta organizado e funciona 24 horas.
            </p>
          </div>

          {/* Quando tiver o app rodando em algum lugar, coloca o link aqui */}
          {/* <a
            href="https://link-do-bot-ou-demo.com"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm font-semibold"
          >
            Ver demo do bot
          </a> */}
        </section>
      </div>
    </main>
  );
}
