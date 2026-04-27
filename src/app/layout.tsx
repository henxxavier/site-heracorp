import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo Heracorp — Consultoria Paralegal",
    template: "%s | Grupo Heracorp",
  },
  description:
    "25 anos especializados em serviços paralegais, legalização empresarial, registro de atos societários e due diligence. Mais de 40.000 serviços executados em São Paulo.",
  keywords: [
    "paralegal",
    "consultoria paralegal",
    "legalização empresarial",
    "due diligence",
    "atos societários",
    "registro empresarial",
    "CNPJ",
    "São Paulo",
    "Grupo Heracorp",
  ],
  authors: [{ name: "Grupo Heracorp" }],
  creator: "Grupo Heracorp",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://heracorp.com.br",
    siteName: "Grupo Heracorp",
    title: "Grupo Heracorp — Consultoria Paralegal · 25 anos",
    description:
      "Especialistas em serviços paralegais, legalização empresarial e due diligence em São Paulo. Parceiros dos maiores escritórios de advocacia do Brasil.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
