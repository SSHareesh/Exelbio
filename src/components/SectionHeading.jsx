import { cn } from "../utils/cn";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "font-mono text-xs uppercase tracking-[0.22em] mb-4 flex items-center gap-2 font-bold",
              align === "center" && "justify-center",
              light ? "text-panel-accent" : "text-teal"
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2]",
            light ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", light ? "text-panel-muted" : "text-ink-soft")}>
            {description}
          </p>
        </Reveal>
      )}

    </div>
  );
}
