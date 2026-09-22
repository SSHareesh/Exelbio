import { Award, Users2, Building2, Microscope } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ContactCTA from "../components/ContactCTA";

const values = [
  { icon: Users2, title: "Named accountability", detail: "One statistician owns your study. If something's wrong, you know exactly who to call." },
  { icon: Award, title: "Rigor over speed", detail: "We'll tell you when a timeline is unrealistic for the analysis you're asking for." },
  { icon: Microscope, detail: "Our reports say what the data shows, not what a sponsor might want to hear.", title: "Evidence, plainly stated" },
  { icon: Building2, title: "Built to be audited", detail: "Every deliverable is documented as if an inspector will read it, because eventually one might." },
];

export default function About() {
  return (
    <>
      <section className="relative hero-radial-bg text-ink pt-32 sm:pt-40 pb-20 sm:pb-24 grain overflow-hidden border-b border-border">
        <div className="container-page relative">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal flex items-center gap-2 font-bold">
              About Us
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-primary">
              Expert statisticians and programmers, across every phase of drug development.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-soft">
              Our team has detailed knowledge of all clinical trial Phases and experience across a multitude of therapeutic areas — forming long-lasting partnerships that span the entire drug development spectrum.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Approach section */}
      <section className="bg-white py-16 sm:py-24 border-b border-border">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our Approach"
                title="Partnership models designed around your objectives."
              />
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.12}>
                <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                  Our approach for each project is customized using one of our partnership models and is designed to meet the specific objectives of our clients. Whether you need full-service support from protocol design through submission, or targeted expertise for a single study component, we build the engagement around what you actually need.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="rounded-2xl border border-teal/25 bg-teal-tint/50 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal font-bold mb-2">Full Service</p>
                    <p className="text-sm text-ink-soft leading-relaxed">End-to-end statistical and programming support from protocol design to NDA submission.</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-paper p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-bold mb-2">Collaborative</p>
                    <p className="text-sm text-ink-soft leading-relaxed">Working alongside your in-house team to fill specific expertise or capacity gaps.</p>
                  </div>
                  <div className="rounded-2xl border border-green/25 bg-green-tint/50 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-green font-bold mb-2">Consulting</p>
                    <p className="text-sm text-ink-soft leading-relaxed">Targeted advisory and review services for specific studies, protocols, or submissions.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we operate"
            title="Values that show up in the deliverables, not just the deck."
          />
          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex gap-4 sm:gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-sm hover:border-teal/30 hover:shadow-[0_18px_40px_rgba(18,59,109,0.06)] transition-all h-full">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-tint text-teal">
                    <v.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-primary font-bold tracking-tight leading-snug">{v.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{v.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="Meet the team"
        title="Want to know who'd be on your study?"
        description="We'll introduce you to the actual biostatistician and programmer who'd staff your program before you sign anything."
      />
    </>
  );
}

