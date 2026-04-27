import type { Metadata } from "next";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história, missão e valores do Grupo Heracorp — 25 anos especializados em serviços paralegais e legalização empresarial em São Paulo.",
};

const values = [
  {
    title: "Ética",
    description: "Atuamos com integridade absoluta em todas as relações — com clientes, parceiros e órgãos reguladores.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Excelência",
    description: "Cada documento, cada processo, cada entrega reflete nosso padrão de qualidade técnica inegociável.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Agilidade",
    description: "Entendemos que prazos são críticos no ambiente corporativo e estruturamos nossas operações para cumpri-los.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Parceria",
    description: "Tratamos cada cliente como um parceiro estratégico de longo prazo, não apenas como uma demanda pontual.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-[var(--blue-dark)] text-white py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-dark)] to-[var(--blue-deep)]" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label text-blue-300 mb-4">Nossa história</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Sobre o Grupo Heracorp</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
            25 anos transformando a complexidade jurídica e regulatória em
            vantagem competitiva para nossos clientes.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <AnimateOnScroll>
            <p className="section-label mb-3">Nossa trajetória</p>
            <h2 className="text-3xl font-bold text-[var(--blue-dark)] title-accent mb-6">
              Nossa História
            </h2>
            <div className="space-y-5 text-[var(--gray-body)] text-sm leading-relaxed mt-6">
              <p>
                O Grupo Heracorp nasceu da percepção de uma lacuna no mercado: empresas de
                todos os portes precisavam de suporte especializado para navegar pela burocracia
                jurídica e regulatória brasileira, mas não encontravam parceiros que unissem{" "}
                <strong className="text-[var(--blue-dark)] font-semibold">
                  expertise técnica, agilidade e confiabilidade
                </strong>.
              </p>
              <p>
                Fundado em 1999, em São Paulo, no coração do maior polo financeiro da América
                Latina, o Grupo Heracorp se especializou progressivamente em atos societários,
                serviços paralegais e legalização empresarial, construindo reputação sólida junto
                a escritórios de advocacia, bancas de M&A e empresas multinacionais.
              </p>
              <p>
                Hoje, com{" "}
                <strong className="text-[var(--blue-dark)] font-semibold">
                  mais de 40.000 serviços executados
                </strong>
                , somos reconhecidos como referência no segmento — atuando em juntas
                comerciais, cartórios, Receita Federal, Banco Central e demais órgãos
                em todo o território nacional.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <div className="space-y-4">
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="w-8 h-8 rounded-lg bg-[var(--blue-light)]/15 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-[var(--blue-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--blue-dark)] mb-2">Nossa Missão</h3>
                <p className="text-[var(--gray-body)] text-sm leading-relaxed">
                  Oferecer soluções paralegais de excelência, simplificando processos
                  complexos e garantindo segurança jurídica para que nossos clientes
                  possam focar no crescimento de seus negócios.
                </p>
              </div>
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="w-8 h-8 rounded-lg bg-[var(--blue-light)]/15 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-[var(--blue-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--blue-dark)] mb-2">Nossa Visão</h3>
                <p className="text-[var(--gray-body)] text-sm leading-relaxed">
                  Ser o parceiro estratégico de referência no Brasil para serviços
                  paralegais e legalização empresarial, reconhecido pela excelência
                  técnica e pela confiança que inspiramos.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <p className="section-label mb-3">O que nos guia</p>
            <h2 className="text-3xl font-bold text-[var(--blue-dark)] title-accent-center">
              Nossos Valores
            </h2>
            <p className="text-[var(--gray-body)] max-w-xl mx-auto mt-6 text-sm leading-relaxed">
              Os princípios que guiam cada decisão e cada entrega do Grupo Heracorp.
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="service-card p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue-light)]/10 text-[var(--blue-light)] flex items-center justify-center mx-auto mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--blue-dark)] mb-2">{v.title}</h3>
                  <p className="text-[var(--gray-body)] text-xs leading-relaxed">{v.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 px-4 bg-[var(--blue-light)] text-white text-center">
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Quer conhecer mais sobre como trabalhamos?</h2>
          <p className="text-white/70 mb-8 text-sm">
            Nossa equipe está disponível para apresentar nossas soluções e entender
            como podemos apoiar sua empresa.
          </p>
          <Button href="/contato" size="lg" variant="secondary">
            Entre em Contato
          </Button>
        </div>
      </section>
    </>
  );
}
