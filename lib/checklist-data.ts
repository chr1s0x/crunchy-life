export type Category = 'pantry' | 'personal-care' | 'cleaning' | 'lifestyle'
export type Level = 1 | 2 | 3 | 4 | 5

export interface ChecklistItem {
  id: string
  category: Category
  level: Level
  title: string
  description: string
  swap?: string
}

export interface PantryItem {
  id: string
  name: string
  section: 'pantry' | 'fridge'
  status: 'crunchy' | 'swap'
  swapFor?: string
  emoji: string
}

export const LEVEL_NAMES: Record<Level, string> = {
  1: 'Baby Crunchy',
  2: 'Getting Crunchy',
  3: 'Mostly Crunchy',
  4: 'Pretty Crunchy',
  5: 'Full Crunchy',
}

export const LEVEL_COLORS: Record<Level, string> = {
  1: 'bg-amber-100 text-amber-800',
  2: 'bg-lime-100 text-lime-800',
  3: 'bg-green-100 text-green-800',
  4: 'bg-emerald-100 text-emerald-800',
  5: 'bg-teal-100 text-teal-800',
}

export const CATEGORY_LABELS: Record<Category, string> = {
  pantry: 'Pantry & Fridge',
  'personal-care': 'Personal Care',
  cleaning: 'Cleaning',
  lifestyle: 'Lifestyle',
}

export const CATEGORY_ICONS: Record<Category, string> = {
  pantry: '🥗',
  'personal-care': '✨',
  cleaning: '🌿',
  lifestyle: '☀️',
}

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  pantry: 'Clean up your kitchen from seed oils, processed foods, and conventional produce.',
  'personal-care': 'Replace toxic beauty and hygiene products with clean, natural alternatives.',
  cleaning: 'Ditch harsh chemicals and clean your home with safe, effective ingredients.',
  lifestyle: 'Align your daily habits with nature for better sleep, health, and energy.',
}

export const checklistItems: ChecklistItem[] = [
  // ── PANTRY & FRIDGE ──────────────────────────────────────────
  {
    id: 'pantry-1-1',
    category: 'pantry',
    level: 1,
    title: 'Swap seed oils',
    description: 'Remove canola, vegetable, soybean, and sunflower oils from your kitchen.',
    swap: 'Use butter, extra virgin olive oil, coconut oil, or beef tallow instead.',
  },
  {
    id: 'pantry-1-2',
    category: 'pantry',
    level: 1,
    title: 'Switch to real butter',
    description: 'Ditch margarine and vegetable spreads — they\'re highly processed seed oils in disguise.',
    swap: 'Use real grass-fed butter. Kerrygold is a great starter option.',
  },
  {
    id: 'pantry-1-3',
    category: 'pantry',
    level: 1,
    title: 'Remove artificial dyes',
    description: 'Cut out products containing Red 40, Yellow 5, Blue 1, and other synthetic food dyes.',
    swap: 'Look for products colored with beet juice, turmeric, or spirulina.',
  },
  {
    id: 'pantry-1-4',
    category: 'pantry',
    level: 1,
    title: 'Cut ultra-processed snacks',
    description: 'Remove packaged snacks with more than 5 unrecognizable ingredients.',
    swap: 'Swap for whole food snacks: fruit, nuts, cheese, or hard-boiled eggs.',
  },
  {
    id: 'pantry-2-1',
    category: 'pantry',
    level: 2,
    title: 'Buy organic for the Dirty Dozen',
    description: 'Prioritize organic for the 12 most pesticide-laden produce items: strawberries, spinach, apples, and more.',
    swap: 'Download the EWG Dirty Dozen list as a shopping reference.',
  },
  {
    id: 'pantry-2-2',
    category: 'pantry',
    level: 2,
    title: 'Switch to pasture-raised eggs',
    description: 'Conventional eggs come from hens with poor diets and living conditions.',
    swap: 'Look for "pasture-raised" on the label, or source from a local farm.',
  },
  {
    id: 'pantry-2-3',
    category: 'pantry',
    level: 2,
    title: 'Ditch refined sugar',
    description: 'Reduce or eliminate white sugar and high-fructose corn syrup from your pantry.',
    swap: 'Use raw honey, pure maple syrup, or coconut sugar in moderation.',
  },
  {
    id: 'pantry-2-4',
    category: 'pantry',
    level: 2,
    title: 'Switch to sourdough or whole grain bread',
    description: 'Commercial bread is loaded with additives, preservatives, and seed oils.',
    swap: 'Buy real sourdough from a bakery (ingredients should be just flour, water, salt) or bake your own.',
  },
  {
    id: 'pantry-3-1',
    category: 'pantry',
    level: 3,
    title: 'Filter your drinking water',
    description: 'Tap water often contains chlorine, fluoride, and heavy metals.',
    swap: 'Start with a Brita or PUR filter. Upgrade to reverse osmosis for best results.',
  },
  {
    id: 'pantry-3-2',
    category: 'pantry',
    level: 3,
    title: 'Source grass-fed beef',
    description: 'Grass-fed beef has a better omega-3 to omega-6 ratio and higher nutrient density.',
    swap: 'Look for "100% grass-fed and grass-finished" at Whole Foods, Costco, or a local butcher.',
  },
  {
    id: 'pantry-3-3',
    category: 'pantry',
    level: 3,
    title: 'Switch to glass or stainless food storage',
    description: 'Plastic containers leach chemicals, especially when heated.',
    swap: 'Replace with glass Pyrex containers, mason jars, or stainless steel bento boxes.',
  },
  {
    id: 'pantry-3-4',
    category: 'pantry',
    level: 3,
    title: 'Switch to cast iron or stainless cookware',
    description: 'Non-stick Teflon coatings release toxic fumes when heated.',
    swap: 'Use a well-seasoned cast iron skillet or stainless steel pans.',
  },
  {
    id: 'pantry-4-1',
    category: 'pantry',
    level: 4,
    title: 'Source raw dairy',
    description: 'Pasteurization destroys beneficial enzymes and bacteria. Raw dairy is legal in many states.',
    swap: 'Find a local raw dairy farm via RealMilk.com. If unavailable, choose non-homogenized pasteurized.',
  },
  {
    id: 'pantry-4-2',
    category: 'pantry',
    level: 4,
    title: 'Ferment your own foods',
    description: 'Homemade fermented foods provide beneficial probiotics for gut health.',
    swap: 'Start with sauerkraut — just cabbage and salt, ferments in 5–7 days.',
  },
  {
    id: 'pantry-4-3',
    category: 'pantry',
    level: 4,
    title: 'Make bone broth',
    description: 'Homemade bone broth provides collagen, glycine, and minerals that support gut health.',
    swap: 'Save bones from roasts and chickens. Simmer for 12–24 hours with apple cider vinegar.',
  },
  {
    id: 'pantry-4-4',
    category: 'pantry',
    level: 4,
    title: 'Shop at local farmers markets',
    description: 'Get to know your local farmers and source food directly — fresher and often more affordable.',
    swap: 'Find local farmers at LocalHarvest.org or search for CSA boxes in your area.',
  },
  {
    id: 'pantry-5-1',
    category: 'pantry',
    level: 5,
    title: 'Grow your own vegetables',
    description: 'Grow at least some of your own produce, even in a small space.',
    swap: 'Start with easy crops: tomatoes, lettuce, herbs, and zucchini.',
  },
  {
    id: 'pantry-5-2',
    category: 'pantry',
    level: 5,
    title: 'Raise backyard chickens',
    description: 'Home-raised hens produce the most nutritious eggs possible.',
    swap: 'Check local ordinances. Start with 2–3 hens and a basic coop.',
  },
  {
    id: 'pantry-5-3',
    category: 'pantry',
    level: 5,
    title: 'Can and preserve your own food',
    description: 'Preserve your harvest through canning, fermenting, dehydrating, and freezing.',
    swap: 'Start with water bath canning for jams and pickles, or a dehydrator for fruits and herbs.',
  },

  // ── PERSONAL CARE ─────────────────────────────────────────────
  {
    id: 'personal-1-1',
    category: 'personal-care',
    level: 1,
    title: 'Switch to aluminum-free deodorant',
    description: 'Conventional deodorants contain aluminum compounds linked to endocrine disruption.',
    swap: 'Try Native, Schmidt\'s, or make your own with coconut oil, baking soda, and arrowroot.',
  },
  {
    id: 'personal-1-2',
    category: 'personal-care',
    level: 1,
    title: 'Remove synthetic fragrance',
    description: '"Fragrance" on a label can hide hundreds of undisclosed chemicals.',
    swap: 'Choose fragrance-free products or those scented with pure essential oils.',
  },
  {
    id: 'personal-1-3',
    category: 'personal-care',
    level: 1,
    title: 'Switch to fluoride-free toothpaste',
    description: 'Many in the crunchy community opt out of fluoride due to its controversial health profile.',
    swap: 'Try Redmond Earthpaste, Dr. Bronner\'s toothpaste, or a remineralizing tooth powder.',
  },
  {
    id: 'personal-2-1',
    category: 'personal-care',
    level: 2,
    title: 'Switch to mineral sunscreen',
    description: 'Chemical sunscreens like oxybenzone absorb into the bloodstream.',
    swap: 'Use zinc oxide mineral sunscreen — brands like Badger, Thinksport, or Beautycounter.',
  },
  {
    id: 'personal-2-2',
    category: 'personal-care',
    level: 2,
    title: 'Use sulfate-free shampoo',
    description: 'Sulfates strip natural oils from hair and scalp, disrupting the microbiome.',
    swap: 'Try Acure, SheaMoisture, or a shampoo bar with clean ingredients.',
  },
  {
    id: 'personal-2-3',
    category: 'personal-care',
    level: 2,
    title: 'Remove parabens and phthalates',
    description: 'These preservatives and plasticizers are known endocrine disruptors.',
    swap: 'Check labels using the EWG Skin Deep database and look for paraben-free products.',
  },
  {
    id: 'personal-3-1',
    category: 'personal-care',
    level: 3,
    title: 'Switch to clean makeup',
    description: 'Conventional makeup contains heavy metals, synthetic dyes, and endocrine disruptors.',
    swap: 'Try brands like RMS Beauty, ILIA, or Beautycounter for clean alternatives.',
  },
  {
    id: 'personal-3-2',
    category: 'personal-care',
    level: 3,
    title: 'Switch to non-toxic period care',
    description: 'Conventional tampons and pads may contain pesticide residue and synthetic materials.',
    swap: 'Try a menstrual cup, period underwear, or organic cotton products (Cora, Lola).',
  },
  {
    id: 'personal-3-3',
    category: 'personal-care',
    level: 3,
    title: 'Oil cleanse your face',
    description: 'Harsh face washes strip the skin barrier. Oil cleansing cleans without disrupting your pH.',
    swap: 'Mix castor oil with jojoba or sunflower oil. Massage in, remove with a warm cloth.',
  },
  {
    id: 'personal-4-1',
    category: 'personal-care',
    level: 4,
    title: 'Make your own skincare',
    description: 'DIY skincare gives you full control over ingredients and cuts out all toxins.',
    swap: 'Start with a whipped body butter: shea butter, coconut oil, and lavender essential oil.',
  },
  {
    id: 'personal-4-2',
    category: 'personal-care',
    level: 4,
    title: 'Castor oil hair treatments',
    description: 'Castor oil is rich in ricinoleic acid and promotes scalp health and hair growth.',
    swap: 'Apply to scalp, massage for 5 minutes, leave for 1 hour, then wash out.',
  },
  {
    id: 'personal-5-1',
    category: 'personal-care',
    level: 5,
    title: 'Fully homemade beauty routine',
    description: 'Make all personal care products from scratch — shampoo, deodorant, toothpaste, and more.',
    swap: 'Source raw ingredients from Mountain Rose Herbs. Use herbs from your own garden.',
  },

  // ── CLEANING ──────────────────────────────────────────────────
  {
    id: 'cleaning-1-1',
    category: 'cleaning',
    level: 1,
    title: 'Remove bleach-based cleaners',
    description: 'Bleach fumes are harsh on the respiratory system and create toxic byproducts.',
    swap: 'Use hydrogen peroxide-based cleaners or Branch Basics concentrate.',
  },
  {
    id: 'cleaning-1-2',
    category: 'cleaning',
    level: 1,
    title: 'Switch to fragrance-free laundry detergent',
    description: 'Synthetic fragrance in laundry products sits against your skin all day.',
    swap: 'Try Seventh Generation Free & Clear, Branch Basics, or Molly\'s Suds.',
  },
  {
    id: 'cleaning-2-1',
    category: 'cleaning',
    level: 2,
    title: 'Switch to wool dryer balls',
    description: 'Dryer sheets coat clothes with synthetic fragrance and harmful chemicals.',
    swap: 'Use wool dryer balls. Add a drop of essential oil if you want a light scent.',
  },
  {
    id: 'cleaning-2-2',
    category: 'cleaning',
    level: 2,
    title: 'Clean with vinegar and baking soda',
    description: 'These two pantry staples handle most cleaning jobs without any toxins.',
    swap: 'White vinegar for glass and surfaces; baking soda paste for scrubbing.',
  },
  {
    id: 'cleaning-3-1',
    category: 'cleaning',
    level: 3,
    title: 'DIY all-purpose cleaner',
    description: 'Make a simple, effective cleaner that costs pennies per bottle.',
    swap: 'Mix: 1 cup white vinegar, 1 cup water, 15 drops tea tree oil, 10 drops lemon oil.',
  },
  {
    id: 'cleaning-3-2',
    category: 'cleaning',
    level: 3,
    title: 'Switch to castile soap',
    description: 'Dr. Bronner\'s castile soap is plant-based and replaces dozens of cleaning products.',
    swap: 'Dilute with water for dish soap, floor cleaner, and body wash — one bottle does it all.',
  },
  {
    id: 'cleaning-3-3',
    category: 'cleaning',
    level: 3,
    title: 'Replace synthetic candles',
    description: 'Paraffin candles release toluene and benzene — known carcinogens — when burned.',
    swap: 'Use beeswax or soy candles, or diffuse pure essential oils instead.',
  },
  {
    id: 'cleaning-4-1',
    category: 'cleaning',
    level: 4,
    title: 'Make your own laundry powder',
    description: 'DIY laundry powder is cheap, effective, and fully non-toxic.',
    swap: 'Combine washing soda, borax, and grated castile soap bar. Add essential oils.',
  },
  {
    id: 'cleaning-5-1',
    category: 'cleaning',
    level: 5,
    title: 'Zero store-bought cleaners',
    description: 'Your entire home is cleaned with ingredients you could practically eat.',
    swap: 'Vinegar, baking soda, castile soap, essential oils, and lemon juice handle everything.',
  },

  // ── LIFESTYLE ─────────────────────────────────────────────────
  {
    id: 'lifestyle-1-1',
    category: 'lifestyle',
    level: 1,
    title: 'Get morning sunlight',
    description: 'Viewing natural light within 30–60 minutes of waking sets your circadian rhythm.',
    swap: 'Walk outside for 10 minutes after waking — no sunglasses, face toward the light.',
  },
  {
    id: 'lifestyle-1-2',
    category: 'lifestyle',
    level: 1,
    title: 'Reduce screens before bed',
    description: 'Blue light suppresses melatonin production and delays sleep onset.',
    swap: 'Stop screens 1 hour before bed, or use blue light glasses with night mode after sunset.',
  },
  {
    id: 'lifestyle-1-3',
    category: 'lifestyle',
    level: 1,
    title: 'Drink more filtered water',
    description: 'Most people are chronically dehydrated. Tap water also contains chlorine and fluoride.',
    swap: 'Aim for half your body weight in ounces daily. Filter your water — even a Brita helps.',
  },
  {
    id: 'lifestyle-2-1',
    category: 'lifestyle',
    level: 2,
    title: 'Practice grounding (earthing)',
    description: 'Direct skin contact with the earth transfers electrons and reduces inflammation.',
    swap: 'Walk barefoot on grass, soil, or sand for 10–20 minutes daily.',
  },
  {
    id: 'lifestyle-2-2',
    category: 'lifestyle',
    level: 2,
    title: 'Set a consistent sleep schedule',
    description: 'Your body thrives on routine. Irregular sleep disrupts cortisol and melatonin.',
    swap: 'Aim for the same bedtime and wake time 7 days a week — even weekends.',
  },
  {
    id: 'lifestyle-2-3',
    category: 'lifestyle',
    level: 2,
    title: 'Reduce plastic use at home',
    description: 'Plastics off-gas chemicals (BPA, phthalates) that act as endocrine disruptors.',
    swap: 'Swap plastic water bottles for stainless steel, plastic wrap for beeswax wraps.',
  },
  {
    id: 'lifestyle-3-1',
    category: 'lifestyle',
    level: 3,
    title: 'Optimize your sleep environment',
    description: 'Cool, dark, quiet rooms dramatically improve sleep quality.',
    swap: 'Use blackout curtains, keep room at 65–68°F, remove all light sources.',
  },
  {
    id: 'lifestyle-3-2',
    category: 'lifestyle',
    level: 3,
    title: 'Exercise outdoors regularly',
    description: 'Outdoor exercise adds the benefits of sunlight and nature exposure.',
    swap: 'Take your workout outside 3x/week — walking, running, hiking, or backyard training.',
  },
  {
    id: 'lifestyle-3-3',
    category: 'lifestyle',
    level: 3,
    title: 'Use blue light glasses after sunset',
    description: 'Blocking blue and green light after dark protects melatonin and sleep quality.',
    swap: 'Get amber-tinted glasses (Swanwick, BLUblox) for evening wear.',
  },
  {
    id: 'lifestyle-4-1',
    category: 'lifestyle',
    level: 4,
    title: 'Start cold exposure',
    description: 'Cold showers and cold plunges boost norepinephrine, mood, and metabolic health.',
    swap: 'Start with 30 seconds cold at the end of your shower and build from there.',
  },
  {
    id: 'lifestyle-4-2',
    category: 'lifestyle',
    level: 4,
    title: 'Turn off WiFi at night',
    description: 'Reducing EMF exposure during sleep may improve sleep quality for sensitive individuals.',
    swap: 'Use a smart plug timer to cut WiFi at bedtime, or use ethernet during the day.',
  },
  {
    id: 'lifestyle-5-1',
    category: 'lifestyle',
    level: 5,
    title: 'Spend 2+ hours outside daily',
    description: 'Nature exposure lowers cortisol, blood pressure, and inflammation markers.',
    swap: 'Structure your day around outdoor time — morning walk, outdoor lunch, evening barefoot time.',
  },
  {
    id: 'lifestyle-5-2',
    category: 'lifestyle',
    level: 5,
    title: 'Learn traditional skills',
    description: 'Foraging, fire-making, food preservation — reconnect with ancestral ways of living.',
    swap: 'Take a local foraging walk, a fermentation class, or a wilderness skills course.',
  },
]

export const pantryItems: PantryItem[] = [
  // Pantry — Crunchy
  { id: 'pi-1', name: 'Extra Virgin Olive Oil', section: 'pantry', status: 'crunchy', emoji: '🫒' },
  { id: 'pi-2', name: 'Coconut Oil', section: 'pantry', status: 'crunchy', emoji: '🥥' },
  { id: 'pi-3', name: 'Grass-Fed Butter', section: 'pantry', status: 'crunchy', emoji: '🧈' },
  { id: 'pi-4', name: 'Raw Honey', section: 'pantry', status: 'crunchy', emoji: '🍯' },
  { id: 'pi-5', name: 'Pure Maple Syrup', section: 'pantry', status: 'crunchy', emoji: '🍁' },
  { id: 'pi-6', name: 'Apple Cider Vinegar', section: 'pantry', status: 'crunchy', emoji: '🍎' },
  { id: 'pi-7', name: 'Himalayan Pink Salt', section: 'pantry', status: 'crunchy', emoji: '🧂' },
  { id: 'pi-8', name: 'Real Sourdough Bread', section: 'pantry', status: 'crunchy', emoji: '🍞' },
  // Pantry — Swap
  { id: 'pi-9', name: 'Canola Oil', section: 'pantry', status: 'swap', swapFor: 'Butter or olive oil', emoji: '🫙' },
  { id: 'pi-10', name: 'Vegetable Oil', section: 'pantry', status: 'swap', swapFor: 'Coconut oil or tallow', emoji: '🫙' },
  { id: 'pi-11', name: 'Margarine', section: 'pantry', status: 'swap', swapFor: 'Grass-fed butter', emoji: '🧈' },
  { id: 'pi-12', name: 'White Sugar', section: 'pantry', status: 'swap', swapFor: 'Raw honey or maple syrup', emoji: '🍬' },
  // Fridge — Crunchy
  { id: 'pi-13', name: 'Pasture-Raised Eggs', section: 'fridge', status: 'crunchy', emoji: '🥚' },
  { id: 'pi-14', name: 'Raw or Whole Milk', section: 'fridge', status: 'crunchy', emoji: '🥛' },
  { id: 'pi-15', name: 'Organic Vegetables', section: 'fridge', status: 'crunchy', emoji: '🥦' },
  { id: 'pi-16', name: 'Grass-Fed Beef', section: 'fridge', status: 'crunchy', emoji: '🥩' },
  { id: 'pi-17', name: 'Fermented Sauerkraut', section: 'fridge', status: 'crunchy', emoji: '🫙' },
  { id: 'pi-18', name: 'Bone Broth', section: 'fridge', status: 'crunchy', emoji: '🥣' },
  // Fridge — Swap
  { id: 'pi-19', name: 'Conventional Milk', section: 'fridge', status: 'swap', swapFor: 'Raw or non-homogenized milk', emoji: '🥛' },
  { id: 'pi-20', name: 'Conventional Eggs', section: 'fridge', status: 'swap', swapFor: 'Pasture-raised eggs', emoji: '🥚' },
  { id: 'pi-21', name: 'Processed Lunch Meat', section: 'fridge', status: 'swap', swapFor: 'Whole roasted meat at home', emoji: '🍖' },
  { id: 'pi-22', name: 'Flavored Yogurt', section: 'fridge', status: 'swap', swapFor: 'Plain whole-milk yogurt + raw honey', emoji: '🍶' },
]
