"use client";

import { useState, useEffect, Suspense } from "react";
import {
  checklistItems,
  LEVEL_NAMES,
  CATEGORY_LABELS,
  CATEGORY_ICONS,
  type Category,
  type Level,
} from "@/lib/checklist-data";
import {
  getProgress,
  toggleItem,
  getCategoryProgress,
  getCrunchyLevel,
} from "@/lib/progress";
import Hedgehog from "@/components/Hedgehog";
import { useSearchParams } from "next/navigation";

const categories: Category[] = ["pantry", "personal-care", "cleaning", "lifestyle"];
const levels: Level[] = [1, 2, 3, 4, 5];

const levelBadgeStyle: Record<Level, string> = {
  1: "bg-amber-100 text-amber-700 border-amber-200",
  2: "bg-lime-100 text-lime-700 border-lime-200",
  3: "bg-green-100 text-green-700 border-green-200",
  4: "bg-emerald-100 text-emerald-700 border-emerald-200",
  5: "bg-teal-100 text-teal-700 border-teal-200",
};

function ChecklistInner() {
  const searchParams = useSearchParams();
  const defaultCategory = (searchParams.get("category") as Category) || "all";

  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<Category | "all">(defaultCategory);
  const [activeLevel, setActiveLevel] = useState<Level | 0>(0);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleToggle = (id: string) => setProgress(toggleItem(id));

  const filteredItems = checklistItems.filter((item) => {
    if (activeCategory !== "all" && item.category !== activeCategory) return false;
    if (activeLevel !== 0 && item.level !== activeLevel) return false;
    return true;
  });

  const totalItems = checklistItems.length;
  const completedCount = checklistItems.filter((i) => progress[i.id]).length;
  const overallScore = Math.round((completedCount / totalItems) * 100);
  const { level: crunchyLevelNum, name: crunchyLevelName } = getCrunchyLevel(overallScore);

  return (
    <div className="flex min-h-screen flex-col">
      {/* ── Page header ──────────────────────────────── */}
      <div className="border-b border-border px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="label-caps mb-2 text-accent">Track your journey</p>
          <div className="flex items-center gap-4">
            <h1
              className="text-4xl font-bold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Crunchy Checklist
            </h1>
            <Hedgehog className="w-14 h-12 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-8 px-6 py-8">

        {/* ── Sidebar ──────────────────────────────── */}
        <aside className="hidden w-64 flex-shrink-0 lg:block">
          <div className="sticky top-24 flex flex-col gap-5">

            {/* Score card */}
            <div className="overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg shadow-primary/20">
              <div className="flex justify-end -mt-1 mb-2">
                <Hedgehog className="w-14 h-12" />
              </div>
              <p className="label-caps text-primary-foreground/60">Crunchy Score</p>
              <div className="mt-3 flex items-end gap-2">
                <span
                  className="text-5xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {overallScore}
                </span>
                <span className="mb-1 text-lg text-primary-foreground/60">%</span>
              </div>
              <p className="mt-1 text-sm font-semibold">
                Level {crunchyLevelNum} — {crunchyLevelName}
              </p>

              {/* Progress bar */}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-primary-foreground/20">
                <div
                  className="h-full rounded-full bg-primary-foreground transition-all duration-700"
                  style={{ width: `${overallScore}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-primary-foreground/50">
                {completedCount} of {totalItems} items
              </p>
            </div>

            {/* Category filters */}
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="label-caps mb-3 text-muted-foreground">Categories</p>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                    activeCategory === "all"
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-xs text-muted-foreground">{totalItems}</span>
                </button>
                {categories.map((cat) => {
                  const ids = checklistItems.filter((i) => i.category === cat).map((i) => i.id);
                  const { completed, total } = getCategoryProgress(progress, ids);
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(activeCategory === cat ? "all" : cat)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                        activeCategory === cat
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{CATEGORY_ICONS[cat]}</span>
                        {CATEGORY_LABELS[cat]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {completed}/{total}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category progress bars */}
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="label-caps mb-3 text-muted-foreground">Progress</p>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => {
                  const ids = checklistItems.filter((i) => i.category === cat).map((i) => i.id);
                  const { percent } = getCategoryProgress(progress, ids);
                  return (
                    <div key={cat}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{CATEGORY_ICONS[cat]}</span>
                        <span className="text-xs font-semibold text-foreground">{percent}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main content ─────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Mobile score strip */}
          <div className="mb-5 flex items-center justify-between rounded-xl bg-primary p-4 text-primary-foreground lg:hidden">
            <div>
              <p className="text-xs text-primary-foreground/60">Crunchy Score</p>
              <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                {overallScore}% &mdash; {crunchyLevelName}
              </p>
            </div>
            <div className="text-right text-xs text-primary-foreground/60">
              {completedCount}/{totalItems}
            </div>
          </div>

          {/* Level filter */}
          <div className="mb-5 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveLevel(0)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeLevel === 0
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              All Levels
            </button>
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(activeLevel === lvl ? 0 : lvl)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  activeLevel === lvl
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                L{lvl} — {LEVEL_NAMES[lvl]}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="label-caps mb-4 text-muted-foreground">
            {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
            {activeCategory !== "all" ? ` · ${CATEGORY_LABELS[activeCategory as Category]}` : ""}
            {activeLevel !== 0 ? ` · ${LEVEL_NAMES[activeLevel as Level]}` : ""}
          </p>

          {/* Items */}
          {filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card py-20 text-center text-muted-foreground">
              No items match this filter.
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              {filteredItems.map((item) => {
                const done = !!progress[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => handleToggle(item.id)}
                    className={`group flex w-full items-start gap-4 rounded-xl border px-5 py-4 text-left transition-all ${
                      done
                        ? "border-primary/15 bg-primary/5"
                        : "border-border bg-card hover:border-primary/25 hover:shadow-sm"
                    }`}
                  >
                    {/* Custom checkbox */}
                    <div
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                        done
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border/70 group-hover:border-primary/50"
                      }`}
                    >
                      {done && (
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Title row */}
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span
                          className={`text-sm font-semibold ${
                            done ? "text-muted-foreground line-through" : "text-foreground"
                          }`}
                        >
                          {item.title}
                        </span>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${levelBadgeStyle[item.level]}`}
                        >
                          {LEVEL_NAMES[item.level]}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {CATEGORY_ICONS[item.category]}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>

                      {/* Swap tip */}
                      {item.swap && (
                        <p className="mt-2 text-xs font-medium text-primary">
                          ↗ {item.swap}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ChecklistPage() {
  return (
    <Suspense>
      <ChecklistInner />
    </Suspense>
  );
}
