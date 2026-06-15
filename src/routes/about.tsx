import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Shield, Users, Award, Heart, Lock } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HairFix Pune – Non-Surgical Hair Replacement Experts" },
      { name: "description", content: "HairFix is a Pimple Nilakh, Pune-based studio specialising in non-surgical hair replacement, custom wigs, bonding and patch servicing for men and women." },
      { property: "og:title", content: "About HairFix Pune" },
      { property: "og:description", content: "Meet HairFix – Pune's trusted non-surgical hair replacement studio." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const reasons = [
  { icon: Award, title: "Experienced Professionals", desc: "A team trained in the latest hair system techniques." },
  { icon: Users, title: "Customized Hair Systems", desc: "Built to match your hair density, colour, and style." },
  { icon: Heart, title: "Natural Hairline Design", desc: "Hand-crafted hairlines that look indistinguishable from real hair." },
  { icon: Shield, title: "Comfortable & Secure Fixing", desc: "Skin-safe adhesives suitable for daily wear." },
  { icon: CheckCircle2, title: "Affordable Pricing", desc: "Transparent rates with EMI and package options." },
  { icon: Lock, title: "Complete Privacy", desc: "Private consultation rooms and discreet service." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">About Us</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Restore Your Hair. Rebuild Your Confidence.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          At HairFix, we specialise in non-surgical hair replacement solutions for men and women.
          Located near Jagtap Dairy Chowk, Pimple Nilakh, Pune, we help clients regain confidence
          through premium hair patches, wigs, extensions, and maintenance services.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <img src="/images/consultation.jpg" alt="HairFix consultation in Pune" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Who We Are</h2>
          <p className="mt-3 text-muted-foreground">
            HairFix was founded with one mission: to make premium, natural-looking hair solutions
            accessible to everyone in Pune. We combine global hair replacement techniques with a
            warm, judgement-free experience — because regaining your hair should feel as good as
            it looks.
          </p>
          <p className="mt-3 text-muted-foreground">
            Whether you are dealing with early thinning, advanced baldness, alopecia, or
            chemotherapy-related hair loss, our specialists design a solution made just for you.
          </p>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Why Choose HairFix?</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-secondary/40 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Visit our Pune studio</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Walk in for a free, no-obligation consultation. We will assess your hair loss stage and
          recommend the right hair system for you.
        </p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Book Free Consultation
        </Link>
      </section>
    </div>
  );
}