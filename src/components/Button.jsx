import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-ring";

const variants = {
  /* Primary teal button matching reference */
  primary: "bg-teal text-white hover:bg-teal-hover shadow-[0_8px_22px_rgba(18,167,165,0.22)] hover:-translate-y-0.5",
  /* Accent green button */
  green: "bg-green text-white hover:bg-[#1ca057] shadow-[0_8px_22px_rgba(32,183,101,0.20)] hover:-translate-y-0.5",
  /* White outline button with navy text and border matching mockup */
  outline: "border border-border bg-white text-primary hover:bg-paper hover:text-teal hover:border-teal/35 hover:-translate-y-0.5",
  /* Outline for light backgrounds */
  "outline-ink": "border border-border bg-white text-primary hover:border-teal hover:text-teal hover:bg-teal-tint/50",
  /* Inverse for dark navy panels */
  inverse: "bg-white text-primary hover:bg-teal-tint shadow-sm hover:-translate-y-0.5",
  /* Outline for dark navy panels */
  "outline-light": "border border-white/35 text-white hover:border-white hover:bg-white/10",
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
