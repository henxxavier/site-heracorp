"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS, COMPANY, LOGO, whatsappUrl } from "@/lib/constants";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} fill-current flex-shrink-0`} viewBox="0 0 24 24" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_6px_30px_-12px_rgba(13,31,61,0.25)] border-[var(--border)]"
          : "bg-white border-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-[var(--blue-ink)] text-white/75 text-xs">
        <div className="max-w-7xl mx-auto px-8 h-9 flex items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-light)]" />
            {COMPANY.experience} de expertise em serviços paralegais · Atuação em todo o Brasil
          </p>
          <div className="flex items-center gap-5">
            <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
              {COMPANY.phoneFormatted}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Grupo Heracorp — página inicial">
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              width={LOGO.width}
              height={LOGO.height}
              priority
              sizes="160px"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-12 md:h-14" : "h-14 md:h-[70px]"}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "active text-[var(--blue-dark)]"
                    : "text-[var(--gray-body)] hover:text-[var(--blue-dark)]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={whatsappUrl("Olá! Vim pelo site da Heracorp e gostaria de um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--blue-dark)] text-white text-sm font-semibold rounded-full hover:bg-[var(--blue-light)] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <WhatsAppIcon />
              Solicitar orçamento
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--blue-dark)] hover:bg-[var(--surface)] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-white px-4 py-3 space-y-1 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[var(--blue-dark)] bg-[var(--surface)] font-semibold"
                  : "text-[var(--gray-body)] hover:text-[var(--blue-dark)] hover:bg-[var(--surface)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center justify-center gap-2 px-3 py-3 border border-[var(--border)] text-[var(--blue-dark)] text-sm font-semibold rounded-xl"
            >
              Ligar
            </a>
            <a
              href={whatsappUrl("Olá! Vim pelo site da Heracorp e gostaria de um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-xl"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
