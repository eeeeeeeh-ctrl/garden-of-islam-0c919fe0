import { createFileRoute } from "@tanstack/react-router";
import { MessageCircleQuestion, ScrollText } from "lucide-react";

import { articles } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles & Discussions — The Garden of Islam" },
      {
        name: "description",
        content:
          "Islamic studies, research, history, reflections and thoughtful Q&A from the community.",
      },
      { property: "og:title", content: "Articles & Discussions — The Garden of Islam" },
      { property: "og:url", content: "/articles" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: Articles,
});

const discussions = [
  {
    q: "What is the ruling on reciting the Qur'an from a phone during prayer?",
    a: "The majority of contemporary scholars permit it in nafl prayers when needed…",
  },
  {
    q: "How do I begin studying Aqeedah as a beginner?",
    a: "Start with a small, sound text like al-ʿAqīdah al-Wāsiṭiyyah with a good commentary…",
  },
  {
    q: "Which tafsir would you recommend in English?",
    a: "Tafsīr Ibn Kathīr (abridged) and Maʿārif al-Qur'an are excellent starting points…",
  },
];

function Articles() {
  return (
    <>
      <PageHeader
        eyebrow="Articles & Discussions"
        title="From the Study Circle"
        arabic="المقالات والمذاكرات"
        description="Research, reflections and questions — the quiet conversations of a community that reads together."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((a) => (
            <article
              key={a.id}
              className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
                <ScrollText className="h-4 w-4" />
                {a.category} · {a.readTime}
              </div>
              <h2 className="mt-4 font-display text-3xl text-primary group-hover:text-forest">
                {a.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                {a.author} · {a.date}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-parchment py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-accent">Discussions</p>
            <h2 className="mt-3 font-display text-4xl text-primary">
              Questions from the community
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {discussions.map((d, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <summary className="flex cursor-pointer items-start gap-3 font-medium text-foreground">
                  <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{d.q}</span>
                </summary>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">
                  {d.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
