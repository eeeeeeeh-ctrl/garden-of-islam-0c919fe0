import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logoMark from "@/assets/logo-mark.png";
import { DISCORD_URL } from "@/lib/data";
import { sections } from "@/lib/sections";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="The Garden of Islam"
            width={44}
            height={44}
            className="h-11 w-11"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-primary">
              The Garden of Islam
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              A digital sanctuary
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {sections.slice(0, 5).map((s) => (
            <Link
              key={s.slug}
              to="/sections/$slug"
              params={{ slug: s.slug }}
              className="text-sm font-medium text-foreground/70 transition hover:text-primary"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-forest sm:inline-flex"
          >
            Join Discord
          </a>
          <button
            aria-label="Toggle navigation"
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
            {sections.map((s) => (
              <Link
                key={s.slug}
                to="/sections/$slug"
                params={{ slug: s.slug }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm text-foreground/80 hover:bg-secondary"
              >
                <span>{s.name}</span>
                <span className="text-arabic text-accent">{s.arabic}</span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
