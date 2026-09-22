import { Link } from "react-router-dom";
import { ArrowRight, LineChart, Terminal, Users, FileCheck2 } from "lucide-react";
import Reveal from "./Reveal";

const iconMap = { LineChart, Terminal, Users, FileCheck2 };

/* ─── Per-service placeholder visual config ──────────────────────────────── */
const placeholderConfig = {
  biostatistics: {
    gradient: "from-[#0d2f3f] via-[#0f4a5c] to-[#0e7a8a]",
    accentColor: "#0e9cb8",
    svg: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Grid lines */}
        <line x1="20" y1="140" x2="260" y2="140" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
        <line x1="20" y1="110" x2="260" y2="110" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
        <line x1="20" y1="80" x2="260" y2="80" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
        <line x1="20" y1="50" x2="260" y2="50" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
        {/* Y axis */}
        <line x1="20" y1="20" x2="20" y2="140" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
        {/* Area fill */}
        <path d="M20 120 L60 95 L100 105 L140 65 L180 75 L220 45 L260 30 L260 140 L20 140 Z"
          fill="#0e9cb8" fillOpacity="0.18"/>
        {/* Line */}
        <path d="M20 120 L60 95 L100 105 L140 65 L180 75 L220 45 L260 30"
          stroke="#0e9cb8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Dots */}
        {[[20,120],[60,95],[100,105],[140,65],[180,75],[220,45],[260,30]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="#0e9cb8" fillOpacity="0.9"/>
        ))}
        {/* Label */}
        <text x="24" y="36" fill="white" fillOpacity="0.35" fontSize="9" fontFamily="monospace">ANALYSIS OUTPUT</text>
      </svg>
    ),
  },
  "statistical-programming": {
    gradient: "from-[#0a1628] via-[#122040] to-[#1a2d55]",
    accentColor: "#7c8ff0",
    svg: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Terminal window chrome */}
        <rect x="18" y="18" width="244" height="128" rx="8" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
        <rect x="18" y="18" width="244" height="22" rx="8" fill="white" fillOpacity="0.06"/>
        <circle cx="34" cy="29" r="4" fill="#ff5f57" fillOpacity="0.7"/>
        <circle cx="48" cy="29" r="4" fill="#febc2e" fillOpacity="0.7"/>
        <circle cx="62" cy="29" r="4" fill="#28c840" fillOpacity="0.7"/>
        {/* Code lines */}
        <rect x="30" y="52" width="60" height="6" rx="2" fill="#7c8ff0" fillOpacity="0.7"/>
        <rect x="96" y="52" width="40" height="6" rx="2" fill="white" fillOpacity="0.25"/>
        <rect x="30" y="66" width="20" height="6" rx="2" fill="#0e9cb8" fillOpacity="0.8"/>
        <rect x="56" y="66" width="80" height="6" rx="2" fill="white" fillOpacity="0.18"/>
        <rect x="42" y="80" width="30" height="6" rx="2" fill="#7c8ff0" fillOpacity="0.6"/>
        <rect x="78" y="80" width="55" height="6" rx="2" fill="white" fillOpacity="0.22"/>
        <rect x="30" y="94" width="50" height="6" rx="2" fill="#0e9cb8" fillOpacity="0.7"/>
        <rect x="86" y="94" width="35" height="6" rx="2" fill="white" fillOpacity="0.15"/>
        <rect x="42" y="108" width="90" height="6" rx="2" fill="white" fillOpacity="0.1"/>
        {/* Cursor blink */}
        <rect x="30" y="122" width="8" height="10" rx="1" fill="#7c8ff0" fillOpacity="0.9"/>
      </svg>
    ),
  },
};


const serviceImages = {
  "biostatistics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  "statistical-programming": "https://images.unsplash.com/photo-1763038311036-6d18805537e5?q=80&w=1036&auto=format&fit=crop",
  "biometrics-consulting": "https://images.unsplash.com/photo-1573166826272-5acd0ef8f650?q=80&w=869&auto=format&fit=crop",
  "regulatory-submission-support": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];
  const placeholder = placeholderConfig[service.slug] ?? placeholderConfig.biostatistics;

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col rounded-3xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_20px_45px_-20px_rgba(18,59,109,0.14)]"
      >
        {/* ── Image / Illustration ──────────────────────────── */}
        <div
          className={`relative w-full aspect-[16/9] overflow-hidden shrink-0 ${
            serviceImages[service.slug]
              ? "bg-paper-dim"
              : `bg-gradient-to-br ${placeholder.gradient}`
          }`}
        >
          {serviceImages[service.slug] ? (
            <img
              src={serviceImages[service.slug]}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <>
              {/* Grain overlay */}
              <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
                style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}}
              />
              {/* SVG illustration */}
              <div className="absolute inset-0 flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-[1.03]">
                {placeholder.svg}
              </div>
            </>
          )}
          {/* Bottom fade into card */}
          <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-surface/30 to-transparent" />
        </div>

        {/* ── Card body ──────────────────────────────────────── */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-tint text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                <Icon size={18} />
              </span>
              <span className="font-mono text-xs text-ink-soft/60">0{index + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-lg sm:text-xl text-primary font-bold tracking-tight leading-snug">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.short}</p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal">
            Learn more
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>

    </Reveal>
  );
}
