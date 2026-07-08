import { Link } from "@tanstack/react-router";

import logoMark from "@/assets/logo-mark.png";
import { DISCORD_URL } from "@/lib/data";
import { sections } from "@/lib/sections";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-garden text-ivory">
      <div className="pattern-islamic absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.2fr_2fr]">
        <div>
          <img
            src={logoMark}
            alt="The Garden of Islam"
            width={96}
            height={96}
            className="h-24 w-24 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          />
          <p className="mt-6 font-display text-3xl">The Garden of Islam</p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-ivory/60">
            Knowledge · Preservation · Company
          </p>
          <p className="text-arabic mt-6 text-lg text-ivory/75">وَقُل رَّبِّ زِدْنِي عِلْمًا</p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition hover:brightness-105"
          >
            Join our Discord
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">Sections</p>
          <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {sections.map((s) => (
              <Link
                key={s.slug}
                to="/sections/$slug"
                params={{ slug: s.slug }}
                className="flex items-center justify-between border-b border-ivory/10 pb-2 text-ivory/85 transition hover:text-gold-soft"
              >
                <span>{s.name}</span>
                <span className="text-arabic text-sm text-gold-soft/80">{s.arabic}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="divider-gold mx-auto max-w-5xl opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6 py-6 text-center text-xs text-ivory/60">
        © {new Date().getFullYear()} The Garden of Islam. Cultivated with care.
      </div>
    </footer>
  );
}
