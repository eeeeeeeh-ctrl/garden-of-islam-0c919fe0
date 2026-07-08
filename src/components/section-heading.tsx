import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">{title}</h2>
      {description && (
        <p className={`mt-3 max-w-2xl text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  arabic,
}: {
  eyebrow: string;
  title: string;
  description: string;
  arabic?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-parchment">
      <div className="pattern-islamic absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">{title}</h1>
        {arabic && <p className="text-arabic mt-3 text-2xl text-forest">{arabic}</p>}
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{description}</p>
        <div className="divider-gold mx-auto mt-8 w-40" />
      </div>
    </section>
  );
}
