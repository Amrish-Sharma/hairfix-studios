import { createFileRoute, Link } from "@tanstack/react-router";

import studioEntrance from "@/assets/gallery/studio-entrance.jpg.asset.json";
import clientBefore from "@/assets/gallery/client-before.jpg.asset.json";
import clientAfter from "@/assets/gallery/client-after.jpg.asset.json";
import transformations from "@/assets/gallery/transformations.jpg.asset.json";
import staffWithPatch from "@/assets/gallery/staff-with-patch.jpg.asset.json";
import patch2 from "@/assets/gallery/patch-product-2.jpg.asset.json";
import patch3 from "@/assets/gallery/patch-product-3.jpg.asset.json";
import studioTour from "@/assets/gallery/studio-tour.mp4.asset.json";
import videoPatchFitting from "@/assets/gallery/video-patch-fitting.mp4.asset.json";
import videoOpening from "@/assets/gallery/video-opening.mp4.asset.json";
import videoStudio1 from "@/assets/gallery/video-studio-1.mp4.asset.json";
import videoStudio2 from "@/assets/gallery/video-studio-2.mp4.asset.json";
import videoStudio3 from "@/assets/gallery/video-studio-3.mp4.asset.json";
import videoStudio4 from "@/assets/gallery/video-studio-4.mp4.asset.json";
import videoStudio5 from "@/assets/gallery/video-studio-5.mp4.asset.json";
import videoStudio6 from "@/assets/gallery/video-studio-6.mp4.asset.json";
import videoStudio7 from "@/assets/gallery/video-studio-7.mp4.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Before & After Gallery – Hair Patch Transformations | HairFix Pune" },
      { name: "description", content: "See real before-and-after results from HairFix Pune: hair patch transformations, wig makeovers and hairline restoration." },
      { property: "og:title", content: "Hair Patch Before & After Gallery – HairFix Pune" },
      { property: "og:description", content: "Real client transformations from our Pimple Nilakh studio." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: transformations.url },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const transformationItems = [
  { src: transformations.url, title: "Client Transformations", desc: "Multiple angles showing real before-and-after hair patch results." },
  { src: clientBefore.url, title: "Before – Complete Baldness", desc: "Client at initial consultation before the hair patch fitting." },
  { src: clientAfter.url, title: "After – Natural Hairline", desc: "Same client after a custom hair patch fitting and styling." },
];

const studioItems = [
  { src: studioEntrance.url, title: "Studio Entrance", desc: "Our HairFix Studio in Pimple Nilakh, Pune – grand opening day." },
  { src: staffWithPatch.url, title: "Our Team", desc: "HairFix specialist showcasing a premium human-hair patch." },
];

const patchItems = [
  { src: patch1.url, title: "Premium Human Hair Patch", desc: "VIP-grade human hair patch with poly skin base." },
  { src: patch2.url, title: "Poly Skin Base Patch", desc: "Ultra-thin poly base for an invisible, natural finish." },
  { src: patch3.url, title: "Lace Base Patch", desc: "Breathable Swiss lace base for a barely-there feel." },
];

const videoItems = [
  { src: videoPatchFitting.url, title: "Hair Patch Fitting" },
  { src: videoOpening.url, title: "Studio Opening Day" },
  { src: videoStudio1.url, title: "Inside the Studio" },
  { src: videoStudio2.url, title: "Studio Tour" },
  { src: videoStudio3.url, title: "Client Experience" },
  { src: videoStudio4.url, title: "At the Studio" },
  { src: videoStudio5.url, title: "Studio Moments" },
  { src: videoStudio6.url, title: "Behind the Scenes" },
  { src: videoStudio7.url, title: "Grand Opening" },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Gallery</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Before & After Transformations</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Real clients, real results. Take a look inside our Pimple Nilakh studio,
          the premium hair patches we use, and the transformations we deliver.
        </p>
      </header>

      <Section title="Client Transformations" subtitle="Before-and-after results from clients at our Pune studio." items={transformationItems} />

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Inside the Studio</h2>
        <p className="mt-2 text-muted-foreground">A quick tour of our HairFix Studio in Pimple Nilakh, Pune.</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <video
            src={studioTour.url}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full bg-black object-cover"
          />
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioItems.map((it) => (
            <GalleryCard key={it.title} {...it} />
          ))}
        </div>
      </section>

      <Section title="Our Hair Patches" subtitle="Premium human-hair patches with poly skin and lace bases." items={patchItems} />

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Video Highlights</h2>
        <p className="mt-2 text-muted-foreground">Studio tours, fittings and moments from HairFix Pune.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoItems.map((v) => (
            <figure key={v.title} className="overflow-hidden rounded-2xl border border-border bg-card">
              <video
                src={v.src}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black object-cover"
              />
              <figcaption className="p-4">
                <h3 className="text-sm font-semibold text-foreground">{v.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">* Actual client results may vary.</p>

      <div className="mt-10">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Start Your Transformation
        </Link>
      </div>
    </div>
  );
}

function Section({ title, subtitle, items }: { title: string; subtitle: string; items: { src: string; title: string; desc: string }[] }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-2 text-muted-foreground">{subtitle}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <GalleryCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({ src, title, desc }: { src: string; title: string; desc: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card">
      <img src={src} alt={title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
      <figcaption className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </figcaption>
    </figure>
  );
}