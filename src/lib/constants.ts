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
  stats: {
    servicos: "45.000+",
    clientes: "500+",
    ma: "70+",
    anos: "25",
  },
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
] as const;
