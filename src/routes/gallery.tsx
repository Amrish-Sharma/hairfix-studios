import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Gallery – Hair Patch Transformations | HairFix Pune" },
      { name: "description", content: "See real before-and-after results from HairFix Pune: hair patch transformations, wig makeovers and hairline restoration." },
      { property: "og:title", content: "Hair Patch Before & After Gallery – HairFix Pune" },
      { property: "og:description", content: "Real client transformations from our Pimple Nilakh studio." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: "/images/patching-service.jpg", title: "Hair Patch Transformation", desc: "Receding hairline restored with a custom front patch." },
  { src: "/images/maintenance.jpg", title: "Wig Makeover", desc: "Full custom wig styled and fitted in a single sitting." },
  { src: "/images/consultation.jpg", title: "Hairline Restoration", desc: "Natural-looking hairline designed to suit the client's face." },
  { src: "/images/hero-studio.jpg", title: "Studio Fitting", desc: "Final fitting and styling at our Pimple Nilakh studio." },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Gallery</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Before & After Transformations</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A look at the work we do every day — hair patch fittings, wig makeovers and hairline
          restoration for clients across Pune.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {items.map((it) => (
          <figure key={it.title} className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={it.src} alt={it.title} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="p-5">
              <h2 className="text-lg font-semibold text-foreground">{it.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">* Actual client results may vary.</p>

      <div className="mt-10">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Start Your Transformation
        </Link>
      </div>
    </div>
  );
}