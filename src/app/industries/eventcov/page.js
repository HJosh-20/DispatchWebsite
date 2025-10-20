import Image from "next/image";
import Reveal from "../../components/Reveal";

export const metadata = { title: "Event Medical Coverage | DispATch" };

export default function EventCoveragePage() {
  return (
    <main className="home-main">
      {/* ===== HERO ===== */}
      <section className="relative h-[48vh] sm:h-[60vh] flex items-end">
        <Image
          src="/soccerstadium.jpg"  
          alt="Soccer game in progess"
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
                Turn-Key Event Medical Coverage
              </h1>
            </Reveal>
            <Reveal className="mt-2">
              <p className="text-white/90 max-w-3xl">
                Athletic Trainers provide coordinated prevention, on-site care, and return-to-play guidance
                so athletes can compete safely and organizers can focus on the event.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <div className="max-w-[1600px] mx-auto px-6 space-y-16 py-14">
        {/* SINGLE WIDE BOX — no side image */}
        <Reveal className="block">
          <section className="max-w-4xl mx-auto">
            <div className="card lift px-6 py-6 text-center">
              <h2 className="text-2xl font-semibold">Why DispATch for Events?</h2>
              <p className="hero-text leading-relaxed mt-2">
                Team-based coverage built around licensed Athletic Trainers. We plan with you,
                execute clean emergency action plans, and keep play moving safely.
              </p>
              <p className="text-sm text-gray-700 mt-3">
                <strong>Vetted, licensed AT staff</strong> with sport-specific experience.
              </p>
            </div>
          </section>
        </Reveal>

        {/* INCLUDED + HOW IT WORKS */}
        <section className="w-full">
          <div className="max-w-[1720px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT — WHAT’S INCLUDED */}
            <div className="lg:col-span-8 lg:pr-2">
              <Reveal>
                <h2 className="text-2xl font-semibold underlined mb-4">What’s Included</h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4 auto-rows-[1fr]">
                {[
                  { t: "Pre-Event Planning", d: "Medical needs analysis, staffing plan, supplies & layout." },
                  { t: "Emergency Action Plan", d: "EAP creation with radio/comms and EMS coordination." },
                  // remove EMTs as a headline feature
                  { t: "On-Site Athletic Trainers", d: "Taping/bracing, triage, return-to-play decisions, and documentation." },
                  { t: "Weather Advisory Plans", d: "Heat/cold risk mitigation, hydration & recovery protocols." },
                  { t: "Documentation & Reporting", d: "Incident logs, injury documentation, and post-event summary." },
                  { t: "Referral Network", d: "Quick referral to local clinics and specialists as needed." },
                  // add the requested EMT bullet
                  { t: "EMTs (Optional)", d: "Available for contract per event if needed or requested during contract phase." },
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

            {/* RIGHT — HOW IT WORKS (kept near bottom section) */}
            <div className="lg:col-span-4 lg:pl-2">
              <Reveal>
                <h2 className="text-2xl font-semibold underlined mb-4">How It Works</h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                <Reveal>
                  <div className="card lift h-full min-h-[160px]">
                    <div className="text-teal-700 font-bold">1</div>
                    <div className="font-semibold">Scope Your Event</div>
                    <p className="text-sm text-gray-700 mt-1">
                      Dates, venues, risks, and required staffing.
                    </p>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="card lift h-full min-h-[160px]">
                    <div className="text-teal-700 font-bold">2</div>
                    <div className="font-semibold">Staff &amp; Equip</div>
                    <p className="text-sm text-gray-700 mt-1">
                      We deploy ATs, supplies, radios, and EAP.
                    </p>
                  </div>
                </Reveal>

                <Reveal className="sm:col-span-2">
                  <div className="mx-auto w-full max-w-md">
                    <div className="card lift h-full min-h-[160px]">
                      <div className="text-teal-700 font-bold">3</div>
                      <div className="font-semibold">Run &amp; Review</div>
                      <p className="text-sm text-gray-700 mt-1">
                        Safe coverage during play + post-event debrief and reporting.
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
              <h3 className="text-xl font-semibold">Need dependable event coverage?</h3>
              <p className="text-white/90">Schedule a consultation to see how our team can help yours.</p>
            </div>
            <a href="/book" className="bg-white text-teal-700 font-semibold px-5 py-3 rounded-lg hover:bg-white/90 transition">
              Schedule a consultation
            </a>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
