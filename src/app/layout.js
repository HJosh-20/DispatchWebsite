import dynamic from "next/dynamic";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";

// IMPORTANT: client-only load for the observer code
const StickyCTA = dynamic(() => import("./components/StickyCTA"), { ssr: false });

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "DispATch Performance and Prevention",
  description: "On-Site Care. Stronger Teams. Fewer Injuries.",
  // remove themeColor from metadata
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // put themeColor here instead
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f172a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

        {/* Page content */}
        <main className="flex-1 pt-16 md:pt-16">{children}</main>

        {/* sentinel the StickyCTA watches; keep this id exactly */}
        <div id="real-cta" className="h-1 w-full" />

        {/* Mobile-only floating CTA (auto-hides near #real-cta/footer) */}
        <StickyCTA />

        {/* Footer */}
        <footer className="site-footer">
          <div className="site-footer__inner">
            As a woman-owned small business, we bring flexibility, evidence-based care,
            and a collaborative approach that bridges performance training and medical expertise.
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