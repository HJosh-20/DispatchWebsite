"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function StickyCTA() {
  const pathname = usePathname();
  const excluded = pathname === "/book" || pathname === "/thank-you";

  const [hidden, setHidden] = useState(false);
  const watcher = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (excluded) return;

    // Only run in the browser
    if (typeof window === "undefined") return;

    const target =
      document.getElementById("cta-sentinel") ||
      document.querySelector("footer");

    if (!target) return;

    watcher.current = new IntersectionObserver(
      (entries) => {
        setHidden(entries[0]?.isIntersecting === true);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
    );

    watcher.current.observe(target);
    return () => watcher.current?.disconnect();
  }, [excluded]);

  if (excluded) return null;

  return (
    <div
      aria-hidden={hidden}
      className={[
        "sticky-cta",
        hidden ? "sticky-cta--hidden" : "sticky-cta--shown",
        "md:hidden", // mobile-only
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