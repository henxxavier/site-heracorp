import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AnimatedStats from "@/components/AnimatedStats";
import ContactForm from "@/components/ContactForm";
import { COMPANY, whatsappUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Serviços Paralegais em São Paulo e todo o Brasil | Grupo Heracorp" },
  description:
    "Mais de 25 anos de expertise em serviços paralegais: registros em Juntas Comerciais e Cartórios, abertura e alteração de empresas, CNPJ, certidões e Banco Central. +50.000 serviços executados.",
  alternates: { canonical: "/" },
};

const icon = (d: string) => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={d} />
  </svg>
);

const services = [
  {
    icon: icon("M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"),
    title: "Registros em Juntas e Cartórios",
    description: "Registro de atos societários em Juntas Comerciais, Cartórios e órgãos de classe em todo o Brasil.",
    href: "/servicos/legalizacao-empresarial",
  },
  {
    icon: icon("M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"),
    title: "Regularização e Registro de CNPJ",
    description: "Abertura, regularização e registro de CNPJ para empresas nacionais e estrangeiras.",
    href: "/servicos/legalizacao-empresarial",
  },
  {
    icon: icon("M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"),
    title: "Cadastros, Alterações e Baixas",
    description: "Alterações contratuais e baixas perante Receita Federal, JUCESP e demais órgãos públicos.",
    href: "/servicos/legalizacao-empresarial",
  },
  {
    icon: icon("M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"),
    title: "Assessoria em Certidões Fiscais e Judiciais",
    description: "Levantamento e assessoria na obtenção de certidões fiscais, judiciais e extrajudiciais em âmbito federal, estadual e municipal.",
    href: "/servicos/gestao-certidoes-auditorias",
  },
  {
    icon: icon("M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"),
    title: "Livros Societários",
    description: "Registro e escrituração de Livros de Atas, Registro de Sócios e demais livros obrigatórios.",
    href: "/servicos/legalizacao-empresarial",
  },
  {
    icon: icon("M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),
    title: "Banco Central: RDE-IED e RDE-ROF",
    description: "Declarações e operações junto ao Banco Central — investimentos estrangeiros e operações financeiras.",
    href: "/servicos/apoio-investidores-estrangeiros",
  },
  {
    icon: icon("M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"),
    title: "Regularização de Inscrição Estadual",
    description: "Abertura, alteração e cancelamento de inscrições estaduais junto às Secretarias da Fazenda.",
    href: "/servicos/legalizacao-empresarial",
  },
  {
    icon: icon("M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"),
    title: "Procurador e Domicílio Fiscal",
    description: "Representação de sócios estrangeiros e disponibilização de domicílio fiscal para empresas internacionais.",
    href: "/servicos/apoio-investidores-estrangeiros",
  },
];

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Você nos conta a demanda e identificamos exatamente o que cada órgão vai exigir." },
  { n: "02", title: "Proposta", desc: "Proposta personalizada em até 24 horas, com escopo, prazo estimado e investimento." },
  { n: "03", title: "Execução", desc: "Os trâmites começam imediatamente após a contratação — sem filas internas e sem retrabalho." },
  { n: "04", title: "Acompanhamento", desc: "Status de cada demanda em tempo real na nossa plataforma digital, até a entrega final." },
];

const differentials = [
  {
    title: "Tecnologia que coloca você no controle",
    desc: "Nossa plataforma digital exclusiva mostra o status de cada demanda em tempo real, com transparência total. #SóNoClique",
  },
  {
    title: "Agilidade com prazo definido",
    desc: "Trabalhamos com SLA definido e cumprido. Os trâmites começam logo após a contratação.",
  },
  {
    title: "One-stop shop: tudo em um só lugar",
    desc: "Solução completa para a burocracia legal, fiscal e documental, com processos personalizados à sua governança.",
  },
  {
    title: "Mais de 25 anos de resultados",
    desc: "Altos índices de NPS, portfólio consolidado junto aos maiores escritórios do Brasil e casos reais de exclusão de débitos milionários.",
  },
];

const audiences = [
  { label: "Escritórios de Advocacia", desc: "Suporte paralegal completo para bancas de todos os portes" },
  { label: "Empresas Nacionais", desc: "Da abertura à baixa, em qualquer setor" },
  { label: "Empresas Estrangeiras", desc: "Capital internacional, M&A e Banco Central" },
  { label: "Departamentos Jurídicos", desc: "Equipe especializada como extensão do seu time" },
];

const faqs = [
  {
    q: "O que são serviços paralegais?",
    a: "São os serviços de apoio jurídico-administrativo que viabilizam a vida legal de uma empresa: registros em Juntas Comerciais e Cartórios, abertura, alteração e baixa de empresas, obtenção de certidões, regularização de CNPJ e inscrições, livros societários e declarações ao Banco Central, entre outros.",
  },
  {
    q: "A Heracorp substitui meu advogado ou contador?",
    a: "Não. Atuamos como parceiro especializado na execução dos trâmites junto aos órgãos públicos, trabalhando lado a lado com escritórios de advocacia, departamentos jurídicos e contadores.",
  },
  {
    q: "Vocês atendem fora de São Paulo?",
    a: "Sim. Estamos sediados em São Paulo e realizamos registros e regularizações em Juntas Comerciais, Cartórios e órgãos públicos em todo o Brasil.",
  },
  {
    q: "Posso contratar apenas um serviço pontual?",
    a: "Sim. Atendemos tanto demandas pontuais quanto rotinas recorrentes e projetos completos, como operações de M&A e entrada de investidores estrangeiros.",
  },
  {
    q: "Como acompanho o andamento da minha demanda?",
    a: "Pela nossa plataforma digital exclusiva, que mostra o status de cada demanda em tempo real, além do contato direto com a nossa equipe.",
  },
  {
    q: "Quanto tempo leva para receber uma proposta?",
    a: "Enviamos uma proposta personalizada em até 24 horas após entendermos a sua necessidade. O prazo de cada serviço depende do órgão envolvido e é informado na proposta.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Check = ({ className = "" }: { className?: string }) => (
  <svg className={`w-3 h-3 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ══ HERO ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--blue-deep)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#1f4479_0%,var(--blue-deep)_55%,var(--blue-ink)_100%)]" />
        <div className="absolute inset-0 hero-pattern" />

        {/* Elipse inspirada no logo */}
        <svg
          className="hero-orbit absolute -right-[22%] top-[6%] w-[95%] max-w-[1100px] pointer-events-none opacity-70"
          viewBox="0 0 1000 520"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0292b7" stopOpacity="0" />
              <stop offset="45%" stopColor="#0292b7" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#d6d5e2" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M60 300 C 60 140, 420 30, 720 50 C 960 66, 1010 210, 860 330 C 700 460, 300 520, 140 440"
            stroke="url(#orbitGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            pathLength={1}
          />
          <path
            d="M120 330 C 140 190, 460 90, 720 105 C 900 116, 940 220, 820 310"
            stroke="url(#orbitGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={1}
          />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 md:pt-20 md:pb-36">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <p className="animate-in-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/85 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-light)]" />
                {COMPANY.experience} de expertise · Desde {COMPANY.foundedYear}
              </p>

              <h1 className="animate-in-up anim-delay-100 text-[2.6rem] sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.05] tracking-tight mb-6">
                Serviços paralegais e{" "}
                <span className="text-[var(--lavender)]">
                  legalização de empresas
                </span>{" "}
                com quem domina cada órgão.
              </h1>

              <p className="animate-in-up anim-delay-200 text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
                Registros em Juntas Comerciais e Cartórios, abertura e alteração de empresas,
                CNPJ, certidões e Banco Central. Tiramos a burocracia da equação para que você
                foque no seu core business.
              </p>

              <ul className="animate-in-up anim-delay-200 grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-9 max-w-xl">
                {[
                  "Atuação em todo o Brasil",
                  "Proposta em até 24 horas",
                  "Acompanhamento em tempo real",
                  "Parceiros dos maiores escritórios",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-white/90">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--blue-light)] flex items-center justify-center">
                      <Check className="text-white" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="animate-in-up anim-delay-300 flex flex-wrap gap-3">
                <Button href="#orcamento" size="lg" variant="primary">
                  Solicitar orçamento
                </Button>
                <a
                  href={whatsappUrl("Olá! Vim pelo site da Heracorp e gostaria de falar com um especialista.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold border border-white/25 rounded-full text-white hover:border-white/60 hover:bg-white/5 transition-all"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="animate-in-fade anim-delay-400 mt-10 flex items-center gap-4 text-sm text-white/70">
                <div className="flex gap-0.5" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p>
                  <strong className="text-white">9 dos 10 maiores</strong> escritórios de advocacia de São Paulo já confiaram na Heracorp
                </p>
              </div>
            </div>

            {/* Right — formulário */}
            <div id="orcamento" className="animate-in-scale anim-delay-200 scroll-mt-28">
              <div className="relative rounded-3xl bg-white text-[var(--gray-body)] p-6 sm:p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <div className="absolute -top-3 left-8 rounded-full bg-[var(--blue-light)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Resposta rápida
                </div>
                <h2 className="text-2xl font-bold text-[var(--blue-dark)] mb-1">Solicite um orçamento</h2>
                <p className="text-sm mb-6">Conte o que você precisa e fale direto com um especialista.</p>
                <ContactForm compact source="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MÉTRICAS ANIMADAS ══════════════════════════════════════════ */}
      <AnimatedStats />

      {/* ══ SERVIÇOS ═══════════════════════════════════════════════════ */}
      <section className="pt-24 pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-3">O que fazemos</p>
              <h2 className="text-3xl md:text-[2.6rem] font-bold text-[var(--blue-dark)] leading-tight max-w-2xl">
                Serviços paralegais especializados, do registro ao Banco Central
              </h2>
            </div>
            <p className="text-[var(--gray-body)] max-w-md text-[15px] leading-relaxed">
              Cuidamos de toda a burocracia legal e regulatória da sua empresa, com agilidade,
              rastreabilidade e sigilo total.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 60} animation="up">
                <Link href={s.href} className="service-card p-6 h-full group flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-[var(--surface)] text-[var(--blue-dark)] flex items-center justify-center mb-5 group-hover:bg-[var(--blue-dark)] group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-[17px] font-semibold text-[var(--blue-dark)] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[var(--gray-body)] text-sm leading-relaxed flex-1">{s.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue-light)]">
                    Saiba mais
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMO FUNCIONA ══════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="section-label mb-3">Como funciona</p>
            <h2 className="text-3xl md:text-[2.6rem] font-bold text-[var(--blue-dark)] leading-tight">
              Simples para você. Rigoroso para nós.
            </h2>
          </AnimateOnScroll>

          <div className="relative grid md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[var(--blue-light)]/40 to-transparent" aria-hidden />
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.n} delay={i * 120} className="relative text-center">
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-white border border-[var(--border)] shadow-sm flex items-center justify-center font-[family-name:var(--font-playfair)] text-lg font-bold text-[var(--blue-dark)]">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold text-[var(--blue-dark)] mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed max-w-[240px] mx-auto">{s.desc}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIFERENCIAIS ═══════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <p className="section-label mb-3">Nosso diferencial</p>
            <h2 className="text-3xl md:text-[2.6rem] font-bold text-[var(--blue-dark)] leading-tight">
              Por que os maiores escolhem a Heracorp?
            </h2>
            <p className="text-[var(--gray-body)] mt-5 mb-9 leading-relaxed text-[15px] max-w-xl">
              Em mais de 25 anos de atuação, construímos reputação junto aos maiores escritórios
              de advocacia, bancas de M&A e empresas multinacionais. Nossa equipe conhece cada
              detalhe das Juntas Comerciais, Cartórios e órgãos reguladores, e entrega no prazo.
            </p>
            <ul className="grid sm:grid-cols-2 gap-6">
              {differentials.map((item) => (
                <li key={item.title}>
                  <span className="flex w-8 h-8 rounded-lg bg-[var(--blue-light)]/10 text-[var(--blue-light)] items-center justify-center mb-3">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-[var(--blue-dark)] font-semibold leading-snug">{item.title}</p>
                  <p className="text-[var(--gray-body)] text-sm leading-relaxed mt-1">{item.desc}</p>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="relative rounded-3xl bg-[var(--blue-deep)] text-white p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 hero-pattern" />
              <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full border-[14px] border-[var(--lavender)]/10" aria-hidden />
              <div className="relative">
                <svg className="w-10 h-10 text-[var(--blue-light)] mb-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold leading-snug mb-8">
                  9 dos 10 maiores escritórios de advocacia de São Paulo já trabalharam com a Heracorp.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: COMPANY.stats.servicos, label: "serviços executados" },
                    { value: `${COMPANY.stats.anos} anos`, label: "de experiência" },
                    { value: COMPANY.stats.ma, label: "projetos de M&A" },
                    { value: COMPANY.stats.clientes, label: "clientes atendidos" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
                      <p className="text-2xl font-bold">{item.value}</p>
                      <p className="text-white/60 text-xs mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══ QUEM ATENDEMOS ═════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="section-label mb-3">Quem atendemos</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--blue-dark)]">
              Parceiros dos melhores do mercado
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {audiences.map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 70}>
                <div className="service-card p-6 h-full">
                  <div className="w-2 h-8 rounded-full bg-gradient-to-b from-[var(--blue-light)] to-[var(--blue-dark)] mb-4" />
                  <p className="font-semibold text-[var(--blue-dark)] mb-1">{item.label}</p>
                  <p className="text-sm text-[var(--gray-body)]">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <AnimateOnScroll>
            <p className="section-label mb-3">Dúvidas frequentes</p>
            <h2 className="text-3xl md:text-[2.6rem] font-bold text-[var(--blue-dark)] leading-tight mb-5">
              Perguntas frequentes
            </h2>
            <p className="text-[15px] leading-relaxed mb-8 max-w-sm">
              Não encontrou o que procurava? Fale com a nossa equipe, respondemos rápido.
            </p>
            <Button href="#orcamento" variant="secondary" size="lg">
              Falar com um especialista
            </Button>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item group py-5">
                  <summary className="flex items-start justify-between gap-6">
                    <span className="font-semibold text-[var(--blue-dark)] text-[17px] leading-snug">{f.q}</span>
                    <span className="faq-icon flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--blue-light)]" aria-hidden>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 pr-12 text-[15px] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══ CTA FINAL ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--blue-deep)] py-20 px-4 text-white">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <AnimateOnScroll animation="fade">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
              Pronto para tirar a burocracia da equação?
            </h2>
            <p className="text-white/65 text-[15px]">
              Proposta personalizada em até 24 horas · +50.000 serviços executados · {COMPANY.experience.toLowerCase()} de mercado
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade" delay={100} className="flex flex-wrap gap-3 flex-shrink-0">
            <Button href="#orcamento" size="lg" variant="primary">
              Solicitar orçamento
            </Button>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold border border-white/25 rounded-full text-white hover:border-white/60 transition-all"
            >
              {COMPANY.phoneFormatted}
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
