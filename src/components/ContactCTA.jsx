import Reveal from "./Reveal";
import Button from "./Button";
import ScatterField from "./ScatterField";

export default function ContactCTA({
  eyebrow = "Start a conversation",
  title = "Bring us the protocol before it's final.",
  description = "The earliest design decisions are the hardest ones to undo. Talk to a senior biostatistician before your next milestone, not after.",
}) {
  return (
    <section
      className="relative overflow-hidden py-24 grain text-white"
      style={{ background: "linear-gradient(115deg, #123B6D, #1C5A8F)" }}
    >
      <div className="absolute inset-0 text-panel-accent/20">
        <ScatterField className="absolute -right-24 top-1/2 -translate-y-1/2 w-[560px] h-[440px] hidden lg:block" opacity={0.35} />
      </div>
      <div className="container-page relative">
        <div className="max-w-xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-panel-accent mb-4 flex items-center gap-2 font-bold">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] text-white">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-panel-muted">{description}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="primary">Talk to us</Button>
              <Button to="/services" variant="outline-light" icon={false}>Browse services</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );

}
