import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ – Hair Patch & Wig Fixing | HairFix Pune" },
      { name: "description", content: "Answers to common questions about hair patches, wigs, fixing, maintenance, durability and care at HairFix Pune." },
      { property: "og:title", content: "Hair Patch & Wig Fixing FAQ – HairFix Pune" },
      { property: "og:description", content: "Common questions about hair patches, wigs and maintenance." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "How long does a hair patch last?", a: "Typically 6–18 months depending on hair quality, daily care and regular maintenance." },
  { q: "Can I swim and exercise with a hair patch?", a: "Yes. With proper fixing and care, you can swim, work out and live a fully active lifestyle." },
  { q: "Is the process painful?", a: "No. The entire process is non-surgical, painless and uses skin-safe adhesives." },
  { q: "How often is servicing required?", a: "Generally every 15–30 days, depending on your scalp type and the bonding method used." },
  { q: "Will it look natural?", a: "Yes. Our customised hair systems are designed to match your hair colour, density and style — most people cannot tell." },
  { q: "Do you service hair patches that were fitted elsewhere?", a: "Yes, we service and rebond hair patches purchased from other studios as well." },
];

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you might want to know before booking a consultation with HairFix.
        </p>
      </header>

      <dl className="mt-10 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 open:shadow-sm">
            <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:hidden">
              <span className="flex items-start justify-between gap-4">
                {f.q}
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <dd className="mt-3 text-sm text-muted-foreground">{f.a}</dd>
          </details>
        ))}
      </dl>
    </div>
  );
}