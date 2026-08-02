import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Layers, Link2, Plus, Tag, Crown } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services – Hair Patch, Wig Fixing, Bonding & More | HairFix Pune" },
      { name: "description", content: "Complete hair replacement services in Pune: hair fixing, bonding, weaving, clipping, extensions, taping, custom wigs and full hair patch servicing." },
      { property: "og:title", content: "Hair Replacement Services in Pune – HairFix" },
      { property: "og:description", content: "Hair fixing, bonding, weaving, clipping, extensions, taping, custom wigs and full hair patch maintenance." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Scissors, name: "Hair Patch Servicing", desc: "Cleaning, taping, styling, maintenance and refitting for your existing patch." },
  { icon: Link2, name: "Hair Bonding", desc: "Advanced bonding technique that creates a seamless, natural appearance with long wear time." },
  { icon: Layers, name: "Hair Weaving", desc: "Integration of a hair system with your existing hair for added density and volume." },
  { icon: Tag, name: "Hair Clipping", desc: "Quick, removable hair patch solutions ideal for clients who want flexibility." },
  { icon: Plus, name: "Hair Extensions", desc: "Increase volume and length naturally — perfect for thinning hair or special occasions." },
  { icon: Crown, name: "Custom Hair Wigs", desc: "Tailor-made wigs designed to match your hair colour, density, and style." },
];

const seoLinks = [
  { slug: "hair-patch-in-pune", label: "Hair Patch in Pune" },
  { slug: "wig-fixing-in-pune", label: "Wig Fixing in Pune" },
  { slug: "non-surgical-hair-replacement-in-pune", label: "Non-Surgical Hair Replacement in Pune" },
  { slug: "hair-bonding-in-pune", label: "Hair Bonding Services in Pune" },
  { slug: "custom-hair-wigs-in-pune", label: "Custom Hair Wigs in Pune" },
  { slug: "hair-patch-maintenance", label: "Hair Patch Maintenance & Servicing" },
] as const;


function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Services</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Hair Replacement & Wig Services in Pune
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Every HairFix service is non-surgical, painless, and customised to your unique hair
          loss pattern, lifestyle and budget.
        </p>
      </header>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, name, desc }) => (
          <article key={name} className="rounded-2xl border border-border bg-card p-6">
            <Icon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-lg font-semibold text-foreground">{name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-border bg-card p-8">
        <h2 className="text-2xl font-bold text-foreground">Hair Patch Servicing Includes</h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-5">
          {["Cleaning", "Taping", "Styling", "Maintenance", "Refitting"].map((s) => (
            <li key={s} className="rounded-xl bg-secondary/50 px-4 py-3 text-center font-medium text-foreground">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">Explore by service area</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {seoLinks.map((l) => (
            <Link key={l.slug} to="/seo/$slug" params={{ slug: l.slug }} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Book Free Consultation
        </Link>
      </div>
    </div>
  );
}