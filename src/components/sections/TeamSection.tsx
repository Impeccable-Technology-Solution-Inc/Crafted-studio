import TeamCard from "@/components/cards/TeamCard";
import SectionHeading from "./SectionHeading";
import { team } from "@/lib/site";

/**
 * Currently mounted nowhere. Sam, Leo and Max and their portraits are the
 * template's, and /team was a page of three strangers; the section came out of
 * HomeBody and the page with it, rather than showing invented staff. Restore
 * it by re-adding `<TeamSection withHeading />` to HomeBody and, if the shop
 * wants the page back, re-creating app/(main)/team/page.tsx — both are in the
 * history of the commit that removed them. Replace `team` in lib/site.ts and
 * the images under public/images/team/ first.
 */
export default function TeamSection({
  withHeading = false,
  className,
}: {
  withHeading?: boolean;
  className?: string;
}) {
  return (
    <section id="section-team" className={className} aria-label="Our barbers">
      <div className="container">
        {withHeading ? (
          <>
            <div className="row g-4 gx-5 align-items-center justify-content-center text-center">
              <div className="col-lg-6">
                <SectionHeading
                  eyebrow="Our Team"
                  title="Meet Our Barbers"
                  body="Meet our talented barbers, dedicated to delivering precision haircuts, expert grooming, and personalized service for every gentleman."
                />
              </div>
            </div>
            <div className="spacer-20" />
          </>
        ) : null}

        <div className="row g-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
