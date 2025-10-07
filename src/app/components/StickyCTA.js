"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function StickyCTA() {
  const pathname = usePathname();
  const excluded = pathname === "/book" || pathname === "/thank-you";

  // Hooks must ALWAYS be called
  const [hidden, setHidden] = useState(false);
  const watchedVisible = useRef(false);

  useEffect(() => {
    if (excluded) return; // do nothing on excluded routes

    // Watch either a page CTA (#real-cta) or the footer as fallback
    const target =
      document.getElementById("real-cta") ||
      document.querySelector("footer");

    if (!target) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        watchedVisible.current = e.isIntersecting;
        setHidden(e.isIntersecting); // hide when target is visible
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, [excluded]);

  // If route is excluded, render nothing (hooks were still called)
  if (excluded) return null;

  return (
    <div
      aria-hidden={hidden}
      className={[
        "sticky-cta",
        hidden ? "sticky-cta--hidden" : "sticky-cta--shown",
        "md:hidden",
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