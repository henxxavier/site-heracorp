import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { COMPANY } from "@/lib/constants";

const BASE_URL = "https://heracorp.com.br";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `/servicos/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Grupo Heracorp`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: COMPANY.name,
      url: BASE_URL,
    },
    areaServed: "BR",
    url: `${BASE_URL}/servicos/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Page header */}
      <section className="relative overflow-hidden bg-[var(--blue-dark)] text-white py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-dark)] to-[var(--blue-deep)]" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-blue-200/70 mb-6">
            <Link href="/servicos" className="hover:text-white transition-colors">
              Serviços
            </Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="w-14 h-14 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={service.iconPath} />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{service.title}</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[var(--blue-dark)] title-accent mb-4">
                O que fazemos
              </h2>
              <p className="text-[var(--gray-body)] leading-relaxed">
                {service.description}
              </p>
            </div>

            <div>
              <ul className="space-y-3 mb-5">
                {service.highlights.map((h) => (
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
              {service.callout && (
                <div className="p-4 rounded-xl bg-[var(--blue-light)]/8 border border-[var(--blue-light)]/20">
                  <p className="text-sm font-medium text-[var(--blue-dark)] italic">
                    {service.callout}
                  </p>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--blue-dark)] title-accent-center text-center mb-10">
            Outros serviços
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="block p-5 rounded-xl border border-[var(--border)] hover:border-[var(--blue-light)]/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--blue-light)]/10 text-[var(--blue-light)] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={s.iconPath} />
                  </svg>
                </div>
                <p className="font-semibold text-[var(--blue-dark)] text-sm group-hover:text-[var(--blue-light)] transition-colors">
                  {s.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
