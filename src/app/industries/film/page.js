import Image from "next/image";
import Reveal from "../../components/Reveal";

export const metadata = { title: "Film & Production | DispATch" };

export default function FilmPage() {
  return (
    <main className="home-main">
      {/* ===== HERO ===== */}
      <section className="relative h-[48vh] sm:h-[60vh] flex items-end">
        <Image
          src="/filmhero.jpg"
          alt="On-set film crew"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 w-full">
          <div className="max-w-[1600px] mx-auto px-6 pb-6">
            <Reveal>
              <h1 className="text-3xl sm:text-5xl font-bold text-white">
                Keep Your Shoot Rolling
              </h1>
            </Reveal>
            <Reveal className="mt-2">
              <p className="text-white/90 max-w-3xl">
                On-set injury prevention and rapid care for cast and crew. We
                handle warmups, taping, and triage—so your shot list stays on
                schedule.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== PAGE CONTENT ===== */}
      <div className="max-w-[1600px] mx-auto px-6 space-y-16 py-14">
        {/* WHY ATs ON SET */}
        <section className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold underlined">
                Why Athletic Trainers on Set?
              </h2>
              <p className="hero-text leading-relaxed">
                Long days, stunts, and repetitive tasks add up. Our licensed
                ATs prevent problems before they stop production—and manage
                minor issues fast when they happen.
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2">
                <li>Daily warmups for cast &amp; crew</li>
                <li>Taping, bracing, soft-tissue &amp; recovery work</li>
                <li>On-set triage for sprains, strains, and overuse</li>
                <li>
                  <span className="font-medium">Functional safety advisement</span> for
                  stunts, camera, grip &amp; electric
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
              <Image
                src="/filmsection.jpg"
                alt="On-set care"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* ===== INCLUDED (LEFT) + HOW IT WORKS (RIGHT) ===== */}
        <section className="w-full">
          <div className="max-w-[1720px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: WHAT'S INCLUDED — 2 per row */}
            <div className="lg:col-span-8 lg:pr-2">
              <Reveal>
                <h2 className="text-2xl font-semibold underlined mb-4">What’s Included</h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4 auto-rows-[1fr]">
                {[
                  { t: "Daily Presence", d: "Warmups, taping, and quick checks between setups." },
                  { t: "Triage & Management", d: "Minor sprains/strains handled on-site to avoid lost time." },
                  { t: "Recovery Support", d: "Mobility, soft-tissue, and post-day recovery protocols." },
                  { t: "Functional Safety Advisement", d: "Risk reduction and safe movement strategies for stunts and heavy days." },
                  { t: "Documentation & Follow-up", d: "Simple notes and guidance for production leads." },
                  { t: "Trend Reporting", d: "Insights that prevent repeats and protect schedules." },
                  { t: "Weather Advisory Plans", d: "On-site heat & cold safety planning, hydration, and exposure monitoring." },
                  // optional EMT note added per client question
                  { t: "EMTs (Optional)", d: "Available for contract per event/day if needed or requested during contract phase." },
                ].map((c) => (
                  <Reveal key={c.t}>
                    <div className="card lift h-full">
                      <h3 className="font-semibold">{c.t}</h3>
                      <p className="text-sm text-gray-700 mt-1">{c.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* RIGHT: HOW IT WORKS — 2 up + 1 centered */}
            <div className="lg:col-span-4 lg:pl-2">
              <Reveal>
                <h2 className="text-2xl font-semibold underlined mb-4">How It Works</h2>
              </Reveal>

              {/* top row: 2 cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Reveal>
                  <div className="card lift h-full min-h-[160px]">
                    <div className="text-teal-700 font-bold">1</div>
                    <div className="font-semibold">Tell us your dates &amp; stunt profile</div>
                    <p className="text-sm text-gray-700 mt-1">
                      We scope risk, headcount, and pace.
                    </p>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="card lift h-full min-h-[160px]">
                    <div className="text-teal-700 font-bold">2</div>
                    <div className="font-semibold">We dispatch your AT(s)</div>
                    <p className="text-sm text-gray-700 mt-1">
                      On-set presence with prevention + rapid care.
                    </p>
                  </div>
                </Reveal>

                {/* bottom: centered single card */}
                <Reveal className="sm:col-span-2">
                  <div className="mx-auto w-full max-w-md">
                    <div className="card lift h-full min-h-[160px]">
                      <div className="text-teal-700 font-bold">3</div>
                      <div className="font-semibold">Keep rolling</div>
                      <p className="text-sm text-gray-700 mt-1">
                        Fewer stoppages, safer days, better outcomes, and
                        <span className="font-medium"> reduced production costs.</span>
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <Reveal div id="real-cta" data-real-cta className="block">
          <section className="rounded-xl bg-teal-600 text-white p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">
                Ready for a safer, smoother shoot?
              </h3>
              <p className="text-white/90">
                Schedule a consultation to see how our team can help yours.
              </p>
            </div>
            <a
              href="/book"
              className="bg-white text-teal-700 font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition"
            >
              Schedule a consultation
            </a>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
