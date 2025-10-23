"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function StickyCTA() {
  const pathname = usePathname();
  const excluded = pathname === "/book" || pathname === "/thank-you";

  const [hidden, setHidden] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    if (excluded) return;

    // SSR guard + API availability guard
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    // Cleanup previous observer before setting up new one
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      const target =
        document.getElementById("cta-sentinel") ||
        document.querySelector("footer");

      if (!target) return;

      const io = new window.IntersectionObserver(
        (entries) => {
          const isOnScreen = entries[0]?.isIntersecting === true;
          setHidden(isOnScreen); // hide sticky button when CTA/footer is visible
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
      );

      observerRef.current = io;
      io.observe(target);
    }, 100); // 100ms delay to let Next.js finish rendering

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [excluded, pathname]); // ← KEY CHANGE: Added pathname dependency

  if (excluded) return null;

  return (
    <div
      aria-hidden={hidden}
      className={[
        "sticky-cta",
        hidden ? "sticky-cta--hidden" : "sticky-cta--shown",
        "md:hidden", // mobile only
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