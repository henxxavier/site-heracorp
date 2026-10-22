export const COMPANY = {
  name: "Grupo Heracorp",
  tagline: "Nosso negócio é legalizar o seu negócio.",
  address: "Av. Rebouças, 3482 — Jardim Paulistano, São Paulo/SP — CEP 05402-600",
  phone: "+55 11 3283-3767",
  phoneFormatted: "(11) 3283-3767",
  whatsapp: "+5511943721596",
  whatsappFormatted: "(11) 94372-1596",
  email: "comercial@heracorp.com.br",
  instagram: "https://www.instagram.com/heracorparalegais/",
  linkedin: "https://www.linkedin.com/company/grupoheracorporativa",
  // Preencher para exibir no rodapé (recomendado para Google Ads)
  cnpj: "",
  foundedYear: 1999,
  experience: "Mais de 25 anos",
  stats: {
    servicos: "50.000+",
    clientes: "500+",
    ma: "70+",
    anos: "25+",
  },
} as const;

export const LOGO = {
  src: "/logo-heracorp-2026.png",
  srcWhite: "/logo-heracorp-2026-branco.png",
  width: 1000,
  height: 540,
  alt: "Grupo HeraCorp — Consultoria Paralegal",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
] as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
