import { Link } from "react-router-dom";
import { ArrowRight, LineChart, Terminal, Database, Users, FileCheck2, PenLine } from "lucide-react";
import Reveal from "./Reveal";

const iconMap = { LineChart, Terminal, Database, Users, FileCheck2, PenLine };

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
  "clinical-data-management": {
    gradient: "from-[#0d2133] via-[#0f3550] to-[#0e4c72]",
    accentColor: "#38b2e0",
    svg: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Database cylinders */}
        <ellipse cx="80" cy="50" rx="38" ry="12" fill="#38b2e0" fillOpacity="0.2" stroke="#38b2e0" strokeOpacity="0.5" strokeWidth="1.2"/>
        <rect x="42" y="50" width="76" height="48" fill="#38b2e0" fillOpacity="0.08"/>
        <line x1="42" y1="50" x2="42" y2="98" stroke="#38b2e0" strokeOpacity="0.4" strokeWidth="1.2"/>
        <line x1="118" y1="50" x2="118" y2="98" stroke="#38b2e0" strokeOpacity="0.4" strokeWidth="1.2"/>
        <ellipse cx="80" cy="98" rx="38" ry="12" fill="#38b2e0" fillOpacity="0.15" stroke="#38b2e0" strokeOpacity="0.5" strokeWidth="1.2"/>
        <ellipse cx="80" cy="70" rx="38" ry="12" fill="none" stroke="#38b2e0" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3"/>
        {/* Connector line */}
        <line x1="120" y1="74" x2="160" y2="74" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 3"/>
        {/* Table */}
        <rect x="160" y="40" width="100" height="70" rx="6" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
        <rect x="160" y="40" width="100" height="16" rx="6" fill="#38b2e0" fillOpacity="0.2"/>
        {[56,68,80,96].map((y,i) => (
          <rect key={i} x="168" y={y} width={i%2===0?50:35} height="5" rx="2" fill="white" fillOpacity="0.15"/>
        ))}
        <text x="22" y="148" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">CLEAN · LOCKED · VALIDATED</text>
      </svg>
    ),
  },
  "statistical-consulting": {
    gradient: "from-[#1a1035] via-[#261850] to-[#1e2a6e]",
    accentColor: "#a78bfa",
    svg: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Person 1 */}
        <circle cx="80" cy="58" r="18" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeOpacity="0.5" strokeWidth="1.5"/>
        <circle cx="80" cy="54" r="8" fill="#a78bfa" fillOpacity="0.5"/>
        <path d="M60 90 Q80 78 100 90" stroke="#a78bfa" strokeOpacity="0.5" strokeWidth="2" fill="none"/>
        {/* Person 2 */}
        <circle cx="200" cy="58" r="18" fill="#0e9cb8" fillOpacity="0.2" stroke="#0e9cb8" strokeOpacity="0.5" strokeWidth="1.5"/>
        <circle cx="200" cy="54" r="8" fill="#0e9cb8" fillOpacity="0.5"/>
        <path d="M180 90 Q200 78 220 90" stroke="#0e9cb8" strokeOpacity="0.5" strokeWidth="2" fill="none"/>
        {/* Connection arc */}
        <path d="M100 68 Q140 40 180 68" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="5 4" fill="none"/>
        {/* Chat bubble */}
        <rect x="108" y="100" width="64" height="32" rx="8" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
        <rect x="116" y="108" width="40" height="4" rx="2" fill="#a78bfa" fillOpacity="0.5"/>
        <rect x="116" y="118" width="28" height="4" rx="2" fill="white" fillOpacity="0.2"/>
        <path d="M140 132 L136 140 L148 132" fill="white" fillOpacity="0.06"/>
        <text x="22" y="148" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">EXPERT · ADVISORY · SUPPORT</text>
      </svg>
    ),
  },
  "regulatory-submission-support": {
    gradient: "from-[#0a2018] via-[#0f3828] to-[#0d5238]",
    accentColor: "#34d399",
    svg: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Document stack */}
        <rect x="75" y="34" width="90" height="110" rx="6" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" strokeWidth="1" transform="rotate(-5 75 34)"/>
        <rect x="80" y="28" width="90" height="110" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="1" transform="rotate(-2 80 28)"/>
        {/* Main document */}
        <rect x="85" y="22" width="90" height="112" rx="6" fill="#0f3828" stroke="#34d399" strokeOpacity="0.35" strokeWidth="1.2"/>
        {/* Doc lines */}
        {[44,56,68,80,92].map((y,i) => (
          <rect key={i} x="97" y={y} width={i===0?60:45} height="5" rx="2" fill="white" fillOpacity={i===0?0.25:0.12}/>
        ))}
        {/* Checkmarks */}
        <circle cx="108" cy="108" r="9" fill="#34d399" fillOpacity="0.25" stroke="#34d399" strokeOpacity="0.6" strokeWidth="1.2"/>
        <path d="M104 108 L107 111 L113 104" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        {/* FDA badge */}
        <rect x="170" y="60" width="50" height="22" rx="4" fill="#34d399" fillOpacity="0.15" stroke="#34d399" strokeOpacity="0.4" strokeWidth="1"/>
        <text x="177" y="74" fill="#34d399" fillOpacity="0.8" fontSize="9" fontFamily="monospace" fontWeight="bold">eCTD</text>
        <text x="22" y="148" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">FDA · EMA · PMDA READY</text>
      </svg>
    ),
  },
  "medical-writing": {
    gradient: "from-[#201508] via-[#3a2010] to-[#522c10]",
    accentColor: "#fb923c",
    svg: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Paper */}
        <rect x="60" y="20" width="120" height="120" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
        {/* Lines of text */}
        {[42,56,70,84,98,112].map((y,i) => (
          <rect key={i} x="76" y={y} width={[90,75,88,60,82,50][i]} height="6" rx="2" fill="white" fillOpacity={i===0?0.3:0.14}/>
        ))}
        {/* Pen */}
        <g transform="translate(148, 90) rotate(-40)">
          <rect x="-4" y="-45" width="8" height="36" rx="2" fill="#fb923c" fillOpacity="0.8"/>
          <polygon points="-4,−9 4,−9 0,2" fill="#fb923c" fillOpacity="0.9"/>
          <rect x="-4" y="-52" width="8" height="8" rx="1" fill="white" fillOpacity="0.3"/>
        </g>
        {/* Ink scratch */}
        <path d="M142 118 Q155 112 165 120" stroke="#fb923c" strokeOpacity="0.6" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <text x="22" y="148" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">PROTOCOLS · CSR · MANUSCRIPTS</text>
      </svg>
    ),
  },
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];
  const placeholder = placeholderConfig[service.slug] ?? placeholderConfig.biostatistics;

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col rounded-3xl border border-ink/10 bg-surface overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_28px_60px_-24px_rgba(16,28,44,0.35)]"
      >
        {/* ── Image placeholder ──────────────────────────────── */}
        <div
          className={`relative w-full aspect-[16/9] bg-gradient-to-br ${placeholder.gradient} overflow-hidden shrink-0`}
          data-service-placeholder="true"
          data-slug={service.slug}
          aria-label={`${service.title} service illustration placeholder`}
        >
          {/* Subtle grain overlay */}
          <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}}
          />
          {/* SVG illustration */}
          <div className="absolute inset-0 flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-[1.03]">
            {placeholder.svg}
          </div>
          {/* Bottom fade into card */}
          <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-surface/30 to-transparent" />
        </div>

        {/* ── Card body ──────────────────────────────────────── */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-tint text-indigo transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                <Icon size={18} />
              </span>
              <span className="font-mono text-xs text-ink-soft/50">0{index + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-xl text-ink tracking-tight">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.short}</p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-teal">
            Learn more
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
