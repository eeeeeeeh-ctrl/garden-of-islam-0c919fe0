import { Link } from "@tanstack/react-router";
import type { Book } from "@/lib/data";

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      to="/library/$id"
      params={{ id: book.id }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-cream shadow-book transition-transform duration-500 group-hover:-translate-y-1">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" />
      </div>
      <div className="mt-4">
        <p className="text-[10px] uppercase tracking-[0.25em] text-accent">
          {book.category}
        </p>
        <h3 className="mt-1 font-display text-xl text-primary transition group-hover:text-forest">
          {book.title}
        </h3>
        {book.arabic && (
          <p className="text-arabic mt-1 text-sm text-muted-foreground">{book.arabic}</p>
        )}
        <p className="mt-1 text-xs text-muted-foreground">{book.author}</p>
      </div>
    </Link>
  );
}
