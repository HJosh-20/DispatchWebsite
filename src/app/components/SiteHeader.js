"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  // ===== hide-on-scroll =====
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
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

  // ===== desktop "Industries" dropdown =====
  const [openIndustries, setOpenIndustries] = useState(false);
  const closeTimer = useRef(null);
  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndustries(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndustries(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // ===== mobile menu (hamburger) =====
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const closeMobileAll = () => {
    setMobileOpen(false);
    setMobileIndustriesOpen(false);
    setOpenIndustries(false);
  };

  return (
    <header
      className={`site-header fixed top-0 w-full z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* bg + overlay (your existing styles) */}
      <div className="site-header__bg" />
      <div className="site-header__overlay pointer-events-none" />

      <div className="container relative">
        <div className="site-header__row">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileAll}>
            <span className="logo-chip">
              <Image
                src="/fullMainImage.png"
                alt="DispATch Performance & Prevention"
                className="logo-img"
                width={140}
                height={45}
                priority
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="main-nav hidden md:flex items-center gap-6">
            <Link href="/" onClick={closeMobileAll}>Home</Link>
            <Link href="/about" onClick={closeMobileAll}>About</Link>
            <Link href="/services" onClick={closeMobileAll}>Services</Link>

            {/* Industries dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={openNow}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openIndustries}
                onClick={() => setOpenIndustries(v => !v)} // click works too
                onFocus={openNow}
                onBlur={scheduleClose}
                className="inline-flex items-center gap-1 text-lg font-semibold tracking-wide text-white hover:text-teal-300 transition-colors"
              >
                Industries
                <svg
                  className={`h-4 w-4 transition-transform ${openIndustries ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Desktop menu panel */}
              <div
                role="menu"
                aria-label="Industries"
                className={`absolute right-0 mt-2 w-60 rounded-xl border border-slate-200 
                            bg-white/95 backdrop-blur text-slate-900 shadow-lg ring-1 ring-black/5 z-[60]
                            transition-all duration-150 origin-top-right
                            ${openIndustries ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                <div className="py-1" onClick={closeMobileAll}>
                  <Link
                    href="/industries/film"
                    role="menuitem"
                    className="block px-4 py-3 text-[0.95rem] font-semibold text-slate-900 
                               hover:text-teal-600 hover:bg-teal-50 rounded-t-xl transition-colors"
                  >
                    Film &amp; Production
                  </Link>
                  <Link
                    href="/industries/smallbusiness"
                    role="menuitem"
                    className="block px-4 py-3 text-[0.95rem] font-semibold text-slate-900 
                               hover:text-teal-600 hover:bg-teal-50 transition-colors"
                  >
                    Small Business
                  </Link>
                  <Link
                    href="/industries/eventcov"
                    role="menuitem"
                    className="block px-4 py-3 text-[0.95rem] font-semibold text-slate-900 
                               hover:text-teal-600 hover:bg-teal-50 rounded-b-xl transition-colors"
                  >
                    Event Coverage
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/book" className="btn-cta" onClick={closeMobileAll}>
              Schedule a Consultation
            </Link>
          </nav>

          {/* Mobile hamburger (visible < md) */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer (slides under header). Uses your brand style (white card on tinted bg). */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur shadow-lg">
          <nav className="px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={closeMobileAll}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileAll}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={closeMobileAll}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-100"
            >
              Services
            </Link>

            {/* Mobile: Industries collapsible */}
            <button
              type="button"
              aria-expanded={mobileIndustriesOpen}
              onClick={() => setMobileIndustriesOpen(v => !v)}
              className="w-full text-left rounded-md px-3 py-2 text-base font-semibold text-slate-900 hover:bg-slate-100 inline-flex items-center justify-between"
            >
              <span>Industries</span>
              <svg
                className={`h-5 w-5 transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {mobileIndustriesOpen && (
              <div className="ml-2 mb-2 space-y-1">
                <Link
                  href="/industries/film"
                  onClick={closeMobileAll}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  Film &amp; Production
                </Link>
                <Link
                  href="/industries/smallbusiness"
                  onClick={closeMobileAll}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  Small Business
                </Link>
                <Link
                  href="/industries/eventcov"
                  onClick={closeMobileAll}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  Event Coverage
                </Link>
              </div>
            )}

            <Link
              href="/book"
              onClick={closeMobileAll}
              className="mt-2 block rounded-lg bg-teal-600 text-white px-3 py-2 text-base font-semibold text-center hover:bg-teal-700"
            >
              Schedule a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
