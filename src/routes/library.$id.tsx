import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, BookOpen } from "lucide-react";

import { books, categories } from "@/lib/data";
import { BookCard } from "@/components/book-card";

export const Route = createFileRoute("/library/$id")({
  loader: ({ params }) => {
    const book = books.find((b) => b.id === params.id);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Book not found — The Garden of Islam" }] };
    }
    return {
      meta: [
        { title: `${loaderData.book.title} — The Garden of Islam` },
        { name: "description", content: loaderData.book.description },
        { property: "og:title", content: loaderData.book.title },
        { property: "og:description", content: loaderData.book.description },
        { property: "og:image", content: loaderData.book.cover },
      ],
    };
  },
  component: BookDetail,
});

function BookDetail() {
  const { book } = Route.useLoaderData();
  const category = categories.find((c) => c.slug === book.category);
  const related = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4);

  return (
    <>
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link
            to="/library"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Library
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 md:grid-cols-[minmax(0,340px)_1fr]">
        <div>
          <div className="overflow-hidden rounded-lg bg-cream shadow-book">
            <img
              src={book.cover}
              alt={book.title}
              width={800}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            {category?.name}
          </p>
          <h1 className="mt-3 font-display text-5xl text-primary">{book.title}</h1>
          {book.arabic && (
            <p className="text-arabic mt-2 text-3xl text-forest">{book.arabic}</p>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            by <span className="text-foreground">{book.author}</span> · {book.year}
          </p>

          <div className="divider-gold mt-6 w-24" />

          <p className="mt-6 leading-relaxed text-foreground/80">{book.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:bg-forest">
              <Download className="h-4 w-4" /> Download PDF
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary">
              <BookOpen className="h-4 w-4" /> Read online
            </button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
            <Meta label="Author" value={book.author} />
            <Meta label="Category" value={category?.name ?? ""} />
            <Meta label="Original date" value={book.year} />
            <Meta label="Language" value="Arabic · English" />
          </dl>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-parchment py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl text-primary">Related works</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((b) => (
                <BookCard key={b.id} book={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-foreground">{value}</dd>
    </div>
  );
}
