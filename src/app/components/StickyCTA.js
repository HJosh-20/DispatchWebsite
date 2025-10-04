"use client";

import { useEffect, useState } from "react";

/**
 * Mobile sticky “Book Now” that hides when the footer is visible.
 * Requires #site-footer on your footer element.
 */
export default function StickyCTA() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footerEl = document.getElementById("site-footer");
    if (!footerEl) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // hide when footer is intersecting the viewport (visible)
        setHidden(entry.isIntersecting);
      },
      { root: null, threshold: 0.05 }
    );

    io.observe(footerEl);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={[
        "sticky-book-btn md:hidden",
        hidden ? "sticky-book-btn--hidden" : "",
      ].join(" ")}
    >
      <a
        href="/book"
        className="px-5 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700"
      >
        Book Now
      </a>
    </div>
  );
}