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

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [excluded]);

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