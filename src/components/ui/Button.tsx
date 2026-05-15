type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--green-300)] text-[var(--white)] hover:bg-[var(--green-100)] shadow-[0_12px_28px_rgba(33,74,34,0.22)]",
    secondary:
      "border border-[var(--green-300)] bg-[var(--white)] text-[var(--green-300)] hover:bg-[var(--green-10)]/40",
  };

  return (
    <button type={type} className={`flex h-14 gap-2 w-full items-center justify-center rounded-full px-8! text-lg font-semibold transition hover:-translate-y-0.5 ${variants[variant]} ${className}`} >
      {children}
    </button>
  );
}