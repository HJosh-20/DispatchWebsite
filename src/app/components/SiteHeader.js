"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // hide when scrolling down (past 80px), show when scrolling up
          setHidden(y > lastY.current && y > 80);
          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 w-full z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* background + overlay (scoped to header) */}
      <div className="site-header__bg" />
      <div className="site-header__overlay" />

      <div className="container relative">
        <div className="site-header__row">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/fullMainImage.png"
              alt="DispATch Performance & Prevention"
              className="logo-img"
              width={600}
              height={200}
              priority
            />
          </a>

          {/* Nav */}
          <nav className="main-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/industries">Industries</a>
            <a href="/book" className="btn-cta">Book Now</a>
          </nav>
        </div>
      </div>
    </header>
  );
}