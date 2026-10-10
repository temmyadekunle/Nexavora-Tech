// Single source of truth for every piece of copy and data on the site.
// Edit this file to change names, statuses, links and numbers — the pages
// read everything from here.

export const site = {
  name: "Nexavora",
  // Visual brand lockup under the wordmark.
  brandSuffix: "Technology Solutions",
  legalName: "Nexavora Technology Solutions",
  tagline: "We Build Technology That Moves Ideas Forward.",
  positioning:
    "Nexavora Technology Solutions is a technology company building digital products and providing technology, design, digital growth, customer experience, and business solutions.",
  // TODO: replace with the real mailbox before launch.
  email: "nexavoratechnologies@gmail.com",
  whatsapp: "+2349117511518",
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
  eyebrow: "Nexavora Technology Solutions",
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
    problem:
      "Finding and booking the right healthcare service in Nigeria is fragmented — patients juggle phone numbers, paper notes, and memory. Language barriers, offline needs, and provider discovery make care hard to reach.",
    description:
      "CareNBuddi is a digital healthcare platform for Nigeria that brings finding care, booking appointments, keeping health information organised, and staying in touch with healthcare providers into one mobile app — available in English, Yoruba, Hausa and Igbo. It works offline after first load, installs as a PWA, and requires no payment to get started.",
    longDescription:
      "CareNBuddi was created from a simple belief: getting healthcare should not be harder than it needs to be. Inspired by the story of Bethany Hamilton in Soul Surfer — in an emergency, care shouldn't always have to wait until a patient reaches the hospital. CareNBuddi uses technology to help people connect with healthcare, manage their care and find the right next step — whether at home, working remotely, travelling, or navigating the healthcare system.",
    status: "Live",
    accent: "cyan" as const,
    logo: "/logo/carenbuddi.png",
    features: [
      "Find Healthcare — hospitals, clinics, PHCs, laboratories, pharmacies by name or area",
      "Book Appointments — schedule visits and track what's coming up",
      "Health Records — store records, results and details in one place",
      "Health Reminders — stay on top of medicines, appointments and activities",
      "Healthcare Connections — reach providers directly, keep activities organised",
      "Personal Health Dashboard — overview of healthcare activities and journey",
      "Vitals Tracking — blood pressure, weight, blood sugar with trend views",
      "Vaccine & Dose Tracking — record what was given and when next dose is due",
      "Prescriptions — hold on to prescriptions and medicines",
      "Health Tips — curated articles (hypertension, malaria, mental health, first aid, diabetes, asthma, TB, immunisation)",
      "Emergency Access — Call 112, find nearby emergency care",
      "Health Passport — emergency card and health summary",
      "Care Circle — family health at a glance",
      "Exercise & Wellness — steps, weight and sleep",
      "Preventive Services — check health and book preventive services",
    ],
    techStack: [
      "Next.js (App Router, static export)",
      "PWA — installable, offline-capable after first load",
      "4 languages: English, Yoruba, Hausa, Igbo",
      "Care directory: Hospitals, clinics, PHCs, labs, pharmacies",
      "Works on any modern phone, online or offline",
      "Cloudflare Workers deployment",
    ],
    links: {
      website: "https://carenbuddi.folababy02.workers.dev/",
      app: "https://carenbuddi.folababy02.workers.dev/app",
      download: "https://carenbuddi.folababy02.workers.dev/CareNBuddi-1.0.0.zip",
    },
    testimonials: [
      {
        quote:
          "I wanted one place to see which clinic to go to and what my next appointment is. CareNBuddi keeps that in my pocket instead of scattered across paper and messages.",
        author: "Patient, Lagos",
      },
      {
        quote:
          "My mother takes her medication in three languages depending on who is caring for her that day. Having CareNBuddi in Yoruba and English changed how we manage her care.",
        author: "Caregiver, Ibadan",
      },
      {
        quote:
          "We can now show patients our details and receive appointment requests directly. The clinic stopped losing enquiries that used to arrive as missed calls.",
        author: "Clinic administrator, Abuja",
      },
    ],
    providerFeatures: [
      "Build a digital presence patients can find",
      "Get discovered by people searching for care",
      "Manage appointment requests in one place",
      "Improve communication with patients",
      "Give patients a clearer, simpler experience",
    ],
  },
  {
    slug: "livanta",
    name: "Livanta",
    industry: "Life Admin & Productivity",
    problem:
      "Deadlines, renewals and recurring obligations are scattered across paper, memory and inboxes. A household's rent, bills, documents, vehicles and schedules live in too many places — and the week where they all land together becomes an emergency.",
    description:
      "Livanta is a local-first app that keeps a household's rent, bills, documents, vehicles and schedules in one place — and warns you before each one becomes an emergency. Built in Nigeria, it runs entirely offline, installs as a PWA, and ships as a signed Android APK.",
    longDescription:
      "Livanta — your life, organized. Your problems, anticipated. A local-first app that keeps a household's rent, bills, documents, vehicles and schedules in one place — and warns you before each one becomes an emergency. The app has 5 tabs (Home, Life, Alerts, Calendar, Profile), 4 languages (English, Hausa, Yoruba, Igbo), and a demo household seeded with 12 realistic Nigerian items (rent, electricity, internet, Netflix, vehicle insurance, school fees, driver's licence, passport, refrigerator warranty, generator service, car oil change, electrician). 9 alerts derived at seed time. 368 tests + smoke, CSP and responsive QA. 0 trackers — no cookies, no analytics, CSP-enforced.",
    status: "In development",
    accent: "violet" as const,
    logo: "/logo/livanta.png",
    features: [
      "Home — status hero, urgent/important/on-track readings, needs attention, coming soon, quick add, life areas",
      "Life — five life areas (Home, Transport, Money, Documents, Family, Tasks, Services) with live counts, search, category/status filters, trusted providers with call/WhatsApp",
      "Alerts — filter chips, needs attention / coming up / completed, dismiss or review each alert",
      "Calendar — month grid with due-day dots, day agenda, upcoming list",
      "Profile — account, security, language, notifications, reminder schedule, export (JSON), delete all data, help, legal",
      "Quick Add — capture in seconds: name, category, kind, amount, date, recurrence in one sheet",
      "Thing Detail — full record: amount, due date, notes, details, with mark handled, edit, delete",
      "Documents Module — drill into a single life area with its own header, list and actions",
      "Onboarding — 5 steps: welcome (language picker), value props, choose what to manage, first thing example, notifications permission — all skippable, all translated",
      "Demo Mode — one-tap 'Open with demo data' for a fully populated household",
      "Providers — saved providers with ratings, call/WhatsApp from the card",
      "Offline-first — IndexedDB (lifedesk), service worker caches shell, every feature works offline",
      "Code-split — home/shell eager; other tabs fetch on navigation then cache",
      "Signed Android APK (versionCode 3) on GitHub Releases",
      "No tracking, CSP enforced, JSON export, delete-all",
    ],
    techStack: [
      "Next.js (App Router, output: 'export')",
      "IndexedDB (lifedesk) — things, alerts, members, settings",
      "Service Worker — offline shell, PWA",
      "4 languages: English, Hausa, Yoruba, Igbo",
      "Cloudflare Workers deployment (wrangler deploy)",
      "Android WebView wrapper → signed APK",
      "368 tests + smoke, CSP check, 5-viewport responsive QA",
    ],
    links: {
      prototype: "https://livanta.folababy02.workers.dev/prototype/",
      landing: "https://livanta.folababy02.workers.dev/landing/",
      apk: "https://github.com/temmyadekunle/Livanta/releases",
    },
    demoData: [
      { name: "Rent", category: "home · rent", amount: "₦1,200,000", timing: "due in 18 days", story: "Pay before the 25th (Mr. Okonkwo)" },
      { name: "Electricity", category: "money · utility", amount: "₦45,200", timing: "due in 1 day", story: "Ikeja Electric — the urgent alert" },
      { name: "Internet subscription", category: "money · subscription", amount: "₦20,000", timing: "due in 3 days", story: "Spectranet 10GB + 4G router" },
      { name: "Netflix", category: "money · subscription", amount: "₦8,500", timing: "due in 6 days", story: "Subscription creep" },
      { name: "Vehicle insurance", category: "transport · insurance", amount: "₦85,000", timing: "due in 12 days", story: "Toyota Camry, ABC-123-Lagos" },
      { name: "School fees", category: "family · school fee", amount: "₦150,000", timing: "due in 14 days", story: "Command Primary, assigned to Partner" },
      { name: "Driver's licence", category: "documents · document", amount: "—", timing: "expires in 45 days", story: "FRSC renewal" },
      { name: "Passport", category: "documents · document", amount: "—", timing: "expires in 240 days", story: "Long-horizon item" },
      { name: "LG Refrigerator", category: "home · asset", amount: "₦465,000", timing: "warranty ends in 21 days", story: "12-month warranty lapsing" },
      { name: "Generator service", category: "home · maintenance", amount: "₦45,000", timing: "every 90 days, last 120 days ago", story: "Interval-based, overdue" },
      { name: "Toyota Camry oil change", category: "transport · maintenance", amount: "₦30,000", timing: "every 120 days, last 200 days ago", story: "Interval-based, overdue" },
      { name: "John the electrician", category: "services · provider", amount: "—", timing: "called 45 days ago", story: "Saved provider with rating" },
    ],
    roadmap: {
      mvp: "v0.1 shipped — local-first things, alerts, calendar, life hub, quick add, detail, edit, derived priorities, 5-tab shell, splash + 5-step onboarding, demo mode, 4 languages, providers with call/WhatsApp, JSON export, delete-all, PWA offline, signed APK, no tracking, CSP enforced",
      next: "v0.2–0.3 — optional accounts & sync (Supabase, fail-open cache built), recurring 'mark handled → next occurrence' end-to-end, household members shared (data model ready), push/email reminder channels, Play Store & App Store listings, alert snooze and custom rules",
      future: "v1.x — payment rails (Paystack ready, not enabled in beta), predictive anticipation of household costs, OS widgets for today's due items, document photos (dates only — never ID numbers), iOS build, richer provider ratings",
    },
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
    services: ["Product Strategy", "UI/UX", "Development", "PWA", "Multi-language", "Offline-first"],
    outcome:
      "A digital healthcare platform for Nigeria — live, installable, offline-capable, 4 languages. Patients find care, book appointments, track health, and connect with providers. Providers get discovered and manage requests.",
    accent: "cyan" as const,
    details: {
      problem:
        "Finding and booking healthcare in Nigeria is fragmented — patients juggle phone numbers, paper notes, and memory. Language barriers, offline needs, and provider discovery make care hard to reach.",
      solution:
        "CareNBuddi brings finding care, booking appointments, keeping health information organised, and staying in touch with healthcare providers into one mobile app — available in English, Yoruba, Hausa and Igbo. Works offline after first load, installs as a PWA, requires no payment to get started.",
      highlights: [
        "4 languages: English, Yoruba, Hausa, Igbo",
        "Care directory: Hospitals, clinics, PHCs, labs, pharmacies",
        "Appointment booking & tracking",
        "Health records, vitals (BP, weight, blood sugar), vaccine & dose tracking, prescriptions",
        "Health reminders for medicines & appointments",
        "Health tips library (hypertension, malaria, mental health, first aid, diabetes, asthma, TB, immunisation)",
        "Emergency access: Call 112, find nearby emergency care",
        "Health Passport (emergency card), Care Circle (family health), Exercise & Wellness",
        "Offline-capable PWA, installs on Android/iOS",
        "Provider portal: digital presence, appointment requests, patient communication",
      ],
      techStack: [
        "Next.js (App Router, static export)",
        "PWA — installable, offline-capable",
        "Cloudflare Workers deployment",
        "4 languages from day one",
      ],
      links: {
        website: "https://carenbuddi.folababy02.workers.dev/",
        app: "https://carenbuddi.folababy02.workers.dev/app",
        download: "https://carenbuddi.folababy02.workers.dev/CareNBuddi-1.0.0.zip",
      },
    },
  },
  {
    slug: "livanta",
    name: "Livanta",
    industry: "Life Admin & Productivity",
    services: ["Product Design", "UI/UX", "Mobile Development", "Local-first Architecture", "PWA", "Android APK"],
    outcome:
      "A local-first life admin app that keeps a household's rent, bills, documents, vehicles and schedules in one place — and warns you before each becomes an emergency. Ships as PWA + signed Android APK.",
    accent: "violet" as const,
    details: {
      problem:
        "Deadlines, renewals and recurring obligations are scattered across paper, memory and inboxes. A household's rent, bills, documents, vehicles and schedules live in too many places — and the week where they all land together becomes an emergency.",
      solution:
        "Livanta is a local-first app that keeps a household's rent, bills, documents, vehicles and schedules in one place — and warns you before each one becomes an emergency. 5 tabs (Home, Life, Alerts, Calendar, Profile), 4 languages, demo household with 12 seeded items, 9 derived alerts, 368 tests, 0 trackers, CSP-enforced.",
      highlights: [
        "5 tabs: Home, Life, Alerts, Calendar, Profile",
        "4 languages: English, Hausa, Yoruba, Igbo",
        "Demo mode: one-tap 'Open with demo data' — 12 things, 9 alerts, Nigerian household",
        "Quick Add: name, category, kind, amount, date, recurrence in one sheet",
        "Life hub: 5 areas with live counts, search, filters, trusted providers with call/WhatsApp",
        "Alerts: filter chips, needs attention / coming up / completed, dismiss or review",
        "Calendar: month grid with due-day dots, day agenda, upcoming list",
        "Profile: account, security, language, notifications, reminder schedule, export JSON, delete all, help, legal",
        "Onboarding: 5 steps (welcome, value props, choose what to manage, first thing, notifications) — all skippable, all translated",
        "Providers: saved with ratings, call/WhatsApp from card",
        "Local-first: IndexedDB (lifedesk), service worker, every feature works offline",
        "Signed Android APK (versionCode 3) on GitHub Releases",
        "No trackers, no cookies, CSP-enforced, JSON export, delete-all",
      ],
      techStack: [
        "Next.js (App Router, output: 'export')",
        "IndexedDB (lifedesk) — things, alerts, members, settings",
        "Service Worker — offline shell, PWA",
        "Cloudflare Workers (wrangler deploy)",
        "Android WebView wrapper → signed APK",
        "368 tests + smoke, CSP check, 5-viewport responsive QA",
      ],
      links: {
        prototype: "https://livanta.folababy02.workers.dev/prototype/",
        landing: "https://livanta.folababy02.workers.dev/landing/",
        apk: "https://github.com/temmyadekunle/Livanta/releases",
      },
      demoData: [
        { name: "Rent", category: "home · rent", amount: "₦1,200,000", timing: "due in 18 days" },
        { name: "Electricity", category: "money · utility", amount: "₦45,200", timing: "due in 1 day" },
        { name: "Internet subscription", category: "money · subscription", amount: "₦20,000", timing: "due in 3 days" },
        { name: "Netflix", category: "money · subscription", amount: "₦8,500", timing: "due in 6 days" },
        { name: "Vehicle insurance", category: "transport · insurance", amount: "₦85,000", timing: "due in 12 days" },
        { name: "School fees", category: "family · school fee", amount: "₦150,000", timing: "due in 14 days" },
        { name: "Driver's licence", category: "documents · document", amount: "—", timing: "expires in 45 days" },
        { name: "Passport", category: "documents · document", amount: "—", timing: "expires in 240 days" },
        { name: "LG Refrigerator", category: "home · asset", amount: "₦465,000", timing: "warranty ends in 21 days" },
        { name: "Generator service", category: "home · maintenance", amount: "₦45,000", timing: "every 90 days, last 120 days ago" },
        { name: "Toyota Camry oil change", category: "transport · maintenance", amount: "₦30,000", timing: "every 120 days, last 200 days ago" },
        { name: "John the electrician", category: "services · provider", amount: "—", timing: "called 45 days ago" },
      ],
      roadmap: {
        mvp: "v0.1 shipped — local-first things, alerts, calendar, life hub, quick add, detail, edit, derived priorities, 5-tab shell, splash + 5-step onboarding, demo mode, 4 languages, providers with call/WhatsApp, JSON export, delete-all, PWA offline, signed APK, no tracking, CSP enforced",
        next: "v0.2–0.3 — optional accounts & sync (Supabase, fail-open cache built), recurring 'mark handled → next occurrence' end-to-end, household members shared (data model ready), push/email reminder channels, Play Store & App Store listings, alert snooze and custom rules",
        future: "v1.x — payment rails (Paystack ready, not enabled in beta), predictive anticipation of household costs, OS widgets for today's due items, document photos (dates only — never ID numbers), iOS build, richer provider ratings",
      },
    },
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
    photo: "/team/temitope.jpg",
  },
  {
    name: "Tunmise D. Adekunle",
    role: "Graphics Designer",
    focus: "Brand & Visual Design",
    specialty: "Visual identity, marketing assets & brand systems",
    photo: "/team/tunmise.jpg",
  },
  {
    name: "Omoloja Moses Opeoluwa",
    role: "UI/UX Designer",
    focus: "Interface & Experience Design",
    specialty: "Research-led interfaces, prototypes & design systems",
    photo: "/team/omoloja.jpg",
  },
  {
    name: "Ajewole Samson",
    role: "Software Developer / WordPress Developer",
    focus: "Engineering",
    specialty: "Web & application development, CMS builds",
    photo: "/team/ajewole.jpg",
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
    // Artwork not supplied yet — the site falls back to a text wordmark.
    logo: "",
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

// Topics we are writing about. No publication dates or authors are shown
// because no articles have been published yet — add them here only once the
// writing exists.
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
  heading: "Let's Build Something Useful.",
  body: "Have an idea, a business problem or a digital experience that needs to be better? Let's talk.",
  primary: { label: "Start a Project", href: "/contact/" },
  secondary: { label: "Contact Nexavora", href: "/contact/" },
};

export const footer = {
  blurb:
    "Nexavora Technology Solutions — we help businesses and founders turn ideas and business problems into practical digital solutions.",
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
};

export const contact = {
  heading: "Talk to Nexavora",
  message:
    "A short note is enough: what you want to build, who it is for, and roughly when you need it. We'll come back with questions, a plan, or an honest assessment of the best way forward.",
  location: "Based in Nigeria, working with clients globally.",
  responseTime: "Within 1–2 working days",
  bestFor: "Products, platforms, design and growth",
  // Optional — hide the whole row if the form is ever moved to a backend.
  note: "Send Inquiry opens your email app with these details filled in — nothing is stored on this site.",
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
