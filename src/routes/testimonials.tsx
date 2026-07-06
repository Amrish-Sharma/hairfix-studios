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
  { text: "Had an excellent experience with the hair patch service. The staff is professional, patient, and very knowledgeable. The hair patch looks completely natural, feels comfortable, and blends perfectly with my own hair. Highly recommended for anyone looking for a natural, hassle-free hair solution!", name: "Akshay Goel", city: "Google Review" },
  { text: "I was facing issues with baldness and did not want to spend much money on a hair transplant, plus was afraid of its side-effects. I came across HairFix who gave me a better solution — installing a hair patch that is easy to maintain and has no side-effects.", name: "Adwait Padalkar", city: "Google Review" },
  { text: "Very great service with the expertise of Irshad. Great ambience, luxurious environment and efficient work with a great transformation result.", name: "Satvik Yadav", city: "Google Review" },
  { text: "The hair studio looks great. Professional setup and technician.", name: "Bidit Roy", city: "Local Guide · Google Review" },
  { text: "Happy with the service! Reasonably priced and humble staff.", name: "Pradeep Yadav", city: "Google Review" },
  { text: "Very satisfied with the service. Would highly recommend visiting and getting serviced here.", name: "Sandeep Chawla", city: "Google Review" },
  { text: "Nice place to get the hair done. Very good response and the staff is very cooperative.", name: "Aniket Deshmukh", city: "Google Review" },
  { text: "Best products and best service in the town.", name: "Bhushan Ghate", city: "Google Review" },
  { text: "Perfect place. Highly recommended for anyone looking for good-quality wigs.", name: "Pratik Kudale", city: "Google Review" },
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