"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  { end: 50000, prefix: "+", suffix: "", label: "Serviços paralegais executados", dotted: true },
  { end: 25,    prefix: "+", suffix: "", label: "Anos de expertise e experiência", dotted: false },
  { end: 500,   prefix: "+", suffix: "", label: "Clientes atendidos",              dotted: false },
  { end: 70,    prefix: "+", suffix: "", label: "Projetos de M&A",                 dotted: false },
];

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function format(n: number, dotted: boolean) {
  return dotted ? n.toLocaleString("pt-BR") : String(n);
}

export default function AnimatedStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 0 : 2400;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = duration === 0 ? 1 : Math.min((now - startTime) / duration, 1);
      const eased = easeOutQuart(progress);
      setCounts(statsData.map((s) => Math.round(s.end * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section
      ref={ref}
      aria-label="Números do Grupo Heracorp"
      className="relative z-10 -mt-14 px-4"
    >
      <div className="max-w-6xl mx-auto rounded-3xl bg-white shadow-[0_30px_60px_-30px_rgba(13,31,61,0.45)] border border-[var(--border)] grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
        {statsData.map((s, i) => (
          <div
            key={s.label}
            className={`relative px-6 py-8 md:py-10 text-center lg:text-left ${
              i % 2 === 1 ? "border-l border-[var(--border)]" : ""
            } ${i >= 2 ? "border-t lg:border-t-0 border-[var(--border)]" : ""} ${
              i === 2 ? "lg:border-l" : ""
            }`}
          >
            <p
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--blue-dark)] tabular-nums tracking-tight"
              aria-label={`${s.prefix}${format(s.end, s.dotted)} ${s.label}`}
            >
              <span className="text-[var(--blue-light)]">{s.prefix}</span>
              {format(counts[i], s.dotted)}
              {s.suffix}
            </p>
            <p className="text-[var(--gray-body)] text-sm mt-2 font-medium">{s.label}</p>
            <div className="mt-5 h-[3px] rounded-full bg-[var(--surface)] overflow-hidden mx-auto lg:mx-0 max-w-[140px]">
              <div
                className={`stat-bar h-full rounded-full bg-gradient-to-r from-[var(--blue-dark)] to-[var(--blue-light)] ${
                  started ? "is-on" : ""
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
