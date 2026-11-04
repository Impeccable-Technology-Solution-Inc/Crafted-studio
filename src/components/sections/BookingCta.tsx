import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

/**
 * A slim "now book it" band for pages that end on browsing — the price list
 * being the obvious one.
 *
 * Deliberately lighter than BookingSection: no hours, no address, nothing to
 * read. Someone who has just finished the menu needs one button, not a second
 * page of detail.
 */
export default function BookingCta({
  eyebrow = "Ready When You Are",
  title = "Book Your Appointment",
  body = "Found the one you want? Pick a time that suits you and the chair is yours.",
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  className?: string;
}) {
  return (
    <section className={`text-light ${className}`} aria-label="Book an appointment">
      <div className="container">
        <div className="row g-4 justify-content-center text-center">
          <div className="col-lg-7">
            <SectionHeading eyebrow={eyebrow} title={title} body={body} />

            <Reveal delay={0.4} className="mt-4">
              <a
                className="btn-main fx-slide"
                data-hover="Book Now"
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Book Now</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
