import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { books, categories } from "@/lib/data";
import { BookCard } from "@/components/book-card";
import { PageHeader } from "@/components/section-heading";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "The Library — The Garden of Islam" },
      {
        name: "description",
        content:
          "Browse a curated digital collection of Islamic books across Aqeedah, Tafsir, Hadith, Fiqh, Seerah and more.",
      },
      { property: "og:title", content: "The Library — The Garden of Islam" },
      { property: "og:url", content: "/library" },
    ],
    links: [{ rel: "canonical", href: "/library" }],
  }),
  component: Library,
});

function Library() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    return books.filter((b) => {
      const matchCat = active === "all" || b.category === active;
      const matchQ =
        query.trim() === "" ||
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
    <>
      <PageHeader
        eyebrow="The Library"
        title="A Garden of Books"
        arabic="المكتبة"
        description="From foundational treatises to full commentaries — every volume, carefully preserved."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Search */}
        <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-soft">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or author…"
            className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
          />
        </div>

        {/* Category chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          <Chip active={active === "all"} onClick={() => setActive("all")} label="All" />
          {categories.map((c) => (
            <Chip
              key={c.slug}
              active={active === c.slug}
              onClick={() => setActive(c.slug)}
              label={c.name}
            />
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No books match this search yet.
          </p>
        )}
      </section>
    </>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}
