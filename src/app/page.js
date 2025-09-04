import Image from "next/image";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="home-main">
      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center w-full">
        {/* Background image */}
        <Image
          src="/croppedrunners.jpg"            // put this in /public/
          alt="Team running at sunset"
          fill
          className="object-cover object-[left_center]"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:from-black/60" />

        {/* Hero text */}
        <div className="relative z-10 max-w-xl px-4 sm:px-6 text-white">
          <Reveal>
            <h1 className="text-3xl sm:text-5xl font-bold mb-3">
              On-Site Care. Stronger Teams. Fewer Injuries.
            </h1>
          </Reveal>

          <Reveal className="mt-2">
            <p className="text-base sm:text-lg mb-2">
              DispATch Performance &amp; Prevention is a Texas-based, woman-owned business
              bringing mobile, on-site athletic training and injury prevention directly to your team.
            </p>
          </Reveal>

          <Reveal className="mt-2">
            <p className="text-base sm:text-lg mb-4">
              We bridge performance training and medical expertise—preventing injuries,
              responding quickly when they happen, and getting your people back on their feet.
            </p>
          </Reveal>

          {/* highlight chips + CTA */}
          <Reveal className="mt-4">
            <div className="flex flex-wrap gap-2 sm:gap-3 bg-white/80 rounded-md p-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs sm:text-sm text-black shadow-md">
                <span className="h-2 w-2 rounded-full bg-teal-600" /> We’ll come to you
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs sm:text-sm text-black shadow-md">
                <span className="h-2 w-2 rounded-full bg-teal-600" /> Licensed Athletic Trainers
              </span>
              <a href="/book" className="hero-cta text-sm sm:text-base">Book Now</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== MAIN CONTENT (containered) ===== */}
      <div className="home-container mt-8 pb-10">
        <h2 className="text-2xl font-bold mb-4">What We Do</h2>

        <section className="benefits-section">
          {[
            { t: "Injury Prevention", d: "Warmups, ergonomics, and strength plans tailored to your team." },
            { t: "Fast Response", d: "On-site Licensed Athletic Trainers assess and manage minor injuries quickly." },
            { t: "Quick Recovery Process", d: "Progressions and return-to-duty guidance that protect productivity." },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="card lift">
                <h3 className="benefit-title">{b.t}</h3>
                <p className="benefit-text">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Who We Serve */}
        <Reveal className="mt-10 block">
          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: "Film & Production", d: "On-set ATs prevent downtime and keep crews moving.", href: "/industries#film" },
                { t: "Small Business", d: "On-site care and prevention for active workplaces.", href: "/industries#small-business" },
              ].map((c) => (
                <Reveal key={c.t}>
                  <a href={c.href} className="card lift card-link block">
                    <h3 className="font-semibold">{c.t}</h3>
                    <p className="text-sm text-gray-600 mt-1">{c.d}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* How It Works */}
        <Reveal className="mt-10 block">
          <section>
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { n: "1", t: "Book an On-Site AT", d: "Tell us your dates, tasks, and risks." },
                { n: "2", t: "Prevent & Treat", d: "Warmups, ergonomics, taping, and rapid care on site." },
                { n: "3", t: "Keep Moving", d: "Fewer injuries and less downtime for your team." },
              ].map((s) => (
                <Reveal key={s.n}>
                  <div className="card lift">
                    <div className="text-teal-700 font-bold text-lg">{s.n}</div>
                    <div className="font-semibold">{s.t}</div>
                    <p className="text-sm text-gray-600 mt-1">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Trusty stats (optional but makes the page feel “complete”) */}
        <Reveal className="mt-10 block">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "70%", t: "of workplace injuries are preventable (OSHA)" },
              { n: "$100K+", t: "potential loss for just 1 day of halted filming" },
              { n: "1 in 3", t: "workplace injuries caused by poor ergonomics (BLS)" },
              { n: "2–6x", t: "ROI for every $1 invested in workplace safety (OSHA)" },
            ].map((x) => (
              <div key={x.t} className="card lift text-center">
                <div className="text-3xl font-bold text-teal-700">{x.n}</div>
                <p className="text-sm text-gray-600">{x.t}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonial */}
        <Reveal className="mt-6 block">
          <blockquote className="card lift text-sm">
            “They kept our crew healthy through a brutal week—zero downtime.”
            <span className="font-semibold"> — Production Manager, Austin</span>
          </blockquote>
        </Reveal>

        {/* Bottom CTA (not glued to footer thanks to pb-10 on container + mb-12 here) */}
        <Reveal className="mt-10 mb-12 block">
          <section className="rounded-xl bg-teal-600 text-white p-6 shadow-lg
                              flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Ready to keep your team healthy and on track?</h3>
              <p className="text-white/90">Book a licensed Athletic Trainer for your site.</p>
            </div>
            <a
              href="/book"
              className="bg-white text-teal-700 font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition"
            >
              Book Now
            </a>
          </section>
        </Reveal>
      </div>
    </main>
  );
}