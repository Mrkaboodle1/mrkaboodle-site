import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Balloon Twisting",
  description:
    "Professional balloon twisting on the Gold Coast. Custom balloon creations on the spot — animals, swords, hats, flowers, full-body costumes. Mr Kaboodle balloon artists.",
};

export default function BalloonTwistingPage() {
  return (
    <ServicePage
      badge="🎈 Balloon Twisting"
      title="Balloon creations that get gasped at."
      tagline="From a quick sword to a full-body costume."
      intro="Mr Kaboodle balloon artists go way beyond the standard balloon dog. Animals, hats, swords, princesses, full body costumes, big art-piece installations. Pick the level that suits your event."
      emojis={["🎈", "🎁", "🎊", "🌟", "💎"]}
      heroIllustration={
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
          <Image
            src="/rhett/balloon-workshop-group.jpg"
            alt="Big group of kids holding their balloon creations after a Mr Kaboodle workshop"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      }
      galleryImages={[
        { src: "/rhett/skypoint-show.jpg", alt: "Mr Kaboodle performing with a yellow balloon at a packed venue" },
        { src: "/rhett/jv-pro-shot.jpg", alt: "Mr Kaboodle Magic and Circus Show on stage" },
        { src: "/images/workshop1.jpg", alt: "Kids holding balloon creations at a Mr Kaboodle workshop" },
        { src: "/images/balloon-twisting-workshops-for-children-2.jpg", alt: "Balloon twisting workshop in progress" },
        { src: "/stock/balloon-1.jpg", alt: "Vibrant party balloons cluster" },
        { src: "/stock/balloon-2.jpg", alt: "Colourful balloon arrangement" },
      ]}
      includes={[
        { icon: "🎈", title: "Classic creations", text: "Animals, swords, hats, flowers — the favourites every kid asks for, twisted in seconds." },
        { icon: "👑", title: "Hero builds", text: "Princesses, superheroes, dragons, unicorns. Full multi-balloon builds for the kids who want the showpiece." },
        { icon: "⚡", title: "Speedy queue mode", text: "For big events: simple bright builds, full crowd through quickly, no kid left waiting." },
        { icon: "🎨", title: "Custom requests", text: "Got a theme? Tell us in advance and we'll prep on-theme designs for your event." },
        { icon: "🎁", title: "Workshops", text: "Hands-on balloon-twisting workshops for kids who want to learn the basics themselves." },
        { icon: "🛡️", title: "Insured + WWCC", text: "Every balloon artist on our roster is insured and Blue Card current." },
      ]}
      perfectFor={[
        "Kids birthday parties",
        "Shopping centre roving",
        "School fetes and fairs",
        "Corporate family days",
        "Markets and festivals",
        "Restaurant entertainment",
      ]}
      accentColor="red"
    />
  );
}
