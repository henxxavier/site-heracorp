import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o Grupo Heracorp coleta, utiliza e protege os seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: { canonical: "/politica-de-privacidade" },
};

const sections = [
  {
    title: "1. Quem somos",
    body: `O ${COMPANY.name} é uma consultoria paralegal com sede na ${COMPANY.address}. Esta política explica como tratamos os dados pessoais coletados por meio deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).`,
  },
  {
    title: "2. Quais dados coletamos",
    body: "Coletamos apenas os dados que você nos fornece voluntariamente ao preencher formulários ou entrar em contato conosco, como nome, empresa, telefone/WhatsApp, e-mail e a descrição da sua necessidade. Também coletamos dados de navegação de forma anônima e agregada (como páginas visitadas, tipo de dispositivo e origem do acesso) por meio de cookies e ferramentas de análise.",
  },
  {
    title: "3. Para que usamos os dados",
    body: "Utilizamos seus dados para responder às suas solicitações, elaborar propostas comerciais, prestar os serviços contratados e melhorar a experiência no site. Os dados de navegação são usados para medir o desempenho do site e de nossas campanhas de publicidade.",
  },
  {
    title: "4. Cookies e ferramentas de terceiros",
    body: "Este site utiliza o Google Analytics e o Google Ads para análise de audiência e mensuração de campanhas. Essas ferramentas podem utilizar cookies para coletar informações de navegação. Você pode desativar cookies nas configurações do seu navegador ou gerenciar suas preferências de anúncios em adssettings.google.com.",
  },
  {
    title: "5. Compartilhamento",
    body: "Não vendemos nem alugamos seus dados pessoais. Os dados podem ser compartilhados apenas com órgãos públicos quando necessário à execução dos serviços contratados, com prestadores que nos apoiam na operação (como ferramentas de comunicação e hospedagem) ou quando exigido por lei.",
  },
  {
    title: "6. Armazenamento e segurança",
    body: "Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração. Os dados são mantidos apenas pelo tempo necessário para cumprir as finalidades descritas ou obrigações legais.",
  },
  {
    title: "7. Seus direitos",
    body: "Você pode, a qualquer momento, solicitar a confirmação da existência de tratamento, o acesso, a correção, a anonimização, a portabilidade ou a exclusão dos seus dados, bem como revogar o consentimento, nos termos do art. 18 da LGPD.",
  },
  {
    title: "8. Contato",
    body: `Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo e-mail ${COMPANY.email} ou pelo telefone ${COMPANY.phoneFormatted}.`,
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--blue-deep)] text-white py-16 px-4">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-3xl mx-auto">
          <p className="section-label mb-4">Transparência</p>
          <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidade</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-[var(--blue-dark)] mb-2">{s.title}</h2>
              <p className="text-[15px] leading-relaxed">{s.body}</p>
            </div>
          ))}
          <p className="text-sm text-[var(--gray-muted)] pt-4 border-t border-[var(--border)]">
            Última atualização: outubro de 2026.
          </p>
        </div>
      </section>
    </>
  );
}
