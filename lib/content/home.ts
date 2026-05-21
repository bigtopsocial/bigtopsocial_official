export const clientLogos = [
  "exon",
  "verse",
  "attracts",
  "relax.",
  "elite",
] as const;

export const homeBlogTeasers = [
  {
    slug: "building-a-brand-people-trust",
    title: "Building a Brand People Trust",
  },
  {
    slug: "the-psychology-behind-high-converting-campaigns",
    title: "High-Converting Campaigns",
  },
  {
    slug: "content-that-converts-beyond-likes-and-shares",
    title: "Beyond Likes and Shares",
  },
  {
    slug: "scaling-smart-when-to-invest-in-paid-media",
    title: "Scaling Smart Paid Media",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Refined our brand & increased inbound leads by 70% in just a few months.",
    name: "Sarah Ahmed",
    role: "MD, BrightLabs",
    bgImage:
      "/image.png",
  },
  {
    quote:
      "Their team understood our vision and delivered campaigns that drove real growth.",
    name: "Daniel Foster",
    role: "Founder, ScaleForge",

  },
  {
    quote:
      "Cut acquisition costs by 40% & doubled qualified leads with Elevon’s strategy.",
    name: "Emily Carter",
    role: "CTO, TechFlow Inc",
    bgImage:
      "/image.png",
  },
  {
    quote:
      "From creative to performance, everything was handled with clarity and precision.",
    name: "Michael Reed",
    role: "CMO, UrbanEdge",

  },
  {
    quote:
      "Elevon helped us scale faster with smarter strategy and stronger creative execution.",
    name: "Olivia Grant",
    role: "Co-Founder, Thrive",

  },
  {
    quote:
      "Our engagement and conversions improved significantly within weeks of launching with Elevon.",
    name: "Ryan Mitchell",
    role: "MD, GreenSupply",
    bgImage:
      "/image.png",
  },
] as const;

export const services = [
  {
    title: "Social Media Strategy",
    body: "We turn scattered posts into a system that attracts attention and builds demand.",
    bgImage: "/post contents/1.png",
  },
  {
    title: "Story-Driven Content",
    body: "From concept to execution, we create content people want to consume—not ignore.",
    bgImage: "/post contents/2.png",
  },
  {
    title: "Brand Identity",
    body: "We build brands that feel intentional, cohesive, & impossible to confuse with competitors.",
    bgImage: "/post contents/3.png",
  },
  {
    title: "Influencer Marketing",
    body: "We connect you with voices your audience already trusts, then turn trust into traction.",
    bgImage: "/post contents/4.png",
  },
  {
    title: "Paid Campaigns",
    body: "We are engineers at ad systems designed to generate pipeline, not vanity metrics.",
    bgImage: "/post contents/5.png",
  },
  {
    title: "Analytics & Growth",
    body: "We translate data into clear decisions so every month performs better than the last.",
    bgImage: "/post contents/6.png",
  },
] as const;

export type ProcessStepLayout = "intro" | "grid" | "wide" | "dashboard";

export type ProcessStep = {
  step: string;
  title: string;
  heading: string;
  body: string;
  layout: ProcessStepLayout;
  markerColor: string;
  images?: readonly { src: string; alt: string }[];
  cta?: { label: string; href: string; caption?: string };
};

export const processSteps: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    heading: "Start with clarity — book a free strategy call",
    body: "We audit your brand, audience, and competitors to uncover gaps, opportunities, and quick wins that others miss. No fluff — just a focused roadmap you can act on immediately.",
    layout: "intro",
    markerColor: "#a855f7",
    cta: {
      label: "Book a Consultation",
      href: "/contact",
      caption: "No commitment required",
    },
  },
  {
    step: "02",
    title: "Strategize",
    heading: "Turn insights into a focused growth roadmap",
    body: "We translate discovery into a data-driven plan with clear channels, messaging, and measurable goals. Every creative and campaign decision maps back to outcomes that matter.",
    layout: "grid",
    markerColor: "#3b82f6",
    images: [
      { src: "/post contents/1.png", alt: "Social content preview" },
      { src: "/post contents/2.png", alt: "Brand campaign preview" },
      { src: "/post contents/3.png", alt: "Creative asset preview" },
      { src: "/post contents/4.png", alt: "Performance creative preview" },
    ],
  },
  {
    step: "03",
    title: "Execute",
    heading: "Launch campaigns built to perform from day one",
    body: "We ship creative, paid media, and content systems with continuous testing baked in. Performance is tracked daily so we can optimize toward stronger engagement and conversion.",
    layout: "wide",
    markerColor: "#ec4899",
    images: [{ src: "/post contents/5.png", alt: "Campaign execution dashboard" }],
  },
  {
    step: "04",
    title: "Scale",
    heading: "Double down on what works — sustainably",
    body: "We invest more into winning channels, refine creative, and expand reach while protecting ROI. The result is compounding growth, not one-off spikes.",
    layout: "dashboard",
    markerColor: "#ef4444",
    images: [{ src: "/post contents/6.png", alt: "Growth analytics overview" }],
  },
] as const;

export const stats = [
  { numeral: "I.", label: "Years Experience", value: "12", suffix: "+" },
  { numeral: "II.", label: "Agencies Rated", value: "200", suffix: "+" },
  { numeral: "III.", label: "Increased traffic", value: "91", suffix: "%" },
  { numeral: "IV.", label: "Growth engagement", value: "94", suffix: "%" },
] as const;

export const pricingPlans = [
  {
    tierLabel: "Individual & Professional",
    name: "Basic",
    price: "$999",
    description:
      "Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.",
    features: [
      "Tailored content strategy",
      "Platform setup & optimization",
      "Hashtag & trend research",
      "Caption & post scheduling",
      "Growth tracking",
    ],
  },
  {
    tierLabel: "Business & Team",
    name: "Premium",
    price: "$1,599",
    description:
      "Built for growing brands and startups ready to scale faster with advanced strategy and dedicated support.",
    features: [
      "Multi-platform growth strategy",
      "Paid ad campaign setup",
      "Influencer collaboration",
      "In-depth analytics & reporting",
      "Dedicated account manager",
    ],
  },
] as const;
