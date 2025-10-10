import Image from "next/image";
import Reveal from "../../components/Reveal";

export const metadata = { title: "Small Business | DispATch" };

export default function SmallBusinessPage() {
  return (
    <main className="home-main">
      {/* ===== HERO ===== */}
      <section className="relative h-[48vh] sm:h-[60vh] flex items-end">
        <Image
          src="/officestreching.jpg"           
          alt="active workplace streching"
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
                Keep Your Team Moving
              </h1>
            </Reveal>
            <Reveal className="mt-2">
              <p className="text-white/90 max-w-3xl">
                On-site prevention and rapid care that reduces injuries, supports
                productivity, and lowers time away from work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <div className="max-w-[1600px] mx-auto px-6 space-y-16 py-14">
        {/* WHY ATs ON-SITE */}
        <section className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold underlined">Why Athletic Trainers On-Site?</h2>
              <p className="hero-text leading-relaxed">
                Repetitive tasks, tight timelines, and physically demanding roles
                create preventable injuries. Our licensed ATs keep people ready for
                work and resolve issues quickly—so operations keep moving.
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2">
                <li>Daily warmups & micro-break routines</li>
                <li>Functional mechanical adjustments on the floor</li>
                <li>On-site triage for sprains, strains & overuse</li>
                <li>Clear work / pause guidance & documentation</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
              <Image
                src="/ladystreching.jpg"      
                alt="On-site prevention and rapid care in a shop/office"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* ATs vs EMTs */}
        <Reveal className="block">
          <section>
            <h2 className="text-2xl font-semibold underlined mb-4">ATs vs EMTs on Set</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card lift">
                <h3 className="font-semibold">Athletic Trainers (ATs)</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Proactive: warmups, prevention, <span className="font-medium">functional safety advisement</span></li>
                  <li>Manage minor musculoskeletal issues on the spot</li>
                  <li>Keep talent &amp; crew moving safely through long days</li>
                </ul>
              </div>
              <div className="card lift">
                <h3 className="font-semibold">EMTs / Paramedics</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Reactive: respond to emergencies</li>
                  <li>Essential for high-risk shoots—not a replacement for ATs</li>
                  <li>Best together: ATs reduce issues; EMTs cover true emergencies</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>  

        {/* INCLUDED (LEFT) + HOW IT WORKS (RIGHT) */}
        <section className="w-full">
          <div className="max-w-[1720px] mx-auto px-4 grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT — WHAT’S INCLUDED (2-up grid) */}
            <div className="lg:col-span-8 lg:pr-2">
              <Reveal>
                <h2 className="text-2xl font-semibold underlined mb-4">What’s Included</h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4 auto-rows-[1fr]">
                {[
                  { t: "Daily Presence", d: "Warmups, taping, and quick checks between tasks." },
                  { t: "Rapid On-Site Care", d: "Immediate triage, orthopedic evaluation, and guidance." },
                  { t: "Functional Mechanical Adjustments", d: "Task-focused tweaks to reduce strain and repetitive stress." },
                  { t: "Return-to-Duty Support", d: "Clear, safe progressions that protect productivity." },
                  { t: "Quick Referral Network", d: "Fast access to local providers within workers’ comp protocols." },
                  { t: "Trend & Risk Analysis", d: "Data tracking plus EAP/safety protocol strategies." },
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

            {/* RIGHT — HOW IT WORKS (2 up + 1 centered) */}
            <div className="lg:col-span-4 lg:pl-2">
              <Reveal>
                <h2 className="text-2xl font-semibold underlined mb-4">How It Works</h2>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4">
                <Reveal>
                  <div className="card lift h-full min-h-[160px]">
                    <div className="text-teal-700 font-bold">1</div>
                    <div className="font-semibold">Scope &amp; Schedule</div>
                    <p className="text-sm text-gray-700 mt-1">
                      We learn your tasks, headcount, and key risks.
                    </p>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="card lift h-full min-h-[160px]">
                    <div className="text-teal-700 font-bold">2</div>
                    <div className="font-semibold">Deploy On-Site ATs</div>
                    <p className="text-sm text-gray-700 mt-1">
                      Prevention, rapid care, and documentation on the floor.
                    </p>
                  </div>
                </Reveal>

                <Reveal className="sm:col-span-2">
                  <div className="mx-auto w-full max-w-md">
                    <div className="card lift h-full min-h-[160px]">
                      <div className="text-teal-700 font-bold">3</div>
                      <div className="font-semibold">Keep Productivity High</div>
                      <p className="text-sm text-gray-700 mt-1">
                        Fewer injuries, reduced PTO &amp; workers’ comp claims, steadier schedules.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <Reveal div id="cta-sentinel" className="block">
          <section className="rounded-xl bg-teal-600 text-white p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Ready to support your workforce?</h3>
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