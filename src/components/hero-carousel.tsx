import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, CheckCircle2, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import invitation from "@/assets/hairfix-ravet-invitation.jpg.asset.json";
import transformations from "@/assets/gallery/transformations.jpg.asset.json";
import { SITE_CONTACT } from "./site-chrome";
import { RAVET_ADDRESS, RAVET_MAPS_URL } from "./splash-intro";

// Invitation slide is shown until the end of 10 October 2026 (India time).
const INVITATION_EXPIRES = new Date("2026-10-11T00:00:00+05:30").getTime();
const INTERVAL_MS = 6000;

const primaryBtn =
  "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90";
const outlineBtn =
  "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/20";

function WhatsAppBtn() {
  return (
    <a href={`https://wa.me/${SITE_CONTACT.WHATSAPP}`} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
      <MessageCircle className="h-4 w-4" /> WhatsApp Now
    </a>
  );
}
function CallBtn() {
  return (
    <a href={`tel:${SITE_CONTACT.PHONE}`} className={outlineBtn}>
      <Phone className="h-4 w-4" /> Call Us
    </a>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
      {items.map((h) => (
        <li key={h} className="flex items-center gap-2 text-sm text-foreground">
          <CheckCircle2 className="h-4 w-4 text-primary" /> {h}
        </li>
      ))}
    </ul>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

type Slide = { id: string; bg: string; alt: string; content: ReactNode; side?: ReactNode };

const invitationSlide: Slide = {
  id: "invitation",
  bg: "/images/hero-studio.jpg",
  alt: "HairFix Studios interior",
  content: (
    <>
      <Badge>Grand Opening • 11 October 2026</Badge>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        HairFix Studios Is Now in Ravet!
      </h2>
      <p className="mt-5 text-lg text-muted-foreground">
        You're invited to the grand opening of our new branch. {RAVET_ADDRESS}.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href={RAVET_MAPS_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
          <MapPin className="h-4 w-4" /> Get Directions
        </a>
        <WhatsAppBtn />
        <CallBtn />
      </div>
    </>
  ),
  side: (
    <a href={RAVET_MAPS_URL} target="_blank" rel="noopener noreferrer" className="block">
      <img
        src={invitation.url}
        alt="Grand opening invitation for HairFix Ravet branch on 11 October 2026"
        className="max-h-[520px] w-auto rounded-2xl shadow-2xl"
      />
    </a>
  ),
};

const infoSlides: Slide[] = [
  {
    id: "natural",
    bg: "/images/hero-studio.jpg",
    alt: "HairFix Studios interior in Pune",
    content: (
      <>
        <Badge>Pune's Trusted Hair Replacement Studio</Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Get Your Confidence Back with Natural-Looking Hair Solutions
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Professional Hair Patch, Wig Fixing & Non-Surgical Hair Replacement Solutions in Pune.
          Customized for your hairline, lifestyle, and budget.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/contact" className={primaryBtn}>
            Book Free Consultation <ChevronRight className="h-4 w-4" />
          </Link>
          <WhatsAppBtn />
          <CallBtn />
        </div>
        <Highlights items={["Natural Look", "Non-Surgical", "Same-Day Fixing", "100% Privacy"]} />
      </>
    ),
  },
  {
    id: "transformations",
    bg: transformations.url,
    alt: "Before and after hair patch transformations",
    content: (
      <>
        <Badge>Real Results • Zero Surgery</Badge>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Walk In with Hair Loss, Walk Out with Confidence
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Australia Mirage and Full Lace patches, matched to your hair colour, density and style —
          lightweight, comfortable and made for everyday life.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/gallery" className={primaryBtn}>
            See Transformations <ChevronRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className={outlineBtn}>Our Services</Link>
          <WhatsAppBtn />
        </div>
        <Highlights items={["Undetectable Hairline", "Lightweight Feel", "Gym & Shower Friendly"]} />
      </>
    ),
  },
];

export function HeroCarousel() {
  const [showInvite, setShowInvite] = useState(true);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (Date.now() >= INVITATION_EXPIRES) setShowInvite(false);
  }, []);

  const slides = showInvite ? [invitationSlide, ...infoSlides] : infoSlides;
  const count = slides.length;
  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (index >= count) setIndex(0);
  }, [count, index]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="grid">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`relative col-start-1 row-start-1 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <div className="absolute inset-0">
              <img src={s.bg} alt={s.alt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
            </div>
            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:px-8 lg:py-28">
              <div className="max-w-2xl rounded-2xl bg-background/70 p-6 backdrop-blur-sm sm:p-8">{s.content}</div>
              {s.side && <div className="flex flex-1 justify-center">{s.side}</div>}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur hover:bg-background md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur hover:bg-background md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-foreground/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
