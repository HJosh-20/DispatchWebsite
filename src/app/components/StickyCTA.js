"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyCTA() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const targetVisible = useRef(false);

  useEffect(() => {
    // Observe the "bottom-cta" if present; otherwise, fallback to footer
    const target =
      document.getElementById("bottom-cta") || document.querySelector("footer");
    let observer;

    if (target) {
      observer = new IntersectionObserver(
        (entries) => {
          const inView = entries[0].isIntersecting;
          targetVisible.current = inView;

          // If bottom CTA/footer is visible, force-hide the sticky
          if (inView) setHidden(true);
          else setHidden(false);
        },
        {
          // Hide only when the bottom CTA is truly in view:
          // this hides when ~40% of the viewport overlaps the target.
          root: null,
          threshold: 0.01,
          rootMargin: "0px 0px -40% 0px",
        }
      );
      observer.observe(target);
    }

    // Scroll direction: hide on downward scroll, show on upward scroll
    const onScroll = () => {
      if (targetVisible.current) return; // footer/CTA wins
      const y = window.scrollY;

      if (y > lastY.current + 8) setHidden(true);     // scrolling down
      else if (y < lastY.current - 8) setHidden(false); // scrolling up

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (observer && target) observer.unobserve(target);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      className={
        "sticky-book-btn md:hidden" + (hidden ? " sticky-book-btn--hidden" : "")
      }
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