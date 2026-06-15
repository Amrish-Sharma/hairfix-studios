import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing – Hair Patch, Wigs & Bonding | HairFix Pune" },
      { name: "description", content: "Transparent starting prices for hair patches, wigs, bonding, weaving and extensions at HairFix Pune. Free consultation included." },
      { property: "og:title", content: "HairFix Pune Pricing" },
      { property: "og:description", content: "Starting prices for hair patches, wigs and hair replacement services in Pune." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const rows = [
  { name: "New Hair Wig", price: "₹8,000" },
  { name: "Hair Patch Service (Maintenance)", price: "₹500" },
  { name: "Hair Bonding", price: "Contact Us" },
  { name: "Hair Weaving", price: "Contact Us" },
  { name: "Hair Extensions", price: "Contact Us" },
  { name: "Custom Hair Wigs", price: "Contact Us" },
];

function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pricing</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Below are our starting prices. Final pricing depends on hair quality, size,
          customisation and service requirements.
        </p>
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-left">
          <thead className="bg-secondary/50 text-sm text-foreground">
            <tr>
              <th className="px-6 py-4 font-semibold">Service</th>
              <th className="px-6 py-4 font-semibold text-right">Starting Price</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((r) => (
              <tr key={r.name} className="border-t border-border/60">
                <td className="px-6 py-4 text-foreground">{r.name}</td>
                <td className="px-6 py-4 text-right font-medium text-foreground">{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        * Final pricing depends on hair quality, size, customisation and service requirements.
      </p>

      <div className="mt-10 rounded-3xl bg-secondary/40 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-foreground">Not sure which service fits you?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Book a free, private consultation and we will recommend the best option for your hair
          loss stage and budget.
        </p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Book Free Consultation
        </Link>
      </div>
    </div>
  );
}