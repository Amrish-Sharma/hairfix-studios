import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageCircle, Scissors, Sparkles, Shield, ChevronRight, Star, Users, Crown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HairFix Studios Pune - Men's Hair Patch Services" },
      { name: "description", content: "Pune's leading men's hair patch studio. Expert consultation, first-time hair patch fitting, and ongoing maintenance for male hair loss. Natural, undetectable results." },
      { property: "og:title", content: "HairFix Studios Pune - Men's Hair Patch Services" },
      { property: "og:description", content: "Pune's leading men's hair patch studio. Expert consultation, first-time hair patch fitting, and ongoing maintenance for male hair loss. Natural, undetectable results." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight text-foreground">HairFix Studios</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Services</a>
            <a href="#consultation" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Consultation</a>
            <a href="#maintenance" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Maintenance</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </div>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-studio.jpg"
            alt="HairFix Studios interior"
            className="h-full w-full object-cover"
            width={1536}
            height={864}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground ring-1 ring-accent/30">
              <Users className="h-4 w-4" />
              Pune's #1 Men's Hair Patch Studio
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Men's Hair Patch Solutions Built for{" "}
              <span className="text-primary">Confidence</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              HairFix Studios Pune specializes in natural-looking hair patches for men. 
              Whether it's male pattern baldness, thinning, or patchy hair — from your first consultation to regular upkeep, we help you look and feel your best.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Book Free Men's Consultation
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent/10"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-medium text-foreground">500+</span> Men Transformed
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-emerald-500" />
                8+ Years Men's Hair Expertise
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Pune, Maharashtra
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Men's Hair Patch Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Complete hair patch solutions designed specifically for men. We understand male hair loss and craft results that look completely natural.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="border-y border-border/50 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/consultation.jpg"
                  alt="Men's hair patch consultation with specialist"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <MessageCircle className="h-4 w-4" />
                Step 1: Men's Consultation
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Free, Private Consultation for Men
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Every man's hair loss pattern is different. Our specialists understand male pattern baldness, 
                receding hairlines, and thinning crowns. We assess your scalp, discuss your lifestyle, and 
                recommend the best men's hair patch solution — all in a private, comfortable setting with complete discretion.
              </p>
              <div className="mt-8 space-y-4">
                {consultationSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patching Service Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground">
              <Sparkles className="h-4 w-4" />
              Step 2: First-Time Men's Patching
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              First Men's Hair Patch — Your New Look Begins Here
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Your first hair patch is a game-changer. We use premium, breathable materials 
              matched to your natural hair color, texture, and density — styled for a masculine, 
              undetectable result that fits your face shape and personal style.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {patchingFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/patching-service.jpg"
              alt="Men's hair patch application process"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section id="maintenance" className="border-y border-border/50 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/maintenance.jpg"
                  alt="Men's hair patch maintenance service"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Step 3: Men's Patch Maintenance
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Maintenance of Your Hair Patch
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Keep your men's hair patch looking sharp with our regular maintenance. 
                We handle cleaning, reattachment, styling, and adjustments — so your hair always looks 
                fresh, natural, and ready for work, gym, or a night out.
              </p>
              <div className="mt-8 space-y-4">
                {maintenanceItems.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/20">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Men Choose HairFix Studios Pune</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We understand men's hair loss. Our expertise, quality materials, and discreet service deliver results you'll be proud of.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Get Your Look Back?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Book your free men's consultation today. Walk out with confidence — our specialists are ready to help.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-medium text-foreground shadow-lg transition-all hover:bg-background/90 hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Call: +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-background/30 bg-transparent px-8 py-4 text-base font-medium text-primary-foreground backdrop-blur-sm transition-all hover:bg-background/10"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-8 border-t border-primary-foreground/20 pt-12 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center text-primary-foreground/80">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">FC Road, Deccan, Pune 411004</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-primary-foreground/80">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">Mon - Sat: 10 AM - 8 PM</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-primary-foreground/80">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold text-foreground">HairFix Studios Pune</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} HairFix Studios Pune. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">Services</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    title: "Free Men's Consultation",
    description: "A private, no-obligation session to assess male hair loss patterns and explain the best options for you.",
    icon: <MessageCircle className="h-6 w-6" />,
    features: [
      "Male scalp & hairline assessment",
      "Style & color matching for men",
      "Personalized recommendations",
      "Transparent pricing",
    ],
  },
  {
    title: "First-Time Men's Patching",
    description: "Premium hair patch application using finest materials for a masculine, natural, undetectable look.",
    icon: <Sparkles className="h-6 w-6" />,
    features: [
      "100% natural human hair for men",
      "Custom color & masculine texture match",
      "Breathable, sweat-resistant base",
      "Invisible hairline for men",
    ],
  },
  {
    title: "Men's Patch Maintenance",
    description: "Regular care to keep your men's hair patch looking sharp, secure, and styled for your lifestyle.",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "Deep cleaning & conditioning",
      "Reattachment & tightening",
      "Men's styling & trimming",
      "Damage & wear repair",
    ],
  },
];

const consultationSteps = [
  {
    title: "Book Your Appointment",
    description: "Call or WhatsApp us to schedule a convenient time. Walk-ins are also welcome for men.",
  },
  {
    title: "Personal Male Hair Assessment",
    description: "Our specialist examines your male pattern baldness, receding hairline, crown thinning, and lifestyle needs.",
  },
  {
    title: "Custom Men's Recommendations",
    description: "We present tailored options — hair type, base material, masculine style, and a maintenance plan that fits your routine.",
  },
  {
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden costs. You decide when you're ready to reclaim your look.",
  },
];

const patchingFeatures = [
  {
    title: "Premium Men's Materials",
    description: "Medical-grade, breathable bases designed for active men. 100% natural human hair or top-tier synthetic options.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Perfect Masculine Match",
    description: "Expert blending with your natural hair color, texture, and density for seamless, undetectable results on men.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Active Lifestyle Fit",
    description: "Secure, lightweight hold that stays in place during gym, swimming, and daily activities. Sweat-resistant.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Natural Male Hairline",
    description: "Advanced techniques create a masculine, invisible front hairline that looks completely real.",
    icon: <Star className="h-5 w-5" />,
  },
];

const maintenanceItems = [
  {
    title: "Deep Cleaning",
    description: "Thorough washing and conditioning to remove oils, sweat, and restore the hair's natural masculine shine.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Reattachment Service",
    description: "Secure reapplication with fresh adhesive or tape to ensure a firm, comfortable hold that lasts weeks.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Men's Trim & Style",
    description: "Professional cutting and styling to match your preferred masculine look — from corporate clean to modern textured.",
    icon: <Scissors className="h-5 w-5" />,
  },
  {
    title: "Repair & Refresh",
    description: "Fix minor damage, replace worn adhesive strips, and refresh the overall appearance for a like-new look.",
    icon: <Star className="h-5 w-5" />,
  },
];

const whyChooseUs = [
  {
    title: "Men's Hair Experts",
    description: "8+ years specializing in men's hair patches. 500+ men transformed with natural, confident results.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Premium Quality",
    description: "Only the finest hair materials and medical-grade bases built for men's active lifestyles and comfort.",
    icon: <Star className="h-6 w-6" />,
  },
  {
    title: "Discreet & Private",
    description: "Private consultation rooms. No one needs to know — unless you tell them. Complete confidentiality.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Affordable Packages",
    description: "Flexible pricing and maintenance plans that fit your budget without compromising on quality or looks.",
    icon: <Sparkles className="h-6 w-6" />,
  },
];

