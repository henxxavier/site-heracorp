export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  metaDescription: string;
  highlights: string[];
  callout?: string;
  iconPath: string;
}

export const SERVICES: Service[] = [
  {
    slug: "legalizacao-empresarial",
    title: "Legalização Empresarial",
    tagline: "Sua empresa, do jeito certo — do primeiro registro ao encerramento.",
    description:
      "Cuidamos de todo o ciclo de vida jurídico da sua empresa com agilidade, precisão e cobertura nacional. Você foca no negócio. A burocracia fica com a gente.",
    metaDescription:
      "Legalização empresarial em todo o Brasil: constituição, alteração, reativação e baixa de empresas, registros em Juntas Comerciais e Cartórios, com o Grupo Heracorp.",
    highlights: [
      "Constituição, alteração, reativação e baixa de empresas",
      "Registros em Juntas Comerciais e Cartórios em todo o Brasil",
      "Adequação de contratos sociais e estatutos",
      "Regularização de pendências junto à Receita Federal e órgãos estaduais",
      "Shelf Companies: empresas prontas para uso imediato, sem espera de registro",
    ],
    callout: "Precisa operar amanhã? Temos empresas de prateleira prontas para transferência.",
    iconPath:
      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    slug: "gestao-certidoes-auditorias",
    title: "Gestão de Certidões e Apoio a Auditorias",
    tagline: "Sem certidão vencida. Sem surpresa em due diligence.",
    description:
      "Monitoramos, obtemos e renovamos as certidões que sua empresa precisa — antes que elas virem um problema. E quando o assunto é auditoria, estamos prontos para agir com velocidade.",
    metaDescription:
      "Obtenção e renovação de certidões federais, estaduais e municipais, e suporte completo a due diligence e data rooms. Conheça o serviço do Grupo Heracorp.",
    highlights: [
      "Obtenção, acompanhamento e renovação de CNDs federais, estaduais e municipais",
      "Certidões forenses, imobiliárias e de distribuidores",
      "Suporte completo a processos de due diligence",
      "Organização e criação de data rooms virtuais",
      "Relatórios de situação documental para decisões estratégicas",
    ],
    callout: "Da triagem ao data room, cobrimos cada etapa da sua auditoria.",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    slug: "consultoria-imobiliaria",
    title: "Consultoria Imobiliária",
    tagline: "Regularize seu imóvel sem dor de cabeça.",
    description:
      "Atuamos em todas as frentes documentais do universo imobiliário — de licenciamentos simples a operações complexas de loteamento — com acompanhamento ponta a ponta nos Cartórios de Registro de Imóveis.",
    metaDescription:
      "Consultoria imobiliária completa: licenciamento, retificação de área, desdobros, loteamentos e registro de imóveis em todo o Brasil, com o Grupo Heracorp.",
    highlights: [
      "Licenciamento e regularização de imóveis",
      "Retificações de área e confrontações",
      "Desdobros, remembramentos e loteamentos",
      "Averbações e registros de atos imobiliários",
      "Acompanhamento integral em Cartórios de Imóveis em todo o Brasil",
    ],
    callout: "Da escritura ao registro final, nenhum detalhe fica para trás.",
    iconPath:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    slug: "consultoria-fiscal-tributaria",
    title: "Consultoria Fiscal e Tributária",
    tagline: "Transforme compliance em vantagem competitiva.",
    description:
      "Não basta estar em dia com o fisco — é preciso usar o conhecimento tributário como alavanca estratégica. Nossa equipe desenvolve soluções que melhoram a competitividade da sua empresa perante as autoridades fiscais.",
    metaDescription:
      "Consultoria fiscal e tributária: defesas administrativas, planejamento tributário, recuperação de créditos e redução de passivos. Conheça o Grupo Heracorp.",
    highlights: [
      "Elaboração de defesas administrativas tributárias",
      "Estratégias inovadoras de planejamento fiscal",
      "Recuperação de créditos e exclusão de débitos indevidos",
      "Consultoria para redução de passivos tributários",
      "Representação em processos administrativos fiscais",
    ],
    callout: "Já ajudamos clientes a excluir débitos milionários. O seu pode ser o próximo.",
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    slug: "apoio-investidores-estrangeiros",
    title: "Apoio a Investidores Estrangeiros",
    tagline: "Seu negócio no Brasil, sem barreiras burocráticas.",
    description:
      "Facilitamos a entrada e a operação de capital estrangeiro no país com segurança jurídica, agilidade e conhecimento das exigências dos órgãos reguladores.",
    metaDescription:
      "Apoio a investidores estrangeiros no Brasil: constituição societária, registro no Banco Central (RDE-IED e RDE-ROF) e representação legal, com o Grupo Heracorp.",
    highlights: [
      "Constituição de sociedades com participação de capital estrangeiro",
      "Atualização e adequação de estruturas societárias existentes",
      "Representação legal de sócios e administradores estrangeiros",
      "Registro e atualização no Banco Central (RDE-IED e RDE-ROF)",
      "Domicílio fiscal e procuradoria para empresas internacionais",
    ],
    callout:
      "Do visto à operação: sua empresa estrangeira funcionando no Brasil com quem conhece cada exigência.",
    iconPath:
      "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
