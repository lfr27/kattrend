import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "./icons";

export function Eyebrow({
  children,
  className,
  center,
  light,
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "eyebrow kicker",
        center && "justify-center",
        light && "!text-champagne",
        className
      )}
    >
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "outline",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "outline";
  className?: string;
}) {
  return (
    <Link href={href} className={cn("btn", `btn-${variant}`, className)}>
      {children}
    </Link>
  );
}

export function ViewAllLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 text-[11px] uppercase tracking-luxe border-b border-ink pb-1.5",
        "transition-[gap] duration-300 ease-luxe hover:gap-4",
        className
      )}
    >
      {children}
      <ArrowRight className="w-[18px] h-[9px]" />
    </Link>
  );
}
