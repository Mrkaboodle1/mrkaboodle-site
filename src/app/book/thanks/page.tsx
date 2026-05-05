import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks for your enquiry",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-32 text-center">
      <div className="inline-grid place-items-center w-20 h-20 rounded-full bg-[#fff100] text-[#3950a1] text-4xl">
        ✓
      </div>
      <h1 className="mt-6 font-display text-3xl sm:text-4xl text-[#3950a1]">
        Got it &mdash; thanks for reaching out.
      </h1>
      <p className="mt-4 text-[#343434] text-lg">
        We have your enquiry. Rhett will reply personally, usually within the same day. If
        your event is sooner than 48 hours, give us a quick text or call to make sure we
        have it on the radar.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center text-[#3950a1] font-bold uppercase tracking-wider hover:text-[#ac1f23]"
      >
        &larr; Back to home
      </Link>
    </div>
  );
}
