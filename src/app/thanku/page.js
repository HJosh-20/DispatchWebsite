// app/thank-you/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 15000); // redirect after 15s
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="home-main flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-bold text-teal-700">
          Thank you!
        </h1>
        <p className="text-lg text-gray-700">
          We’ve received your request. Our team will get back to you soon.
        </p>

        <Link
          href="/"
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
        >
          Back to Home
        </Link>

        <p className="text-sm text-gray-500">Redirecting in 15 seconds…</p>
      </div>
    </main>
  );
}