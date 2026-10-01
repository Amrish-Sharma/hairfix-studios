import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONTACT } from "../components/site-chrome";
import { RAVET_ADDRESS, RAVET_MAPS_URL } from "../components/splash-intro";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HairFix Pune – Free Hair Consultation" },
      { name: "description", content: "Book a free hair consultation at HairFix Pune. Visit our studio near Jagtap Dairy Chowk, Pimple Nilakh, or contact us on WhatsApp." },
      { property: "og:title", content: "Contact HairFix Pune" },
      { property: "og:description", content: "Book your free hair consultation today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid mobile number"),
  age: z.string().trim().regex(/^\d{1,3}$/, "Enter a valid age").optional().or(z.literal("")),
  stage: z.string().max(60).optional().or(z.literal("")),
  service: z.string().max(60).optional().or(z.literal("")),
  message: z.string().max(1000).optional().or(z.literal("")),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      setStatus("error");
      return;
    }
    const d = parsed.data;
    const text = [
      "*New HairFix Consultation Request*",
      `Name: ${d.name}`,
      `Mobile: ${d.mobile}`,
      d.age ? `Age: ${d.age}` : null,
      d.stage ? `Hair Loss Stage: ${d.stage}` : null,
      d.service ? `Preferred Service: ${d.service}` : null,
      d.message ? `Message: ${d.message}` : null,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${SITE_CONTACT.WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Book Your Free Hair Consultation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us a little about your hair loss and we will get back to you with a personalised
          plan — usually within a few hours.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required placeholder="Your full name" />
              <Field label="Mobile Number" name="mobile" required type="tel" placeholder="98XXXXXXXX" />
              <Field label="Age" name="age" type="number" placeholder="e.g. 35" />
              <Select label="Hair Loss Stage" name="stage" options={["Just starting", "Receding hairline", "Crown thinning", "Advanced baldness", "Alopecia / patches"]} />
              <Select label="Preferred Service" name="service" options={["Hair Patch / Fixing", "Hair Bonding", "Hair Weaving", "Hair Extensions", "Custom Wig", "Maintenance / Servicing"]} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground">Message</label>
              <textarea name="message" rows={4} maxLength={1000} className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring" placeholder="Anything else we should know?" />
            </div>
            {status === "error" && error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            {status === "sent" && (
              <p className="text-sm text-primary">Opening WhatsApp with your details — please tap send to complete your enquiry.</p>
            )}
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto">
              Book Free Consultation
            </button>
          </form>
        </div>

        <aside className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Our Studios</h2>
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-foreground">Pimple Nilakh (Main Studio)</h3>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><a href="https://maps.app.goo.gl/6mVkbhkc9XyR3HUS6?g_st=ac" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{SITE_CONTACT.ADDRESS}</a></li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /><a href={`tel:${SITE_CONTACT.PHONE}`} className="hover:text-foreground">{SITE_CONTACT.PHONE_DISPLAY}</a></li>
              </ul>
            </div>
            <div className="mt-5 border-t border-border/60 pt-4">
              <h3 className="text-sm font-semibold text-foreground">Ravet (New Branch)</h3>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><a href={RAVET_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{RAVET_ADDRESS}</a></li>
                <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-primary" /><a href={`https://wa.me/${SITE_CONTACT.WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp Chat</a></li>
              </ul>
            </div>
            <ul className="mt-5 space-y-3 border-t border-border/60 pt-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /><a href={`mailto:${SITE_CONTACT.EMAIL}`} className="hover:text-foreground">{SITE_CONTACT.EMAIL}</a></li>
              <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary" />Mon–Sun · 9:00 AM – 9:00 PM</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="HairFix Pune location"
              src="https://www.google.com/maps?q=Jagtap+Dairy+Chowk+Pimple+Nilakh+Pune&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">{label}{required && " *"}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={120}
        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">{label}</label>
      <select name={name} defaultValue="" className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring">
        <option value="">Select an option</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}