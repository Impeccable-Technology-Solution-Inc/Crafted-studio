import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import LocationSection from "@/components/sections/LocationSection";
import BookingSection from "@/components/sections/BookingSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Crafted Studio — precision cutting, colour and styling in Winnipeg. How we work, where to find us, and a chair you can book.",
  alternates: { canonical: "/about" },
};

/**
 * Port of about.html, down to what the shop can actually stand behind.
 *
 * Two of the template's bands have gone: the team grid, which was three
 * invented barbers, and the 1998–2026 timeline, which was an invented history.
 * What is left is what a first visit needs and what is true — how we work,
 * where to find us, and a chair to book.
 */
export default function AboutPage() {
  return (
    <>
      {/* Not "Since 1998": that was the template's founding year, and it went
          with the timeline band that used to sit below AboutSection. */}
      <PageHero eyebrow="Who We Are" title="About Us" image="/images/background/3.webp" />
      <AboutSection className="relative" />
      <ValuesSection />
      <LocationSection />
      <BookingSection withHeading />
    </>
  );
}
