import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-ring";

const variants = {
  /* Works on dark (hero, CTA) and light sections equally */
  primary: "bg-teal text-white hover:bg-primary-mid shadow-[0_4px_20px_-6px_rgba(14,156,184,0.45)] hover:shadow-[0_6px_28px_-6px_rgba(14,156,184,0.6)]",
  /* For dark-background sections */
  inverse: "bg-white text-primary hover:bg-teal-tint",
  /* For dark-background sections (hero, CTA banners) */
  outline: "border border-white/35 text-white hover:border-white hover:bg-white/10",
  /* For light-background sections */
  "outline-ink": "border border-ink/25 text-ink hover:border-teal hover:text-teal hover:bg-teal/5",
  "outline-light": "border border-paper/40 text-paper hover:border-paper hover:bg-paper/10",
  ghost: "text-teal hover:text-primary",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
  type = "button",
}) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cn(classes, "group")} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cn(classes, "group")}>
      {content}
    </button>
  );
}
