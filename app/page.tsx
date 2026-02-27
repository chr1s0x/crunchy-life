import Link from "next/link";
import Image from "next/image";
import {
  checklistItems,
  CATEGORY_LABELS,
  CATEGORY_ICONS,
  CATEGORY_DESCRIPTIONS,
  type Category,
} from "@/lib/checklist-data";

const categories: Category[] = ["pantry", "personal-care", "cleaning", "lifestyle"];

const levels = [
  { n: 1, name: "Baby Crunchy", desc: "Swap seed oils, cut artificial dyes." },
  { n: 2, name: "Getting Crunchy", desc: "Organic produce, clean beauty basics." },
  { n: 3, name: "Mostly Crunchy", desc: "Filtered water, non-toxic cleaning." },
  { n: 4, name: "Pretty Crunchy", desc: "Raw dairy, homemade products." },
  { n: 5, name: "Full Crunchy", desc: "Grow your own, zero processed." },
];

const categoryCounts: Record<Category, number> = {
  pantry: checklistItems.filter((i) => i.category === "pantry").length,
  "personal-care": checklistItems.filter((i) => i.category === "personal-care").length,
  cleaning: checklistItems.filter((i) => i.category === "cleaning").length,
  lifestyle: checklistItems.filter((i) => i.category === "lifestyle").length,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 lg:items-center">
          {/* Left — headline */}
          <div>
            <p className="label-caps mb-6 text-primary">
              Natural &nbsp;·&nbsp; Clean &nbsp;·&nbsp; Intentional
            </p>
            <h1
              className="mb-6 text-6xl font-bold leading-[1.08] tracking-tight text-foreground md:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Start Living
              <br />
              <em className="not-italic text-primary">Crunchier.</em>
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
              From seed oils to sleep habits — a practical guide to natural
              living, one swap at a time.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/checklist"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                Start the Checklist
              </Link>
              <Link
                href="/pantry"
                className="group flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                View Pantry Guide
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          {/* Right — hedgehog + levels card */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-2">
            <Image src="/hedgehog.png" alt="hedgehog mascot" width={160} height={160} className="object-contain animate-hedgehog-float" />
            <div className="relative rounded-3xl bg-primary p-8 text-primary-foreground shadow-2xl shadow-primary/30">
              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/40 blur-2xl" />

              <p className="label-caps mb-6 text-primary-foreground/60">
                Five levels of crunchy
              </p>

              <div className="flex flex-col gap-3">
                {levels.map(({ n, name, desc }) => (
                  <div key={n} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 text-xs font-bold"
                    >
                      {n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-tight">{name}</p>
                      <p className="text-xs text-primary-foreground/60">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-primary-foreground/20 pt-5">
                <p className="text-xs italic text-primary-foreground/60">
                  Start at Level 1. Go your own pace. No gatekeeping.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div
          className="pointer-events-none absolute right-0 top-0 -z-10 select-none text-[22vw] font-bold leading-none text-primary/[0.04]"
          style={{ fontFamily: "var(--font-playfair)" }}
          aria-hidden
        >
          CRUNCHY
        </div>
      </section>

      {/* ── Stats band ────────────────────────────────── */}
      <section className="bg-primary py-10">
        <div className="mx-auto flex max-w-6xl divide-x divide-primary-foreground/20 px-6">
          {[
            { value: String(checklistItems.length), label: "Action Items" },
            { value: "4", label: "Life Areas" },
            { value: "5", label: "Crunchy Levels" },
            { value: "Free", label: "Always & Forever" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-1 flex-col items-center px-4 py-2 text-primary-foreground">
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {value}
              </span>
              <span className="label-caps mt-1 text-primary-foreground/60">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="label-caps mb-3 text-accent">Where to begin</p>
            <h2
              className="text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Four areas of your life
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((cat, i) => {
              const featured = i === 0;
              return (
                <Link
                  key={cat}
                  href={`/checklist?category=${cat}`}
                  className={`group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-0.5 hover:shadow-xl ${
                    featured
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 sm:row-span-1"
                      : "border border-border bg-card hover:border-primary/30 hover:shadow-primary/10"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-3xl">{CATEGORY_ICONS[cat]}</span>
                    <span
                      className={`label-caps ${
                        featured ? "text-primary-foreground/50" : "text-muted-foreground"
                      }`}
                    >
                      {categoryCounts[cat]} items
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3
                      className={`mb-2 text-xl font-bold ${
                        featured ? "text-primary-foreground" : "text-foreground group-hover:text-primary"
                      }`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {CATEGORY_LABELS[cat]}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        featured ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {CATEGORY_DESCRIPTIONS[cat]}
                    </p>
                  </div>

                  <span
                    className={`mt-6 inline-flex items-center gap-1 text-xs font-semibold transition-transform group-hover:translate-x-0.5 ${
                      featured ? "text-primary-foreground/80" : "text-primary"
                    }`}
                  >
                    Explore →
                  </span>

                  {/* Decorative corner circle */}
                  {featured && (
                    <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-primary-foreground/10" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────── */}
      <section className="border-y border-border bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="label-caps mb-3 text-accent">Simple by design</p>
          <h2
            className="mb-16 text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            How it works
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "Pick a category",
                body: "Start with the area that feels most relevant — pantry, personal care, cleaning, or lifestyle habits.",
              },
              {
                n: "02",
                title: "Start at your level",
                body: "Level 1 is for absolute beginners. Level 5 is for the dedicated homesteader. Everything in between is fair game.",
              },
              {
                n: "03",
                title: "Check things off",
                body: "Your progress saves to your browser automatically. Your Crunchy Score updates in real time as you make swaps.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="relative pl-8">
                <span
                  className="absolute left-0 top-0 text-5xl font-bold leading-none text-foreground/10"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {n}
                </span>
                <div className="pt-12">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-accent px-6 py-24">
        <div className="relative mx-auto max-w-6xl text-center">
          <p className="label-caps mb-4 text-accent-foreground/60">You don&apos;t need to do it all at once</p>
          <h2
            className="mb-6 text-5xl font-bold text-accent-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            One swap a week
            <br />
            changes everything.
          </h2>
          <Link
            href="/checklist"
            className="inline-block rounded-full bg-accent-foreground px-8 py-3.5 text-sm font-semibold text-accent shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Open the Checklist →
          </Link>
        </div>
        <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-accent-foreground/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-accent-foreground/10 blur-3xl" />
      </section>

      <footer className="border-t border-border py-8 text-center">
        <span className="label-caps text-muted-foreground inline-flex items-center gap-2">
          <Image src="/hedgehog.png" alt="hedgehog mascot" width={24} height={24} className="object-contain" />
          The Crunchy Life — live clean, live well
        </span>
      </footer>
    </div>
  );
}
