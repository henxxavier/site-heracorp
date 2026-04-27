import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "outline-white";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#0292b7] text-white hover:bg-[#027a9a] focus-visible:ring-[#0292b7] shadow-sm",
  secondary:
    "bg-[#1c4c86] text-white hover:bg-[#163d6e] focus-visible:ring-[#1c4c86] shadow-sm",
  outline:
    "border-2 border-[#0292b7] text-[#0292b7] bg-transparent hover:bg-[#0292b7] hover:text-white focus-visible:ring-[#0292b7]",
  "outline-white":
    "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1c4c86] focus-visible:ring-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
