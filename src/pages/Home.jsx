import { motion } from "framer-motion";
// import LoadingScreen from "../components/LoadingScreen";
import HeroParallax from "../components/HeroParallax";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ServicesHorizontalScroll from "../components/ServicesHorizontalScroll";
import StrengthCard from "../components/StrengthCard";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import { strengths, testimonials } from "../data/home";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          INTRO — 100 vh spacer + fixed loading overlay.
          Scrolling through the spacer drives the overlay off screen.
          ═════════════════════════════════════════════════════════ */}
      {/* <LoadingScreen /> */}

      {/* ══════════════════════════════════════════════════════════
          HERO — sits immediately after the spacer in the DOM.
          When the loading overlay fully exits (spacer scrolled),
          the hero's top edge is exactly at the viewport top.
          ═════════════════════════════════════════════════════════ */}
      <HeroParallax />

      {/* ══════════════════════════════════════════════════════════
          ABOUT
          ═════════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-28 border-b border-border">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

            {/* Left column ─────────────────────────────────────── */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <SectionHeading
                  eyebrow="Who we are"
                  title="A CRO built by statisticians, still run by statisticians."
                  description="Exelbio was founded in 2013 by three biostatisticians who kept seeing the same problem elsewhere: the person who designed a trial's analysis was rarely the person defending it in front of a review team. We built the company around fixing that."
                />
              </motion.div>

              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <span className="rounded-full border border-border px-4 py-2 text-xs font-mono uppercase tracking-wide text-primary bg-paper font-semibold shadow-xs">Est. 2013</span>
                  <span className="rounded-full border border-border px-4 py-2 text-xs font-mono uppercase tracking-wide text-primary bg-paper font-semibold shadow-xs">Cambridge, MA</span>
                  <span className="rounded-full border border-border px-4 py-2 text-xs font-mono uppercase tracking-wide text-primary bg-paper font-semibold shadow-xs">62 staff biostatisticians</span>
                </div>
              </Reveal>
            </div>

            {/* Right column ─────────────────────────────────────── */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Reveal delay={0.1} variant="scale">
                <div className="rounded-3xl border border-teal/30 bg-teal-tint/70 p-8 h-full shadow-sm">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal font-bold mb-4">Mission</p>
                  <p className="font-display text-lg sm:text-xl leading-snug text-primary font-bold">
                    Give every sponsor the statistical rigor of an in-house biometrics
                    department, without the overhead of building one.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18} variant="scale">
                <div className="rounded-3xl border border-green/30 bg-green-tint/70 p-8 h-full shadow-sm">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-green font-bold mb-4">Vision</p>
                  <p className="font-display text-lg sm:text-xl leading-snug text-primary font-bold">
                    A future where no trial's conclusions are questioned because of how,
                    rather than what, the data showed.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.26} className="sm:col-span-2">
                <div className="rounded-3xl border border-border bg-paper p-8">
                  <p className="text-ink-soft leading-relaxed">
                    Today we support Phase I through Phase IV programs across oncology,
                    rare disease, cardiometabolic, immunology, and CNS indications — for
                    biotechs running their first IND and specialty pharma companies
                    managing a full submission portfolio. What hasn't changed since 2013
                    is the model: a named statistician, accountable end to end.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICES — unchanged from original
          ═════════════════════════════════════════════════════════ */}
      <ServicesHorizontalScroll />

      {/* ══════════════════════════════════════════════════════════
          WHY CHOOSE US — dark navy panel matching reference Image 3
          ═════════════════════════════════════════════════════════ */}
      <section
        className="relative py-28 grain text-white"
        style={{ background: "linear-gradient(115deg, #123B6D, #1C5A8F)" }}
      >
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Exelbio"
            title="What sponsors notice after the first study."
            description="Not a list of certifications — the operational habits that actually change how a trial goes."
            light={true}
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((item, i) => (
              <StrengthCard key={item.title} item={item} index={i} dark={true} />
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS — unchanged from original
          ═════════════════════════════════════════════════════════ */}
      <section className="relative bg-paper py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="From sponsors"
            title="What it's like to work with a named statistician."
            align="left"
          />
          <div className="mt-14">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
