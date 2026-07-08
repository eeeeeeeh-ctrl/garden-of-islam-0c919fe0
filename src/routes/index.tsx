import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import logoMark from "@/assets/logo-mark.png";
import calligraphy1 from "@/assets/calligraphy-1.png";
import calligraphy2 from "@/assets/calligraphy-2.png";
import calligraphy3 from "@/assets/calligraphy-3.png";
import calligraphy4 from "@/assets/calligraphy-4.png";
import sufiVideo from "@/assets/sufi-hero-bg.mp4.asset.json";
import calligraphyInkVideo from "@/assets/calligraphy-ink.mp4.asset.json";
import mosqueDawnVideo from "@/assets/mosque-dawn.mp4.asset.json";
import desertNightVideo from "@/assets/desert-night.mp4.asset.json";
import manuscriptVideo from "@/assets/manuscript.mp4.asset.json";
import { DISCORD_URL } from "@/lib/data";
import { sections } from "@/lib/sections";

export const Route = createFileRoute("/")({
  component: Home,
});

const hadiths = [
  {
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
    english: "Actions are but by their intentions.",
    source: "Ṣaḥīḥ al-Bukhārī 1",
  },
  {
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    english: "Whoever treads a path in search of knowledge, Allah eases for him a path to Paradise.",
    source: "Ṣaḥīḥ Muslim 2699",
  },
  {
    arabic: "الدِّينُ النَّصِيحَةُ",
    english: "The religion is sincere counsel.",
    source: "Ṣaḥīḥ Muslim 55",
  },
  {
    arabic: "مَنْ لَا يَرْحَمُ لَا يُرْحَمُ",
    english: "Whoever does not show mercy will not be shown mercy.",
    source: "Ṣaḥīḥ al-Bukhārī 7376",
  },
  {
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    english: "A Muslim is one from whose tongue and hand other Muslims are safe.",
    source: "Ṣaḥīḥ al-Bukhārī 10",
  },
  {
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    english: "None of you truly believes until he loves for his brother what he loves for himself.",
    source: "Ṣaḥīḥ al-Bukhārī 13",
  },
];

// Whirling dervish silhouette — a Sufi in sama'
function WhirlingDervish({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 160" className={className} style={style} aria-hidden>
      <g fill="currentColor">
        {/* Sikke (tall hat) */}
        <path d="M42 6 L58 6 L57 30 L43 30 Z" />
        {/* Head */}
        <ellipse cx="50" cy="34" rx="5.5" ry="5" />
        {/* Body/torso */}
        <path d="M44 40 L56 40 L58 62 L42 62 Z" />
        {/* Outstretched arms */}
        <path d="M20 46 L44 44 L44 52 L22 54 Z" opacity="0.85" />
        <path d="M56 44 L80 46 L78 54 L56 52 Z" opacity="0.85" />
        {/* Flaring skirt — the whirling tennure */}
        <path d="M20 62 L80 62 L96 150 L4 150 Z" opacity="0.9" />
        <path d="M28 62 L72 62 L88 150 L12 150 Z" opacity="0.55" />
        <path d="M36 62 L64 62 L78 150 L22 150 Z" opacity="0.35" />
      </g>
    </svg>
  );
}

// A slow drifting light backdrop that reads as cinematic ambient motion.
function AmbientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft moving blooms */}
      <div className="absolute -left-40 top-0 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(212,175,90,0.28),transparent_70%)] blur-3xl animate-[bloom_18s_ease-in-out_infinite]" />
      <div className="absolute right-[-15%] top-[30%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(120,180,140,0.22),transparent_70%)] blur-3xl animate-[bloom_24s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-[-20%] left-[20%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(212,175,90,0.18),transparent_70%)] blur-3xl animate-[bloom_30s_ease-in-out_infinite]" />

      {/* Radiant light rays sweeping from above (nur) */}
      <div
        className="absolute left-1/2 top-[-30%] h-[140%] w-[140%] -translate-x-1/2 opacity-[0.09]"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 20%, transparent 0deg, rgba(212,175,90,0.6) 6deg, transparent 12deg, transparent 30deg, rgba(212,175,90,0.5) 36deg, transparent 42deg, transparent 60deg, rgba(212,175,90,0.6) 66deg, transparent 72deg, transparent 90deg, rgba(212,175,90,0.5) 96deg, transparent 102deg, transparent 360deg)",
          animation: "spin 220s linear infinite",
        }}
      />

      {/* Slow rotating star of alignment (Rub el Hizb tessellation) */}
      <svg
        viewBox="0 0 400 400"
        className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        style={{ animation: "spin 180s linear infinite" }}
      >
        <g fill="none" stroke="#d4af5a" strokeWidth="0.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <polygon
              key={i}
              points="200,40 240,160 360,160 264,232 300,352 200,280 100,352 136,232 40,160 160,160"
              transform={`rotate(${(i * 360) / 24} 200 200) scale(${0.4 + i * 0.03})`}
              style={{ transformOrigin: "200px 200px" }}
            />
          ))}
        </g>
      </svg>

      {/* Counter-rotating geometric mandala */}
      <svg
        viewBox="0 0 400 400"
        className="absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.09]"
        style={{ animation: "spin 260s linear infinite reverse" }}
      >
        <g fill="none" stroke="#d4af5a" strokeWidth="0.4">
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`rotate(${(i * 360) / 16} 200 200)`}>
              <circle cx="200" cy="80" r="40" />
              <circle cx="200" cy="120" r="20" />
            </g>
          ))}
        </g>
      </svg>

      {/* Whirling dervishes drifting across */}
      <div
        className="absolute left-[8%] top-[55%] h-40 w-24 text-gold-soft/20"
        style={{ animation: "dervish-drift 42s linear infinite" }}
      >
        <div className="h-full w-full" style={{ animation: "whirl 6s linear infinite" }}>
          <WhirlingDervish className="h-full w-full" />
        </div>
      </div>
      <div
        className="absolute right-[10%] top-[20%] h-32 w-20 text-gold-soft/15"
        style={{ animation: "dervish-drift 56s linear infinite reverse", animationDelay: "-8s" }}
      >
        <div className="h-full w-full" style={{ animation: "whirl 8s linear infinite reverse" }}>
          <WhirlingDervish className="h-full w-full" />
        </div>
      </div>
      <div
        className="absolute left-[42%] bottom-[8%] h-28 w-16 text-gold-soft/18"
        style={{ animation: "dervish-drift 70s linear infinite", animationDelay: "-25s" }}
      >
        <div className="h-full w-full" style={{ animation: "whirl 5s linear infinite" }}>
          <WhirlingDervish className="h-full w-full" />
        </div>
      </div>

      {/* Drifting crescents */}
      {[
        { top: "12%", left: "18%", size: 28, dur: 34, delay: 0 },
        { top: "70%", left: "78%", size: 22, dur: 44, delay: -12 },
        { top: "40%", left: "88%", size: 18, dur: 52, delay: -30 },
        { top: "82%", left: "8%", size: 24, dur: 40, delay: -18 },
      ].map((c, i) => (
        <svg
          key={i}
          viewBox="0 0 40 40"
          className="absolute text-gold-soft/30"
          style={{
            top: c.top,
            left: c.left,
            width: c.size,
            height: c.size,
            animation: `float ${c.dur}s ease-in-out infinite`,
            animationDelay: `${c.delay}s`,
          }}
          aria-hidden
        >
          <path
            d="M28 6 A 15 15 0 1 0 28 34 A 12 12 0 1 1 28 6 Z"
            fill="currentColor"
          />
        </svg>
      ))}

      {/* Floating divine name calligraphy (Allah, Muhammad ﷺ) */}
      {[
        { top: "18%", left: "72%", word: "ٱللَّٰه", size: "text-6xl", dur: 38, delay: 0, rot: -6 },
        { top: "62%", left: "12%", word: "مُحَمَّد ﷺ", size: "text-5xl", dur: 48, delay: -14, rot: 4 },
        { top: "35%", left: "35%", word: "هُو", size: "text-7xl", dur: 60, delay: -28, rot: -3 },
        { top: "78%", left: "55%", word: "لَا إِلَٰهَ إِلَّا ٱللَّٰه", size: "text-3xl", dur: 44, delay: -6, rot: 2 },
      ].map((c, i) => (
        <span
          key={i}
          className={`text-arabic absolute font-semibold text-gold-soft/[0.08] ${c.size}`}
          style={{
            top: c.top,
            left: c.left,
            transform: `rotate(${c.rot}deg)`,
            animation: `float ${c.dur}s ease-in-out infinite`,
            animationDelay: `${c.delay}s`,
          }}
          aria-hidden
        >
          {c.word}
        </span>
      ))}

      {/* Drifting motes / stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-[3px] w-[3px] rounded-full bg-gold-soft/60"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animation: `drift ${18 + (i % 7) * 3}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
            boxShadow: "0 0 6px rgba(212,175,90,0.6)",
          }}
        />
      ))}

      {/* Twinkling larger stars */}
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={`tw-${i}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-gold-soft"
          style={{
            top: `${(i * 71) % 100}%`,
            left: `${(i * 91) % 100}%`,
            animation: `twinkle ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
            boxShadow: "0 0 10px rgba(212,175,90,0.9)",
          }}
        />
      ))}

      <style>{`
        @keyframes bloom { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(4%,-3%,0) scale(1.1); } }
        @keyframes drift { 0% { transform: translate(0,0); opacity: 0; } 10% { opacity: 1; } 100% { transform: translate(-40px,-140px); opacity: 0; } }
        @keyframes float { 0%,100% { transform: translate3d(0,0,0) rotate(var(--r,0deg)); } 50% { transform: translate3d(-3%,-4%,0) rotate(var(--r,0deg)); } }
        @keyframes twinkle { 0%,100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.4); } }
        @keyframes dervish-drift {
          0% { transform: translate3d(-20vw, 0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate3d(120vw, -8vh, 0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// Rub el Hizb (Islamic star) as an SVG motif.
function RubElHizb({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="22" y="22" width="56" height="56" transform="rotate(0 50 50)" />
        <rect x="22" y="22" width="56" height="56" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="4" />
      </g>
    </svg>
  );
}

function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-garden text-ivory">
        {/* Cinematic video backdrop */}
        <video
          src={sufiVideo.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-garden/55" aria-hidden />
        <div className="pattern-islamic absolute inset-0 opacity-20" aria-hidden />
        <AmbientBackdrop />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.55)_95%)]"
          aria-hidden
        />

        {/* Large calligraphy overlays — irregular, drifting, cinematic */}
        <img
          src={calligraphy1}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[-8%] top-[4%] w-[52%] -rotate-[8deg] opacity-[0.14] blur-[1px] drop-shadow-[0_25px_60px_rgba(212,175,90,0.35)] animate-[drift-slow_28s_ease-in-out_infinite]"
        />
        <img
          src={calligraphy3}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[-10%] bottom-[6%] w-[55%] rotate-[6deg] opacity-[0.13] blur-[1px] drop-shadow-[0_25px_60px_rgba(212,175,90,0.3)] animate-[drift-slow_36s_ease-in-out_infinite_reverse]"
        />
        <img
          src={calligraphy2}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[40%] top-[8%] w-[18%] -rotate-[14deg] opacity-[0.11] blur-[0.5px]"
        />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center md:py-40">
          <p className="text-arabic animate-fade-up text-3xl text-gold-soft md:text-4xl">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <div className="divider-gold mt-6 w-40 opacity-70" />

          {/* Rotating, animated hero logo — a whirling sanctuary mark */}
          <div className="relative mt-12 h-64 w-64 md:h-80 md:w-80">
            {/* Radiant halo */}
            <div className="absolute inset-0 -m-10 rounded-full bg-[radial-gradient(circle,rgba(212,175,90,0.35),transparent_70%)] blur-3xl animate-[pulse-glow_5s_ease-in-out_infinite]" aria-hidden />

            {/* Concentric orbit rings, opposing rotations */}
            <div className="absolute inset-0 -m-2 rounded-full border border-gold-soft/30 animate-[spin_40s_linear_infinite]" aria-hidden />
            <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-gold-soft/20 animate-[spin_80s_linear_infinite_reverse]" aria-hidden />
            <div className="absolute inset-0 -m-16 rounded-full border border-gold-soft/10 animate-[spin_140s_linear_infinite]" aria-hidden />

            {/* Sufi 8-point star (Rub el Hizb) as slow spinning corona */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 -m-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] animate-[spin_60s_linear_infinite]" aria-hidden>
              <g fill="none" stroke="rgba(212,175,90,0.4)" strokeWidth="0.6">
                <rect x="40" y="40" width="120" height="120" transform="rotate(0 100 100)" />
                <rect x="40" y="40" width="120" height="120" transform="rotate(45 100 100)" />
                <circle cx="100" cy="100" r="94" strokeDasharray="2 6" />
              </g>
            </svg>

            {/* Petals orbiting outward */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 -m-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] animate-[spin_25s_linear_infinite_reverse]" aria-hidden>
              <g fill="rgba(212,175,90,0.35)">
                {Array.from({ length: 12 }).map((_, i) => (
                  <ellipse key={i} cx="100" cy="10" rx="2.4" ry="6" transform={`rotate(${i * 30} 100 100)`} />
                ))}
              </g>
            </svg>

            {/* The mark itself — gentle continuous rotation + breath */}
            <img
              src={logoMark}
              alt="The Garden of Islam"
              width={320}
              height={320}
              className="animate-[whirl_45s_linear_infinite] relative z-10 h-full w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
              style={{ filter: "drop-shadow(0 0 30px rgba(212,175,90,0.35))" }}
            />
          </div>

          <p className="animate-fade-up mt-14 text-[11px] uppercase tracking-[0.5em] text-gold-soft">
            A Digital Sanctuary of Islamic Knowledge
          </p>
          <h1 className="animate-fade-up mt-6 font-display text-6xl leading-[1.02] md:text-8xl">
            The Garden of <span className="text-gradient-gold italic">Islam</span>
          </h1>
          <p className="text-arabic animate-fade-up mt-4 text-2xl text-gold-soft md:text-3xl">
            جَنَّةُ الْعِلْم
          </p>
          <p className="animate-fade-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
            A preserved archive of Islamic scholarship. Books, scans, and articles across the
            classical sciences, gathered with care for students of the tradition.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground shadow-leaf transition hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" />
              Join the Discord
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <Link
              to="/sections/$slug"
              params={{ slug: "sunni-archive" }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-soft/40 px-8 py-4 text-base font-medium text-gold-soft transition hover:bg-gold-soft/10"
            >
              Enter the archive
            </Link>
          </div>
        </div>

        {/* Calligraphy footer band inside hero */}
        <div className="relative border-t border-gold-soft/15 bg-black/25 py-8 overflow-hidden">
          <img
            src={calligraphy4}
            alt=""
            aria-hidden
            className="mx-auto max-h-20 w-auto opacity-80 drop-shadow-[0_10px_30px_rgba(212,175,90,0.35)]"
          />
        </div>

        {/* Hero-scoped keyframes */}
        <style>{`
          @keyframes whirl { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes drift-slow { 0%,100% { transform: translate3d(0,0,0) rotate(var(--tw-rotate,0)); } 50% { transform: translate3d(2%,-1.5%,0) rotate(var(--tw-rotate,0)); } }
          @keyframes pulse-glow { 0%,100% { opacity:.6; transform: scale(1); } 50% { opacity:1; transform: scale(1.08); } }
        `}</style>
      </section>

      {/* ========== AYAH BAND ========== */}
      <section className="relative overflow-hidden border-y border-accent/20 bg-parchment py-24">
        <div className="pattern-islamic absolute inset-0 opacity-[0.06]" aria-hidden />
        <RubElHizb className="absolute left-8 top-8 h-16 w-16 text-accent/25" />
        <RubElHizb className="absolute right-8 bottom-8 h-16 w-16 text-accent/25" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">
            From the Qur'an · Sūrah Ṭā-Hā 20:114
          </p>
          <p className="text-arabic mt-6 text-5xl leading-[1.6] text-primary md:text-6xl">
            وَقُل رَّبِّ زِدْنِى عِلْمًا
          </p>
          <p className="mt-6 font-display text-2xl italic text-forest md:text-3xl">
            &ldquo;And say: my Lord, increase me in knowledge.&rdquo;
          </p>
        </div>
      </section>

      {/* ========== SECTIONS GRID (the store) ========== */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <img
          src={calligraphy2}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-4 top-8 h-40 w-auto opacity-[0.06]"
        />

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-arabic text-3xl text-accent">أَقْسَام الْمَكْتَبَة</p>
          <p className="mt-3 text-xs uppercase tracking-[0.4em] text-accent">The Sections</p>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            A garden of disciplines
          </h2>
          <div className="divider-gold mx-auto mt-6 w-32" />
          <p className="mt-4 text-muted-foreground">
            The archive is arranged into seven principal sections. Each is a gate into a discipline
            of the classical tradition.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <Link
              key={s.slug}
              to="/sections/$slug"
              params={{ slug: s.slug }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:border-accent"
            >
              <RubElHizb className="absolute right-4 top-4 h-6 w-6 text-accent/40 transition group-hover:text-accent" />
              <span
                className="text-arabic pointer-events-none absolute -right-4 -bottom-8 text-[7rem] leading-none text-accent/10 transition group-hover:text-accent/20"
                aria-hidden
              >
                {s.arabic}
              </span>
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
                  {String(i + 1).padStart(2, "0")} · Section
                </p>
                <h3 className="mt-3 font-display text-3xl text-primary">{s.name}</h3>
                <p className="text-arabic mt-1 text-lg text-forest">{s.arabic}</p>
                <p className="mt-4 text-sm text-muted-foreground">{s.tagline}</p>
                <span className="mt-8 inline-flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-accent">
                  Enter <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== HADITH GRID ========== */}
      <section className="relative overflow-hidden bg-parchment py-24">
        <div className="pattern-islamic absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">
              Aḥādīth · Prophetic Sayings ﷺ
            </p>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
              Light from the Beloved ﷺ
            </h2>
            <div className="divider-gold mx-auto mt-6 w-32" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {hadiths.map((h, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:border-accent"
              >
                <span
                  className="text-arabic absolute -right-2 -top-6 text-[8rem] leading-none text-accent/10 transition group-hover:text-accent/20"
                  aria-hidden
                >
                  ﷺ
                </span>
                <div className="relative">
                  <p className="text-arabic text-right text-2xl leading-[2] text-primary md:text-3xl">
                    {h.arabic}
                  </p>
                  <div className="mt-6 h-px w-16 bg-accent/40" />
                  <p className="mt-6 font-display text-lg italic text-foreground/85">
                    &ldquo;{h.english}&rdquo;
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-accent">
                    {h.source}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ASMA UL HUSNA STRIP ========== */}
      <section className="relative overflow-hidden bg-garden py-24 text-ivory">
        <div className="pattern-islamic absolute inset-0 opacity-25" aria-hidden />
        <AmbientBackdrop />
        <img
          src={calligraphy2}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-8 top-8 h-56 w-auto opacity-[0.1]"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <RubElHizb className="mx-auto h-8 w-8 text-gold-soft" />
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-gold-soft">
            Al-Asmāʾ al-Ḥusnā · The Most Beautiful Names
          </p>
          <h2 className="mt-4 font-display text-4xl italic md:text-5xl">
            To Him belong the most beautiful names
          </h2>
          <p className="text-arabic mt-6 text-3xl text-gold-soft md:text-4xl">
            وَلِلَّهِ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ فَٱدْعُوهُ بِهَا
          </p>

          <div className="divider-gold mx-auto mt-10 w-40 opacity-60" />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              "الرَّحْمٰن",
              "الرَّحِيم",
              "الْمَلِك",
              "الْقُدُّوس",
              "السَّلَام",
              "الْمُؤْمِن",
              "الْعَزِيز",
              "الْجَبَّار",
              "الْمُتَكَبِّر",
              "الْخَالِق",
              "الْبَارِئ",
              "الْمُصَوِّر",
              "الْغَفَّار",
              "الْقَهَّار",
              "الْوَهَّاب",
              "الرَّزَّاق",
              "الْحَكِيم",
              "النُّور",
              "الْحَقّ",
              "الْوَدُود",
            ].map((name) => (
              <span
                key={name}
                className="text-arabic text-2xl text-ivory/85 transition hover:text-gold-soft md:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DISCORD CTA ========== */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-garden p-12 text-ivory shadow-leaf md:p-16">
          <div className="pattern-islamic absolute inset-0 opacity-30" aria-hidden />
          <img
            src={calligraphy4}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-6 h-40 w-auto opacity-[0.12]"
          />
          <RubElHizb className="absolute right-6 bottom-6 h-10 w-10 text-gold-soft/40" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">Community</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Company on the path of knowledge
              </h2>
              <p className="text-arabic mt-3 text-2xl text-gold-soft">
                صُحْبَةٌ عَلَى طَرِيقِ الْعِلْم
              </p>
              <p className="mt-3 text-ivory/80">
                A moderated Discord for students of the tradition: reminders, study circles, and
                serious discussion with adab.
              </p>
            </div>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground shadow-soft"
            >
              <MessageCircle className="h-5 w-5" />
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
