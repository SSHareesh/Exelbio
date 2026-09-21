import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import ScatterField from "./ScatterField";
import MorphingBlob from "./MorphingBlob";
import FloatingParticles from "./FloatingParticles";
import GeometricAccents from "./GeometricAccents";

/* ─────────────────────────────────────────────────────────────────────
 * HeroParallax
 *
 * Parallax system — two separate axes so they never conflict:
 *
 *   SCROLL (Y only): Framer Motion useScroll tracks the hero section.
 *     Positive y = element moves DOWN in the section = lags behind page
 *     scroll = appears FARTHER AWAY. Background layers get big values;
 *     content layers get tiny values.
 *
 *   MOUSE (X + Y): useMotionValue + useSpring produces a silky cursor
 *     effect. Each layer has a different multiplier for depth.
 *
 * These two transforms sit on NESTED divs so they compose without
 * overwriting each other.
 * ───────────────────────────────────────────────────────────────────── */
export default function HeroParallax() {
  const heroRef = useRef(null);

  /* ── Scroll-based parallax ─────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* Background layers — dramatic lag = appears distant */
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "52%"]);
  const particleY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scatterY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  /* Background opacity fades as hero exits — decoration only */
  const bgOpacity = useTransform(scrollYProgress, [0.55, 0.9], [1, 0.2]);

  /* ── Mouse-based parallax ──────────────────────────────── */
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  /* Spring-damped smooth mouse tracking */
  const mouseX = useSpring(rawMouseX, { stiffness: 50, damping: 18, mass: 0.8 });
  const mouseY = useSpring(rawMouseY, { stiffness: 50, damping: 18, mass: 0.8 });

  /* Each layer moves at a different rate — deeper = less mouse response */
  const blob1X = useTransform(mouseX, [-0.5, 0.5], [-22, 22]);
  const blob1Y = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const part2X = useTransform(mouseX, [-0.5, 0.5], [16, -16]);
  const part2Y = useTransform(mouseY, [-0.5, 0.5], [9, -9]);

  const scat3X = useTransform(mouseX, [-0.5, 0.5], [28, -28]);
  const scat3Y = useTransform(mouseY, [-0.5, 0.5], [14, -14]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      rawMouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
      rawMouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
    };
    const handleMouseLeave = () => {
      rawMouseX.set(0);
      rawMouseY.set(0);
    };

    hero.addEventListener("mousemove", handleMouseMove, { passive: true });
    hero.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rawMouseX, rawMouseY]);

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden text-ink hero-radial-bg"
    >
      {/* ══════════════════════════════════════════════════════════
          LAYER 1 — Morphing blobs  (mouse outer, scroll inner)
          ═════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: blobY, opacity: bgOpacity }}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.6, ease: "easeOut" }}
        >
          <MorphingBlob
            className="absolute -left-44 -top-48 h-[700px] w-[700px] bg-teal/15 blur-[90px]"
            animIndex={1}
            delay="0s"
          />
          <MorphingBlob
            className="absolute -right-60 -bottom-24 h-[600px] w-[600px] bg-green/10 blur-[80px]"
            animIndex={2}
            delay="4s"
          />
          <MorphingBlob
            className="absolute left-[40%] top-[25%] h-[380px] w-[380px] -translate-x-1/2 bg-teal/10 blur-[110px]"
            animIndex={3}
            delay="8s"
          />
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════
          LAYER 2 — Floating particles
          ═════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: part2X, y: part2Y }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: particleY, opacity: bgOpacity }}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
        >
          <FloatingParticles count={38} />
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════
          LAYER 3 — ScatterField + geometric accents
          ═════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: scat3X, y: scat3Y }}
        className="absolute inset-0 pointer-events-none text-primary/10"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: scatterY }}
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.15 }}
        >
          <ScatterField
            className="absolute right-[-10%] top-1/2 h-[640px] w-[820px] -translate-y-1/2 opacity-40"
          />
          <GeometricAccents />
        </motion.div>
      </motion.div>

      {/* Grain */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════
          CONTENT  (Layers 4 – 6  +  StatStrip)
          ═════════════════════════════════════════════════════════ */}
      <div className="w-full container-page relative pt-32 pb-24">
        {/* Two-column layout: text left, logo card right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT COLUMN: Text content ──────────────────────── */}
          <div className="flex flex-col">

            {/* Eyebrow — entrance animation only */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-teal font-extrabold flex items-center gap-2"
            >
              Biometrics • Data • Insight
            </motion.p>

            {/* Heading — entrance animation only */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-primary"
            >
              Turning clinical data into<br className="hidden sm:block" />{" "}
              <span className="text-teal">meaningful insight.</span>
            </motion.h1>

            {/* Description — entrance animation only */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-soft"
            >
              Exelbio delivers high-quality biometrics and clinical data solutions that help
              life-science teams make confident decisions and move programmes forward.
              The same statistician who writes your SAP defends it at regulatory review.
            </motion.p>

            {/* CTA Buttons — entrance animation only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.44 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button to="/contact" variant="primary">Explore our services</Button>
              <Button to="/about" variant="outline" icon={false}>
                Discover Exelbio
              </Button>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Logo card — desktop only ─────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            {/* White card */}
            <div
              className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f0f8f8 100%)",
                boxShadow:
                  "0 24px 64px -16px rgba(18,59,109,0.14), 0 4px 16px -4px rgba(18,167,165,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "1px solid rgba(220,231,237,0.80)",
              }}
            >
              {/* Decorative orbital ellipses — matching the reference image */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 420 315"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Outer large ellipse */}
                <ellipse
                  cx="210"
                  cy="157"
                  rx="190"
                  ry="130"
                  stroke="#12a7a5"
                  strokeWidth="1"
                  strokeOpacity="0.18"
                  fill="none"
                  transform="rotate(-18, 210, 157)"
                />
                {/* Mid ellipse */}
                <ellipse
                  cx="210"
                  cy="157"
                  rx="148"
                  ry="100"
                  stroke="#12a7a5"
                  strokeWidth="0.8"
                  strokeOpacity="0.13"
                  fill="none"
                  transform="rotate(-18, 210, 157)"
                />
                {/* Inner ellipse */}
                <ellipse
                  cx="210"
                  cy="157"
                  rx="108"
                  ry="72"
                  stroke="#12a7a5"
                  strokeWidth="0.6"
                  strokeOpacity="0.10"
                  fill="none"
                  transform="rotate(-18, 210, 157)"
                />
                {/* Accent dot on outer orbit */}
                <circle cx="50" cy="110" r="4" fill="#12a7a5" fillOpacity="0.25" />
                <circle cx="370" cy="205" r="3" fill="#12a7a5" fillOpacity="0.18" />
                <circle cx="390" cy="90" r="2" fill="#20b765" fillOpacity="0.20" />
              </svg>

              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center px-10">
                <img
                  src="/logo-transparent.png"
                  alt="Exelbio"
                  className="w-full max-w-[240px] h-auto object-contain drop-shadow-sm"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll caret */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );

}
