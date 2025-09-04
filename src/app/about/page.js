export const metadata = { title: "About | DispATch Performance & Prevention" };

export default function AboutPage() {
  return (
    <main className="home-main">
      <div className="home-container space-y-6">
        <h1 className="hero-title">About DispATch</h1>
        <p className="hero-text">
          DispATch Performance & Prevention is a mobile, on-site injury prevention and
          performance care company based in Austin, Texas. We specialize in supporting
          small businesses, industrial worksites, and film productions by keeping teams
          healthy, safe, and performing at their best.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Injury prevention programs designed around workplace demands</li>
            <li>On-site rapid care and triage for musculoskeletal issues</li>
            <li>Ergonomic assessments to reduce strain and improve efficiency</li>
            <li>Strength and conditioning to enhance readiness and resilience</li>
            <li>Data-driven injury analysis to track trends and guide prevention</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="hero-text">
            Our interdisciplinary team—led by certified athletic trainers and supported by
            physical therapists, personal trainers, and physicians—delivers tailored,
            evidence-based care on site.
          </p>
        </section>
      </div>
    </main>
  );
}