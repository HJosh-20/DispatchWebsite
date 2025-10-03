import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "DispATch Performance and Prevention",
  description: "On-Site Care. Stronger Teams. Fewer Injuries.",
  /**
   * Helps the mobile browser choose a stable UI color for the url bar.
   * Also tells the browser we intend to use a light color scheme.
   */
  themeColor: "#0f766e",
  other: { "color-scheme": "light" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* keep the site in light mode and stable colors */}
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen flex flex-col",
          "bg-white text-slate-900",
        ].join(" ")}
      >
        {/* sticky header; higher z-index than hero overlay */}
        <SiteHeader />

        {/* add top padding only if your header overlaps content;  */}
        {/* header is 56px (h-14).  pt-16 = 64px is a safe cushion on small screens. */}
        <main className="flex-1 pt-16 md:pt-16">{children}</main>

        {/* optional mobile CTA */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden">
          <a
            href="/book"
            className="px-5 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:bg-teal-700"
          >
            Book Now
          </a>
        </div>

        {/* footer */}
        <footer className="site-footer">
          <div className="site-footer__inner">
            As a woman-owned small business, we bring flexibility, evidence-based care, and a
            collaborative approach that bridges performance training and medical expertise.
            <br />
            <p style={{ textAlign: "center" }}>
              © {new Date().getFullYear()} DispATch Performance & Prevention
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}