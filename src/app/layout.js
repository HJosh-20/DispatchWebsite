import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "./components/SiteHeader";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "DispATch Performance and Prevention",
  description: "On-Site Care. Stronger Teams. Fewer Injuries.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* make page fill height so footer stays at bottom */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {/* ===== HIDE-ON-SCROLL HEADER ===== */}
        <SiteHeader />

        {/* ===== PAGE CONTENT ===== */}
        <main className="flex-1 pt-28">{children}</main>

        {/* ===== (optional) mobile sticky CTA site-wide ===== */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden">
          <a href="/book" className="px-5 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg">Book Now</a>
        </div>

        {/* ===== FOOTER (global) ===== */}
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