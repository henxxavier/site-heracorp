"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  { end: 45000, suffix: "+", label: "Serviços Paralegais Executados", dotted: true },
  { end: 500,   suffix: "+", label: "Clientes Ativos",                dotted: false },
  { end: 70,    suffix: "+", label: "Projetos de M&A",                dotted: false },
  { end: 25,    suffix: "",  label: "Anos de Mercado",                 dotted: false },
];

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function AnimatedStats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setCounts(statsData.map((s) => Math.round(s.end * eased)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started]);

  return (
    <section ref={ref} className="bg-[#0292b7] py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {statsData.map((s, i) => (
          <div
            key={s.label}
            className={`text-center px-6 py-6 text-white ${
              i % 2 === 1 ? "border-l border-white/20" : ""
            } ${i === 2 ? "md:border-l md:border-white/20" : ""}`}
          >
            <p className="text-3xl md:text-4xl font-bold tabular-nums">
              {s.dotted
                ? counts[i].toLocaleString("pt-BR")
                : counts[i]}
              {s.suffix}
            </p>
            <p className="text-white/70 text-sm mt-2 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
