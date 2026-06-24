import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Breadcrumb({
  trail,
}: {
  trail: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-[10px] uppercase tracking-luxe text-ash">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span className="text-graphite">{item.label}</span>
            )}
            {i < trail.length - 1 && <span className="text-silver">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Editorial page header used on interior listing pages.
 * Sits below the fixed nav (note the top padding accounting for header + announcement).
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <header className="bg-pearl pt-[calc(38px+92px)]">
      <div className="wrap py-s6">
        {breadcrumb && (
          <Reveal className="mb-s4">
            <Breadcrumb trail={breadcrumb} />
          </Reveal>
        )}
        <Reveal
          className={cn(
            "flex flex-col",
            align === "center" && "items-center text-center"
          )}
        >
          <span className="eyebrow kicker mb-s3">{eyebrow}</span>
          <h1 className="font-display text-display-xl font-light text-balance">{title}</h1>
          {description && (
            <p
              className={cn(
                "mt-s3 max-w-[52ch] text-[15px] leading-relaxed text-graphite",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
