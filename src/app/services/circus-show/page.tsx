import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Circus Show",
  description:
    "Live Mr Kaboodle circus show on the Gold Coast. Juggling, acrobatics, comedy and audience-volunteer routines for school events, birthday parties, festivals and family days.",
};

export default function CircusShowPage() {
  return (
    <ServicePage
      badge="🎪 Circus Show"
      title="A full circus show, packed into your venue."
      tagline="Juggling. Acro. Comedy. Audience volunteers welcome."
      intro="The headline act. A 30-to-45-minute circus performance with juggling, plate spinning, acrobatic feats and slapstick comedy. Tailored on the day to the age group in front of us — works for a primary school of 300 or a backyard with 12."
      emojis={["🎪", "🤹", "🎭", "✨", "🎉"]}
      heroIllustration={
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/rhett/circus-show-hero.jpg"
            alt="Mr Kaboodle circus show with juggling routine in front of a packed audience of children"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      }
      galleryImages={[
        { src: "/rhett/skypoint-show.jpg", alt: "Mr Kaboodle performing at Skypoint with a packed audience" },
        { src: "/rhett/jv-pro-shot.jpg", alt: "Mr Kaboodle Magic and Circus Show on stage" },
        { src: "/rhett/big-balloon-stage.jpg", alt: "Mr Kaboodle stage performance" },
        { src: "/images/mrkaboodleshow.jpg", alt: "Mr Kaboodle live show" },
        { src: "/images/mrkaboodleshow2.jpg", alt: "Mr Kaboodle performance" },
        { src: "/images/circus-playshop3.jpg", alt: "Kids enjoying a Mr Kaboodle circus event" },
      ]}
      includes={[
        { icon: "🤹", title: "Juggling routines", text: "Three balls, five balls, clubs, rings — the full juggling repertoire built into a story-driven act." },
        { icon: "🎭", title: "Slapstick comedy", text: "The kind that makes the kids hold their stomachs and the parents laugh harder than the kids." },
        { icon: "🎯", title: "Audience volunteers", text: "Every show pulls volunteers from the crowd — the 5-year-old who steals the show is a regular highlight." },
        { icon: "🍽️", title: "Plate spinning", text: "The balancing-act centrepiece — kids gasp every single time." },
        { icon: "⚡", title: "Custom length", text: "20, 30 or 45 minutes — let us know your run sheet and we'll match it." },
        { icon: "🛡️", title: "Insured + WWCC", text: "Public liability cover and Blue Card current for every performer on the roster." },
      ]}
      perfectFor={[
        "Kids birthday parties",
        "Primary school events",
        "Vacation care and OOSH",
        "Corporate family days",
        "Festivals and fairs",
        "Theme parks and venues",
      ]}
      accentColor="navy"
    />
  );
}
