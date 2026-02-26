"use client";

import { useState, useEffect } from "react";
import { pantryItems, type PantryItem } from "@/lib/checklist-data";
import { getPantryProgress, togglePantryItem } from "@/lib/progress";

function PantryCard({
  item,
  checked,
  onToggle,
}: {
  item: PantryItem;
  checked: boolean;
  onToggle: () => void;
}) {
  const isCrunchy = item.status === "crunchy";

  return (
    <button
      onClick={onToggle}
      className={`group relative flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all hover:-translate-y-0.5 ${
        checked
          ? "border-primary/20 bg-primary/6 shadow-sm"
          : isCrunchy
          ? "border-border bg-card hover:border-primary/25 hover:shadow-md"
          : "border-orange-200/80 bg-orange-50/60 hover:border-orange-300 hover:shadow-md"
      }`}
    >
      {/* Status badge */}
      <span
        className={`label-caps absolute right-3 top-3 rounded-full px-2 py-0.5 ${
          isCrunchy
            ? "bg-green-100 text-green-700"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        {isCrunchy ? "Keep" : "Swap"}
      </span>

      {/* Checkmark overlay */}
      {checked && (
        <span className="absolute left-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      )}

      <span className="mt-3 text-4xl">{item.emoji}</span>
      <span
        className={`text-xs font-semibold leading-tight ${
          checked ? "text-primary" : "text-foreground"
        }`}
      >
        {item.name}
      </span>
      {item.swapFor && (
        <span className="text-xs text-muted-foreground">→ {item.swapFor}</span>
      )}
    </button>
  );
}

export default function PantryPage() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setProgress(getPantryProgress());
  }, []);

  const handleToggle = (id: string) => {
    setProgress(togglePantryItem(id));
  };

  const pantrySection = pantryItems.filter((i) => i.section === "pantry");
  const fridgeSection = pantryItems.filter((i) => i.section === "fridge");

  const totalCrunchy = pantryItems.filter((i) => i.status === "crunchy").length;
  const checkedCrunchy = pantryItems.filter((i) => i.status === "crunchy" && progress[i.id]).length;
  const totalSwaps = pantryItems.filter((i) => i.status === "swap").length;
  const swapsDone = pantryItems.filter((i) => i.status === "swap" && progress[i.id]).length;

  return (
    <div className="min-h-screen">
      {/* ── Header ──────────────────────────────────── */}
      <div className="border-b border-border px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="label-caps mb-2 text-accent">What to stock & what to toss</p>
          <h1
            className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Pantry & Fridge
          </h1>
          <p className="mb-8 max-w-lg text-muted-foreground">
            Click any item to mark it done. Green cards are crunchy-approved — stock them.
            Orange cards need a swap — check them off once replaced.
          </p>

          {/* Score pills */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 shadow-sm">
              <div className="relative h-9 w-9">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted" />
                  <circle
                    cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3"
                    strokeDasharray={`${(checkedCrunchy / totalCrunchy) * 87.96} 87.96`}
                    className="text-primary transition-all duration-500"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
                  {totalCrunchy > 0 ? Math.round((checkedCrunchy / totalCrunchy) * 100) : 0}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{checkedCrunchy}/{totalCrunchy} stocked</p>
                <p className="label-caps text-muted-foreground">Crunchy items</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-orange-200 bg-orange-50/60 px-5 py-3 shadow-sm">
              <div className="relative h-9 w-9">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-100" />
                  <circle
                    cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3"
                    strokeDasharray={`${(swapsDone / totalSwaps) * 87.96} 87.96`}
                    className="text-orange-400 transition-all duration-500"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-orange-600">
                  {totalSwaps > 0 ? Math.round((swapsDone / totalSwaps) * 100) : 0}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{swapsDone}/{totalSwaps} replaced</p>
                <p className="label-caps text-muted-foreground">Swaps done</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* ── Pantry Shelves ────────────────────────── */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">🗄️</span>
            <h2
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pantry Shelves
            </h2>
          </div>

          {/* Shelf visual wrapper */}
          <div className="rounded-2xl border border-border bg-muted/30 p-6 pb-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {pantrySection.map((item) => (
                <PantryCard
                  key={item.id}
                  item={item}
                  checked={!!progress[item.id]}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>
            {/* Shelf line */}
            <div className="shelf-line mt-8" />
          </div>
        </section>

        {/* ── Fridge ───────────────────────────────── */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">🧊</span>
            <h2
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Fridge & Freezer
            </h2>
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-6 pb-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {fridgeSection.map((item) => (
                <PantryCard
                  key={item.id}
                  item={item}
                  checked={!!progress[item.id]}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>
            <div className="shelf-line mt-8" />
          </div>
        </section>

        {/* ── Legend ───────────────────────────────── */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 font-semibold text-foreground">How to use this page</h3>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <span className="label-caps mt-0.5 rounded-full bg-green-100 px-2 py-0.5 text-green-700">
                Keep
              </span>
              <p className="text-muted-foreground">
                Crunchy-approved. Check it off when it&apos;s in your home.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="label-caps mt-0.5 rounded-full bg-orange-100 px-2 py-0.5 text-orange-700">
                Swap
              </span>
              <p className="text-muted-foreground">
                Needs to be replaced. Check off once you&apos;ve made the swap.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-muted-foreground">
                Checkmark means done. Progress saves automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
