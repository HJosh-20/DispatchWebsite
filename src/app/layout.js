import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import StickyCTA from "./components/StickyCTA"; // <- add this

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "DispATch Performance and Prevention",
  description: "On-Site Care. Stronger Teams. Fewer Injuries.",
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
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen flex flex-col",
          "bg-white text-slate-900",
        ].join(" ")}
      >
        <SiteHeader />

        {/* Header height ~56px → add safe top padding for small screens */}
        <main className="flex-1 pt-16 md:pt-16">{children}</main>

        {/* Sticky CTA (mobile); hides when footer is in view */}
        <StickyCTA />

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