"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  once = true,
  dir = "up",       // "up" | "down" | "left" | "right"
  distance = 24,    // px to move before settling
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  // pick the starting offset based on direction
  let hiddenTransform = "";
  switch (dir) {
    case "down":
      hiddenTransform = `translate-y-${distance}`;
      break;
    case "left":
      hiddenTransform = `-translate-x-${distance}`;
      break;
    case "right":
      hiddenTransform = `translate-x-${distance}`;
      break;
    case "up":
    default:
      hiddenTransform = `translate-y-${distance}`;
      break;
  }

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${shown ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`}
        ${className}
      `}
    >
      {children}
    </div>
  );
}