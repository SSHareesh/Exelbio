import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function WorkflowSteps({ steps, dark = false }) {
  return (
    <div className="relative">
      <div
        className={cn(
          "hidden lg:block absolute top-[26px] left-[6%] right-[6%] h-px",
          dark ? "bg-white/20" : "bg-border"
        )}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <div className="relative">
              <div
                className={cn(
                  "relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full font-mono text-sm border font-bold",
                  dark
                    ? "bg-primary-mid border-panel-accent/40 text-panel-accent shadow-sm"
                    : "bg-surface border-border text-teal shadow-xs"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className={cn(
                  "mt-4 font-display text-lg tracking-tight",
                  dark ? "text-white font-semibold" : "text-primary font-bold"
                )}
              >
                {step.title}
              </h3>
              <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-panel-muted" : "text-ink-soft")}>
                {step.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

    </div>
  );
}
