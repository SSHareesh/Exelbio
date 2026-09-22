import { motion } from "framer-motion";
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
      <HeroParallax />

      {/* ══════════════════════════════════════════════════════════
          ABOUT
          ═════════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-20 sm:py-28 border-b border-border">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

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
                  title="A breadth of experience in every aspect of Biostatistics."
                  description="Exelbio is a small and growing Biostatistical service provider collaborating with pharma and biotechnology companies to bring the best results of clinical trial data. Excellence has always been our standard — exhibiting a high level of ethics, integrity, and professionalism."
                />
              </motion.div>
            </div>

            {/* Right column ─────────────────────────────────────── */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <Reveal delay={0.1} variant="scale">
                <div className="rounded-3xl border border-teal/30 bg-teal-tint/70 p-7 sm:p-8 h-full shadow-sm">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal font-bold mb-4">Our Standard</p>
                  <p className="font-display text-base sm:text-lg leading-snug text-primary font-bold">
                    Statistical programming is a vital component of all drug development — turning validated data into interpretable, analysis-ready information.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18} variant="scale">
                <div className="rounded-3xl border border-green/30 bg-green-tint/70 p-7 sm:p-8 h-full shadow-sm">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-green font-bold mb-4">Our Approach</p>
                  <p className="font-display text-base sm:text-lg leading-snug text-primary font-bold">
                    Every project is customized using one of our partnership models, designed to precisely meet the objectives of our clients.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.26} className="sm:col-span-2">
                <div className="rounded-3xl border border-border bg-paper p-7 sm:p-8">
                  <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                    Whether you are a Large Pharma, Mid-size Pharma, Biotechnology, Device, or Nutraceutical company — our expert statisticians and programmers have detailed knowledge of all Phases and experience across a multitude of therapeutic areas, forming long-lasting partnerships throughout the drug development spectrum.
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
