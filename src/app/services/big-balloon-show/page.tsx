import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Big Balloon Show",
  description:
    "Mr Kaboodle's signature Big Balloon Show on the Gold Coast — giant balloons, audience climb-ins and crowd-favourite tricks for kids parties, schools and corporate family days.",
};

export default function BigBalloonShowPage() {
  return (
    <ServicePage
      badge="🎈 Big Balloon Show"
      title="The show with the giant red balloon."
      tagline="The trick everyone's still talking about a week later."
      intro="Mr Kaboodle climbs inside a six-foot balloon. The kids lose their minds. The grown-ups get the photo of the year. It's the Big Balloon Show — our most-requested act and the centrepiece of any party that wants a real wow moment."
      emojis={["🎈", "🎉", "🎁", "✨", "🎊"]}
      heroIllustration={
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/rhett/big-balloon-show-hero.jpg"
            alt="Mr Kaboodle inside a giant red balloon with kids audience watching"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      }
      galleryImages={[
        { src: "/rhett/big-balloon-stage.jpg", alt: "Mr Kaboodle Big Balloon Show stage shot" },
        { src: "/rhett/big-balloon-show-hero.jpg", alt: "Mr Kaboodle inside a giant balloon" },
        { src: "/rhett/skypoint-show.jpg", alt: "Mr Kaboodle live performance with audience" },
        { src: "/images/mrkaboodleshow.jpg", alt: "Mr Kaboodle live show" },
        { src: "/images/mrkaboodleshow1.jpg", alt: "Mr Kaboodle performance" },
        { src: "/images/workshop1.jpg", alt: "Kids at a Mr Kaboodle event with balloons" },
      ]}
      includes={[
        { icon: "🎈", title: "Six-foot balloon climb-in", text: "The signature trick — Rhett disappears inside an enormous balloon. The reaction is what people pay for." },
        { icon: "🎁", title: "Audience volunteers", text: "Pulls a few brave kids on stage to be part of the show. They become the heroes of the day." },
        { icon: "🎊", title: "Build-up routine", text: "It's not just the trick — the 10-minute lead-up has the audience on the edge of their seats." },
        { icon: "📸", title: "Photo magnet", text: "The shot every parent wants to post. Free social proof for hosts and venues." },
        { icon: "⏱️", title: "30 to 45 minutes", text: "Full Big Balloon Show, or a shorter spot inside a larger event run sheet." },
        { icon: "🛡️", title: "Insured + WWCC", text: "Public liability cover and current Blue Card for every performer." },
      ]}
      perfectFor={[
        "Kids birthday parties",
        "Big school events",
        "Shopping centre activations",
        "Corporate family days",
        "Festivals",
        "Brand launches",
      ]}
      accentColor="red"
    />
  );
}
