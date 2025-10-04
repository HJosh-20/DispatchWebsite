"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function StickyCTA() {
  // visible/hidden state for the button
  const [hidden, setHidden] = useState(false);

  // sentinel to detect footer proximity (this node should sit just above <footer/>)
  const footerSentinelRef = useRef(null);

  useEffect(() => {
    // this effect runs only in the browser
    if (typeof window === "undefined") return;

    // ---- Hide on scroll down, show on scroll up ----
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY + 5 && y > 80) {
        // scrolling down a bit and not at top -> hide
        setHidden(true);
      } else if (y < lastY - 5) {
        // scrolling up -> show
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ---- Hide when the footer is in (or near) view ----
    let io;
    if ("IntersectionObserver" in window && footerSentinelRef.current) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            // when sentinel is visible near the footer, hide the CTA
            setHidden(e.isIntersecting);
          });
        },
        {
          // start hiding a bit before the actual footer to avoid overlap
          root: null,
          rootMargin: "0px 0px -40% 0px",
          threshold: 0,
        }
      );
      io.observe(footerSentinelRef.current);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (io) io.disconnect();
    };
  }, []);

  return (
    <>
      {/* This tiny sentinel should be placed right before <footer/> from layout */}
      <div ref={footerSentinelRef} aria-hidden="true" className="h-px w-px" />

      <div
        className={
          "sticky-book-btn " + (hidden ? "sticky-book-btn--hidden" : "")
        }
      >
        <Link
          href="/book"
          className="px-5 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700"
        >
          Book Now
        </Link>
      </div>
    </>
  );
}