import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Kids DJ",
  description:
    "Mr Kaboodle Kids DJ on the Gold Coast — kid-friendly playlists, dance games, glow sticks and packed dance floors for birthday parties, school discos and family events.",
};

export default function KidsDJPage() {
  return (
    <ServicePage
      badge="🎧 Kids DJ"
      title="Pack the dance floor in 30 seconds."
      tagline="Kid-friendly mixes. Glow sticks. Real disco lights."
      intro="A proper DJ set built for kids. Lights, smoke, a kid-safe playlist nobody groans at, and dance games between songs that get every shy kid on the floor. Birthday discos, school end-of-term parties, vacation care — anywhere kids want to dance, we run the room."
      emojis={["🎧", "💿", "🪩", "🎶", "🌈"]}
      heroIllustration={
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/rhett/kids-dj-hero.jpg"
            alt="Mr Kaboodle DJ hyping up a dance floor of kids under multi-colour disco lights"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      }
      galleryImages={[
        { src: "/rhett/kids-dj-hero.jpg", alt: "Kids dancing under disco lights at a Mr Kaboodle DJ set" },
        { src: "/rhett/dj-disco-2.jpg", alt: "Christmas kids DJ disco with glow sticks" },
        { src: "/rhett/dj-christmas.jpg", alt: "Christmas DJ event" },
        { src: "/rhett/dj-disco-1.jpg", alt: "Kids DJ disco party" },
        { src: "/rhett/dj-3.jpg", alt: "Kids DJ event" },
        { src: "/rhett/dj-2.jpg", alt: "Kids DJ event" },
      ]}
      includes={[
        { icon: "🎶", title: "Kid-curated playlist", text: "From the latest hits to all-time classics. Carefully kept clean for any age." },
        { icon: "🪩", title: "Real disco lights", text: "Moving heads, lasers, smoke — proper club energy scaled for a kids' room." },
        { icon: "🎤", title: "MC + dance games", text: "The DJ MCs the games — limbo, freeze dance, conga line — keeps every kid on their feet." },
        { icon: "🌈", title: "Glow stick add-on", text: "Glow sticks for every kid. Turns the lights down and the energy way up." },
        { icon: "🗣️", title: "Take requests", text: "Birthday kid gets the first request. Their friends get one each through the night." },
        { icon: "🛡️", title: "Insured + WWCC", text: "Public liability cover and current Blue Card." },
      ]}
      perfectFor={[
        "Kids birthday parties",
        "School end-of-term discos",
        "OOSH and vacation care",
        "Tween parties (10+)",
        "Family event activations",
        "Holiday park kids' nights",
      ]}
      accentColor="navy"
    />
  );
}
