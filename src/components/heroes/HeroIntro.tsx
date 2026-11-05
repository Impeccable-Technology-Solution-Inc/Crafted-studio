import Reveal from "@/components/ui/Reveal";
import RotatingHeadline from "@/components/ui/RotatingHeadline";
import { heroHeadlines, site } from "@/lib/site";

/**
 * The shop blurb + rotating headline + CTA that three of the four homepage
 * heroes share. Each variant supplies its own backdrop and column widths.
 */
export default function HeroIntro({
  headlineCols = "col-lg-9",
  ctaCols = "col-lg-3",
  ctaLabel = "Book Your Chair",
}: {
  headlineCols?: string;
  ctaCols?: string;
  ctaLabel?: string;
}) {
  return (
    <>
      <div className="container relative z-2">
        <div className="row g-4">
          <Reveal className="col-md-4" duration={0.8}>
            {/* The template closed this block with a handwritten signature and
                the founder's name and title. Both were its own invention, and
                on a short phone the extra ~140px ran the block into the
                headline below, which is positioned against the bottom of the
                viewport rather than after this one. */}
            <div className="border-start color ps-5">
              <Reveal as="p" className="mb-0" delay={0.1}>
                {site.description}
              </Reveal>
            </div>

            <div className="spacer-double sm-hide" />
          </Reveal>
        </div>
      </div>

      <div className="abs w-80 abs-center bottom-10 z-2 w-100">
        <div className="container">
          <div className="row g-4 align-items-end">
            <Reveal className={headlineCols} delay={0.2} duration={1}>
              <RotatingHeadline items={heroHeadlines} className="fs-120 fs-sm-10vw" />
            </Reveal>

            {/* d-flex, not the default block: an inline-block button leaves a
                line-box descender gap beneath it, which floated it ~9px above
                the headline the row is meant to bottom-align it with. */}
            <Reveal
              className={`${ctaCols} d-flex align-items-end justify-content-lg-end`}
              delay={0.45}
              duration={0.8}
            >
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-main fx-slide"
                data-hover={ctaLabel}
              >
                <span>{ctaLabel}</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
