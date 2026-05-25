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

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  bgImage?: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Refined our positioning and increased qualified inbound leads by over 70% within the first quarter. The creative direction and campaign execution felt world-class from day one.",
    name: "Sarah Ahmed",
    role: "Managing Director • BrightLabs",
  },

  {
    quote:
      "They completely understood our brand vision and translated it into campaigns that actually converted. Every launch looked premium and performed even better.",
    name: "Daniel Foster",
    role: "Founder • ScaleForge",
  },

  {
    quote:
      "We reduced acquisition costs by nearly 40% while doubling qualified pipeline volume. Their strategy, creative systems, and performance optimization were exceptional.",
    name: "Emily Carter",
    role: "CTO • TechFlow Inc",
  },

  {
    quote:
      "From creative production to paid performance, the process was seamless and highly strategic. The team consistently delivered clarity, speed, and measurable impact.",
    name: "Michael Reed",
    role: "CMO • UrbanEdge",
  },

  {
    quote:
      "Working with them elevated our entire brand presence. The content quality, motion direction, and campaign execution helped us scale much faster than expected.",
    name: "Olivia Grant",
    role: "Co-Founder • Thrive",
  },

  {
    quote:
      "Our engagement rates and conversion metrics improved dramatically within weeks. Their ability to combine creative storytelling with performance strategy is rare.",
    name: "Ryan Mitchell",
    role: "Managing Director • GreenSupply",
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

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const processSteps: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your brand, audience, and competitors to uncover gaps, opportunities, and quick wins that others miss — then shape a focused roadmap you can act on immediately.",
    image: "/post contents/1.png",
    imageAlt: "Brand discovery and strategy session",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We translate insights into a data-driven plan with clear channels, messaging, and measurable goals so every creative decision maps to outcomes that matter.",
    image: "/post contents/3.png",
    imageAlt: "Growth strategy and creative planning",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "We launch campaigns, content systems, and paid media with continuous testing baked in — optimizing daily toward stronger engagement and conversion.",
    image: "/post contents/5.png",
    imageAlt: "Campaign execution and performance tracking",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "We double down on what works, refine creative, and expand reach while protecting ROI — compounding growth instead of one-off spikes.",
    image: "/post contents/6.png",
    imageAlt: "Analytics dashboard and scalable growth",
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
