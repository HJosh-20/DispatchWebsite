"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Sticky “Book Now” button
 * - Hides when the footer is visible
 * - Optional: don’t show on /book or /thank-you pages
 * - Mobile-only styling is handled via your globals.css:
 *   .sticky-book-btn + .sticky-book-btn--hidden
 */
export default function StickyCTA() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  // Do not render the CTA on certain pages
  const shouldHideCompletely = ["/book", "/thank-you"].includes(pathname);
  if (shouldHideCompletely) return null;

  useEffect(() => {
    // If IntersectionObserver isn’t supported, just keep the CTA visible
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const footerEl = document.querySelector("footer");
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide the CTA when footer is in view
        setHidden(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-book-btn ${hidden ? "sticky-book-btn--hidden" : ""}`}>
      <a
        href="/book"
        aria-label="Book a consultation"
        className="px-5 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700"
      >
        Book Now
      </a>
    </div>
  );
}