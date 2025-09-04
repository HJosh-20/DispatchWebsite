import Image from "next/image";
import Reveal from "../components/Reveal";

export const metadata = { title: "Industries | DispATch Performance & Prevention" };

export default function IndustriesPage() {
  return (
    <main className="home-main">
      <div className="home-container space-y-10">
        <Reveal>
          <h1 className="hero-title">Industries We Serve</h1>
        </Reveal>
        
        {/* Film & Production */}
        <Reveal>
          <section id="film" className="space-y-3">
            <h2 className="text-2xl font-semibold">Film &amp; Production</h2>
            <p className="hero-text">
              Don’t let a rolled ankle kill the shot list. Our certified ATs are dispatched on site to keep your production on track.
            </p>
            {/* AT vs EMT comparison table */}
            <div className="overflow-x-auto mt-4">
              <table className="min-w-[700px] w-full border rounded-lg text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left p-3 border">Feature / Role</th>
                    <th className="text-left p-3 border">Athletic Trainer (AT)</th>
                    <th className="text-left p-3 border">Emergency Medical Technician (EMT)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Primary Focus","Injury prevention, assessment, treatment, rehabilitation","Emergency response, life-saving interventions, transport"],
                    ["Scope of Practice","MSK injuries, overuse, sprains/strains, concussion mgmt, rehab, performance","Trauma stabilization, CPR, airway, bleeding control, transport"],
                    ["Training / Credentials","Master’s + BOC; deep anatomy/physiology","Months; EMT-B/I protocols"],
                    ["Typical On-Set Role","Daily presence, ongoing injury mgmt, prevention, ergonomics/stunt advising","On-call/on-site for high-risk stunts; emergencies only"],
                    ["Preventive Care","✅ Warmups, taping, bracing, rehab exercises","❌ Reactive only"],
                    ["Acute Injury Care","✅ Minor/moderate injuries; stabilize until further care","✅ Life-threatening emergencies"],
                    ["Rehab / Recovery","✅ Designs & supervises return-to-work programs","❌ Not typical"],
                    ["Liability/Insurance Fit","Reduces downtime & claims; ongoing coverage","Often for compliance/high-risk scenes"],
                    ["Best Use Case on Set","Long shoots, high physical demand, wellness maintenance","High-risk stunts, severe emergencies"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="p-3 border font-medium">{row[0]}</td>
                      <td className="p-3 border">{row[1]}</td>
                      <td className="p-3 border">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a href="/book" className="hero-cta mt-4 inline-block">Book an On-Set AT</a>
            {/* your image */}
            <div className="rounded-lg border overflow-hidden">
              <Image
                src="/forFilm.png"
                alt="On-set athletic training for film productions"
                width={1200}
                height={750}
                className="w-full h-auto"
              />
            </div>
          </section>
        </Reveal>

        {/* Small Business */}
        <Reveal>
          <section id="small-business" className="space-y-3">
            <h2 className="text-2xl font-semibold">Small Businesses</h2>
            <p className="hero-text">
              We dispatch licensed athletic trainers to your workplace to prevent injuries, respond to issues, and keep your team moving.
            </p>

            <div className="rounded-lg border overflow-hidden">
              <Image
                src="/forSmallBus.png"
                alt="On-site injury prevention for small businesses"
                width={1200}
                height={750}
                className="w-full h-auto"
              />
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}