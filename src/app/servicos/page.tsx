import type { Metadata } from "next";
import Button from "@/components/Button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça as áreas de atuação do Grupo Heracorp: legalização empresarial, certidões, consultoria imobiliária, fiscal e apoio a investidores estrangeiros.",
};

const services = [
  {
    title: "Legalização Empresarial",
    tagline: "Sua empresa, do jeito certo — do primeiro registro ao encerramento.",
    description:
      "Cuidamos de todo o ciclo de vida jurídico da sua empresa com agilidade, precisão e cobertura nacional. Você foca no negócio. A burocracia fica com a gente.",
    highlights: [
      "Constituição, alteração, reativação e baixa de empresas",
      "Registros em Juntas Comerciais e Cartórios em todo o Brasil",
      "Adequação de contratos sociais e estatutos",
      "Regularização de pendências junto à Receita Federal e órgãos estaduais",
      "Shelf Companies: empresas prontas para uso imediato, sem espera de registro",
    ],
    callout: "Precisa operar amanhã? Temos empresas de prateleira prontas para transferência.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Gestão de Certidões e Apoio a Auditorias",
    tagline: "Sem certidão vencida. Sem surpresa em due diligence.",
    description:
      "Monitoramos, obtemos e renovamos as certidões que sua empresa precisa — antes que elas virem um problema. E quando o assunto é auditoria, estamos prontos para agir com velocidade.",
    highlights: [
      "Obtenção, acompanhamento e renovação de CNDs federais, estaduais e municipais",
      "Certidões forenses, imobiliárias e de distribuidores",
      "Suporte completo a processos de due diligence",
      "Organização e criação de data rooms virtuais",
      "Relatórios de situação documental para decisões estratégicas",
    ],
    callout: "Da triagem ao data room, cobrimos cada etapa da sua auditoria.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Consultoria Imobiliária",
    tagline: "Regularize seu imóvel sem dor de cabeça.",
    description:
      "Atuamos em todas as frentes documentais do universo imobiliário — de licenciamentos simples a operações complexas de loteamento — com acompanhamento ponta a ponta nos Cartórios de Registro de Imóveis.",
    highlights: [
      "Licenciamento e regularização de imóveis",
      "Retificações de área e confrontações",
      "Desdobros, remembramentos e loteamentos",
      "Averbações e registros de atos imobiliários",
      "Acompanhamento integral em Cartórios de Imóveis em todo o Brasil",
    ],
    callout: "Da escritura ao registro final, nenhum detalhe fica para trás.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Consultoria Fiscal e Tributária",
    tagline: "Transforme compliance em vantagem competitiva.",
    description:
      "Não basta estar em dia com o fisco — é preciso usar o conhecimento tributário como alavanca estratégica. Nossa equipe desenvolve soluções que melhoram a competitividade da sua empresa perante as autoridades fiscais.",
    highlights: [
      "Elaboração de defesas administrativas tributárias",
      "Estratégias inovadoras de planejamento fiscal",
      "Recuperação de créditos e exclusão de débitos indevidos",
      "Consultoria para redução de passivos tributários",
      "Representação em processos administrativos fiscais",
    ],
    callout: "Já ajudamos clientes a excluir débitos milionários. O seu pode ser o próximo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Apoio a Investidores Estrangeiros",
    tagline: "Seu negócio no Brasil, sem barreiras burocráticas.",
    description:
      "Facilitamos a entrada e a operação de capital estrangeiro no país com segurança jurídica, agilidade e conhecimento das exigências dos órgãos reguladores.",
    highlights: [
      "Constituição de sociedades com participação de capital estrangeiro",
      "Atualização e adequação de estruturas societárias existentes",
      "Representação legal de sócios e administradores estrangeiros",
      "Registro e atualização no Banco Central (RDE-IED e RDE-ROF)",
      "Domicílio fiscal e procuradoria para empresas internacionais",
    ],
    callout:
      "Do visto à operação: sua empresa estrangeira funcionando no Brasil com quem conhece cada exigência.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

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
      {services.map((s, i) => (
        <section
          key={s.title}
          className={`py-20 px-4 ${i % 2 === 0 ? "bg-[var(--surface)]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-light)]/10 text-[var(--blue-light)] flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h2 className="text-2xl font-bold text-[var(--blue-dark)] title-accent mb-2">
                  {s.title}
                </h2>
                <p className="text-[var(--blue-light)] font-medium italic text-sm mb-4">
                  {s.tagline}
                </p>
                <p className="text-[var(--gray-body)] text-sm leading-relaxed">
                  {s.description}
                </p>
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
