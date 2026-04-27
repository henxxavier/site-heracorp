"use client";

import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "up" | "fade" | "scale";
  delay?: number;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "up",
  delay = 0,
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add(`animate-in-${animation}`);
          el.classList.remove("anim-hidden");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={`anim-hidden ${className}`}>
      {children}
    </div>
  );
}
