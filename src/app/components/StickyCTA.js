"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function StickyCTA() {
  const pathname = usePathname();

  // Don’t render on these routes
  if (pathname === "/book" || pathname === "/thank-you") {
    return null;
  }

  const [hidden, setHidden] = useState(false);
  const watchedVisible = useRef(false);

  useEffect(() => {
    const target =
      document.getElementById("real-cta") ||
      document.querySelector("footer");

    if (!target) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        watchedVisible.current = e.isIntersecting;
        setHidden(e.isIntersecting);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

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
