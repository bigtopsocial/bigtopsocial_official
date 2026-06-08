export type IndustryClientExample = {
  name: string;
  result: string;
};

export type Industry = {
  slug: string;
  title: string;
  badge: string;
  heroLine1: string;
  heroLine2: string;
  tagline: string;
  pills: string[];
  heroImage: string;
  heroImageAlt: string;
  seoTitle: string;
  seoDescription: string;
  searchKeywords: string[];

  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  servicesMix: string[];
  results: { metric: string; label: string }[];
  clientExamples: IndustryClientExample[];
  closingParagraph: string;
};

export const industries: Industry[] = [
  {
    slug: 'real-estate',
    title: 'Real Estate',
    badge: 'Industries We Serve',
    heroLine1: 'Marketing Built for',
    heroLine2: 'Real Estate',
    tagline:
      'From luxury developers to boutique brokerages — we generate qualified, ready-to-buy leads and build trust at every touchpoint.',
    pills: ['Lead Generation', 'Brand Trust', 'Performance Marketing', 'SEO'],
    heroImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Modern real estate architecture',
    seoTitle: 'Marketing Agency for Real Estate in India | BigTopSocial',
    seoDescription:
      'BigTopSocial is a marketing agency for real estate brands — lead generation, branding, and SEO for developers, brokers, and luxury properties across India.',
    searchKeywords: [
      'marketing agency for real estate India',
      'real estate lead generation agency',
      'luxury property marketing agency',
      'real estate branding agency',
    ],
    challenges: [
      {
        title: 'Low-intent leads',
        description:
          'Inboxes full of unqualified enquiries that never convert to a site visit, let alone a booking.',
      },
      {
        title: 'Long sales cycles',
        description:
          'Buyers research for months — most agencies lose them between the first impression and the booking call.',
      },
      {
        title: 'Trust deficit',
        description:
          'Properties are high-ticket purchases. Without strong proof and presence, even great projects get ignored.',
      },
      {
        title: 'Saturated paid auctions',
        description:
          'CPLs in metro markets keep climbing while creative and landing pages stay generic.',
      },
    ],
    solutions: [
      {
        title: 'Intent-based paid funnels',
        description:
          'Geo-targeted Meta and Google campaigns paired with conversion-focused landing pages that pre-qualify buyers.',
      },
      {
        title: 'Walkthrough & lifestyle content',
        description:
          'Cinematic property reels, drone shoots, and resident stories that move buyers from interest to enquiry.',
      },
      {
        title: 'Local SEO + listings',
        description:
          'Google Business profiles, project-page SEO, and review systems that capture buyers in active search.',
      },
      {
        title: 'CRM-driven nurture',
        description:
          'Email and WhatsApp sequences that keep your brand top-of-mind across the months-long buying journey.',
      },
    ],
    servicesMix: ['Performance Marketing', 'SEO', 'Branding', 'Digital Marketing'],
    results: [
      { metric: '3.2×', label: 'Qualified leads vs. baseline' },
      { metric: '-41%', label: 'Cost per booking call' },
      { metric: '18%', label: 'Site-visit-to-booking rate' },
    ],
    clientExamples: [
      {
        name: 'Luxury residential developer (Mumbai)',
        result:
          'Filled three project launches with site-visits within 60 days using a geo-targeted paid + WhatsApp funnel.',
      },
      {
        name: 'Boutique brokerage (Bengaluru)',
        result:
          'Ranked #1 locally for 7 high-intent keywords and doubled organic enquiries in a quarter.',
      },
    ],
    closingParagraph:
      "If you're a developer, broker, or luxury-property brand and you're tired of paying for leads that don't show up — let's build a funnel that does.",
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    badge: 'Industries We Serve',
    heroLine1: 'Storytelling That',
    heroLine2: 'Fills Rooms',
    tagline:
      'Hotels, resorts, and F&B brands trust us to grow direct bookings, manage their reputation, and turn guests into storytellers.',
    pills: ['Hotels', 'Resorts', 'F&B', 'Influencer Marketing'],
    heroImage:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Luxury resort poolside at sunset',
    seoTitle: 'Branding Agency for Hotels, Resorts & F&B | BigTopSocial',
    seoDescription:
      'Marketing and branding agency for hotels, resorts, and restaurants — influencer strategy, review management, and content that grows direct bookings.',
    searchKeywords: [
      'branding agency for hotels',
      'marketing agency for resorts',
      'F&B branding agency',
      'hotel social media agency',
    ],
    challenges: [
      {
        title: 'OTA dependency',
        description:
          'Booking platforms eat margins and own the guest relationship. Direct bookings stay stuck in single digits.',
      },
      {
        title: 'Review pressure',
        description:
          'One bad week of Google reviews can tank weekend occupancy. Most properties have no system to manage it.',
      },
      {
        title: 'Forgettable content',
        description:
          "Pretty photos aren't enough — you need a feed that actually makes someone want to book a flight.",
      },
      {
        title: 'Influencer ROI',
        description:
          "Hosting creators is expensive when there's no plan to convert their audience into bookings.",
      },
    ],
    solutions: [
      {
        title: 'Story-led content shoots',
        description:
          'On-site reels, food cinematography, and guest-experience stories built for Reels and Discover surfaces.',
      },
      {
        title: 'Influencer hosting programs',
        description:
          'Curated creator collaborations with booking-ready calls to action and tracked attribution links.',
      },
      {
        title: 'Review & reputation systems',
        description:
          'Automated request flows, response playbooks, and listings management across Google, TripAdvisor and OTAs.',
      },
      {
        title: 'Direct-booking campaigns',
        description:
          'Paid + retargeting funnels pointed at your own booking engine to reduce OTA dependency.',
      },
    ],
    servicesMix: ['Influencer Marketing', 'Digital Marketing', 'Branding', 'Performance Marketing'],
    results: [
      { metric: '+62%', label: 'Direct bookings YoY' },
      { metric: '4.7★', label: 'Avg. Google rating uplift' },
      { metric: '11M+', label: 'Impressions from creator stays' },
    ],
    clientExamples: [
      {
        name: 'Boutique resort (Goa)',
        result:
          'Built a 12-creator hosting program in a quarter, lifting Instagram saves 5× and direct bookings by 62%.',
      },
      {
        name: 'Specialty café chain (Delhi NCR)',
        result:
          'Branded an 8-outlet expansion and ran a launch campaign that put each new location on a waitlist within weeks.',
      },
    ],
    closingParagraph:
      "Whether you're filling a 200-room resort or opening your second café — we'll build the brand, the content, and the demand to back it.",
  },
  {
    slug: 'education',
    title: 'Education',
    badge: 'Industries We Serve',
    heroLine1: 'Enrolments That',
    heroLine2: 'Actually Convert',
    tagline:
      'Schools, colleges, and ed-tech brands work with us to build authority, generate qualified student leads, and own search in their category.',
    pills: ['Institutions', 'Ed-Tech', 'Student Lead Gen', 'Content & SEO'],
    heroImage:
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Students collaborating in a modern classroom',
    seoTitle: 'Marketing Agency for Education & Institutions | BigTopSocial',
    seoDescription:
      'Branding, content, and student-lead-generation agency for schools, colleges, universities, and ed-tech brands. SEO-first growth for the education sector.',
    searchKeywords: [
      'marketing agency for education',
      'branding agency for colleges',
      'student lead generation agency',
      'ed-tech marketing agency',
    ],
    challenges: [
      {
        title: 'Identical-looking competitors',
        description:
          "Every institution claims the same things. Without sharp positioning, parents and students can't tell you apart.",
      },
      {
        title: 'Seasonal demand',
        description:
          'Admissions windows are narrow. Missing a quarter of search traffic can cost an entire batch.',
      },
      {
        title: 'Trust + parent decision-making',
        description:
          'Enrolments are joint decisions. Your content has to convince students and reassure parents.',
      },
      {
        title: 'Compliance & sensitivity',
        description:
          'Education marketing has to be accurate, credible, and respectful — flashy tactics actively hurt the brand.',
      },
    ],
    solutions: [
      {
        title: 'Category-owning SEO',
        description:
          'Long-form, programme-page SEO that captures students at the start of their search and holds the top spot.',
      },
      {
        title: 'Institutional branding',
        description:
          'Identity systems and prospectus design that signal credibility across web, print, and admissions touchpoints.',
      },
      {
        title: 'Lead-gen funnels',
        description:
          'Course-specific paid campaigns with counsellor-ready forms, qualification logic, and CRM handoff.',
      },
      {
        title: 'Student & alumni stories',
        description:
          'Documentary-style content that turns real outcomes into the most persuasive marketing you can run.',
      },
    ],
    servicesMix: ['SEO', 'Branding', 'Performance Marketing', 'Digital Marketing'],
    results: [
      { metric: '2.4×', label: 'Qualified admission enquiries' },
      { metric: 'Top 3', label: 'Rankings for programme keywords' },
      { metric: '-37%', label: 'Cost per admission lead' },
    ],
    clientExamples: [
      {
        name: 'Design institute (Pune)',
        result:
          'Rebuilt programme pages and ranked top-3 for 14 course keywords — admission enquiries 2.4× in one cycle.',
      },
      {
        name: 'Ed-tech upskilling platform',
        result:
          'Launched a content-led SEO engine that compounded to 180K monthly organic visitors and lowered CPL by 37%.',
      },
    ],
    closingParagraph:
      "If you run an institution or an ed-tech brand and want growth that's sustainable, credible, and search-led — we'd love to talk.",
  },
];

export function getAllIndustries() {
  return industries;
}

export function getIndustryBySlug(slug: string) {
  return industries.find(i => i.slug === slug);
}
