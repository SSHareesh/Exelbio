import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Compass, PhoneCall } from "lucide-react";
import ScatterField from "../components/ScatterField";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(12);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic countdown redirection to Home
  useEffect(() => {
    if (isPaused) return;

    if (countdown <= 0) {
      navigate("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, isPaused, navigate]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 grain hero-radial-bg overflow-hidden border-b border-border">
      {/* Background Decorative Scatter Graphic */}
      <div className="absolute inset-0 pointer-events-none text-teal/20">
        <ScatterField className="absolute -left-20 top-1/2 -translate-y-1/2 w-[550px] h-[500px] opacity-35" />
        <ScatterField className="absolute -right-20 top-1/3 -translate-y-1/2 w-[480px] h-[440px] opacity-30" />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-tint border border-teal/20 text-teal text-xs font-mono uppercase tracking-widest font-bold mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            Protocol Deviation · Error 404
          </motion.div>

          {/* Large Hero 404 Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative select-none"
          >
            <span className="font-mono text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-primary/15 block leading-none">
              404
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary font-bold tracking-tight leading-[1.15] mt-[-2.2rem] sm:mt-[-2.8rem] md:mt-[-3.5rem] relative">
              This page isn't in our dataset.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-ink-soft text-base sm:text-lg leading-relaxed max-w-lg mx-auto"
          >
            The endpoint you're trying to reach might have been relocated, renamed, or never
            existed in the protocol. Let's get you back on track.
          </motion.p>

          {/* Countdown Redirection Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-paper border border-border text-xs text-ink-soft"
          >
            <span>
              Auto-redirecting to Home in <strong className="text-teal font-mono">{countdown}s</strong>
            </span>
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className="text-[11px] font-mono uppercase tracking-wider text-teal hover:text-teal-hover underline ml-1 cursor-pointer"
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary: Go back to Home */}
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-white transition-all shadow-[0_8px_22px_rgba(18,167,165,0.22)] hover:bg-teal-hover focus-ring hover:-translate-y-0.5"
            >
              <Home size={17} className="transition-transform duration-300 group-hover:scale-110" />
              Go back to Home
            </Link>

            {/* Secondary: Go to previous page */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface hover:bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors shadow-2xs focus-ring cursor-pointer"
            >
              <ArrowLeft size={16} />
              Previous page
            </button>
          </motion.div>

          {/* Helpful quick links directory */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-14 pt-8 border-t border-border/80"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-ink-soft/80 font-semibold mb-4">
              Or explore our key destinations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
              <Link
                to="/services"
                className="group flex items-center justify-center gap-2 p-3 rounded-2xl border border-border bg-surface/80 hover:bg-white hover:border-teal/40 transition-all text-xs font-medium text-ink shadow-2xs hover:-translate-y-0.5"
              >
                <Compass size={14} className="text-teal transition-transform group-hover:rotate-45" />
                <span>Our Services</span>
              </Link>
              <Link
                to="/about"
                className="group flex items-center justify-center gap-2 p-3 rounded-2xl border border-border bg-surface/80 hover:bg-white hover:border-teal/40 transition-all text-xs font-medium text-ink shadow-2xs hover:-translate-y-0.5"
              >
                <Search size={14} className="text-teal" />
                <span>About Us</span>
              </Link>
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 p-3 rounded-2xl border border-border bg-surface/80 hover:bg-white hover:border-teal/40 transition-all text-xs font-medium text-ink shadow-2xs hover:-translate-y-0.5"
              >
                <PhoneCall size={14} className="text-teal" />
                <span>Contact Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
