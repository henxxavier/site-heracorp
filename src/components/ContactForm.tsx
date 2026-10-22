"use client";

import Link from "next/link";
import { useState } from "react";
import { whatsappUrl } from "@/lib/constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const SERVICE_OPTIONS = [
  "Registros em Juntas Comerciais e Cartórios",
  "Abertura, alteração ou baixa de empresa",
  "Regularização de CNPJ / Inscrição Estadual",
  "Certidões e due diligence",
  "Livros societários",
  "Banco Central (RDE-IED / RDE-ROF)",
  "Investidor estrangeiro / procurador",
  "Consultoria imobiliária",
  "Consultoria fiscal e tributária",
  "Outro",
] as const;

interface ContactFormProps {
  /** Versão enxuta para o hero (menos campos, mais conversão) */
  compact?: boolean;
  /** Identifica a origem do lead no GA / Google Ads */
  source?: string;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm text-[var(--blue-dark)] placeholder-[var(--gray-muted)] focus:outline-none focus:ring-4 focus:ring-[var(--blue-light)]/15 focus:border-[var(--blue-light)] transition";

const labelClass = "block text-xs font-semibold text-[var(--blue-dark)] mb-1.5";

export default function ContactForm({ compact = false, source = "contato" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [
      "Olá! Vim pelo site da Heracorp e gostaria de um orçamento.",
      "",
      `*Nome:* ${get("nome")}`,
      get("empresa") && `*Empresa:* ${get("empresa")}`,
      get("telefone") && `*Telefone:* ${get("telefone")}`,
      get("email") && `*E-mail:* ${get("email")}`,
      `*Serviço:* ${get("assunto")}`,
      get("mensagem") && `*Mensagem:* ${get("mensagem")}`,
    ].filter(Boolean);

    window.gtag?.("event", "generate_lead", {
      form_source: source,
      service: get("assunto"),
    });

    const url = whatsappUrl(lines.join("\n"));
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="text-center py-10" role="status">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[var(--blue-dark)] mb-2">Quase lá!</h3>
        <p className="text-[var(--gray-body)] text-sm max-w-xs mx-auto">
          Abrimos o WhatsApp com sua solicitação. É só enviar a mensagem e um especialista
          responde em seguida.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-[var(--blue-light)] hover:underline"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3.5" : "space-y-5"}>
      <div className={`grid gap-3.5 ${compact ? "" : "sm:grid-cols-2 sm:gap-5"}`}>
        <div>
          <label className={labelClass} htmlFor={`${source}-nome`}>Nome *</label>
          <input id={`${source}-nome`} name="nome" type="text" required autoComplete="name"
            placeholder="Seu nome" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${source}-empresa`}>Empresa / Escritório</label>
          <input id={`${source}-empresa`} name="empresa" type="text" autoComplete="organization"
            placeholder="Nome da empresa" className={inputClass} />
        </div>
      </div>

      <div className={`grid gap-3.5 ${compact ? "" : "sm:grid-cols-2 sm:gap-5"}`}>
        <div>
          <label className={labelClass} htmlFor={`${source}-telefone`}>WhatsApp / Telefone *</label>
          <input id={`${source}-telefone`} name="telefone" type="tel" required autoComplete="tel"
            placeholder="(11) 99999-0000" className={inputClass} />
        </div>
        {!compact && (
          <div>
            <label className={labelClass} htmlFor={`${source}-email`}>E-mail</label>
            <input id={`${source}-email`} name="email" type="email" autoComplete="email"
              placeholder="seu@email.com.br" className={inputClass} />
          </div>
        )}
      </div>

      <div>
        <label className={labelClass} htmlFor={`${source}-assunto`}>Qual serviço você precisa? *</label>
        <select id={`${source}-assunto`} name="assunto" required defaultValue="" className={inputClass}>
          <option value="" disabled>Selecione um serviço</option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      {!compact && (
        <div>
          <label className={labelClass} htmlFor={`${source}-mensagem`}>Mensagem</label>
          <textarea id={`${source}-mensagem`} name="mensagem" rows={4}
            placeholder="Descreva brevemente sua necessidade..."
            className={`${inputClass} resize-none`} />
        </div>
      )}

      <button
        type="submit"
        className="group w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[var(--blue-light)] text-white font-semibold rounded-xl hover:bg-[var(--blue-hover)] transition-colors shadow-[0_10px_24px_-10px_rgba(2,146,183,0.8)]"
      >
        Solicitar orçamento
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      <p className="text-[11px] leading-relaxed text-[var(--gray-muted)] text-center">
        Ao enviar, você será direcionado ao nosso WhatsApp. Seus dados são usados apenas
        para responder à sua solicitação, conforme nossa{" "}
        <Link href="/politica-de-privacidade" className="underline hover:text-[var(--blue-dark)]">
          Política de Privacidade
        </Link>.
      </p>
    </form>
  );
}
