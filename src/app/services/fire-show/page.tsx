import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Fire Show",
  description:
    "Spectacular fire entertainment on the Gold Coast — fire-juggling, fire-eating, fire-spinning and fire-breathing for festivals, weddings, milestone birthdays and over-18 events.",
};

export default function FireShowPage() {
  return (
    <ServicePage
      badge="🔥 Fire Show"
      title="The headline act for a night people will remember."
      tagline="Fire-juggling. Fire-eating. Fire-breathing. Done safely."
      intro="When you want the after-dark act that has guests pulling out their phones, this is it. Fire-juggling clubs, fire-staff spinning, fire-eating finishes — choreographed to a soundtrack and run with full risk-assessment paperwork. Built for festivals, weddings, milestone birthdays and corporate events."
      emojis={["🔥", "✨", "🎆", "💥", "🌙"]}
      heroIllustration={
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/rhett/jv-pro-shot.jpg"
            alt="Mr Kaboodle dramatic stage performance — placeholder until fire photos available"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      }
      galleryImages={[
        { src: "/rhett/jv-pro-shot.jpg", alt: "Mr Kaboodle Magic and Circus Show stage shot" },
        { src: "/rhett/skypoint-show.jpg", alt: "Mr Kaboodle live performance with audience" },
        { src: "/images/mrkaboodleshow.jpg", alt: "Mr Kaboodle live show" },
        { src: "/images/mrkaboodleshow4.jpg", alt: "Mr Kaboodle stage performance" },
      ]}
      includes={[
        { icon: "🔥", title: "Fire-juggling clubs", text: "The classic — three to five lit clubs, full juggling routine, cued to music." },
        { icon: "🌀", title: "Fire-staff spinning", text: "Long-form spin work with fire-tipped staff. Dramatic, choreographed, photogenic." },
        { icon: "👄", title: "Fire-eating + breathing", text: "The finale crowd pleaser — flame-eating and (where safe) fire-breathing for the big finish." },
        { icon: "📋", title: "Risk assessment + insurance", text: "Full event-day risk assessment, public liability cover, fire-safe perimeter set up before the act." },
        { icon: "🚒", title: "Trained safety person", text: "Every fire show is run with a qualified safety operator on standby with extinguisher and fire blanket." },
        { icon: "🎶", title: "Choreographed to your music", text: "Send us the playlist or the wedding song — we cue the routine to it." },
      ]}
      perfectFor={[
        "Festivals and street events",
        "Weddings (after sunset)",
        "Milestone birthdays (18th, 21st, 30th, 40th)",
        "Corporate gala dinners",
        "End-of-conference celebrations",
        "Beach and pool venues (with permits)",
      ]}
      accentColor="red"
    />
  );
}
