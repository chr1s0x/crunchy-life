import {
  CATEGORY_LABELS,
  CATEGORY_ICONS,
  CATEGORY_DESCRIPTIONS,
  type Category,
} from "@/lib/checklist-data";
import Image from "next/image";

const categories: Category[] = ["pantry", "personal-care", "cleaning", "lifestyle"];

const accentColors: Record<Category, string> = {
  pantry: "bg-amber-50 border-amber-200",
  "personal-care": "bg-rose-50 border-rose-200",
  cleaning: "bg-emerald-50 border-emerald-200",
  lifestyle: "bg-sky-50 border-sky-200",
};

const accentDot: Record<Category, string> = {
  pantry: "bg-amber-400",
  "personal-care": "bg-rose-400",
  cleaning: "bg-emerald-400",
  lifestyle: "bg-sky-400",
};

const guideContent: Record<
  Category,
  {
    quote: string;
    principles: string[];
    quickWins: { title: string; tip: string }[];
  }
> = {
  pantry: {
    quote: "\"If you can't pronounce it, don't eat it.\"",
    principles: [
      "Seed oils — canola, soybean, sunflower, corn — are the #1 swap to make first. They're in almost everything.",
      "The fewer ingredients, the better. A real food has one ingredient: itself.",
      "Fat is not the enemy. Saturated fats from real animals (butter, tallow, lard) are stable and nutritious.",
      "Shop the perimeter of the grocery store — that's where real food lives.",
      "Ultra-processed isn't just junk food. Check the ingredients on bread, sauces, and condiments too.",
    ],
    quickWins: [
      {
        title: "Swap your cooking oil today",
        tip: "Throw out the canola oil. Replace it with a big bottle of extra virgin olive oil and a block of butter. This single swap removes the most harmful ingredient from most kitchens.",
      },
      {
        title: "Read one label per shopping trip",
        tip: "Pick up one product you buy regularly and read the full ingredient list. You'll be surprised what's hiding in there.",
      },
      {
        title: "Add one whole food per meal",
        tip: "Before adding a packaged item, ask: is there a whole food that does this job? Sliced apple instead of juice. Eggs instead of a protein bar.",
      },
    ],
  },
  "personal-care": {
    quote: "\"Your skin is your largest organ — treat it that way.\"",
    principles: [
      "Skin absorbs up to 60% of what you put on it. Product safety matters as much as food safety.",
      '"Fragrance" on a label can hide hundreds of undisclosed chemicals in a single product.',
      "Less is more. Many people find their skin dramatically improves after simplifying their routine.",
      "EWG Skin Deep (ewg.org/skindeep) is your best resource for ingredient research.",
      "You don't need 12 products. A clean face oil or tallow balm covers most needs.",
    ],
    quickWins: [
      {
        title: "Ditch your antiperspirant",
        tip: "Switch to an aluminum-free deodorant this week. Native and Schmidt's are at Target and Walmart. Your body may need 2–4 weeks to recalibrate.",
      },
      {
        title: "Go fragrance-free on one product",
        tip: "Next time you run out of something, replace it with fragrance-free. Start with laundry detergent or body wash — items that stay on skin or clothes all day.",
      },
      {
        title: "Look up your sunscreen",
        tip: "Search your current sunscreen on EWG Skin Deep. If it scores above 3, look for a zinc oxide mineral option.",
      },
    ],
  },
  cleaning: {
    quote: "\"Clean doesn't have a smell. That scent is synthetic fragrance, not cleanliness.\"",
    principles: [
      "If you wouldn't want your child to breathe it, you shouldn't be cleaning your home with it.",
      "Vinegar and baking soda handle 90% of household cleaning jobs — no toxins required.",
      "Synthetic fragrance in cleaning products is one of the top sources of indoor air pollution.",
      "Castile soap is the most versatile clean ingredient — dilute it for almost any task.",
      "\"Antibacterial\" products with triclosan disrupt the microbiome and may cause resistance.",
    ],
    quickWins: [
      {
        title: "Make a spray cleaner today",
        tip: "Mix 1 cup white vinegar + 1 cup water + 15 drops tea tree oil in a spray bottle. Use it on counters, sinks, and mirrors. Free, effective, non-toxic.",
      },
      {
        title: "Replace dryer sheets with wool balls",
        tip: "Wool dryer balls last for years and eliminate static without synthetic fragrance. Add a drop of lavender oil if you want a light scent.",
      },
      {
        title: "Swap one cleaner this month",
        tip: "Pick the cleaner you use most and replace it. Branch Basics, Seventh Generation Free & Clear, or your own DIY mix are all solid options.",
      },
    ],
  },
  lifestyle: {
    quote: "\"You are not separate from nature — you are nature.\"",
    principles: [
      "Your circadian rhythm governs nearly every system in your body. Morning light and evening dark are the most powerful levers you have.",
      "Sleep is the foundation. No supplement, diet, or biohack outperforms a consistent 8-hour sleep schedule.",
      "Grounding — bare feet on earth — is one of the most underrated, completely free health tools available to anyone.",
      "Chronic stress is as inflammatory as a poor diet. Intentional rest is part of a crunchy lifestyle.",
      "Nature exposure lowers cortisol, blood pressure, and inflammation. Aim for daily outdoor time, not just weekend hikes.",
    ],
    quickWins: [
      {
        title: "Step outside within 30 minutes of waking",
        tip: "Don't reach for your phone first. Walk outside for 5–10 minutes and let morning light hit your eyes (no sunglasses). This single habit resets your circadian rhythm and improves sleep quality.",
      },
      {
        title: "Set a consistent bedtime",
        tip: "Pick a bedtime and stick to it for 2 weeks — including weekends. Your body will start producing melatonin naturally at that time.",
      },
      {
        title: "Go barefoot for 10 minutes today",
        tip: "Find a patch of grass, soil, or sand and stand on it barefoot. This is earthing — electrons from the earth transfer through your skin and reduce inflammation markers.",
      },
    ],
  },
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* ── Header ────────────────────────────────── */}
      <div className="border-b border-border px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="label-caps mb-2 text-accent">Learn the why behind the swaps</p>
          <div className="flex items-center gap-4">
            <h1
              className="text-4xl font-bold text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Crunchy Guides
            </h1>
            <Image src="/hedgehog.png" alt="hedgehog mascot" width={56} height={56} className="object-contain flex-shrink-0" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-20">
          {categories.map((cat, catIndex) => {
            const content = guideContent[cat];
            return (
              <section key={cat}>
                {/* Category header */}
                <div className="mb-10 flex items-start gap-4 border-b border-border pb-8">
                  <span
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border text-2xl ${accentColors[cat]}`}
                  >
                    {CATEGORY_ICONS[cat]}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="label-caps text-muted-foreground">
                        0{catIndex + 1}
                      </span>
                      <h2
                        className="text-2xl font-bold text-foreground md:text-3xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {CATEGORY_LABELS[cat]}
                      </h2>
                    </div>
                    <p className="mt-1 text-muted-foreground">{CATEGORY_DESCRIPTIONS[cat]}</p>
                  </div>
                </div>

                {/* Pull quote */}
                <blockquote className="mb-10 border-l-2 border-primary pl-5">
                  <p
                    className="text-xl font-medium italic text-foreground/80 md:text-2xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {content.quote}
                  </p>
                </blockquote>

                <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                  {/* Principles */}
                  <div>
                    <p className="label-caps mb-5 text-muted-foreground">Core Principles</p>
                    <ol className="flex flex-col gap-4">
                      {content.principles.map((principle, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span
                            className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-foreground"
                          >
                            {i + 1}
                          </span>
                          <p className="text-sm leading-relaxed text-muted-foreground">{principle}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Quick wins */}
                  <div>
                    <p className="label-caps mb-5 text-muted-foreground">Quick Wins</p>
                    <div className="flex flex-col gap-3">
                      {content.quickWins.map(({ title, tip }) => (
                        <div
                          key={title}
                          className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-sm"
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full ${accentDot[cat]}`} />
                            <h4 className="text-sm font-semibold text-foreground">{title}</h4>
                          </div>
                          <p className="text-xs leading-relaxed text-muted-foreground">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <footer className="border-t border-border py-8 text-center">
        <span className="label-caps text-muted-foreground inline-flex items-center gap-2">
          <Image src="/hedgehog.png" alt="hedgehog mascot" width={24} height={24} className="object-contain" />
          The Crunchy Life — live clean, live well
        </span>
      </footer>
    </div>
  );
}
