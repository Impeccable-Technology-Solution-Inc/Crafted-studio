import Reveal from "@/components/ui/Reveal";

/**
 * What happens after the Book button, in three steps.
 *
 * Booking leaves the site, which is a moment where people hesitate, so this
 * says what is on the other side of the link. Deliberately below the button and
 * quieter than it — it is reassurance, not a second call to action.
 */
const steps = [
  {
    number: "01",
    title: "Choose your service",
    body: "Pick from the full menu — cuts, beards, colour and treatments, each with its price and how long to set aside.",
  },
  {
    number: "02",
    title: "Pick your time",
    body: "Choose from the slots that are still open, on the day that suits you.",
  },
  {
    number: "03",
    title: "Confirm and come in",
    body: "Confirm your details and the chair is yours. If anything changes, give us a call and we will move it.",
  },
];

export default function BookingSteps() {
  return (
    <section id="section-booking-steps" className="pt-0" aria-label="How booking works">
      <div className="container">
        <div className="row g-4">
          {steps.map((step, i) => (
            <Reveal className="col-lg-4" key={step.number} delay={i * 0.12}>
              <div className="h-100 p-4">
                <span className="d-block id-color fs-32 fw-bold lh-1 mb-3">{step.number}</span>
                <h4 className="mb-2">{step.title}</h4>
                <p className="mb-0">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
