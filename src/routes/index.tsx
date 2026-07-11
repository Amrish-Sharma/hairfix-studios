import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Shield,
  Clock,
  IndianRupee,
  Scissors,
  Star,
  ChevronRight,
} from "lucide-react";
import { SITE_CONTACT } from "../components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HairFix Pune – Hair Patch, Wig Fixing & Hair Replacement" },
      { name: "description", content: "Natural-looking, non-surgical hair patch and wig fixing in Pimple Nilakh, Pune. Free consultation, same-day fixing, customized hair systems for men and women." },
      { property: "og:title", content: "HairFix Pune – Natural Hair Solutions, Natural Confidence" },
      { property: "og:description", content: "Premium hair patch, wig fixing, bonding, weaving, extensions and maintenance services in Pune." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const highlights = [
  "Natural Look",
  "Non-Surgical Treatment",
  "Affordable Pricing",
  "Same-Day Hair Fixing",
  "Customized Solutions",
  "100% Privacy",
];

const services = [
  { name: "Hair Fixing", desc: "Permanent-looking hair replacement without surgery." },
  { name: "Hair Bonding", desc: "Advanced bonding technique for a seamless, natural appearance." },
  { name: "Hair Weaving", desc: "Integration of hair systems with your existing hair." },
  { name: "Hair Clipping", desc: "Quick, removable hair patch solutions for flexibility." },
  { name: "Hair Extensions", desc: "Increase volume and length naturally." },
  { name: "Custom Hair Wigs", desc: "Tailor-made wigs in your hair colour, density, and style." },
];

const testimonials = [
  { text: "The hair patch looks completely natural, feels comfortable, and blends perfectly with my own hair. Highly recommended for anyone looking for a natural, hassle-free hair solution!", name: "Akshay Goel" },
  { text: "HairFix gave me a better solution than a transplant — a hair patch that is easy to maintain and has no side-effects.", name: "Adwait Padalkar" },
  { text: "Great ambience, luxurious environment and efficient work with a great transformation result.", name: "Satvik Yadav" },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-studio.jpg" alt="HairFix Studios interior in Pune" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl rounded-2xl bg-background/70 p-6 backdrop-blur-sm sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Pune's Trusted Hair Replacement Studio
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground [text-shadow:0_1px_2px_rgba(247,244,238,0.8)] sm:text-5xl lg:text-6xl">
              Get Your Confidence Back with Natural-Looking Hair Solutions
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Professional Hair Patch, Wig Fixing & Non-Surgical Hair Replacement Solutions in Pune.
              Customized for your hairline, lifestyle, and budget.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Book Free Consultation <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${SITE_CONTACT.WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/20"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
              <a
                href={`tel:${SITE_CONTACT.PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/20"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border/40 bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Sparkles, title: "Natural Hairline", desc: "Hand-crafted hairlines that look truly yours." },
            { icon: Shield, title: "Secure & Comfortable", desc: "Hypoallergenic adhesives and a snug fit." },
            { icon: Clock, title: "Same-Day Fixing", desc: "Walk in bald, walk out transformed." },
            { icon: IndianRupee, title: "Affordable Pricing", desc: "Transparent pricing, EMI options available." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-muted-foreground">
            From first-time fitting to ongoing maintenance — every service is customized to your
            hair type, lifestyle, and comfort.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <Scissors className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-lg font-semibold text-foreground">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View all services <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Transformation strip */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img src="/images/patching-service.jpg" alt="Hair patch fitting in progress" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Real Transformations. Real Confidence.</h2>
            <p className="mt-3 text-muted-foreground">
              Hundreds of clients across Pune have walked into our Pimple Nilakh studio and walked
              out with a fuller, natural head of hair. See the before-and-after results from our
              recent fittings.
            </p>
            <div className="mt-6">
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                View Gallery <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Clients Say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-3 text-sm text-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-3 text-sm font-medium text-muted-foreground">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border/40 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to look like yourself again?</h2>
            <p className="mt-2 text-primary-foreground/85">Book a free, private consultation at our Pimple Nilakh studio today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-background/90">
              Book Free Consultation
            </Link>
            <a href={`tel:${SITE_CONTACT.PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-5 py-3 text-sm font-medium hover:bg-primary-foreground/10">
              <Phone className="h-4 w-4" /> {SITE_CONTACT.PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}