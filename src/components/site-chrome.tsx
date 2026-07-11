import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const PHONE = "+919960688686";
const PHONE_DISPLAY = "+91 99606 88686";
const WHATSAPP = "919960688686";
const EMAIL = "hairfixservice@gmail.com";
const ADDRESS = "Near Jagtap Dairy Chowk, Pimple Nilakh, Pune";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function BrandMark({ size = 28, onDark = false }: { size?: number; onDark?: boolean }) {
  const stroke = onDark ? "#F7F4EE" : "#1B1B1B";
  return (
    <svg
      width={size}
      height={(size * 54) / 48}
      viewBox="0 0 48 54"
      fill="none"
      aria-hidden="true"
    >
      <g strokeLinecap="round" fill="none" strokeWidth={2}>
        <path d="M10 48 C10 30 11 16 20 8" stroke={stroke} />
        <path d="M14 48 C14 30 15 16 24 8" stroke={stroke} />
        <path d="M18 48 C18 30 19 16 28 8" stroke={stroke} />
        <path d="M22 48 C22 30 23 16 32 8" stroke={stroke} />
        <path d="M26 48 C26 30 27 16 36 8" stroke={stroke} />
        <path d="M30 48 C30 30 31 16 40 8" stroke="#C28A42" strokeWidth={2.4} />
      </g>
    </svg>
  );
}

function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className="font-serif text-xl font-semibold tracking-tight"
        style={{ color: onDark ? "#F7F4EE" : undefined }}
      >
        HairFix
      </span>
      <span
        className="mt-0.5 text-[9px] font-semibold uppercase"
        style={{
          letterSpacing: "0.42em",
          color: onDark ? "rgba(247,244,238,0.7)" : "var(--muted-foreground)",
        }}
      >
        Studios
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <BrandMark size={28} />
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm font-medium transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/20 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Us</span>
          </a>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="border-t border-border/40 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-2 text-sm sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground font-semibold" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <BrandMark size={30} />
            <Wordmark />
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            HairFix – Restore Your Hair, Rebuild Your Confidence. Premium non-surgical hair
            replacement, wigs, and patch servicing in Pune.
          </p>
          <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{ADDRESS}</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={`tel:${PHONE}`} className="hover:text-foreground">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp Chat</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Mon–Sun · 9:00 AM – 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} HairFix Studios Pune. All rights reserved.</p>
          <p>Natural Hair Solutions · Natural Confidence</p>
        </div>
      </div>
    </footer>
  );
}

export const SITE_CONTACT = { PHONE, PHONE_DISPLAY, WHATSAPP, EMAIL, ADDRESS };