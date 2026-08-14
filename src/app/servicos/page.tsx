import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça as áreas de atuação do Grupo Heracorp: legalização empresarial, certidões, consultoria imobiliária, fiscal e apoio a investidores estrangeiros.",
};

export default function ServicosPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-[var(--blue-dark)] text-white py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-dark)] to-[var(--blue-deep)]" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label text-blue-300 mb-4">O que oferecemos</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Nossos Serviços</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções especializadas para cada etapa da vida corporativa da sua empresa,
            executadas com rigor técnico e comprometimento.
          </p>
        </div>
      </section>

      {/* Services */}
      {SERVICES.map((s, i) => (
        <section
          key={s.slug}
          className={`py-20 px-4 ${i % 2 === 0 ? "bg-[var(--surface)]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-light)]/10 text-[var(--blue-light)] flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={s.iconPath} />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--blue-dark)] title-accent mb-2">
                  <Link href={`/servicos/${s.slug}`} className="hover:text-[var(--blue-light)] transition-colors">
                    {s.title}
                  </Link>
                </h2>
                <p className="text-[var(--blue-light)] font-medium italic text-sm mb-4">
                  {s.tagline}
                </p>
                <p className="text-[var(--gray-body)] text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <Link
                  href={`/servicos/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue-light)] hover:text-[var(--blue-hover)] transition-colors"
                >
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right */}
              <div>
                <ul className="space-y-3 mb-5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--blue-light)]/15 flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 h-2.5 text-[var(--blue-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[var(--gray-body)] text-sm leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
                {s.callout && (
                  <div className="p-4 rounded-xl bg-[var(--blue-light)]/8 border border-[var(--blue-light)]/20">
                    <p className="text-sm font-medium text-[var(--blue-dark)] italic">
                      {s.callout}
                    </p>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden py-16 px-4 bg-[var(--blue-dark)] text-white text-center">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para tirar a burocracia da equação?
          </h2>
          <p className="text-blue-200/60 mb-3 text-sm">
            Fale com um especialista da Heracorp e receba uma proposta personalizada em até 24 horas.
          </p>
          <p className="text-blue-300/70 text-xs mb-8">
            Mais de 40.000 serviços executados · 500+ clientes satisfeitos · 25 anos de mercado
          </p>
          <Button href="/contato" size="lg" variant="primary">
            Solicitar Orçamento Agora
          </Button>
        </div>
      </section>
    </>
  );
}
