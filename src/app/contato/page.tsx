import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Grupo Heracorp. Av. Rebouças, 3482, São Paulo/SP. Telefone: (11) 3283-3767.",
};

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContatoPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-[var(--blue-dark)] text-white py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-dark)] to-[var(--blue-deep)]" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label text-blue-300 mb-4">Estamos aqui</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Entre em Contato</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para entender as necessidades da sua empresa
            e apresentar a melhor solução.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact info */}
          <AnimateOnScroll>
            <p className="section-label mb-3">Informações</p>
            <h2 className="text-2xl font-bold text-[var(--blue-dark)] title-accent mb-8">
              Como nos encontrar
            </h2>

            <div className="space-y-5 mt-8">
              {[
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  label: "Endereço",
                  content: <address className="not-italic text-sm leading-relaxed">{COMPANY.address}</address>,
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                  label: "Telefone",
                  content: <a href={`tel:${COMPANY.phone}`} className="text-sm hover:text-[var(--blue-light)] transition-colors">{COMPANY.phoneFormatted}</a>,
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  label: "E-mail",
                  content: <a href={`mailto:${COMPANY.email}`} className="text-sm hover:text-[var(--blue-light)] transition-colors">{COMPANY.email}</a>,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--blue-dark)] text-white flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--blue-dark)] uppercase tracking-wider mb-1">{item.label}</p>
                    <div className="text-[var(--gray-body)]">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="text-xs font-semibold text-[var(--blue-dark)] uppercase tracking-wider mb-4">
                Redes Sociais
              </p>
              <div className="flex gap-3">
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-white text-[var(--gray-body)] text-sm font-medium hover:border-[var(--blue-light)] hover:text-[var(--blue-light)] transition-all hover:shadow-sm"
                >
                  <InstagramIcon />
                  Instagram
                </a>
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-white text-[var(--gray-body)] text-sm font-medium hover:border-[var(--blue-light)] hover:text-[var(--blue-light)] transition-all hover:shadow-sm"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Map link */}
            <a
              href="https://maps.google.com/?q=Avenida+Rebouças+3482+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3.5 text-sm text-[var(--blue-dark)] font-medium hover:border-[var(--blue-light)] hover:shadow-sm transition-all group"
            >
              <svg className="w-5 h-5 text-[var(--blue-light)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Ver no Google Maps
              <svg className="w-4 h-4 ml-auto text-[var(--gray-muted)] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll delay={100}>
            <div className="bg-white rounded-2xl border border-[var(--border)] shadow-sm p-8">
              <p className="section-label mb-3">Formulário</p>
              <h2 className="text-2xl font-bold text-[var(--blue-dark)] mb-1">Envie uma Mensagem</h2>
              <p className="text-[var(--gray-body)] text-sm mb-7">
                Retornaremos em até 1 dia útil.
              </p>
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
