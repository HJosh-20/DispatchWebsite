import dynamic from "next/dynamic";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";

const StickyCTA = dynamic(() => import("./components/StickyCTA"), { ssr: false });

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "DispATch Performance and Prevention",
  description: "On-Site Care. Stronger Teams. Fewer Injuries.",
  // themeColor must live in `viewport`, not here
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f172a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen flex flex-col bg-white text-slate-900",
        ].join(" ")}
      >
        <SiteHeader />

        <main className="flex-1 pt-16 md:pt-16">{children}</main>

        {/* this id is what StickyCTA watches */}
        <div id="real-cta" className="h-1 w-full" />

        <StickyCTA />

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
