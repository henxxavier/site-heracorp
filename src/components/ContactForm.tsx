"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: integrate with your backend/email API
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#1c4c86] mb-2">Mensagem enviada!</h3>
        <p className="text-[#545454] text-sm">Nossa equipe entrará em contato em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#1c4c86] mb-1.5" htmlFor="nome">
            Nome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            placeholder="Seu nome completo"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#545454] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0292b7]/30 focus:border-[#0292b7] transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1c4c86] mb-1.5" htmlFor="empresa">
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Nome da empresa"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#545454] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0292b7]/30 focus:border-[#0292b7] transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1c4c86] mb-1.5" htmlFor="email">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com.br"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#545454] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0292b7]/30 focus:border-[#0292b7] transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1c4c86] mb-1.5" htmlFor="telefone">
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          placeholder="(11) 99999-0000"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#545454] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0292b7]/30 focus:border-[#0292b7] transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1c4c86] mb-1.5" htmlFor="assunto">
          Assunto *
        </label>
        <select
          id="assunto"
          name="assunto"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#545454] focus:outline-none focus:ring-2 focus:ring-[#0292b7]/30 focus:border-[#0292b7] transition"
        >
          <option value="">Selecione um assunto</option>
          <option value="paralegal">Serviços Paralegais</option>
          <option value="contabilidade">Contabilidade Corporativa</option>
          <option value="societario">Atos Societários</option>
          <option value="due-diligence">Due Diligence</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1c4c86] mb-1.5" htmlFor="mensagem">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={4}
          placeholder="Descreva brevemente sua necessidade..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-[#545454] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0292b7]/30 focus:border-[#0292b7] transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 bg-[#1c4c86] text-white font-semibold rounded-lg hover:bg-[#163d6e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </form>
  );
}
