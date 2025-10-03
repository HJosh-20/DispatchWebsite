"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  // hide-on-scroll
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  // dropdown state
  const [openIndustries, setOpenIndustries] = useState(false);
  const closeTimer = useRef(null); // JS-safe ref

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

  // dropdown helpers
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

  return (
    <header
      className={`site-header fixed top-0 w-full z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* bg + overlay */}
      <div className="site-header__bg" />
      <div className="site-header__overlay pointer-events-none" />

      <div className="container relative">
        <div className="site-header__row">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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

          {/* Nav */}
          <nav className="main-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>

            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={openNow}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openIndustries}
                onClick={() => setOpenIndustries((v) => !v)} // mobile tap
                onFocus={openNow}
                onBlur={scheduleClose}
                className="inline-flex items-center gap-1 text-lg font-semibold tracking-wide text-white hover:text-teal-300 transition-colors"
              >
                Industries
                <svg
                  className={`h-4 w-4 transition-transform ${
                    openIndustries ? "rotate-180" : ""
                  }`}
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

              {/* Menu panel */}
              <div
                role="menu"
                aria-label="Industries"
                className={`absolute right-0 mt-2 w-60 rounded-xl border border-slate-200 
                            bg-white/95 backdrop-blur text-slate-900 shadow-lg ring-1 ring-black/5 z-[60]
                            transition-all duration-150 origin-top-right
                            ${
                              openIndustries
                                ? "opacity-100 scale-100 pointer-events-auto"
                                : "opacity-0 scale-95 pointer-events-none"
                            }`}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                <div className="py-1" onClick={() => setOpenIndustries(false)}>
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
                              hover:text-teal-600 hover:bg-teal-50 rounded-b-xl transition-colors"
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

            <Link href="/book" className="btn-cta">
              Schedule a Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
