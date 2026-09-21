import { UserCheck, ShieldCheck, GitBranch, Clock4 } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const iconMap = { UserCheck, ShieldCheck, GitBranch, Clock4 };

export default function StrengthCard({ item, index, dark = false }) {
  const Icon = iconMap[item.icon];
  return (
    <Reveal delay={(index % 4) * 0.07} className="h-full">
      <div
        className={cn(
          "h-full rounded-2xl border p-6 transition-all duration-300",
          dark
            ? "border-white/15 bg-white/[0.06] hover:bg-white/[0.10] hover:border-panel-accent/40 shadow-sm"
            : "border-border bg-surface hover:border-teal/40 hover:shadow-[0_18px_40px_rgba(18,59,109,0.08)]"
        )}
      >
        <span className={cn(
          "relative flex h-11 w-11 items-center justify-center rounded-full border",
          dark ? "border-panel-accent/40 bg-panel-accent/10 text-panel-accent" : "border-teal/30 bg-teal-tint text-teal"
        )}>
          <Icon size={18} />
          <span className={cn(
            "absolute inset-0 rounded-full border scale-125 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            dark ? "border-panel-accent/30" : "border-teal/20"
          )} />
        </span>
        <h3 className={cn(
          "mt-5 font-display text-lg sm:text-xl tracking-tight leading-snug",
          dark ? "text-white font-semibold" : "text-primary font-bold"
        )}>
          {item.title}
        </h3>
        <p className={cn(
          "mt-2 text-sm leading-relaxed",
          dark ? "text-panel-muted" : "text-ink-soft"
        )}>
          {item.detail}
        </p>
      </div>

    </Reveal>
  );
}
