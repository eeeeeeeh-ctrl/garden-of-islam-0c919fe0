import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Hammer } from "lucide-react";
import type { Section } from "@/lib/sections";

import { getSection, sections } from "@/lib/sections";

export const Route = createFileRoute("/sections/$slug")({
  loader: ({ params }) => {
    const section = getSection(params.slug);
    if (!section) throw notFound();
    return { section };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.section.name} · The Garden of Islam` },
          { name: "description", content: loaderData.section.intro },
        ]
      : [],
  }),
  component: SectionPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-accent">Not found</p>
      <h1 className="mt-4 font-display text-4xl text-primary">This section is not yet planted.</h1>
      <Link to="/" className="mt-8 inline-block text-accent underline underline-offset-4">
        Return to the garden
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl text-primary">A tree fell across the path</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function SectionPage() {
  const { section } = Route.useLoaderData() as { section: Section };
  const others = sections.filter((s) => s.slug !== section.slug).slice(0, 4);

  return (
    <>
      {/* Header band */}
      <section className="relative overflow-hidden bg-garden text-ivory">
        <div className="pattern-islamic absolute inset-0 opacity-25" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.55)_90%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-xs uppercase tracking-[0.5em] text-gold-soft">Section</p>
          <p className="text-arabic mt-6 text-5xl text-gold-soft md:text-6xl">{section.arabic}</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">{section.name}</h1>
          <div className="divider-gold mx-auto mt-8 w-40 opacity-70" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
            {section.intro}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-gold-soft">
            {section.tagline}
          </p>
        </div>
      </section>

      {/* Work in progress */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-card p-12 text-center shadow-soft md:p-16">
          <div className="pattern-islamic absolute inset-0 opacity-[0.06]" aria-hidden />
          <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,90,0.25),transparent_70%)] blur-2xl" aria-hidden />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-secondary/60 text-accent">
              <Hammer className="h-7 w-7" />
            </div>
            <p className="text-arabic mt-6 text-3xl text-accent">قَيْد الْإِنْشَاء</p>
            <p className="mt-3 text-xs uppercase tracking-[0.4em] text-accent">
              Under construction
            </p>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Work in progress
            </h2>
            <div className="divider-gold mx-auto mt-6 w-32" />
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              This section is being planted. Scans, articles, and primary-source excerpts will
              appear here as the archive grows, in shāʾ Allāh.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-accent transition hover:bg-accent/10"
            >
              Return to the garden
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other sections */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Continue</p>
          <h2 className="mt-3 font-display text-3xl text-primary">Other sections of the garden</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/sections/$slug"
              params={{ slug: s.slug }}
              className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent"
            >
              <p className="text-arabic text-2xl text-accent">{s.arabic}</p>
              <p className="mt-2 font-display text-xl text-primary">{s.name}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-accent">
                Enter <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
