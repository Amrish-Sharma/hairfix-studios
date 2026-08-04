import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail, Clock, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

export function BrandLogo({
  className = "h-14 w-auto",
  variant = "lockup",
}: {
  className?: string;
  variant?: "lockup" | "header";
}) {
  const isHeader = variant === "header";
  return (
    <img
      src={isHeader ? "/brand/hairfix-logo-header.svg" : "/brand/hairfix-logo-lockup.svg"}
      alt="HairFix Studios — Your Journey to Confidence"
      className={className}
      width={isHeader ? 640 : 617}
      height={isHeader ? 140 : 133}
    />
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center lg:shrink-0">
          <BrandLogo variant="header" className="h-11 w-auto sm:h-14" />
        </Link>

        {/* Modern desktop nav: floating pill with active indicator */}
        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-card/50 p-1 backdrop-blur-sm xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className:
                  "bg-primary text-primary-foreground shadow-sm",
              }}
              inactiveProps={{
                className:
                  "text-muted-foreground hover:text-foreground hover:bg-accent/10",
              }}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-all"
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

          {/* Mobile / tablet hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="inline-flex items-center justify-center rounded-full border border-border bg-background p-2.5 text-foreground transition-colors hover:bg-accent/20 xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Modern mobile menu: full-width slide-down panel */}
      <div
        className={cn(
          "overflow-hidden border-b border-border/40 bg-background/95 backdrop-blur-md transition-all duration-300 ease-out xl:hidden",
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className:
                  "bg-primary/10 text-foreground border-l-4 border-primary",
              }}
              inactiveProps={{
                className:
                  "text-muted-foreground hover:text-foreground hover:bg-accent/10 border-l-4 border-transparent",
              }}
              className="rounded-r-lg px-4 py-3 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border/40 pt-3">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/20"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <BrandLogo className="h-16 w-auto" />
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
