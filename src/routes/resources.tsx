import { createFileRoute } from "@tanstack/react-router";
import { Book, Headphones, Languages, Wrench } from "lucide-react";

import { resources } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — The Garden of Islam" },
      {
        name: "description",
        content:
          "Recommended books, lectures, research tools and educational resources for serious students.",
      },
      { property: "og:title", content: "Resources — The Garden of Islam" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const icons = {
  "Study Path": Book,
  Lectures: Headphones,
  Tools: Wrench,
  Language: Languages,
} as const;

function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Tools for the Seeker"
        arabic="الأدوات"
        description="A carefully tended list of the resources we return to again and again."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((r) => {
            const Icon = icons[r.kind as keyof typeof icons] ?? Book;
            return (
              <div
                key={r.title}
                className="group flex gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:border-accent"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-garden text-ivory shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">{r.kind}</p>
                  <h2 className="mt-2 font-display text-2xl text-primary">{r.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
