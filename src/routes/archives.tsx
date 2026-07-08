import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { archives } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";

export const Route = createFileRoute("/archives")({
  head: () => ({
    meta: [
      { title: "The Archives — The Garden of Islam" },
      {
        name: "description",
        content:
          "A digitised collection of Islamic manuscripts, rare books, historical scans and documents.",
      },
      { property: "og:title", content: "The Archives — The Garden of Islam" },
      { property: "og:url", content: "/archives" },
    ],
    links: [{ rel: "canonical", href: "/archives" }],
  }),
  component: Archives,
});

function Archives() {
  return (
    <>
      <PageHeader
        eyebrow="The Archives"
        title="Manuscripts & Rare Scans"
        arabic="المخطوطات"
        description="A quiet vault of hand-copied books, historical documents and rare imagery — preserved for the seekers of tomorrow."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {archives.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:border-accent"
            >
              <div className="aspect-[5/4] overflow-hidden bg-cream">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  {item.date}
                </p>
                <h2 className="mt-3 font-display text-2xl text-primary">{item.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">by {item.author}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {item.description}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="h-4 w-4" /> Download scan
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
