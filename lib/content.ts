// Single source of truth for every piece of copy and data on the site.
// Edit this file to change names, statuses, links and numbers — the pages
// read everything from here.

export const site = {
  name: "Nexavora",
  // Visual brand lockup under the wordmark.
  brandSuffix: "Technology Solutions",
  legalName: "Nexavora Technologies Ltd.",
  tagline: "We Build Technology That Moves Ideas Forward.",
  positioning:
    "Nexavora Technologies is a technology company building digital products and providing technology, design, digital growth, customer experience, and business solutions.",
  // TODO: replace with the real mailbox before launch.
  email: "hello@nexavora.com",
  copyrightYear: 2026,
};

export const nav = {
  products: {
    label: "Products",
    href: "/products/",
    items: [
      {
        label: "CareNBuddi",
        hint: "Healthcare technology platform",
        href: "/products/#carenbuddi",
      },
      {
        label: "Livanta",
        hint: "Life admin & productivity app",
        href: "/products/#livanta",
      },
    ],
  },
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
  company: {
    label: "Company",
    href: "/company/",
    items: [
      { label: "About Nexavora", hint: "Who we are and what we believe", href: "/company/#about" },
      { label: "Our Approach", hint: "How we turn problems into solutions", href: "/company/#approach" },
      { label: "Our Team", hint: "Meet the people behind Nexavora", href: "/company/#team" },
      { label: "Our Work", hint: "Selected projects and case studies", href: "/company/#work" },
      { label: "Careers", hint: "Build with us", href: "/company/#careers" },
    ],
  },
  links: [
    { label: "Insights", href: "/insights/" },
    { label: "Contact", href: "/contact/" },
  ],
};

export const hero = {
  eyebrow: "Nexavora Technologies",
  title: "We Build Technology That Moves Ideas Forward.",
  statement:
    "Strategy, design, engineering and digital growth under one roof — for the products we build for clients and the products we build for ourselves.",
  primaryCta: { label: "Start a Project", href: "/contact/" },
  secondaryCta: { label: "Explore Our Products", href: "/products/" },
};

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
    body: "Web platforms, mobile apps and the systems behind them — architected, built and shipped by one team.",
    deliverables: [
      "Web applications & marketing sites",
      "Mobile apps (iOS & Android)",
      "APIs, integrations & databases",
      "Technical architecture & audits",
    ],
  },
  {
    key: "design",
    index: "02",
    title: "Design",
    subtitle: "UI/UX & Product Design",
    body: "Research-led interfaces, design systems and product flows built around the people who will actually use them.",
    deliverables: [
      "Product & UX strategy",
      "Wireframes and interactive prototypes",
      "UI design and design systems",
      "Brand, identity & visual design",
    ],
  },
  {
    key: "grow",
    index: "03",
    title: "Grow",
    subtitle: "Digital Marketing & Social Media",
    body: "Positioning, content and campaigns that put the product in front of the right people and keep them coming back.",
    deliverables: [
      "Positioning & messaging",
      "Content and social media systems",
      "Launch and campaign planning",
      "Analytics & iteration",
    ],
  },
  {
    key: "operate",
    index: "04",
    title: "Operate",
    subtitle: "Customer Experience & Business Operations",
    body: "The support, feedback loops and operational glue that keep a digital product healthy after launch.",
    deliverables: [
      "Customer support workflows",
      "Feedback & bug triage loops",
      "Maintenance and releases",
      "Process and operations setup",
    ],
  },
];

export const products = [
  {
    slug: "carenbuddi",
    name: "CareNBuddi",
    industry: "Healthcare Technology",
    problem: "Finding and booking the right healthcare service is still fragmented and slow.",
    description:
      "A digital platform designed to make discovering healthcare services easier — people, providers and information in one place.",
    status: "Live",
    accent: "cyan" as const,
  },
  {
    slug: "livanta",
    name: "Livanta",
    industry: "Life Admin & Productivity",
    problem:
      "Deadlines, renewals and recurring obligations are scattered across paper, memory and inboxes.",
    description:
      "The life admin app for the things you have to keep up with — one place for every date, renewal and repeat.",
    status: "In development",
    accent: "violet" as const,
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

export const work = [
  {
    slug: "carenbuddi",
    name: "CareNBuddi",
    industry: "Healthcare Technology",
    services: ["Product Strategy", "UI/UX", "Development"],
    outcome:
      "A digital platform designed to make discovering healthcare services easier.",
    accent: "cyan" as const,
  },
  {
    slug: "livanta",
    name: "Livanta",
    industry: "Life Admin & Productivity",
    services: ["Product Design", "UI/UX", "Mobile Development"],
    outcome:
      "One place for renewals, deadlines and the recurring things life quietly expects.",
    accent: "violet" as const,
  },
  {
    slug: "electrotrans",
    name: "Electrotrans Engineering and Contractor",
    industry: "Engineering & Construction",
    services: ["Website Design", "Development"],
    outcome:
      "A corporate website that gives an engineering contractor a credible presence online.",
    accent: "orange" as const,
  },
];

export const team = [
  {
    name: "Temitope F. Adekunle",
    role: "Founder / CEO",
    focus: "Product Development & Product Design",
    specialty: "Product strategy, digital solutions & customer experience",
  },
  {
    name: "Tunmise D. Adekunle",
    role: "Graphics Designer",
    focus: "Brand & Visual Design",
    specialty: "Visual identity, marketing assets & brand systems",
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
    title: "We ship our own products too",
    body: "CareNBuddi and Livanta are ours — we hold client work to the same standard we hold ourselves.",
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
    logo: "/clients/jimiking.png",
    url: "",
    width: 960,
    height: 464,
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

export const careers = {
  heading: "Want to build what's next with us?",
  body: "We're always interested in talented people who love solving problems — designers, developers, strategists and operators.",
  cta: { label: "View opportunities", href: "/company/#careers" },
};

export const finalCta = {
  heading: "Let's Build Something Useful.",
  body: "Have an idea, a business problem or a digital experience that needs to be better? Let's talk.",
  primary: { label: "Start a Project", href: "/contact/" },
  secondary: { label: "Contact Nexavora", href: "/contact/" },
};

export const footer = {
  blurb: "Technology · Products · Digital Solutions",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Products", href: "/products/" },
        { label: "Solutions", href: "/solutions/" },
        { label: "Portfolio", href: "/company/#work" },
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
      title: "Connect",
      links: [
        // TODO: swap in the real profile URLs before launch.
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "X", href: "#" },
        { label: "Email", href: "mailto:" + site.email },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
};
