import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--blue-dark)] text-white relative overflow-hidden">
      {/* Diagonal pattern */}
      <div className="absolute inset-0 hero-pattern opacity-100 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5 group">
              <span className="inline-flex items-center bg-white rounded-xl px-4 py-2.5 shadow-sm transition-shadow group-hover:shadow-md">
                <Image
                  src="/logo-novo-heracorp-fundobranco.png"
                  alt="Grupo HeraCorp — Consultoria Paralegal"
                  width={160}
                  height={86}
                  className="w-[160px] h-auto"
                />
              </span>
            </Link>
            <p className="text-blue-100/80 text-sm leading-relaxed max-w-xs">
              Especialistas em legalização empresarial com 25 anos de mercado.
              Parceiros dos maiores escritórios de advocacia do Brasil.
            </p>
            <p className="mt-4 text-[var(--blue-light)] text-sm italic font-medium">
              "{COMPANY.tagline}"
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--blue-light)] text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <InstagramIcon />
              </a>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--blue-light)] text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="section-label text-blue-300 mb-5">Navegação</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100/80 text-sm hover:text-white transition-colors flex items-center gap-2.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--blue-light)] opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="section-label text-blue-300 mb-5">Contato</h3>
            <address className="not-italic space-y-4 text-sm text-blue-100/80">
              <p className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[var(--blue-light)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{COMPANY.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[var(--blue-light)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[var(--blue-light)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-200/60">
          <p>© {new Date().getFullYear()} Grupo Heracorp. Todos os direitos reservados.</p>
          <p>Fundada em 1999 · São Paulo, SP · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
