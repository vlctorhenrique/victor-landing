import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Rocha — Desenvolvedor Web, IA e Automação",
  description:
    "Desenvolvedor especializado em landing pages, bots de WhatsApp e soluções com IA para automatizar negócios.",
  metadataBase: new URL("https://victor-landing-qrz8.vercel.app"),
  openGraph: {
    title: "Victor Rocha — Dev Web, IA e Automação",
    description:
      "Eu crio sites modernos, automações e ferramentas com IA para negócios que querem vender mais.",
    url: "https://victor-landing-qrz8.vercel.app",
    siteName: "Victor Rocha — Dev",
    images: [
      {
        url: "/og-image.png", // relativo ao metadataBase
        width: 1200,
        height: 630,
        alt: "Landing page do desenvolvedor Victor Rocha",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons:{
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
