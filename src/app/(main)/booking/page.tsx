import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import BookingSection from "@/components/sections/BookingSection";
import BookingSteps from "@/components/sections/BookingSteps";

export const metadata: Metadata = {
  title: "Booking Now",
  description:
    "Book your appointment at Crafted Studio online — pick your service and a time that suits you.",
  alternates: { canonical: "/booking" },
};

/**
 * Port of booking.html, rebuilt around the booking link.
 *
 * Booking happens in Phorest, so this page has one job: get the visitor to that
 * link. The heading and card carry it, and the steps underneath explain what
 * the link leads to rather than offering a competing action.
 */
export default function BookingPage() {
  return (
    <>
      <PageHero eyebrow="Your Next Cut" title="Booking Now" image="/images/background/2.webp" />
      <BookingSection withHeading />
      <BookingSteps />
    </>
  );
}
