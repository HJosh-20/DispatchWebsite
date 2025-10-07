import Image from "next/image"; 
import { Activity } from "lucide-react"; 
import Reveal from "../components/Reveal";

export const metadata = { title: "Services | DispATch Performance & Prevention" };

export default function ServicesPage() {
  return (
    <main className="home-main">
      <div className="home-container space-y-10">
        <Reveal>
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <Activity className="h-10 w-10 text-teal-600" aria-hidden="true" />
            </div>
            <h1 className="hero-title">Services</h1>
            <p className="text-base text-gray-600">
              Comprehensive onsite care, prevention, and recovery tailored to your needs.
            </p>
          </div>
        </Reveal>

        {/* Short intro keeps it flexible */}
        <Reveal>
          <div className="text-center">
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our services are tailored to your site, schedule, and budget. We adjust scope as your
              needs evolve—whether that’s a production sprint, an ongoing workplace program, or
              single-day event coverage.
            </p>
          </div>
        </Reveal>

        {/* --- IMAGE STRIP --- */}
        <Reveal className="block">
          <section className="grid md:grid-cols-3 gap-4">
            {[
              { src: "/services1.jpg", alt: "Warmups and movement prep on site", pos: "object-[center_30%]" },
              { src: "/onsitecare.png", alt: "On-site rapid care", pos: "object-[center_50%]" },
              { src: "/writing.jpg", alt: "Simple reporting and trend insights", pos: "object-center" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover ${img.pos}`}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  priority={false}
                />
              </div>
            ))}
          </section>
        </Reveal>
        {/* Core service cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              t: "Injury Prevention",
              d: "Warmups, movement prep, and task-specific coaching that reduce injuries before they happen. Includes taping, bracing, and ongoing guidance.",
            },
            {
              t: "On-Site Rapid Care",
              d: "Immediate triage and management of musculoskeletal injuries. Our licensed ATs minimize downtime and keep your people on their feet.",
            },
            {
              t: "Functional Site Assessments",
              d: "Task-focused assessments on the floor or set to identify risk factors and implement practical adjustments that protect staff.",
            },
            {
              t: "Strength & Conditioning",
              d: "Progressive, evidence-based programs that build resilience, enhance performance, and support safe return-to-duty.",
            },
            {
              t: "Quick Referral Network",
              d: "Rapid connections to local physicians and specialists for diagnostics and follow-up, coordinated within workers’ comp protocols.",
            },
            {
              t: "Injury Trend Analysis",
              d: "Data-driven reporting to highlight patterns, target high-value prevention strategies, and demonstrate measurable ROI.",
            },
          ].map((card) => (
            <Reveal key={card.t}>
              <div className="card lift h-full">
                {/* tighter heading+copy spacing */}
                <h3 className="benefit-title mb-1">{card.t}</h3>
                <p className="benefit-text leading-relaxed">{card.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* How it works + side image */}
        <Reveal className="block">
          <section className="grid lg:grid-cols-12 gap-6 items-start">
            {/* LEFT: feature image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow">
                <Image
                  src="/ATsonsite.jpg"
                  alt="On-site ATs delivering prevention and rapid care"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
              </div>
            </div>

            {/* RIGHT: steps */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl font-semibold underlined">How an engagement works</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    n: "1",
                    t: "Consultation",
                    d: "Share your dates, headcount, and risks. We outline a plan and options.",
                  },
                  {
                    n: "2",
                    t: "On-Site Delivery",
                    d: "We show up ready: prevention first, rapid care as needed, clear documentation.",
                  },
                  {
                    n: "3",
                    t: "Review & Adjust",
                    d: "You’ll get simple insights and recommendations. We tune scope as you go.",
                  },
                ].map((s) => (
                  <Reveal key={s.n}>
                    <div className="card lift h-full">
                      <div className="text-teal-700 font-bold">{s.n}</div>
                      <div className="font-semibold">{s.t}</div>
                      <p className="text-sm text-gray-800 mt-1">{s.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Flexibility note + CTA */}
        <Reveal div id="real-cta" className="mt-10 mb-12 block">
          <section
            className="max-w-3xl mx-auto rounded-xl bg-teal-600 text-white p-6 shadow-lg
                      flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-semibold">Ready to keep your team healthy and on track?</h3>
              <p className="text-white/90">Schedule a consultation to see how our team can help yours.</p>
            </div>
            <a
              href="/book"
              className="bg-white text-teal-700 font-semibold px-5 py-3 rounded-lg 
                        hover:bg-white/90 transition"
            >
              Schedule a consultation
            </a>
          </section>
        </Reveal>
      </div>
    </main>
  );
}