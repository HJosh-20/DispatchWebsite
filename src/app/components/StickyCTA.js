"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function StickyCTA() {
  const pathname = usePathname();

  // pages where we never show the floating button
  const excluded =
    pathname === "/book" ||
    pathname === "/thank-you";

  const [hidden, setHidden] = useState(false);
  const observers = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (excluded) return;

    // Watch ALL possible targets:
    // - explicit sentinels you add: #real-cta or [data-real-cta]
    // - fallback to footer if none are present
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("#real-cta, [data-real-cta]")
    );

    if (targets.length === 0) {
      const f = document.querySelector<HTMLElement>("footer");
      if (f) targets.push(f);
    }
    if (targets.length === 0) return; // nothing to observe

    // Hide a bit before the section is fully in view (negative bottom margin)
    const io = new IntersectionObserver(
      (entries) => {
        // If ANY watched element is intersecting, hide the sticky CTA
        const anyVisible = entries.some((e) => e.isIntersecting);
        setHidden(anyVisible);
      },
      {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -25% 0px", // hide sooner as user nears the real CTA
      }
    );

    targets.forEach((t) => io.observe(t));
    observers.current = io;
    return () => {
      io.disconnect();
      observers.current = null;
    };
  }, [excluded, pathname]);

  if (excluded) return null;

  return (
    <div
      aria-hidden={hidden}
      className={[
        "sticky-cta",                                   // your CSS helper (positioning, z-index)
        hidden ? "sticky-cta--hidden" : "sticky-cta--shown",
        "md:hidden",                                     // only show on mobile
      ].join(" ")}
    >
      <a
        href="/book"
        className="px-5 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700 transition"
      >
        Book Now
      </a>
    </div>
  );
}
