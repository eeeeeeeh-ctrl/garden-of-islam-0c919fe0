import { createFileRoute } from "@tanstack/react-router";
import { BookMarked, MessageCircle, ShieldCheck, Sparkles, Users } from "lucide-react";

import { DISCORD_URL } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — The Garden of Islam" },
      {
        name: "description",
        content:
          "Join our Discord community for study groups, book discussions and thoughtful Q&A.",
      },
      { property: "og:title", content: "Community — The Garden of Islam" },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: Community,
});

const features = [
  { icon: Users, title: "Study groups", body: "Small, focused circles reading a text together over weeks." },
  { icon: BookMarked, title: "Book discussions", body: "Weekly threads on featured books from the Library." },
  { icon: MessageCircle, title: "Questions & answers", body: "A dedicated space for sincere questions, kindly answered." },
  { icon: Sparkles, title: "Quiet reflection", body: "Channels for reminders, poetry and reflection." },
];

const rules = [
  "Speak with adab. Assume good in every message.",
  "Cite scholars — avoid rulings without sources.",
  "No sectarian attacks. Disagree with knowledge and gentleness.",
  "Keep discussions on topic and constructive.",
  "Protect privacy — never share others' details.",
];

function Community() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Study Together in the Garden"
        arabic="المجتمع"
        description="A Discord home for readers, students and teachers — where knowledge is shared with sincerity."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-garden p-10 text-ivory shadow-leaf md:p-14">
          <div className="pattern-islamic absolute inset-0 opacity-25" aria-hidden />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Ahlan wa sahlan</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Come sit in the shade with us
            </h2>
            <p className="mt-4 max-w-2xl text-ivory/80">
              Our Discord is a small, considered community of Muslims from around the
              world — students, teachers, converts, and lifelong seekers. Bring your
              questions and your curiosity.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground shadow-soft"
            >
              <MessageCircle className="h-5 w-5" /> Join the Discord
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-xl text-primary">{f.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-parchment py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-3 text-accent">
            <ShieldCheck className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.3em]">Community rules</p>
          </div>
          <h2 className="mt-3 font-display text-4xl text-primary">Adab of the garden</h2>
          <ul className="mt-8 space-y-3">
            {rules.map((r, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 text-sm text-foreground/80"
              >
                <span className="font-display text-xl text-accent">{i + 1}</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
