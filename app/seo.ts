export const businessName = "Colquitt Concrete and Outdoor Solutions";

export const contactEmail = "Colquittconcrete@yahoo.com";
export const contactPhone = "770-688-9648";
export const contactPhoneInternational = "+17706889648";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://colquitt-concrete-site.vercel.app"
).replace(/\/$/, "");

export const siteDescription =
  "Colquitt Concrete and Outdoor Solutions is a Georgia concrete contractor for driveways, slabs, patios, sidewalks, stamped concrete, demolition, grading, site prep, and outdoor concrete projects.";

export const defaultOgImage =
  "/media/projects/shop-apron-slab/after/01-IMG_3048.jpg";

export const businessLogo = "/brand-logo.svg";

export const serviceAreaName = "Georgia";
export const serviceAreaRegion = "US-GA";

export type SeoServicePage = {
  slug: string;
  path: string;
  title: string;
  cardTitle: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  requestSubject: string;
  keywordTargets: string[];
  proofPoints: string[];
  customerSearches: string[];
};

export const servicePages: SeoServicePage[] = [
  {
    slug: "concrete-driveways-georgia",
    path: "/services/concrete-driveways-georgia",
    title: "Concrete Driveways and Parking Pads in Georgia",
    cardTitle: "Driveways and parking pads",
    serviceType: "Concrete driveway installation",
    metaTitle: "Concrete Driveways in Georgia | Colquitt Concrete",
    metaDescription:
      "Georgia concrete driveway contractor for new driveways, driveway extensions, parking pads, broom finish concrete, forms, grading, and clean control joints.",
    summary:
      "New concrete pours, widened drives, parking pads, clean control joints, and broom-finished surfaces built for daily use.",
    intro:
      "Concrete driveways need the right layout, base prep, forms, reinforcement, drainage, and finish. The goal is a durable surface that fits the property and stands up to daily use.",
    image: "/media/projects/large-residential-drive/after/03-IMG_8533.jpg",
    imageAlt:
      "Large finished residential concrete driveway by Colquitt Concrete in Georgia",
    requestSubject: "Concrete driveway estimate in Georgia",
    keywordTargets: [
      "concrete driveway Georgia",
      "driveway concrete contractor",
      "driveway replacement GA",
      "parking pad concrete",
      "residential driveway concrete",
      "concrete driveway estimate",
    ],
    proofPoints: [
      "Driveway layout and access planning",
      "Grading and base preparation before the pour",
      "Forms, reinforcement, broom finish, and control joints",
      "Driveway widening, parking pads, and replacement pours",
    ],
    customerSearches: [
      "Who can pour a concrete driveway near me?",
      "How much does a driveway extension cost?",
      "Can I add a parking pad beside my driveway?",
    ],
  },
  {
    slug: "concrete-slabs-georgia",
    path: "/services/concrete-slabs-georgia",
    title: "Concrete Slabs, Shop Aprons, and Pads in Georgia",
    cardTitle: "Concrete slabs and pads",
    serviceType: "Concrete slab installation",
    metaTitle: "Concrete Slabs in Georgia | Colquitt Concrete",
    metaDescription:
      "Concrete slabs, shop apron slabs, garage pads, basement pads, and outdoor concrete pads in Georgia with forming, reinforcement, grading, and finish work.",
    summary:
      "Shop aprons, garage pads, basement pads, porch slabs, utility pads, and flatwork built from prep through finish.",
    intro:
      "A slab is only as good as the prep under it. Forms, base preparation, reinforcement, slope, and finish all matter before the concrete truck arrives.",
    image: "/media/projects/shop-apron-slab/after/01-IMG_3048.jpg",
    imageAlt:
      "Finished shop apron concrete slab and outdoor pad by Colquitt Concrete",
    requestSubject: "Concrete slab estimate in Georgia",
    keywordTargets: [
      "concrete slab Georgia",
      "shop apron slab",
      "garage slab concrete",
      "basement pad replacement",
      "outdoor concrete pad",
      "concrete pad contractor",
    ],
    proofPoints: [
      "Shop apron and garage approach slabs",
      "Basement pad replacement and utility pads",
      "Straight forms, clean edges, and practical slopes",
      "Removal, prep, pour, finish, and cleanup",
    ],
    customerSearches: [
      "Who pours concrete slabs in Georgia?",
      "Can I add a concrete pad beside a shop?",
      "Do I need grading before a concrete slab?",
    ],
  },
  {
    slug: "patios-porches-walkways-georgia",
    path: "/services/patios-porches-walkways-georgia",
    title: "Concrete Patios, Porch Slabs, Sidewalks, and Walkways",
    cardTitle: "Patios, porches, and walkways",
    serviceType: "Concrete patio and walkway installation",
    metaTitle: "Concrete Patios and Walkways in Georgia | Colquitt Concrete",
    metaDescription:
      "Georgia concrete contractor for patios, porch slabs, sidewalks, curved walkways, rear patio walks, and outdoor concrete access around homes.",
    summary:
      "Backyard patios, porch slabs, curved walkways, front entries, and smooth transitions around homes.",
    intro:
      "Patios, sidewalks, and walkways are small enough to look simple but important enough to affect drainage, access, and daily use around the property.",
    image: "/media/projects/rear-patio-walk/after/01-IMG_3618.jpg",
    imageAlt:
      "Finished rear patio and concrete walkway around a Georgia home",
    requestSubject: "Patio or walkway concrete estimate in Georgia",
    keywordTargets: [
      "patio concrete Georgia",
      "porch slab concrete",
      "sidewalk concrete Georgia",
      "walkway concrete GA",
      "curved concrete walkway",
      "rear patio walk",
    ],
    proofPoints: [
      "Patio pads and porch slab pours",
      "Curved walkways and front entry access",
      "Transitions around homes, doors, and grade changes",
      "Concrete finish work that fits the property",
    ],
    customerSearches: [
      "Who pours concrete patios near me?",
      "Can I add a walkway from my garage?",
      "Can a porch slab be replaced cleanly?",
    ],
  },
  {
    slug: "pool-deck-concrete-georgia",
    path: "/services/pool-deck-concrete-georgia",
    title: "Pool Deck Concrete and Pool Deck Extensions in Georgia",
    cardTitle: "Pool deck concrete",
    serviceType: "Pool deck concrete installation",
    metaTitle: "Pool Deck Concrete in Georgia | Colquitt Concrete",
    metaDescription:
      "Pool deck concrete extensions, concrete walkways around pools, flatwork near pool fencing, and outdoor concrete surfaces for Georgia homes.",
    summary:
      "Pool deck extensions, poolside walkways, and outdoor concrete surfaces shaped around fencing, slopes, and access.",
    intro:
      "Pool deck work needs clean edges, predictable slopes, and careful access around the pool area so the finished space is practical and easy to use.",
    image: "/media/projects/pool-deck-extension/after/02-IMG_2795.jpg",
    imageAlt:
      "Finished concrete pool deck extension beside a backyard pool in Georgia",
    requestSubject: "Pool deck concrete estimate in Georgia",
    keywordTargets: [
      "pool deck concrete Georgia",
      "pool deck extension",
      "concrete around pool",
      "poolside concrete walkway",
      "backyard pool concrete",
      "pool deck contractor GA",
    ],
    proofPoints: [
      "Concrete extensions around existing pool areas",
      "Poolside access paths and flatwork",
      "Layout around fencing, equipment, and drainage",
      "Finished outdoor concrete built for foot traffic",
    ],
    customerSearches: [
      "Can I extend concrete around my pool?",
      "Who does concrete pool deck work near me?",
      "Can new concrete connect to an existing pool area?",
    ],
  },
  {
    slug: "stamped-decorative-concrete-georgia",
    path: "/services/stamped-decorative-concrete-georgia",
    title: "Stamped and Decorative Concrete in Georgia",
    cardTitle: "Stamped and decorative concrete",
    serviceType: "Stamped concrete and decorative concrete",
    metaTitle: "Stamped Concrete in Georgia | Colquitt Concrete",
    metaDescription:
      "Stamped concrete, decorative concrete, patterned concrete finishes, custom outdoor concrete surfaces, and finished concrete flatwork in Georgia.",
    summary:
      "Stamped, patterned, and decorative concrete finishes for outdoor surfaces that need more visual character.",
    intro:
      "Decorative concrete gives customers a finish option beyond plain flatwork while still depending on the same careful prep, layout, and finishing process.",
    image: "/media/projects/stamped-patio/after/03-IMG_2696.jpg",
    imageAlt:
      "Stamped decorative concrete finish installed by Colquitt Concrete",
    requestSubject: "Stamped concrete estimate in Georgia",
    keywordTargets: [
      "stamped concrete Georgia",
      "decorative concrete GA",
      "patterned concrete finish",
      "custom concrete surface",
      "stamped patio concrete",
      "decorative walkway concrete",
    ],
    proofPoints: [
      "Stamped and patterned finish options",
      "Decorative concrete for patios and walkways",
      "Outdoor surfaces with visual texture",
      "Concrete work that still starts with proper prep",
    ],
    customerSearches: [
      "Who installs stamped concrete near me?",
      "Can a patio have a decorative concrete finish?",
      "What is a better-looking concrete finish option?",
    ],
  },
  {
    slug: "concrete-demolition-removal-georgia",
    path: "/services/concrete-demolition-removal-georgia",
    title: "Concrete Demolition, Removal, and Replacement in Georgia",
    cardTitle: "Concrete demolition and removal",
    serviceType: "Concrete demolition and replacement",
    metaTitle: "Concrete Demolition in Georgia | Colquitt Concrete",
    metaDescription:
      "Concrete demolition, concrete removal, replacement pours, broken slab removal, driveway tear-outs, grading, forms, and rebuilds in Georgia.",
    summary:
      "Concrete tear-outs, broken slab removal, replacement preparation, and rebuilds handled before the new pour.",
    intro:
      "Many concrete jobs start with removing old or failed material. Clean demolition and prep help the replacement pour start with the right base and layout.",
    image: "/media/projects/shop-apron-slab/before/02-IMG_3038.jpg",
    imageAlt:
      "Concrete demolition and site preparation before a replacement slab",
    requestSubject: "Concrete demolition estimate in Georgia",
    keywordTargets: [
      "concrete demolition Georgia",
      "concrete removal GA",
      "driveway tear out",
      "broken concrete removal",
      "concrete replacement",
      "slab removal contractor",
    ],
    proofPoints: [
      "Old concrete removal before replacement",
      "Driveway, pad, walkway, and slab tear-outs",
      "Site cleanup and prep before forms",
      "Replacement pours after demolition and grading",
    ],
    customerSearches: [
      "Who removes old concrete near me?",
      "Can cracked concrete be torn out and replaced?",
      "Do I need demo before a new slab?",
    ],
  },
  {
    slug: "grading-site-prep-concrete-georgia",
    path: "/services/grading-site-prep-concrete-georgia",
    title: "Grading, Site Prep, Forms, and Reinforcement for Concrete",
    cardTitle: "Grading and site prep",
    serviceType: "Concrete grading, forming, and site preparation",
    metaTitle: "Concrete Grading and Site Prep in Georgia | Colquitt Concrete",
    metaDescription:
      "Concrete grading, site prep, form setup, base preparation, reinforcement, drainage planning, and pour preparation for Georgia concrete projects.",
    summary:
      "Dirt work, forms, base preparation, reinforcement, and pour planning before the concrete truck arrives.",
    intro:
      "Strong concrete starts before the pour. This page helps customers understand that grading, forms, base prep, and reinforcement are part of the value, not an afterthought.",
    image: "/media/projects/backyard-driveway-slab/before/03-IMG_2836.jpg",
    imageAlt:
      "Graded concrete site preparation before forms and concrete pour",
    requestSubject: "Concrete grading and site prep estimate in Georgia",
    keywordTargets: [
      "grading for concrete Georgia",
      "concrete site prep",
      "forms and reinforcement",
      "base preparation concrete",
      "concrete pour prep",
      "outdoor concrete site work",
    ],
    proofPoints: [
      "Site review, measurements, and layout",
      "Dirt work, base preparation, and drainage planning",
      "Forms, reinforcement, and pour sequencing",
      "Prep work for driveways, pads, patios, and walkways",
    ],
    customerSearches: [
      "Do I need grading before concrete?",
      "Who sets concrete forms near me?",
      "What prep is needed before a concrete pour?",
    ],
  },
];

export const serviceNames = servicePages.map((service) => service.cardTitle);

export const organicSeoTargets = [
  "Colquitt Concrete",
  "Colquitt Concrete and Outdoor Solutions",
  "Georgia concrete contractor",
  "concrete contractor Georgia",
  "concrete contractor GA",
  "local concrete contractor",
  "concrete estimate Georgia",
  "concrete estimate near me",
  "concrete contractor",
  "concrete driveway",
  "concrete driveway Georgia",
  "driveway concrete",
  "driveway replacement GA",
  "parking pad concrete",
  "concrete slab",
  "concrete slab Georgia",
  "shop apron slab",
  "garage slab concrete",
  "patio concrete",
  "patio concrete Georgia",
  "porch slab",
  "porch slab concrete",
  "sidewalk concrete",
  "sidewalk concrete Georgia",
  "walkway concrete",
  "walkway concrete GA",
  "curved concrete walkway",
  "pool deck concrete",
  "pool deck concrete Georgia",
  "pool deck extension",
  "stamped concrete",
  "stamped concrete Georgia",
  "decorative concrete",
  "decorative concrete GA",
  "concrete demolition",
  "concrete demolition Georgia",
  "concrete removal",
  "concrete removal GA",
  "grading",
  "grading for concrete",
  "site prep",
  "concrete site prep",
  "forms and reinforcement",
  "base preparation concrete",
  "residential concrete",
  "residential concrete Georgia",
  "light commercial concrete",
  "outdoor concrete solutions",
];

export const serviceKeywords = Array.from(
  new Set([
    ...organicSeoTargets,
    ...servicePages.flatMap((service) => service.keywordTargets),
  ])
);
