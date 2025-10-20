import Image from "next/image";
import Reveal from "../components/Reveal";

export const metadata = { title: "About | DispATch Performance & Prevention" };

export default function AboutPage() {
  return (
    <main className="home-main">
      {/* ===== ABOUT HERO ===== */}
      <section className="relative h-[55vh] sm:h-[65vh] flex items-end">
        <Image
          src="/aboutMainIma.jpg"
          alt="Athletic trainer performing a shoulder assessment on-site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 w-full">
          <div className="home-container pb-6">
            <Reveal>
              <h1 className="text-3xl sm:text-5xl font-bold text-white">About DispATch</h1>
            </Reveal>
            <Reveal className="mt-2">
              <p className="text-white/90 max-w-3xl">
                Mobile, on-site injury prevention and performance care for small businesses and film productions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MAIN ===== */}
      <div className="home-container space-y-16 pb-16 mt-10">
        {/* Intro + Mission */}
        <section className="grid md:grid-cols-[3fr_2fr] gap-16 items-start">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold underlined">Who We Are</h2>
              <p className="hero-text leading-relaxed">
                DispATch Performance &amp; Prevention is a mobile, on-site injury prevention and performance
                care company based in Austin, Texas. We specialize in supporting small businesses and film
                productions by keeping teams healthy, safe, and performing at their best.
              </p>
              <div className="section-alt">
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Keep your team moving, healthy, and safe. We bring prevention and rapid care directly to your site—
                  reducing downtime, protecting budgets, and improving morale.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
              <Image
                src="/wrappinghand.jpg"
                alt="Wrapping a hand with a bandage"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* What We Do (cards) */}
        <Reveal className="block">
          <section className="space-y-6 h3-fixes ">
            <h2 className="text-2xl font-semibold underlined">What We Do</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Injury Prevention", d: "Warmups and strength plans designed around your work." },
                { t: "Rapid On-Site Care (Orthopedic)", d: "Immediate triage, evaluation, and management for orthopedic and other musculoskeletal injury." },
                { t: "Functional Mechanical Assessments", d: "Task-focused assessments and adjustments that reduce strain and prevent repeat injuries." },
                { t: "Strength & Conditioning", d: "Readiness and resilience programs tailored to your team." },
                { t: "Return-to-Duty Support", d: "Clear, safe progressions that protect your staff and productivity." },
                { t: "Trend & Risk Analysis", d: "Data-driven insights, plus creation of Emergency Action Plans and safety protocol strategies." },
              ].map((c) => (
                <Reveal key={c.t}>
                  <div className="card lift h-full">
                    <h3 className="font-semibold">{c.t}</h3>
                    <p className="text-sm text-gray-600 mt-1">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Film & Small Business */}
        <section className="space-y-16">
          {/* Film */}
          <div className="grid md:grid-cols-[2fr_3fr] gap-16 items-start">
            <Reveal>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
                <Image src="/filmpic.jpg" alt="Film production site" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal>
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-2xl font-semibold underlined">Film &amp; Production</h2>
                <p className="hero-text leading-relaxed">
                  Don’t let a rolled ankle kill the shot list. Our certified ATs are dispatched on-site to keep
                  your production on track—through long days, stunt demands, and tight schedules.
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2 leading-relaxed">
                  <li>Daily on-set presence for prevention and rapid response</li>
                  <li>Warmups, taping, bracing, and recovery work</li>
                  <li><span className="font-medium">Functional safety advisement</span> for stunts and repetitive tasks</li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Small Business */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-start">
            <Reveal>
              <div className="order-2 md:order-1 space-y-4 max-w-2xl">
                <h2 className="text-2xl font-semibold underlined">Small Business</h2>
                <p className="hero-text leading-relaxed">
                  On-site prevention and care that reduces injuries, supports active teams, and keeps productivity high.
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2 leading-relaxed">
                  <li>Job-specific programs that fit your workflow</li>
                  <li>On-site triage to avoid unnecessary ER visits</li>
                  <li>Return-to-duty guidance aligned with your operations</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="order-1 md:order-2 relative aspect-[4/3] rounded-xl overflow-hidden shadow">
                <Image src="/stretchingman.jpg" alt="Active workplace prevention and care" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Credibility Stats */}
        <section className="grid sm:grid-cols-3 gap-8">
          {[
            { n: "15+ Years", t: "Leadership experience in injury prevention" },
            { n: "1,000+", t: "Employees and crew members supported" },
            { n: "3 Focus Areas", t: "Film • Small Business • Event Coverage" },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="card lift text-center py-6">
                <div className="text-3xl font-bold text-teal-700">{x.n}</div>
                <p className="text-sm text-gray-600">{x.t}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Founder */}
        <section className="grid md:grid-cols-[2fr_3fr] gap-20 items-start pb-12">
          <Reveal>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/founderpicutre.png"
                alt="Kristin Jarnagin, Founder"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-8 max-w-none">
              <h2 className="text-3xl font-semibold underlined">Meet Our Founder</h2>
              <p className="hero-text leading-relaxed">
                DispATch was founded by <span className="font-semibold">Kristin Jarnagin, MA, LAT, ATC, PES</span>,
                a healthcare leader and certified athletic trainer with over 15 years of experience in
                clinical care, program management, and injury prevention. Her career has spanned small business,
                healthcare, and film—helping thousands of employees and crews perform at their best.
              </p>

              <div className="card lift">
                <h3 className="font-semibold mb-2 h3-fixes">Team Approach to Care</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Our interdisciplinary model includes an oversight physician, athletic trainers, physical therapists,
                  strength &amp; conditioning experts, and EMTs—working together to prevent injuries and resolve issues quickly.
                </p>
              </div>

              <blockquote className="card text-base max-w-xl italic border-l-4 border-teal-600 pl-4 testimonial-block">
                “We bridge performance and medical expertise to keep people moving. Prevention first, care always.”
              </blockquote>
            </div>
          </Reveal>
        </section>
        <div id="real-cta" data-real-cta className="h-1 w-full"></div>
        {/* Bottom CTA */}
        <Reveal className="block">
          <section className="rounded-xl bg-teal-600 text-white p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
      </div>
    </main>
  );
}