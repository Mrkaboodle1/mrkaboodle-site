import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mr Kaboodle Entertainment handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm font-bold uppercase tracking-wider text-[#3950a1]">
        Privacy
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl text-[#3950a1]">
        Privacy Policy
      </h1>

      <div className="mt-8 space-y-6 text-[#343434] text-lg leading-relaxed">
        <p>
          This page explains how {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;)
          collects, uses, and protects information you give us when you book or enquire
          about our services.
        </p>

        <h2 className="font-display text-2xl text-[#3950a1] mt-8">What we collect</h2>
        <p>
          When you fill in our booking form we collect your name, email, phone number,
          event date, event type, and any details you choose to provide in the message
          field. We collect this so we can respond to your enquiry and run your event.
        </p>

        <h2 className="font-display text-2xl text-[#3950a1] mt-8">How we use it</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your booking enquiry.</li>
          <li>To plan and deliver your event if you confirm a booking.</li>
          <li>To send relevant follow-up about your event (a thank-you note, a request for a review).</li>
        </ul>

        <h2 className="font-display text-2xl text-[#3950a1] mt-8">Who we share it with</h2>
        <p>
          We do not sell or rent your personal information. We may share booking details
          with sub-contractors hired specifically for your event (for example, additional
          performers) where that is required to deliver the event.
        </p>

        <h2 className="font-display text-2xl text-[#3950a1] mt-8">How we store it</h2>
        <p>
          Enquiries are stored in our email and customer-management system. We keep your
          details only as long as needed for the event, accounting requirements, or as
          required by Australian law.
        </p>

        <h2 className="font-display text-2xl text-[#3950a1] mt-8">Your rights</h2>
        <p>
          You can request a copy of the information we hold about you, request that we
          update it, or request that we delete it (subject to legal retention
          requirements). Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[#3950a1] font-bold underline"
          >
            {siteConfig.email}
          </a>{" "}
          to make a request.
        </p>

        <h2 className="font-display text-2xl text-[#3950a1] mt-8">Cookies and analytics</h2>
        <p>
          Our website uses minimal cookies for basic site functionality. We may use
          privacy-friendly analytics to understand which pages perform well, but we do not
          track individual visitors across the web.
        </p>

        <h2 className="font-display text-2xl text-[#3950a1] mt-8">Updates</h2>
        <p>
          If this policy changes, we will update this page and the date below. Last
          updated:{" "}
          {new Date().toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          .
        </p>
      </div>
    </article>
  );
}
