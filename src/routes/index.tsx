import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageCircle, Scissors, Sparkles, Shield, ChevronRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HairFix Studios Pune - Premium Hair Patch Services" },
      { name: "description", content: "HairFix Studios Pune offers premium hair patch services including consultations, first-time patching, and ongoing maintenance. Natural-looking hair solutions in Pune." },
      { property: "og:title", content: "HairFix Studios Pune - Premium Hair Patch Services" },
      { property: "og:description", content: "Expert hair patch consultation, first-time application, and maintenance services in Pune. Get your natural look back." },
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
            <Scissors className="h-6 w-6 text-primary" />
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
              <Sparkles className="h-4 w-4" />
              Pune's Trusted Hair Patch Experts
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get Your Natural Look Back with{" "}
              <span className="text-primary">Confidence</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              HairFix Studios Pune specializes in premium, natural-looking hair patch solutions. 
              From your first consultation to ongoing maintenance, we deliver results that feel and look like your own hair.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Book Free Consultation
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
                <span className="font-medium text-foreground">500+</span> Happy Clients
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-emerald-500" />
                8+ Years Experience
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Complete hair patch solutions tailored to your needs. We guide you through every step with care and expertise.
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
                  alt="Hair patch consultation with specialist"
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
                Step 1: Consultation
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Free, Confidential Consultation
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Every journey starts with understanding. Our specialists take the time to assess your hair condition, 
                discuss your lifestyle, and recommend the best hair patch solution for you — all in a private, comfortable setting.
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
              Step 2: First-Time Patching
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              First-Time Hair Patch Service
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Your first hair patch is a transformative experience. We use only premium, breathable materials 
              matched to your natural hair color, texture, and density for a seamless, undetectable result.
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
              alt="Hair patch application process"
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
                  alt="Hair patch maintenance service"
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
                Step 3: Ongoing Maintenance
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Maintenance of Existing Hair Patch
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Keep your hair patch looking fresh and natural with our regular maintenance services. 
                We handle cleaning, reattachment, styling, and adjustments so you always look your best.
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose HairFix Studios Pune?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We combine expertise, quality materials, and personalized care to deliver results you'll love.
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
              Ready to Transform Your Look?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Book your free consultation today. Our specialists are ready to help you regain your confidence with a natural-looking hair patch.
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
              <Scissors className="h-5 w-5 text-primary" />
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
    title: "Free Consultation",
    description: "A private, no-obligation session to assess your needs and explain the best options for you.",
    icon: <MessageCircle className="h-6 w-6" />,
    features: [
      "Scalp & hair assessment",
      "Style & color matching",
      "Personalized recommendations",
      "Pricing transparency",
    ],
  },
  {
    title: "First-Time Patching",
    description: "Premium hair patch application using the finest materials for a natural, undetectable look.",
    icon: <Sparkles className="h-6 w-6" />,
    features: [
      "100% human hair or high-grade synthetic",
      "Custom color & texture matching",
      "Breathable, comfortable base",
      "Natural hairline design",
    ],
  },
  {
    title: "Patch Maintenance",
    description: "Regular care services to keep your hair patch looking fresh, secure, and styled perfectly.",
    icon: <Shield className="h-6 w-6" />,
    features: [
      "Cleaning & conditioning",
      "Reattachment & tightening",
      "Styling & trimming",
      "Damage repair",
    ],
  },
];

const consultationSteps = [
  {
    title: "Book Your Appointment",
    description: "Call or WhatsApp us to schedule a convenient time. Walk-ins are also welcome.",
  },
  {
    title: "Personal Assessment",
    description: "Our specialist examines your scalp, existing hair, and discusses your goals and lifestyle.",
  },
  {
    title: "Custom Recommendations",
    description: "We present tailored options — hair type, base material, style, and maintenance plan.",
  },
  {
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden costs. You decide when you're ready to proceed.",
  },
];

const patchingFeatures = [
  {
    title: "Premium Materials",
    description: "Medical-grade, breathable bases with 100% natural human hair or top-tier synthetic options.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Perfect Color Match",
    description: "Expert blending with your natural hair color, texture, and density for seamless results.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Comfortable Fit",
    description: "Custom-cut base ensures a secure, lightweight feel you can wear all day with confidence.",
    icon: <Scissors className="h-5 w-5" />,
  },
  {
    title: "Natural Hairline",
    description: "Advanced techniques create an invisible front hairline that looks completely natural.",
    icon: <Star className="h-5 w-5" />,
  },
];

const maintenanceItems = [
  {
    title: "Deep Cleaning",
    description: "Thorough washing and conditioning to remove oils, dirt, and restore the hair's natural shine.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Reattachment Service",
    description: "Secure reapplication with fresh adhesive or tape to ensure a firm, comfortable hold.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Trim & Style",
    description: "Professional cutting and styling to match your preferred look or adapt to changing trends.",
    icon: <Scissors className="h-5 w-5" />,
  },
  {
    title: "Repair & Refresh",
    description: "Fix minor damage, replace worn adhesive strips, and refresh the overall appearance.",
    icon: <Star className="h-5 w-5" />,
  },
];

const whyChooseUs = [
  {
    title: "8+ Years Experience",
    description: "Trusted expertise in hair patch services since 2016, serving 500+ satisfied clients.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Premium Quality",
    description: "Only the finest hair materials and medical-grade bases for comfort and durability.",
    icon: <Star className="h-6 w-6" />,
  },
  {
    title: "Private & Comfortable",
    description: "Discreet studio with individual consultation rooms for your complete privacy and comfort.",
    icon: <MessageCircle className="h-6 w-6" />,
  },
  {
    title: "Affordable Packages",
    description: "Flexible pricing and maintenance plans that fit your budget without compromising quality.",
    icon: <Sparkles className="h-6 w-6" />,
  },
];
