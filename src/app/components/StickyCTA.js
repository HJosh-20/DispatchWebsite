"use client";
import { useEffect, useState, useRef } from "react";

export default function StickyCTA() {
  const [hidden, setHidden] = useState(false);
  const observerRef = useRef(null);
  const targetVisible = useRef(false);

  useEffect(() => {
    const target = document.querySelector("#bottom-cta");
    if (!target) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        targetVisible.current = entry.isIntersecting;
        setHidden(entry.isIntersecting); // hide when #bottom-cta is visible
      },
      { root: null, threshold: 0.1 }
    );

    observerRef.current.observe(target);

    return () => {
      if (observerRef.current && target) observerRef.current.unobserve(target);
    };
  }, []);

  return (
    <div
      className={`sticky-book-btn transition-all duration-300 ${
        hidden ? "sticky-book-btn--hidden" : ""
      }`}
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
