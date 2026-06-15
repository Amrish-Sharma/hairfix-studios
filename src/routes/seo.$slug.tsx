import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

type SeoPage = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bullets: string[];
  body: string;
};

const pages: Record<string, SeoPage> = {
  "hair-patch-in-pune": {
    title: "Hair Patch in Pune",
    metaTitle: "Hair Patch in Pune – Natural, Non-Surgical Hair Replacement | HairFix",
    metaDescription: "Premium hair patch services in Pune at HairFix Pimple Nilakh. Natural hairline, painless fixing, same-day results for men and women.",
    intro: "Looking for a natural-looking hair patch in Pune? HairFix offers customised, non-surgical hair patches that restore your hairline and confidence in a single sitting.",
    bullets: [
      "Hand-crafted, undetectable hairlines",
      "Same-day fitting at our Pimple Nilakh studio",
      "Hypoallergenic adhesives, safe for daily wear",
      "Free, private consultation for every client",
    ],
    body: "Our hair patches are made from high-grade human and synthetic hair, matched to your existing colour, density and texture. Whether you have a receding hairline, crown thinning or advanced baldness, our specialists design a patch that blends seamlessly. With routine servicing every 15–30 days, your patch can comfortably last 6–18 months.",
  },
  "wig-fixing-in-pune": {
    title: "Wig Fixing in Pune",
    metaTitle: "Wig Fixing in Pune – Custom Wigs for Men & Women | HairFix",
    metaDescription: "Expert wig fixing in Pune. HairFix designs, fits and services custom wigs for hair loss, alopecia and medical hair loss.",
    intro: "HairFix is Pune's trusted destination for wig fixing — from selecting the right wig to fitting it securely so it looks and feels like your own hair.",
    bullets: [
      "Custom wigs in any colour, density and length",
      "Secure fitting that stays put through daily activity",
      "Discreet service for medical hair loss and alopecia",
      "Lifetime servicing and styling support",
    ],
    body: "We help clients choose between human-hair and premium synthetic wigs based on lifestyle, budget and styling needs. Once chosen, our team fixes the wig using clips, tape or bonding for a comfortable, natural finish. Walk-ins welcome at our Pimple Nilakh studio.",
  },
  "non-surgical-hair-replacement-in-pune": {
    title: "Non-Surgical Hair Replacement in Pune",
    metaTitle: "Non-Surgical Hair Replacement in Pune – HairFix",
    metaDescription: "Non-surgical hair replacement in Pune at HairFix. Painless, instant, affordable alternative to hair transplant surgery.",
    intro: "If you are not ready for a transplant, non-surgical hair replacement is the fastest way to get a fuller head of hair — instantly, painlessly and affordably.",
    bullets: [
      "No surgery, no recovery, no scars",
      "Visible results in a single sitting",
      "A fraction of the cost of a transplant",
      "Fully reversible and customisable",
    ],
    body: "Our non-surgical hair replacement combines a custom hair system with a secure fixing method — bonding, weaving, taping or clipping — chosen to suit your scalp, lifestyle and comfort. The result is a natural look that holds up through showering, gym sessions and daily wear.",
  },
  "hair-bonding-in-pune": {
    title: "Hair Bonding Services in Pune",
    metaTitle: "Hair Bonding in Pune – Long-Lasting, Natural Look | HairFix",
    metaDescription: "Hair bonding services in Pune at HairFix. Long-lasting, natural-looking hair systems bonded with skin-safe adhesives.",
    intro: "Hair bonding is a long-wear technique where your hair system is bonded to the scalp using skin-safe medical adhesive — perfect for a low-maintenance, natural finish.",
    bullets: [
      "Wear-and-forget: no daily removal",
      "Hypoallergenic, dermatologist-approved adhesives",
      "Stays put through sweat, swim and sleep",
      "Servicing every 3–6 weeks",
    ],
    body: "Our bonding specialists prep the scalp, position your hair system along the designed hairline and seal it with medical-grade adhesive. Bonding is ideal for clients with an active lifestyle who want their hair system to feel like a permanent part of them.",
  },
  "custom-hair-wigs-in-pune": {
    title: "Custom Hair Wigs in Pune",
    metaTitle: "Custom Hair Wigs in Pune – Made to Match Your Hair | HairFix",
    metaDescription: "Custom hair wigs in Pune designed to match your hair colour, density and style. Human hair and premium synthetic options at HairFix.",
    intro: "A custom wig fits like nothing else — built to your head measurements, hair colour, density and styling preferences.",
    bullets: [
      "100% human-hair and premium synthetic options",
      "Made to your measurements and hairline",
      "Colour-matched to your existing hair",
      "Includes fitting, styling and aftercare",
    ],
    body: "Custom wigs typically take 3–4 weeks to craft. We start with detailed measurements, hair samples and a lifestyle consultation. The finished wig is fitted, trimmed and styled at our Pune studio so it is ready to wear when you walk out.",
  },
  "hair-patch-maintenance": {
    title: "Hair Patch Maintenance & Servicing",
    metaTitle: "Hair Patch Maintenance & Servicing in Pune | HairFix",
    metaDescription: "Hair patch cleaning, rebonding, styling, refitting and maintenance in Pune. Extend the life of your hair patch with HairFix servicing from ₹500.",
    intro: "Regular servicing is what keeps your hair patch looking and feeling like new. HairFix offers complete maintenance packages from ₹500.",
    bullets: [
      "Cleaning to remove buildup and odour",
      "Rebonding for a fresh, secure hold",
      "Styling and trimming to keep the look sharp",
      "Refitting for any patch — even if it was bought elsewhere",
    ],
    body: "Most clients service their hair patch every 15–30 days. Our team removes the patch, deep-cleans it, refreshes the bonding base and refits it with a clean adhesive line. Walk-in appointments available.",
  },
};

export const Route = createFileRoute("/seo/$slug")({
  loader: ({ params }) => {
    const page = pages[params.slug];
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:url", content: `/seo/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/seo/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
      <Link to="/services" className="mt-4 inline-flex text-primary hover:underline">Back to services</Link>
    </div>
  ),
  component: SeoPageView,
});

function SeoPageView() {
  const page = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">HairFix Pune</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{page.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{page.intro}</p>
      <ul className="mt-8 space-y-2">
        {page.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {b}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-base text-muted-foreground">{page.body}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Book Free Consultation
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-accent/20">
          See all services
        </Link>
      </div>
    </article>
  );
}