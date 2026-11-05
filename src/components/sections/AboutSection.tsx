import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import TextCircle from "@/components/ui/TextCircle";

/*
 * NOTE: the template decorates this section (and Services/Team) with
 * <img src="images/misc/logo-wm-1.webp">, but that file is not in the download —
 * it 404s in the original too, so it is left out rather than ported as a broken
 * reference. Drop the file into public/images/misc/ and re-add the <Image> if
 * the author ships it later.
 */

/** Shared by the homepage variants and /about — identical markup in both. */
export default function AboutSection({ className = "pb-0 relative" }: { className?: string }) {
  return (
    <section id="section-about" className={className} aria-label="About us">
      <div className="container">
        <div className="row g-4 gx-5 justify-content-between">
          <Reveal className="col-lg-6" duration={1.2}>
            <Reveal animation="zoomIn" duration={1.2} className="relative overflow-hidden">
              <Image
                src="/images/misc/p1.webp"
                className="relative z-2 rounded-1 w-100"
                alt="A barber finishing a classic cut"
                width={1000}
                height={1350}
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </Reveal>
          </Reveal>

          <div className="col-lg-6">
            <div className="h-100 relative">
              <div className="spacer-double sm-hide" />

              <Reveal className="subtitle" delay={0.2} duration={0.7}>
                About Us
              </Reveal>

              <SplitText as="h2" className="split" delay={0.35} duration={0.7}>
                Crafting Timeless Styles, Building Confidence
              </SplitText>

              <Reveal as="p" delay={0.5} duration={0.7}>
                Our skilled barbers combine classic techniques with modern trends to deliver clean
                cuts, precision fades, and perfectly groomed beards. Every appointment is tailored to
                your style, ensuring exceptional service, premium care, and a relaxing atmosphere
                where you always leave looking sharp and feeling your absolute best.
              </Reveal>

              {/* sm-hide on the whole decoration, not just the circle. The
                  template hid the circle at ≤992px and left the logo mark
                  behind it, which `ms-4` then pushed ~55px off the right edge
                  of a phone — a half-cropped mark with nothing around it. */}
              <Reveal
                animation="zoomIn"
                delay={0.7}
                duration={0.8}
                className="abs bottom-0 end-0 sm-hide"
              >
                {/* The template's wording was "CRAFTED FOR MODERN GENTLEMEN".
                    The shop cuts, colours and treats hair for women too — a
                    good half of the price list — so the circle no longer
                    addresses only half of it. */}
                <TextCircle
                  text="CRAFTED FOR EVERY MODERN STYLE "
                  className="abs-middle ms-lg-5 sm-hide"
                />
                <div className="abs abs-centered ms-4">
                  <Image
                    src="/images/logo-mark.webp"
                    className="w-100px"
                    alt=""
                    width={240}
                    height={285}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
