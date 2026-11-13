// Single source of truth for every piece of copy and data on the site.
// Edit this file to change names, statuses, links and numbers — the pages
// read everything from here.

export const site = {
  name: "Nexavora",
  // Visual brand lockup under the wordmark.
  brandSuffix: "Technology Solutions",
  legalName: "Nexavora Technology Solutions",
  url: "https://nexavora-tech.vercel.app",
  tagline: "We Build Technology That Moves Your Ideas Forward.",
  positioning:
    "Nexavora Technology Solutions is a technology company building digital products and providing technology, design, digital growth, customer experience, and business solutions.",
  // TODO: replace with the real mailbox before launch.
  email: "nexavoratechnologies@gmail.com",
  whatsapp: "+2349117511518",
  copyrightYear: 2026,
};

// Primary navigation order: Home, Solutions, Products, Portfolio, Company,
// Insights, Contact, then the Start a Project call to action. Every entry
// points at an existing route — no duplicate portfolio destinations.
export const nav = {
  home: { label: "Home", href: "/" },
  solutions: {
    label: "Solutions",
    href: "/solutions/",
    items: [
      { label: "Build", hint: "Technology & product development", href: "/solutions/#build" },
      { label: "Design", hint: "UI/UX & product design", href: "/solutions/#design" },
      { label: "Grow", hint: "Digital marketing & social media", href: "/solutions/#grow" },
      { label: "Operate", hint: "Customer experience & operations", href: "/solutions/#operate" },
    ],
  },
  products: {
    label: "Products",
    href: "/products/",
    items: [
      {
        label: "CareNBuddi",
        hint: "In development · healthcare technology",
        href: "/products/#carenbuddi",
      },
      {
        label: "Livanta",
        hint: "In development · life admin & productivity",
        href: "/products/#livanta",
      },
    ],
  },
  portfolio: { label: "Portfolio", href: "/portfolio/" },
  company: {
    label: "Company",
    href: "/company/",
    items: [
      { label: "About Nexavora", hint: "Who we are and what we believe", href: "/company/#about" },
      { label: "Our Approach", hint: "How we turn problems into solutions", href: "/company/#approach" },
      { label: "Our Team", hint: "Meet the people behind Nexavora", href: "/company/#team" },
      { label: "Careers", hint: "Build with us", href: "/company/#careers" },
    ],
  },
  insights: { label: "Insights", href: "/insights/" },
  contact: { label: "Contact", href: "/contact/" },
  cta: { label: "Start a Project", href: "/contact/" },
};

export const hero = {
  eyebrow: "Nexavora Technology Solutions",
  title: "We Build Technology That Moves Your Ideas Forward.",
  statement:
    "We help businesses build digital products, design better experiences, grow their online presence and manage customer interactions — under one roof, from first idea to launch.",
  primaryCta: { label: "Start a Project", href: "/contact/" },
  secondaryCta: { label: "View Our Portfolio", href: "/portfolio/" },
};

// Homepage Featured Work, in display order. Only projects with genuine
// captures in /public are included; the first entry is shown as the feature.
export const homeFeaturedWork = [
  "carenbuddi",
  "livanta",
  "euphoriabykylie",
  "electrotrans",
] as const;

// Compact Selected Work preview on the Company page. The full collection
// lives on /portfolio/; this is a pointer, not a second portfolio.
export const companyWorkPreview = ["carenbuddi", "farm-pal", "onala-farms"] as const;

export const trustedBy = {
  headline: "Trusted by businesses, organisations and people building what's next.",
  note: "Helping ambitious businesses turn ideas into digital solutions.",
  marks: ["Euphoria by Kylie Lounge", "Electrotrans", "Jimiking Art Fashion"],
};

export const whatWeDo = [
  {
    key: "build",
    index: "01",
    title: "Build",
    subtitle: "Technology & Product Development",
    headline: "Turn Your Ideas into Digital Products",
    summary:
      "We help businesses turn ideas and requirements into practical digital solutions, from websites and applications to software products.",
    highlights: [
      "Website Development",
      "Web Application Development",
      "Mobile Application Development",
      "Product Improvement & Review",
    ],
    cta: { label: "Discuss Your Project", href: "/contact/" },
    work: { label: "See Our Work", href: "/portfolio/" },
    body:
      "Turn ideas and business needs into functional digital products, websites and software solutions.",
    eyebrow: "01 — Technology & Product Development",
    serviceGroups: [
      {
        label: "Development",
        items: [
          "Website Design and Development",
          "Web Application Development",
          "Mobile Application Development",
          "Software and Product Development",
        ],
      },
      {
        label: "Technical Services",
        items: [
          "Product Management",
          "API Development and Integration",
          "Database Design and Integration",
          "Technical Consulting and Audits",
          "Website Maintenance and Improvements",
        ],
      },
    ],
  },
  {
    key: "design",
    index: "02",
    title: "Design",
    subtitle: "UI/UX, Product & Visual Design",
    headline: "Design Experiences People Understand and Enjoy",
    summary:
      "We design intuitive digital experiences and visual assets that help businesses communicate clearly with their audiences.",
    highlights: [
      "UI/UX Design",
      "Wireframes & Prototypes",
      "Interface Design",
      "Branding & Visual Design",
    ],
    cta: { label: "Discuss Your Project", href: "/contact/" },
    work: { label: "See Design Work", href: "/portfolio/?category=ui-ux-product-design" },
    body: "Create intuitive digital experiences, useful product interfaces and visual identities that communicate clearly.",
    serviceGroups: [
      {
        label: "Product & Interface",
        items: [
          "UI/UX Design",
          "Product Design",
          "User Research",
          "User Journey Mapping",
          "Wireframing and Prototyping",
          "Usability Testing",
          "Website and App Interface Design",
          "Design Systems",
        ],
      },
      {
        label: "Visual & Brand",
        items: [
          "Graphic Design",
          "Branding and Visual Identity",
          "Marketing and Promotional Designs",
        ],
      },
    ],
  },
  {
    key: "grow",
    index: "03",
    title: "Grow",
    subtitle: "Digital Marketing & Social Media",
    headline: "Build Your Digital Presence and Reach the Right Audience",
    summary:
      "We help businesses communicate with their audiences, strengthen their online presence, and create relevant digital marketing content.",
    highlights: [
      "Social Media Content",
      "Marketing Graphics",
      "Campaign Planning",
      "Digital Brand Communication",
    ],
    cta: { label: "Discuss Your Project", href: "/contact/" },
    work: { label: "See Campaign Work", href: "/portfolio/?category=social-media-marketing-design" },
    body: "Help businesses communicate their value, strengthen their online presence and reach their target audiences.",
    serviceGroups: [
      {
        label: "Social & Content",
        items: [
          "Social Media Management",
          "Social Media Strategy",
          "Content Planning and Creation",
          "Content Calendar Development",
          "Digital Marketing Strategy",
        ],
      },
      {
        label: "Campaigns & Creative",
        items: [
          "Digital Campaign Management",
          "Brand Messaging and Positioning",
          "Marketing Graphics and Creatives",
          "Campaign Performance Tracking",
        ],
      },
    ],
  },
  {
    key: "operate",
    index: "04",
    title: "Operate",
    subtitle: "Customer Experience & Business Operations",
    headline: "Keep Your Business Running Smoothly",
    summary:
      "We support businesses with customer communication, operational upkeep and everyday coordination so their teams can focus on their priorities.",
    highlights: [
      "Customer Support Workflows",
      "Feedback & Bug Triage",
      "Maintenance & Releases",
      "Operations Setup",
    ],
    cta: { label: "Discuss Your Project", href: "/contact/" },
    body: "Help businesses manage customer interactions, administrative tasks and everyday operational processes.",
    serviceGroups: [
      {
        label: "Customer-Facing Support",
        items: [
          "Customer Support",
          "Customer Experience Management",
          "Customer Service Process Setup",
          "Customer Feedback Management",
          "Website and Product Support",
        ],
      },
      {
        label: "Business Operations",
        items: [
          "Virtual Assistance",
          "Administrative Support",
          "Email and Communication Management",
          "Data Entry and Record Management",
          "Workflow and Process Coordination",
          "Product Maintenance and Release Coordination",
        ],
      },
    ],
  },
];

// Approved pre-launch summaries. Public product copy stays within these —
// detailed functionality and technical detail are not exposed until launch.
export const productSummaries = {
  carenbuddi:
    "CareNBuddi is an upcoming healthcare navigation platform designed to make accessing and managing healthcare information easier for individuals, families and healthcare providers. Built with accessibility and inclusive healthcare experiences in mind, CareNBuddi aims to simplify the healthcare journey through connected digital solutions.",
  livanta:
    "Livanta is an upcoming digital productivity platform designed to help individuals and business owners organise important information, manage everyday responsibilities and stay on top of their activities. It is being developed to bring essential productivity tools and personal organisation into one connected experience.",
} as const;

export const products = [
  {
    slug: "carenbuddi",
    name: "CareNBuddi",
    industry: "Healthcare Technology",
    status: "In Development" as const,
    accent: "cyan" as const,
    logo: "/logo/carenbuddi.jpg",
    logoWidth: 1024,
    logoHeight: 1024,
    summary: productSummaries.carenbuddi,
  },
  {
    slug: "livanta",
    name: "Livanta",
    industry: "Life Admin & Productivity",
    status: "In Development" as const,
    accent: "violet" as const,
    logo: "/logo/livanta.jpg",
    logoWidth: 1080,
    logoHeight: 1080,
    summary: productSummaries.livanta,
  },
];
export const whyNexavora = [
  {
    title: "Built Around Real Problems",
    body: "We start with the problem, not the technology. The solution has to earn its place.",
  },
  {
    title: "People-Centered",
    body: "We design experiences around the people who will actually use them — not around a feature list.",
  },
  {
    title: "From Idea to Execution",
    body: "Strategy, design, development and digital growth work together under one roof.",
  },
  {
    title: "Built to Evolve",
    body: "We create solutions that can improve as your users and your business grow.",
  },
];

export const process = [
  { step: "Discover", body: "Understand the problem, the people and the constraints." },
  { step: "Define", body: "Agree on scope, success measures and the smallest useful version." },
  { step: "Design", body: "Flows, interface and system designed against real use." },
  { step: "Build", body: "Engineered in slices, reviewed and tested as it grows." },
  { step: "Launch", body: "Shipped, instrumented and handed over without drama." },
  { step: "Improve", body: "Measured against reality, then iterated." },
];

// Fields describing screens, features and links are optional: in-house
// products in development publish only a summary and their identity mark.
export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  industry: string;
  status: "Live" | "Beta" | "In Development" | "Prototype" | "Concept";
  accent: string;
  featured?: boolean;
  inHouse?: boolean;
  logo?: string;
  coverImage?: string;
  coverAlt?: string;
  description: string;
  longDescription?: string;
  screenshots?: { src: string; alt: string; caption: string }[];
  mockups?: { desktop: string; mobile: string };
  features?: string[];
  techStack?: string[];
  links?: Record<string, string | undefined>;
};

export const portfolio: PortfolioProject[] = [
  {
    slug: "carenbuddi",
    name: "CareNBuddi",
    category: "Mobile Apps & Digital Products",
    industry: "Healthcare Technology",
    status: "In Development" as const,
    accent: "cyan" as const,
    featured: true,
    inHouse: true,
    logo: "/logo/carenbuddi.jpg",
    description: productSummaries.carenbuddi,
  },
  {
    slug: "livanta",
    name: "Livanta",
    category: "Mobile Apps & Digital Products",
    industry: "Life Admin & Productivity",
    status: "In Development" as const,
    accent: "violet" as const,
    featured: false,
    inHouse: true,
    logo: "/logo/livanta.jpg",
    description: productSummaries.livanta,
  },
  {
    slug: "electrotrans",
    name: "Electrotrans Engineering and Contractor",
    category: "Web Development",
    industry: "Engineering & Construction",
    status: "In Development" as const,
    accent: "amber" as const,
    featured: false,
    coverImage: "/projects/electrotrans/cover.jpg",
    coverAlt:
      "Electrotrans website hero with navigation, service copy and construction equipment imagery",
    screenshots: [
      { src: "/projects/electrotrans/services.jpg", alt: "Electrotrans services section", caption: "Services — mechanical, electrical, hydraulic and pneumatic" },
      { src: "/projects/electrotrans/fleet.jpg", alt: "Electrotrans fleet section", caption: "Fleet — equipment hire, sales and haulage" },
      { src: "/projects/electrotrans/contact.jpg", alt: "Electrotrans contact section", caption: "Contact — branches and quote request" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: ["Website design", "Front-end build", "Responsive layout"],
    links: {
      website: "https://electrotrans-drab.vercel.app/",
    },
    longDescription:
      "A corporate website for Electrotrans Engineering and Contractor, designed and built to present the company's services clearly and give customers a direct route to enquire.",
    description:
      "A corporate website for an engineering contractor — services overview, equipment hire/sales/haulage, branches and quote request.",
  },
  {
    slug: "euphoriabykylie",
    name: "Euphoria by Kylie Lounge",
    category: "Web Development",
    industry: "Hospitality & Dining",
    status: "Live" as const,
    accent: "rose" as const,
    featured: false,
    logo: "/clients/euphoria.png",
    coverImage: "/projects/euphoriabykylie/cover.jpg",
    coverAlt:
      "Euphoria by Kylie Lounge website hero showing the lounge interior and navigation",
    screenshots: [],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudflare Workers"],
    links: {
      website: "https://euphoriabykylielounge.com/",
    },
    longDescription:
      "A premium web presence for a Lagos lounge — brand-aligned design, menu and events section, reservation-friendly layout, and integrated social links.",
    description:
      "A premium web presence for a Lagos lounge — brand-aligned design, menu and events section, reservation-friendly layout, and integrated social links.",
  },
  {
    slug: "ridesharing",
    name: "Ride Sharing App",
    category: "UI/UX & Product Design",
    industry: "Transportation",
    status: "Concept" as const,
    accent: "violet" as const,
    featured: false,
    coverImage: "/projects/ridesharing/cover.jpg",
    coverAlt: "Ride Sharing App UI/UX concept — welcome screen with a Get Started action",
    screenshots: [
      { src: "/projects/ridesharing/1.jpg", alt: "Ride Sharing App — available cars screen", caption: "Available cars — browse and select vehicles nearby" },
      { src: "/projects/ridesharing/2.jpg", alt: "Ride Sharing App — create profile screen", caption: "Create profile — set up rider account" },
      { src: "/projects/ridesharing/3.jpg", alt: "Ride Sharing App — login screen", caption: "Login screen — sign in to existing account" },
      { src: "/projects/ridesharing/4.jpg", alt: "Ride Sharing App — request rent screen", caption: "Request rent — book a vehicle for hire" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: [],
    links: {},
    description:
      "UI/UX design for a ride-sharing mobile application — rider and driver flows, booking interface, payment integration and real-time tracking concepts.",
  },
  {
    slug: "school-lms",
    name: "School LMS Web Project",
    category: "UI/UX & Product Design",
    industry: "Education",
    status: "Concept" as const,
    accent: "cyan" as const,
    featured: false,
    coverImage: "/projects/school-lms/cover.jpg",
    coverAlt:
      "School LMS UI/UX concept — ROHI International Schools website homepage",
    screenshots: [
      { src: "/projects/school-lms/1.jpg", alt: "School LMS — my classes screen", caption: "My classes — view enrolled courses and schedule" },
      { src: "/projects/school-lms/2.jpg", alt: "School LMS — my courses screen", caption: "My courses — browse course catalog" },
      { src: "/projects/school-lms/3.jpg", alt: "School LMS — quiz screen", caption: "Quiz — take assessments and tests" },
      { src: "/projects/school-lms/4.jpg", alt: "School LMS — settings screen", caption: "Settings — manage account preferences" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: [],
    links: {},
    description:
      "UI/UX design for a school learning management system — student dashboard, course materials, assignment submission and teacher grading interface concepts.",
  },
  {
    slug: "farm-pal",
    name: "Farm Pal",
    category: "UI/UX & Product Design",
    industry: "Agriculture",
    status: "Prototype" as const,
    accent: "green" as const,
    featured: false,
    coverImage: "/projects/farm-pal/cover.jpg",
    coverAlt: "Farm Pal UI/UX concept — laptop mockup of the urban farming page",
    screenshots: [
      { src: "/projects/farm-pal/1.jpg", alt: "Farm Pal — dashboard screen", caption: "Dashboard — farm management overview" },
      { src: "/projects/farm-pal/2.jpg", alt: "Farm Pal — product screen", caption: "Products — browse farm items" },
      { src: "/projects/farm-pal/3.jpg", alt: "Farm Pal — profile screen", caption: "Profile — account settings" },
      { src: "/projects/farm-pal/4.jpg", alt: "Farm Pal — marketplace promo screen", caption: "Marketplace — flexible subscriptions, discounts and ordering" },
      { src: "/projects/farm-pal/5.jpg", alt: "Farm Pal — contact page with enquiry form and footer", caption: "Contact — enquiry form, phone and email" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: [],
    links: {
      prototype: "https://www.figma.com/design/2JuTHcW2uZYCTJ4T35gp4s/FarmPal?t=ySDX4ojvp5QTiGvD-1",
    },
    description:
      "UI/UX prototype for Farm Pal — an agriculture-focused mobile application. Explore the design concept in Figma.",
  },
  {
    slug: "onala-farms",
    name: "Onala Farms",
    category: "Branding & Graphic Design",
    industry: "Agriculture",
    status: "Concept" as const,
    accent: "amber" as const,
    featured: false,
    coverImage: "/projects/onala-farms/cover.jpg",
    coverAlt: "Onala Farms brand identity shown on laptop, tablet and phone mockups",
    screenshots: [
      { src: "/projects/onala-farms/1.jpg", alt: "Onala Farms — branding design 1", caption: "Brand identity — farm branding concept" },
      { src: "/projects/onala-farms/2.jpg", alt: "Onala Farms — branding design 2", caption: "Visual identity — color palette and typography" },
      { src: "/projects/onala-farms/3.jpg", alt: "Onala Farms — branding design 3", caption: "Logo variations — farm logo designs" },
      { src: "/projects/onala-farms/4.jpg", alt: "Onala Farms — branding design 4", caption: "Brand applications — mockups and usage" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: [],
    links: {},
    description:
      "Branding and graphic design for Onala Farms — logo, visual identity and brand system concepts.",
  },
  {
    slug: "flyers-posters",
    name: "Flyers and Posters",
    category: "Branding & Graphic Design",
    industry: "Graphic Design",
    status: "Concept" as const,
    accent: "violet" as const,
    featured: false,
    coverImage: "/projects/flyers-posters/cover.png",
    coverAlt: "Lomacom Farmbox promotional flyer design for fresh vegetables and fish",
    screenshots: [
      { src: "/projects/flyers-posters/1.png", alt: "Flyers and Posters — design 1", caption: "Event flyer — promotional design" },
      { src: "/projects/flyers-posters/2.png", alt: "Flyers and Posters — design 2", caption: "Poster design — campaign artwork" },
      { src: "/projects/flyers-posters/3.png", alt: "Flyers and Posters — design 3", caption: "Social flyer — digital promotion" },
      { src: "/projects/flyers-posters/4.png", alt: "Flyers and Posters — design 4", caption: "Brand poster — corporate design" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: [],
    links: {},
    description:
      "Graphic design gallery — flyers and posters for events, promotions and campaigns.",
  },
  {
    slug: "social-media-designs",
    name: "Social Media Design Projects",
    category: "Social Media & Marketing Design",
    industry: "Digital Marketing",
    status: "Concept" as const,
    accent: "violet" as const,
    featured: false,
    coverImage: "/projects/social-media-designs/cover.jpg",
    coverAlt: "Lomacom Cleaning Services Children's Day social media design",
    screenshots: [
      { src: "/projects/social-media-designs/1.jpg", alt: "Social media flyer design 1", caption: "Campaign flyer — design 1" },
      { src: "/projects/social-media-designs/1.png", alt: "Lomacom Cleaning Services 'Thank God It's Friday' social media post with a smiling woman and headphones", caption: "Social post — Lomacom Cleaning Services" },
      { src: "/projects/social-media-designs/2.png", alt: "Social media flyer design 2", caption: "Campaign flyer — design 2" },
      { src: "/projects/social-media-designs/3.png", alt: "Social media flyer design 3", caption: "Campaign flyer — design 3" },
      { src: "/projects/social-media-designs/4.png", alt: "Social media flyer design 4", caption: "Campaign flyer — design 4" },
      { src: "/projects/social-media-designs/5.png", alt: "Social media flyer design 5", caption: "Campaign flyer — design 5" },
      { src: "/projects/social-media-designs/6.png", alt: "Social media flyer design 6", caption: "Campaign flyer — design 6" },
      { src: "/projects/social-media-designs/7.png", alt: "Social media flyer design 7", caption: "Campaign flyer — design 7" },
      { src: "/projects/social-media-designs/8.png", alt: "Social media flyer design 8", caption: "Campaign flyer — design 8" },
      { src: "/projects/social-media-designs/9.png", alt: "Social media flyer design 9", caption: "Campaign flyer — design 9" },
      { src: "/projects/social-media-designs/10.png", alt: "Social media flyer design 10", caption: "Campaign flyer — design 10" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: [],
    links: {},
    description:
      "Social media and marketing design gallery — campaign assets, posts and visual content concepts.",
  },
  {
    slug: "agro-fresh",
    name: "Agro-Fresh",
    category: "Mobile Apps & Digital Products",
    industry: "Agriculture",
    status: "Concept" as const,
    accent: "amber" as const,
    featured: false,
    coverImage: "/projects/agro-fresh/cover.jpg",
    coverAlt: "Agro-Fresh mobile app home screen with product categories and search",
    screenshots: [
      { src: "/projects/agro-fresh/1.jpg", alt: "Agro-Fresh — farm product bank", caption: "Farm product bank — agricultural marketplace" },
      { src: "/projects/agro-fresh/2.jpg", alt: "Agro-Fresh — onboarding screen", caption: "Onboarding — guided setup for new users" },
      { src: "/projects/agro-fresh/3.jpg", alt: "Agro-Fresh — payment screen", caption: "Payment — secure checkout for farm products" },
      { src: "/projects/agro-fresh/4.jpg", alt: "Agro-Fresh — consultancy screen", caption: "Consultancy — expert farming advice" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [],
    techStack: [],
    links: {},
    longDescription:
      "Agro-Fresh is an agriculture-focused mobile application connecting farmers with buyers and agricultural experts. Features include a farm product marketplace, onboarding for new farmers, secure payment processing, and expert consultancy services.",
    description:
      "A mobile app connecting farmers with buyers and experts — farm product marketplace, onboarding, payments and consultancy.",
  },
];

export const team = [
  {
    name: "Temitope F. Adekunle",
    role: "Founder / CEO",
    focus: "Product Development & Product Design",
    specialty: "Product strategy, digital solutions & customer experience",
    photo: "/team/temitope.jpg",
  },
  {
    name: "Tunmise D. Adekunle",
    role: "Graphics Designer",
    focus: "Brand & Visual Design",
    specialty: "Visual identity, marketing assets & brand systems",
    photo: "/team/tunmise-clean.jpg",
  },
  {
    name: "Omoloja Moses Opeoluwa",
    role: "UI/UX Designer",
    focus: "Interface & Experience Design",
    specialty: "Research-led interfaces, prototypes & design systems",
  },
  {
    name: "Ajewole Samson",
    role: "Software Developer / WordPress Developer",
    focus: "Engineering",
    specialty: "Web & application development, CMS builds",
  },
];

export const clientValue = [
  {
    title: "Problem first",
    body: "We begin with what is actually going wrong, then decide what is worth building.",
  },
  {
    title: "One team, one context",
    body: "Strategy, design and engineering sit together, so nothing is lost in a hand-off.",
  },
  {
    title: "We build our own products too",
    body: "CareNBuddi and Livanta are ours — both in development, held to the same standard as client work.",
  },
];

export const clients = [
  {
    name: "Euphoria by Kylie Lounge",
    sector: "Hospitality & Dining",
    logo: "/clients/euphoria.png",
    url: "https://euphoriabykylielounge.com/",
    width: 1166,
    height: 626,
  },
  {
    name: "Electrotrans Engineering and Contractor",
    sector: "Engineering & Construction",
    logo: "/clients/electrotrans.png",
    url: "",
    width: 500,
    height: 500,
  },
  {
    name: "Jimiking Art Fashion",
    sector: "Fashion & Art",
    logo: "/clients/jimiking.jpg",
    url: "",
    width: 600,
    height: 600,
  },
];

export const testimonials = [
  {
    business: "Euphoria by Kylie Lounge",
    title: "An Exceptional Website That Drives Real Customers",
    text:
      "They understood our hospitality brand perfectly and built us a stunning, mobile-friendly website. Our customers can now explore our menu, view our lounge, and make reservations with ease. We've seen a real increase in bookings since launch. Highly professional team!",
    attribution: "Management, Euphoria by Kylie Lounge",
    service: "Web Development",
  },
  {
    business: "Electrotrans Engineering and Contractor",
    title: "Professionalism That Matches Our Industry Standard",
    text:
      "We needed a corporate website that builds trust and clearly showcases our engineering services and past projects. They delivered a clean, fast, and professional site that has significantly improved our online credibility with clients and partners.",
    attribution: "Engr. Adekunle Adedayo, Managing Director, Electrotrans Engineering and Contractor",
    service: "Corporate Website Development",
  },
  {
    business: "Jimiking Art Fashion",
    title: "Creative Designs That Sell",
    text:
      "Their flyer designs consistently capture the essence of our brand, stylish, bold, and attention-grabbing. Every campaign they design helps us stand out and drives sales for our new collections. The best creative team we've worked with!",
    attribution: "Director, Jimiking Art Fashion",
    service: "Graphic Design and Marketing Creatives",
  },
];

export const stats = [
  { value: "2", label: "Products Built" },
  { value: "4", label: "People Under One Roof" },
  { value: "3", label: "Industries Served" },
  { value: "4", label: "Disciplines, One Team" },
];

export const capabilities = [
  "React",
  "Next.js",
  "TypeScript",
  "Supabase",
  "Figma",
  "GitHub",
  "AI tools",
  "Cloud platforms",
];

// Topics we are writing about. No publication dates or authors are shown
// because no articles have been published yet — add them here only once the
// writing exists.
export const buildApproach = [
  { step: "Understand", body: "We begin by understanding your goals and requirements." },
  { step: "Plan", body: "We define the scope and plan the solution." },
  { step: "Build", body: "We develop and test the product." },
  { step: "Launch", body: "We prepare the product for launch." },
  { step: "Improve", body: "Where agreed, we continue supporting improvements after release." },
];

export const buildCta = {
  heading: "Ready to Build?",
  body: "Have a business idea, an existing product to improve, or a digital problem to solve? Let's discuss your requirements and identify a practical way forward.",
  primary: { label: "Start a Project", href: "/contact/" },
};

export const insights = [
  {
    topic: "Product Development",
    title: "From a rough idea to a product people can actually use",
    excerpt:
      "How we narrow a vague ambition into the smallest version worth building — and what we deliberately leave out first.",
  },
  {
    topic: "Digital Transformation",
    title: "What a small business should digitise first",
    excerpt:
      "Not everything needs an app. A practical order of operations for replacing paper, chats and memory with systems.",
  },
  {
    topic: "UI/UX",
    title: "Designing for the person who will actually use it",
    excerpt:
      "Why we test flows against real tasks early, and how that changes the interface before a line of code is written.",
  },
  {
    topic: "AI & Customer Experience",
    title: "Where AI genuinely helps a product — and where it doesn't",
    excerpt:
      "A sober look at automation in customer-facing products: high-value uses, quiet failures and the cost of guessing.",
  },
];

export const insightsStatus =
  "These are the topics we are writing about first. Full articles will appear here as they are published — until then, ask us about any of them and we will happily talk it through.";

export const careers = {
  heading: "Want to build what's next with us?",
  body: "We're always interested in talented people who love solving problems — designers, developers, strategists and operators.",
  cta: { label: "View opportunities", href: "/company/#careers" },
};

export const finalCta = {
  heading: "Ready to Start Your Project?",
  body: "Tell us what you want to build or improve. Let's discuss how Nexavora can help.",
  primary: { label: "Discuss Your Project", href: "/contact/" },
};

export const footer = {
  blurb:
    "Nexavora Technology Solutions — we help businesses and founders turn ideas and business problems into practical digital solutions.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Solutions", href: "/solutions/" },
        { label: "Products", href: "/products/" },
        { label: "Portfolio", href: "/portfolio/" },
        { label: "Insights", href: "/insights/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/company/#about" },
        { label: "Our Approach", href: "/company/#approach" },
        { label: "Team", href: "/company/#team" },
        { label: "Careers", href: "/company/#careers" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Start a Project", href: "/contact/" },
        { label: "Email us", href: "mailto:" + site.email },
        { label: "WhatsApp", href: "https://wa.me/2349117511518" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy/" },
        { label: "Terms of Service", href: "/terms/" },
      ],
    },
  ],
  // Verified profile URLs only. Leave empty until the real accounts exist —
  // the footer hides the row when there is nothing to link to.
  social: [] as { label: string; href: string }[],
  // Footer social icon row. WhatsApp reuses the verified business number from
  // the contact page. Facebook, Instagram and LinkedIn stay null until the
  // owner supplies the real profile URLs — their icons render unlinked.
  socialLinks: [
    { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/2349117511518" },
    { key: "facebook", label: "Facebook", href: null },
    { key: "instagram", label: "Instagram", href: null },
    { key: "linkedin", label: "LinkedIn", href: null },
  ] as { key: string; label: string; href: string | null }[],
};

export const contact = {
  heading: "Have a Project in Mind?",
  message:
    "Tell us what you're working on, what you need help with, and what you'd like to achieve. We'll come back with questions, a plan, or an honest assessment of the best way forward.",
  location: "Based in Nigeria, working with clients globally.",
  responseTime: "Within 1–2 working days",
  bestFor: "Products, platforms, design and growth",
  // Optional — hide the whole row if the form is ever moved to a backend.
  note: "Send Enquiry opens your email app with these details filled in — nothing is stored on this site.",
  whatsapp: "+2349117511518",
};

export const serviceOptions = [
  "Website & web application development",
  "UI/UX & product design",
  "Graphics design & branding",
  "Digital marketing & social media management",
  "Customer experience & business operations",
  "Product strategy & development",
  "Not sure yet",
];

export const budgetOptions = [
  "Not sure yet",
  "Under ₦100,000",
  "₦100,000 – ₦300,000",
  "₦300,000 – ₦500,000",
  "₦500,000 – ₦1,000,000",
  "Above ₦1,000,000",
  "Prefer to discuss",
];

export const timelineOptions = [
  "As soon as possible",
  "Within 2–4 weeks",
  "Within 1–3 months",
  "Just exploring ideas",
];