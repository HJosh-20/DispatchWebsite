"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", once = true }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
                  ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  ${className}`}
    >
      {children}
    </div>
  );
}