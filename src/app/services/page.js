export const metadata = { title: "Services | DispATch Performance & Prevention" };

export default function ServicesPage() {
  return (
    <main className="home-main">
      <div className="home-container space-y-8">
        <h1 className="hero-title">Services</h1>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="benefit-card">
            <h3 className="benefit-title">Injury Prevention</h3>
            <p className="benefit-text">
              Warmups, movement prep, taping/bracing, and coaching tailored to job tasks.
            </p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">On-Site Rapid Care</h3>
            <p className="benefit-text">
              Assessment and management of minor to moderate musculoskeletal issues to
              minimize downtime.
            </p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">Ergonomics</h3>
            <p className="benefit-text">
              Workstation and on-set adjustments that reduce strain and improve efficiency.
            </p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">Strength & Conditioning</h3>
            <p className="benefit-text">
              Progressive programs that build resilience and safe return-to-duty.
            </p>
          </div>
          <div className="benefit-card sm:col-span-2">
            <h3 className="benefit-title">Injury Trend Analysis</h3>
            <p className="benefit-text">
              We track patterns to target high-value prevention opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}