import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials – HairFix Pune" },
      { name: "description", content: "Hear from HairFix Pune clients about their hair patch, wig fixing and hair replacement experiences." },
      { property: "og:title", content: "HairFix Pune – Client Testimonials" },
      { property: "og:description", content: "Real reviews from clients who restored their hair and confidence with HairFix." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { text: "Very natural-looking hair patch. Excellent service and professional staff.", name: "Rohit S.", city: "Pune" },
  { text: "My confidence is back. Nobody can tell I'm wearing a hair system.", name: "Amit P.", city: "Pimple Saudagar" },
  { text: "Affordable pricing and great after-service support. Highly recommend.", name: "Suresh K.", city: "Wakad" },
  { text: "From consultation to fitting, the whole experience was private and comfortable.", name: "Vikram M.", city: "Aundh" },
  { text: "The custom wig matched my hair colour perfectly. Worth every rupee.", name: "Neha R.", city: "Baner" },
  { text: "Servicing is quick and the team is very honest about what's needed.", name: "Sandeep T.", city: "Hinjewadi" },
];

function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Testimonials</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Real Stories from Real Clients</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Every five-star review is from someone who walked through our doors looking for a
          natural, confidence-boosting solution.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="mt-3 text-sm text-foreground">"{r.text}"</blockquote>
            <figcaption className="mt-3 text-sm font-medium text-muted-foreground">— {r.name}, {r.city}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}