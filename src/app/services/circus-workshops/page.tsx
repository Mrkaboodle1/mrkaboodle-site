import type { Metadata } from "next";
import Image from "next/image";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Circus Workshops",
  description:
    "Hands-on circus skills workshops for schools, OOSH, vacation care and birthday parties on the Gold Coast. Juggling, devil sticks, plate spinning, hula hoop and more.",
};

export default function CircusWorkshopsPage() {
  return (
    <ServicePage
      badge="🎪 Circus Workshops"
      title="Hands-on circus skills, taught by pros."
      tagline="Juggling. Devil sticks. Plates. Hoops. Real skills, real fun."
      intro="Mr Kaboodle workshops are interactive sessions for kids who want to learn — not just watch. We bring the kit, run the warm-up, and walk every kid through real circus skills in a session built to match their age and ability. Confidence + new skills + a story to take home."
      emojis={["🎪", "🤹", "🎯", "🌀", "⭐"]}
      heroIllustration={
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/rhett/cw-juggling-boy.jpg"
              alt="Boy juggling balls outdoors at a circus workshop"
              fill
              priority
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/rhett/cw-devil-sticks.jpg"
              alt="Kid practising devil sticks on a lawn"
              fill
              priority
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/rhett/cw-hula-hoop.jpg"
              alt="Kids hula-hooping together in a backyard"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/rhett/cw-plate-spinning.jpg"
              alt="Girl learning plate spinning at a Mr Kaboodle workshop"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      }
      galleryImages={[
        { src: "/images/workshop1.jpg", alt: "Group of kids at a Mr Kaboodle workshop with balloons" },
        { src: "/images/circus-playshop3.jpg", alt: "Kids playing with circus props at a festival" },
        { src: "/images/workshop-kit-1.jpg", alt: "Mr Kaboodle workshop kit laid out on grass" },
        { src: "/rhett/workshop-dec-2024.jpg", alt: "School holiday workshop in action" },
        { src: "/rhett/workshop-adults-1.jpg", alt: "Adult inclusive workshop" },
        { src: "/rhett/balloon-workshop-group.jpg", alt: "Kids holding balloon creations" },
      ]}
      includes={[
        { icon: "🤹", title: "Juggling", text: "From 1-ball cascades for the little ones to 3-ball patterns for the kids who want a real challenge." },
        { icon: "🎯", title: "Devil sticks", text: "Stick-on-stick balance and tossing — looks impossible until they nail it. Confidence rocket." },
        { icon: "🌀", title: "Hula hoops", text: "Hooping at every level. Around the waist, neck, knees, two at once for the show-offs." },
        { icon: "🍽️", title: "Plate spinning", text: "Real plate-spinning sticks. Every kid leaves spinning a plate in 10 minutes." },
        { icon: "🎪", title: "Full kit supplied", text: "Juggling balls, devil sticks, hoops, plates, diabolo, poi, scarves — we bring it all." },
        { icon: "🛡️", title: "Insured + WWCC", text: "Every workshop instructor on our roster is insured and Blue Card current." },
      ]}
      perfectFor={[
        "School holiday programs",
        "OOSH and vacation care",
        "Kids birthday parties",
        "School incursions and fetes",
        "Corporate family days",
        "Scout / guide / youth groups",
      ]}
      accentColor="red"
    />
  );
}
