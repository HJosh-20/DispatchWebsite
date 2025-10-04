import Reveal from "../components/Reveal";

export const metadata = { title: "Schedule a Consultation | DispATch" };

export default function BookPage() {
  return (
    <main className="home-main">
      <section className="w-full bg-teal-50/70 border-b border-teal-100">
        <div className="home-container py-10">
          <Reveal>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">
              Schedule a consultation
            </h1>
          </Reveal>
          <Reveal className="mt-2">
            <p className="text-slate-700 max-w-2xl">
              Tell us a bit about your team and dates. We’ll get back to you
              quickly with availability and next steps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Form ===== */}
      <section className="w-full">
        <div className="home-container py-10">
          <Reveal>
            <form
              action="https://formsubmit.co/b40568f55a69780c12844c18263dba50" 
              method="POST"
              className="bg-white/95 rounded-xl shadow-lg p-6 sm:p-8"
            >
              {/* Anti-spam / FormSubmit options */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New consultation request — DispATch" />

              {/* 🔗 Redirect after success */}
              <input type="hidden" name="_next" value="http://localhost:3000/thanku" />

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    maxLength={80}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2
                               text-slate-900 placeholder-slate-500 shadow-sm
                               focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                    maxLength={120}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2
                               text-slate-900 placeholder-slate-500 shadow-sm
                               focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    pattern="^[0-9+()\\-.\\s]{7,20}$"
                    title="Use digits and standard phone characters only."
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2
                               text-slate-900 placeholder-slate-500 shadow-sm
                               focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-700">
                    Location (city, state)
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Austin, TX"
                    autoComplete="address-level2"
                    required
                    maxLength={80}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2
                               text-slate-900 placeholder-slate-500 shadow-sm
                               focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                {/* Type of service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700">
                    Type of service
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="Small Business"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2
                               text-slate-900 shadow-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
                  >
                    <option>Small Business</option>
                    <option>Production</option>
                    <option>Event</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700">
                    Date needed
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2
                               text-slate-900 shadow-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message / summary
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your coverage needs..."
                  maxLength={2000}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2
                             text-slate-900 placeholder-slate-500 shadow-sm
                             focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Consent */}
              <div className="mt-4">
                <label className="inline-flex items-start gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600"
                  />
                  I agree to be contacted about this request. We won’t share your information.
                </label>
              </div>

              {/* Submit */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white shadow
                             hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Submit request
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}