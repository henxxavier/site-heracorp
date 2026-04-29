import type { Metadata } from "next";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AnimatedStats from "@/components/AnimatedStats";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grupo Heracorp — Consultoria Paralegal · 25 anos",
};

const services = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: "Registros em Juntas e Cartórios",
    description: "Registro de atos societários em Juntas Comerciais, Cartórios e órgãos de classe em todo o Brasil.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Regularização e Emissão de CNPJ",
    description: "Abertura, regularização e emissão de CNPJ para empresas nacionais e estrangeiras.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    title: "Cadastros, Alterações e Baixas",
    description: "Alterações contratuais e baixas perante Receita Federal, JUCESP e demais órgãos públicos.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
    title: "Controle e Emissão de Certidões",
    description: "Levantamento e emissão de certidões fiscais, judiciais e extrajudiciais em âmbito federal, estadual e municipal.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    title: "Livros Societários",
    description: "Registro e escrituração de Livros de Atas, Registro de Sócios e demais livros obrigatórios.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Banco Central: RDE-IED e RDE-ROF",
    description: "Declarações e operações junto ao Banco Central — investimentos estrangeiros e operações financeiras.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Regularização de Inscrição Estadual",
    description: "Abertura, alteração e cancelamento de inscrições estaduais junto às Secretarias da Fazenda.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    title: "Procurador e Domicílio Fiscal",
    description: "Representação de sócios estrangeiros e disponibilização de domicílio fiscal para empresas internacionais.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--blue-dark)] text-white">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c4c86] via-[var(--blue-mid)] to-[var(--blue-deep)]" />
        <div className="absolute inset-0 hero-pattern" />
        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] -translate-y-1/3 translate-x-1/3 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(2,146,183,0.12) 0%, transparent 65%)" }} />
        {/* Concentric rings */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="230" stroke="white" strokeWidth="1"/>
            <circle cx="250" cy="250" r="170" stroke="white" strokeWidth="1"/>
            <circle cx="250" cy="250" r="110" stroke="white" strokeWidth="1"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <p className="text-[var(--blue-light)] text-sm font-semibold tracking-wider uppercase mb-4">
                A burocracia tem solução.
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                Especialistas em{" "}
                <em className="not-italic text-[var(--blue-light)]">legalização</em>
                <br />e serviços{" "}
                <em className="not-italic text-[var(--blue-light)]">paralegais</em>
              </h1>

              <blockquote className="border-l-[3px] border-[var(--blue-light)] pl-5 mb-7">
                <p className="text-xl italic font-medium text-white/90 leading-relaxed">
                  "{COMPANY.tagline}"
                </p>
              </blockquote>

              <p className="text-blue-100/80 text-base leading-relaxed mb-7 max-w-md">
                Há 25 anos, tiramos a burocracia da equação para empresas que exigem precisão e
                segurança. Da abertura do CNPJ aos registros em Cartórios e Juntas Comerciais,
                atuamos como o seu parceiro <em className="not-italic font-semibold text-white">one-stop shop</em>.
                Nós resolvemos as complexidades legais com agilidade, para que você foque
                exclusivamente no que realmente importa: o crescimento do seu core business.
              </p>

              {/* Credencial */}
              <div className="flex items-center gap-2.5 mb-9">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--blue-light)] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-blue-100/90 font-medium">
                  Parceiros dos maiores escritórios de advocacia do Brasil
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/contato" size="lg" variant="primary">
                  Solicitar Proposta
                </Button>
                <Button href="/servicos" size="lg" variant="outline-white">
                  Ver serviços
                </Button>
              </div>
            </div>

            {/* Right — quote card */}
            <div className="hidden md:block">
              <div className="glass-card p-8 relative">
                {/* Aspas decorativas */}
                <svg
                  className="w-14 h-14 text-[var(--blue-light)] opacity-25 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Estrelas */}
                <div className="flex gap-1 mb-5">
                  {[0,1,2,3,4].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-xl font-semibold text-white leading-relaxed mb-8">
                  9 dos 10 maiores escritórios de advocacia de São Paulo já confiam na Heracorp.
                </p>

                {/* Selo 25 anos */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/12">
                  <div className="relative flex-shrink-0 w-16 h-16">
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <circle cx="32" cy="32" r="29" fill="none" stroke="rgba(2,146,183,0.6)" strokeWidth="1.5" />
                      <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(2,146,183,0.3)" strokeWidth="1" />
                      {/* Estrelinhas no anel externo */}
                      {[0,45,90,135,180,225,270,315].map((deg, i) => {
                        const rad = (deg * Math.PI) / 180;
                        const x = 32 + 29 * Math.cos(rad);
                        const y = 32 + 29 * Math.sin(rad);
                        return <circle key={i} cx={x} cy={y} r="1.5" fill="rgba(2,146,183,0.7)" />;
                      })}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white leading-none">25</span>
                      <span className="text-[9px] text-[var(--blue-light)] leading-none uppercase tracking-widest mt-0.5">anos</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-snug">25 Anos de Excelência</p>
                    <p className="text-blue-200/60 text-xs mt-0.5">Fundada em 1999 · São Paulo, SP</p>
                    <p className="text-blue-200/60 text-xs">Mais de 45.000 serviços executados</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ MÉTRICAS ANIMADAS ══════════════════════════════════════════ */}
      <AnimatedStats />

      {/* ══ SERVIÇOS ═══════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="mb-14">
            <p className="section-label mb-3">O que fazemos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue-dark)] title-accent">
              Serviços Paralegais Especializados
            </h2>
            <p className="text-[var(--gray-body)] mt-6 max-w-2xl text-sm leading-relaxed">
              Cuidamos de toda a burocracia legal e regulatória da sua empresa —
              com agilidade, rastreabilidade e sigilo total.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 55} animation="up">
                <div className="service-card p-5 h-full group cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-[var(--blue-light)]/10 text-[var(--blue-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--blue-light)] group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--blue-dark)] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[var(--gray-body)] text-xs leading-relaxed">{s.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-10" delay={100}>
            <Button href="/servicos" variant="outline" size="lg">
              Ver detalhes de cada serviço
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══ DIFERENCIAIS ═══════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          <AnimateOnScroll>
            <p className="section-label mb-3">Nosso diferencial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue-dark)] title-accent">
              Por que os maiores<br />escolhem a Heracorp?
            </h2>
            <p className="text-[var(--gray-body)] mt-6 mb-8 leading-relaxed text-sm">
              Em 25 anos de atuação, construímos reputação junto aos maiores escritórios
              de advocacia, bancas de M&A e empresas multinacionais. Nossa equipe conhece
              cada detalhe das juntas comerciais, cartórios e órgãos reguladores — e
              entregamos no prazo.
            </p>
            <ul className="space-y-5">
              {[
                {
                  title: "Tecnologia que Coloca Você no Controle",
                  desc: "Nossa plataforma digital exclusiva coloca o status de cada demanda na palma da sua mão — em tempo real, com transparência total. #SóNoClique.",
                },
                {
                  title: "Agilidade com Garantia de Prazo",
                  desc: "Os trâmites começam imediatamente após a contratação — sem filas internas, sem retrabalho. Trabalhamos com SLA definido e cumprido.",
                },
                {
                  title: "One-Stop-Shop: Tudo em Um Só Lugar",
                  desc: "Somos a solução completa para toda a burocracia legal, fiscal e documental — com processos 100% personalizados à sua governança.",
                },
                {
                  title: "Seu Foco no que Importa",
                  desc: "Terceirize com quem domina o assunto e libere sua equipe para fazer o que realmente gera valor ao seu negócio.",
                },
                {
                  title: "25 Anos de Resultados Comprovados",
                  desc: "Altos índices de NPS, portfólio consolidado junto aos maiores escritórios do Brasil e casos reais de exclusão de débitos milionários.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--blue-light)]/15 flex items-center justify-center mt-0.5">
                    <svg className="w-2.5 h-2.5 text-[var(--blue-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[var(--blue-dark)] text-sm font-semibold leading-snug">{item.title}</p>
                    <p className="text-[var(--gray-body)] text-xs leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="space-y-4">
              {/* Quote card */}
              <div className="bg-white rounded-2xl border border-[var(--border)] p-7 shadow-sm">
                <svg className="w-8 h-8 text-[var(--blue-light)]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[var(--blue-dark)] font-semibold text-lg leading-relaxed italic">
                  "9 dos 10 maiores escritórios de advocacia de São Paulo já trabalharam com a Heracorp."
                </p>
              </div>
              {/* 4 mini-stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "45.000+", label: "serviços executados", dark: true },
                  { value: "25 anos", label: "de experiência",      dark: false },
                  { value: "70+",     label: "projetos de M&A",     dark: false },
                  { value: "500+",    label: "clientes ativos",     dark: true },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl p-4 text-center ${
                      item.dark
                        ? "bg-[var(--blue-dark)] text-white"
                        : "bg-[var(--blue-light)] text-white"
                    }`}
                  >
                    <p className="text-xl font-bold">{item.value}</p>
                    <p className="text-white/65 text-xs mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══ SETORES ════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <p className="section-label mb-2">Quem atendemos</p>
            <h2 className="text-2xl font-bold text-[var(--blue-dark)]">
              Parceiros dos melhores do mercado
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Escritórios de Advocacia", desc: "Suporte paralegal completo" },
              { label: "Empresas Nacionais",       desc: "De todos os portes e setores" },
              { label: "Empresas Estrangeiras",    desc: "Capital internacional e M&A" },
              { label: "Departamentos Jurídicos",  desc: "Equipe de apoio especializada" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.label} delay={i * 70}>
                <div className="service-card p-5 text-center h-full">
                  <div className="w-8 h-8 rounded-full bg-[var(--blue-light)]/10 flex items-center justify-center mx-auto mb-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--blue-light)]" />
                  </div>
                  <p className="text-sm font-semibold text-[var(--blue-dark)] mb-1">{item.label}</p>
                  <p className="text-xs text-[var(--gray-body)]">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--blue-dark)] py-20 px-4 text-white text-center">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-dark)] to-[var(--blue-deep)]" />
        <div className="relative max-w-2xl mx-auto">
          <AnimateOnScroll animation="fade">
            <p className="section-label text-blue-300 mb-5">Vamos conversar?</p>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Pronto para tirar a burocracia<br />da equação?
            </h2>
            <p className="text-blue-200/60 mb-3 text-sm">
              Fale com um especialista da Heracorp e receba uma proposta personalizada em até 24 horas.
            </p>
            <p className="text-blue-300/60 text-xs mb-9">
              Mais de 45.000 serviços executados · 500+ clientes satisfeitos · 25 anos de mercado
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/contato" size="lg" variant="primary">
                Solicitar Proposta
              </Button>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold border border-white/25 rounded-lg text-white hover:border-white/50 hover:bg-white/8 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phoneFormatted}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
