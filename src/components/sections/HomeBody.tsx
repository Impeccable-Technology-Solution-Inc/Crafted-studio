import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ReviewsSection from "./ReviewsSection";
import LocationSection from "./LocationSection";
import GallerySection from "./GallerySection";
import BookingSection from "./BookingSection";
import MarqueeBand from "./MarqueeBand";
import { homeTestimonials } from "@/lib/site";

/**
 * Everything below the hero. All eight homepage variants in the template share
 * this exact run of sections — only `#section-intro` differs between them — so
 * it lives in one place instead of being duplicated eight times.
 *
 * TeamSection used to sit between the reviews and the location. It is out
 * until the shop supplies real barbers and real photographs — the component,
 * its card and the `team` entries are all still there, so putting it back is
 * re-adding the one line.
 */
export default function HomeBody() {
  return (
    <>
      <AboutSection />
      <ServicesSection withHeading />
      <ReviewsSection items={homeTestimonials} />
      <LocationSection />
      <GallerySection withHeading className="pb-0" />
      <BookingSection withHeading className="pb-0" />
      <MarqueeBand />
    </>
  );
}
