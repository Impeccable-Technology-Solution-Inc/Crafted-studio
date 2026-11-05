import SectionHeading from "./SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { getContact, getPublicHours } from "@/lib/public-content";
import { site, telHref } from "@/lib/site";

/**
 * How to book: the booking card on one side, opening hours on the other.
 *
 * Bookings live in Phorest (site.bookingUrl), not on this site, so there is one
 * primary action here and it leaves the site. Everything else on the card —
 * phone, email, address — is deliberately quieter than that button, so the
 * booking link is the obvious thing to click.
 */
export default async function BookingSection({
  withHeading = false,
  className = "",
}: {
  withHeading?: boolean;
  /** Spacing override — the homepage runs the marquee straight after it. */
  className?: string;
}) {
  const [hours, contact] = await Promise.all([getPublicHours(), getContact()]);

  return (
    <section
      id="section-booking"
      className={`text-light ${className}`}
      aria-label="Book an appointment"
    >
      <div className="container">
        {withHeading ? (
          <div className="row g-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <SectionHeading
                eyebrow="Reservation"
                title="Book an Appointment"
                body="Reserve your chair today for expert grooming and timeless style tailored to you."
                bodyClassName="col-lg-8 offset-lg-2"
              />
              <div className="spacer-single" />
            </div>
          </div>
        ) : null}

        <div className="row g-4">
          <Reveal className="col-lg-7" animation="fadeInLeft" duration={0.9}>
            <div className="h-100 p-5 p-md-4 bg-dark-2 rounded-1">
              <i className="icofont-ui-calendar id-color fs-40 mb-3 d-block" aria-hidden="true" />

              <h3 className="mb-3">Reserve your chair online</h3>

              <p className="mb-4">
                Pick your service, choose a time that suits you and confirm — our booking system
                shows what is actually free, so you are never waiting on a callback.
              </p>

              <a
                className="btn-main fx-slide"
                data-hover="Book Appointment"
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Book Appointment</span>
              </a>

              <p className="fs-14 op-6 mt-3 mb-0">Opens our booking system in a new tab.</p>

              <hr className="my-4 op-3" />

              <p className="fs-14 op-6 mb-2">Would rather not book online?</p>

              <ul className="list-unstyled mb-0">
                {contact.phone ? (
                  <li className="mb-2">
                    <i className="icofont-phone id-color me-2" aria-hidden="true" />
                    <a className="text-light text-decoration-none" href={telHref(contact.phone)}>
                      {contact.phone}
                    </a>
                  </li>
                ) : null}

                <li>
                  <i className="icofont-email id-color me-2" aria-hidden="true" />
                  <a className="text-light text-decoration-none" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="col-lg-5" animation="fadeInRight" duration={0.9}>
            <div className="h-100 p-5 p-md-4 bg-dark-2 rounded-1">
              <i className="icofont-clock-time id-color fs-40 mb-3 d-block" aria-hidden="true" />

              <h4 className="mb-3">Opening hours</h4>

              <div className="mb-4">
                {hours.map((entry, i) => {
                  const last = i === hours.length - 1;
                  return (
                    <div
                      key={entry.day}
                      className={`d-flex justify-content-between align-items-center ${
                        last ? "pt-2" : "py-2 border-bottom border-secondary"
                      }`}
                    >
                      <span className="text-white">{entry.day}</span>
                      <span className={entry.closed ? "text-warning" : "fw-500"}>{entry.value}</span>
                    </div>
                  );
                })}
              </div>

              <i className="icofont-location-pin id-color me-2" aria-hidden="true" />
              <address className="fst-normal d-inline mb-0">
                {contact.line1}, {contact.line2}
              </address>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
