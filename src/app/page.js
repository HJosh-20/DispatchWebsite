import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    // keep this <main> simple; backgrounds live on full-width <section>s
    <main className="home-main">
      {/* ===== HERO (full-bleed image) ===== */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center w-full">
        <Image
          src="/croppedrunners.jpg"
          alt="Team running at sunset"
          fill
          className="object-cover object-[left_center]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:from-black/60" />

        <div className="relative z-10 max-w-xl px-4 sm:px-6 text-white">
          <Reveal>
            <h1 className="text-3xl sm:text-5xl font-bold mb-3">
              On-Site Care. Stronger Teams. Fewer Injuries.
            </h1>
          </Reveal>

          {/* first paragraph */}
          <Reveal className="mt-2">
            <p className="text-base sm:text-lg">
              DispATch Performance &amp; Prevention is a Texas-based, woman-owned business
              bringing mobile, on-site athletic training and injury prevention directly to your team.
            </p>
          </Reveal>

          {/* second paragraph */}
          <Reveal className="mt-4">
            <p className="text-base sm:text-lg">
              We bridge performance training and medical expertise—preventing injuries,
              responding quickly when they happen, and getting your people back on their feet.
            </p>
          </Reveal>

          {/* chips + CTA all in one row, auto-shrink white box */}
          <Reveal className="mt-4">
            <div className="w-fit">
              {/* chips in a compact white box */}
              <div className="flex flex-wrap items-center gap-2 bg-slate-100/90 rounded-md px-3 py-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50/95 border border-slate-200 px-3 py-1 text-xs sm:text-sm text-black shadow-md">
                  <span className="h-2 w-2 rounded-full bg-teal-600" /> We’ll come to you
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50/95 border border-slate-200 px-3 py-1 text-xs sm:text-sm text-black shadow-md">
                  <span className="h-2 w-2 rounded-full bg-teal-600" /> Licensed Athletic Trainers
                </span>
              </div>

              {/* CTA centered under the chips */}
              <Link
                href="/book"
                className="block mx-auto mt-3 rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white shadow
                          hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                Schedule a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHAT WE DO + HOW IT WORKS (side-by-side columns) ===== */}
      <section className="w-full bg-slate-100 py-12">
        {/* wider wrapper; bigger gap; subtle divider on desktop */}
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6 grid lg:grid-cols-[1fr_auto_1fr] lg:gap-12 gap-8">

          {/* LEFT COLUMN — WHAT WE DO */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4 auto-rows-[1fr] items-stretch">
              <Reveal>
                <div className="card lift h-full min-h-[220px]">
                  <h3 className="benefit-title">Injury Prevention</h3>
                  <p className="benefit-text text-gray-800 mt-1">
                    Warmups, functional mechanical prep, and strength plans tailored to your team.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Task-specific warmups</li>
                    <li>Consultations &amp; injury documentation</li>
                    <li>Taping &amp; load coaching</li>
                    <li>On-site strain checks</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="card lift h-full min-h-[220px]">
                  <h3 className="benefit-title">Fast Response</h3>
                  <p className="benefit-text text-gray-800 mt-1">
                    Licensed ATs assess and manage minor injuries quickly.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Triage for sprains &amp; strains</li>
                    <li>Clear work/pause guidance</li>
                    <li>
                      Referrals when needed to a network of local healthcare providers while
                      working within workers comp protocols
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* centered single card under the two */}
              <Reveal className="sm:col-span-2">
                <div className="mx-auto w-full max-w-md">
                  <div className="card lift h-full min-h-[160px]">
                    <h3 className="benefit-title">Quick Recovery Process</h3>
                    <p className="benefit-text text-gray-800 mt-1">
                      Stepwise return-to-duty guidance that protects productivity.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>Progressive work plans</li>
                      <li>Self-care instructions</li>
                      <li>Follow-ups for managers</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* VERTICAL DIVIDER (desktop only) */}
          <div className="hidden lg:block w-px bg-slate-300/60 my-2 rounded-full" />

          {/* RIGHT COLUMN — HOW IT WORKS */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4 auto-rows-[1fr] items-stretch">
              <Reveal>
                <div className="card lift h-full min-h-[220px]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-teal-700 font-bold">1</span>
                    <h3 className="benefit-title m-0">Book an On-Site AT</h3>
                  </div>
                  <p className="text-sm text-gray-800 mt-1">Tell us your schedule and key risks.</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Headcount &amp; shifts</li>
                    <li>Matched AT support</li>
                    <li>Simple onboarding</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="card lift h-full min-h-[220px]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-teal-700 font-bold">2</span>
                    <h3 className="benefit-title m-0">Prevent &amp; Treat</h3>
                  </div>
                  <p className="text-sm text-gray-800 mt-1">Daily presence for prevention and quick care.</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Taping &amp; triage on site</li>
                    <li>Functional mechanical adjustments</li>
                    <li>Short recovery sessions</li>
                  </ul>
                </div>
              </Reveal>

              {/* centered single card under the two */}
              <Reveal className="sm:col-span-2">
                <div className="mx-auto w-full max-w-md">
                  <div className="card lift h-full min-h-[160px]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-700 font-bold">3</span>
                      <h3 className="benefit-title m-0">Keep Moving</h3>
                    </div>
                    <p className="text-sm text-gray-800 mt-1">
                      Fewer injuries and less downtime for your team.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>Trend reports to guide prevention</li>
                      <li>Faster return-to-duty</li>
                      <li>Steadier schedules — reduced PTO and workers comp claims</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE SERVE (left) + KEY FACTS (right) + TESTIMONIAL ===== */}
      <section className="w-full bg-teal-50/70 py-12">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: WHO WE SERVE (cards with teal-600 accents) */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
              </Reveal>

              <div className="space-y-4">
                {[
                  {
                    t: "Film & Production",
                    d: "On-set ATs prevent downtime and keep crews moving.",
                    href: "/industries/film",
                  },
                  {
                    t: "Small Business",
                    d: "On-site care and prevention for active workplaces.",
                    href: "/industries/smallbusiness",
                  },
                  {
                    t: "Event Coverage",
                    d: "Traditional athletic training event coverage provided by ATs and EMTs.",
                    href: "/industries/eventcov",
                  },
                ].map((c) => (
                  <Reveal key={c.t}>
                    <Link
                      href={c.href}
                      className="
                        group block rounded-lg border border-teal-200/80 bg-white/95 backdrop-blur px-4 py-3
                        transition-colors hover:bg-white hover:border-teal-600
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/70
                      "
                    >
                      <div className="flex items-start gap-2">
                        <h3 className="font-semibold text-slate-900">{c.t}</h3>
                        {/* chevron in teal-600 to match CTA */}
                        <svg
                          className="mt-0.5 h-5 w-5 text-teal-600 transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <p className="mt-1 text-sm text-slate-700">{c.d}</p>

                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-teal-700 group-hover:text-teal-800">
                        Learn more
                        <svg className="h-4 w-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10l-3.293-3.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* RIGHT: KEY FACTS — 4 separate cards */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-2xl font-bold mb-4">Key Facts</h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { n: "70%", t: "of workplace injuries are preventable (OSHA)" },
                  { n: "1 in 3", t: "workplace injuries linked to poor movement mechanics and repetitive strain (BLS)" },
                  { n: "$100K+", t: "potential loss for just 1 day of halted filming" },
                  { n: "2–6x", t: "ROI for every $1 invested in workplace safety (OSHA)" },
                ].map((x) => (
                  <Reveal key={x.t}>
                    <div className="card lift text-center">
                      <div className="text-3xl font-bold text-teal-700">{x.n}</div>
                      <p className="text-sm text-gray-800 mt-1">{x.t}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* TESTIMONIALS — centered below */}
          <div className="mt-8 space-y-4">
            <Reveal className="block">
              <blockquote className="card lift text-sm max-w-4xl mx-auto text-center">
                “They kept our crew healthy through a brutal week—zero downtime.”
                <span className="font-semibold"> — Production Manager, Austin</span>
              </blockquote>
            </Reveal>

            <Reveal className="block">
              <blockquote className="card lift text-sm max-w-4xl mx-auto text-center">
                “They were very communicative through the process, and their team really helped my staff pull
                through a hard weekend event.”
                <span className="font-semibold"> — Director of Operations, Round Rock</span>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>
      <div id="cta-sentinel" className="h-1 w-full"></div>
      {/* ===== CTA ===== */}
      <Reveal className="mt-10 mb-12 block">
        <section
          id="bottom-cta"
          className="max-w-3xl mx-auto rounded-xl bg-teal-600 text-white p-6 shadow-lg
                    flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-xl font-semibold">Ready to keep your team healthy and on track?</h3>
            <p className="text-white/90">Schedule a consultation to see how our team can help yours.</p>
          </div>
          <a
            href="/book"
            className="bg-white text-teal-700 font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition"
          >
            Schedule a consultation
          </a>
        </section>
      </Reveal>
    </main>
  );
}