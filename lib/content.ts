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
      { label: "Careers", hint: "Build with us", href: "/company/#careers" },
    ],
  },
  links: [
    { label: "Portfolio", href: "/portfolio/" },
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
    // The CareNBuddi web app is publicly usable, but the App Store / Play
    // Store builds are still listed as "Coming soon" on its own site, so
    // "Live" would overstate it. Beta is the accurate claim.
    status: "Beta" as const,
    accent: "cyan" as const,
    // Flagship product — featured prominently in the homepage showcase.
    featured: true,
    logo: "/logo/carenbuddi.jpg",
    logoWidth: 1024,
    logoHeight: 1024,
    // Real captures of the live CareNBuddi web app (780x1688 @2x) plus the
    // product's own landing hero as the cover (1440x900).
    coverImage: "/projects/carenbuddi/cover.jpg",
    screenshots: [
      { src: "/projects/carenbuddi/home.jpg", alt: "CareNBuddi home dashboard showing health guide, next appointment and quick actions", caption: "Home — health guide, next appointment, reminders and quick actions" },
      { src: "/projects/carenbuddi/find-care.jpg", alt: "CareNBuddi Find Care screen with search and filters for hospitals, clinics and pharmacies", caption: "Find Care — search hospitals, PHCs, labs and pharmacies by area" },
      { src: "/projects/carenbuddi/health.jpg", alt: "CareNBuddi Health screen showing vitals check-ins and reminders", caption: "Health — vitals check-ins, records and reminders" },
    ],
    mockups: {
      desktop: "",
      mobile: "",
    },
    // Screen selected for the products-page showcase: the home dashboard,
    // a meaningful view of the live app (not a splash screen).
    showcaseScreenshot: "/projects/carenbuddi/home.jpg",
    showcaseHighlights: [
      "Find Healthcare — search hospitals, clinics, PHCs, labs and pharmacies by name or area",
      "Book Appointments — schedule visits and track what's coming up",
      "Health Records & Vitals — keep records, results and readings in one place",
      "Works offline and installs as a PWA, with English, Yoruba, Hausa and Igbo built in",
    ],
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
    // The prototype page states "v0.1.0 · beta, invite-only".
    status: "Beta" as const,
    accent: "violet" as const,
    featured: false,
    logo: "/logo/livanta.jpg",
    logoWidth: 1080,
    logoHeight: 1080,
    // Real captures from the v0.1.0 build (780x1688 @2x) in "Livanta Screens/",
    // plus the product's own landing hero as the cover (1440x900).
    coverImage: "/projects/livanta/cover.jpg",
    screenshots: [
      { src: "/projects/livanta/home.jpg", alt: "Livanta home screen showing status overview, urgent items and coming soon", caption: "Home — status overview, needs attention, coming soon" },
      { src: "/projects/livanta/life.jpg", alt: "Livanta Life hub listing life areas with counts and filters", caption: "Life — the hub with life areas, search and filters" },
      { src: "/projects/livanta/calendar.jpg", alt: "Livanta calendar showing month grid with due-day markers", caption: "Calendar — month grid, day agenda and upcoming" },
      { src: "/projects/livanta/quick-add.jpg", alt: "Livanta quick add sheet for capturing a new item", caption: "Quick add — name, category, amount, date, recurrence" },
      { src: "/projects/livanta/detail.jpg", alt: "Livanta item detail showing amount, due date and notes", caption: "Thing detail — full record with mark handled and edit" },
      { src: "/projects/livanta/profile.jpg", alt: "Livanta profile screen with language, notifications and export", caption: "Profile — language, reminders, export and delete all data" },
      { src: "/projects/livanta/welcome.jpg", alt: "Livanta welcome screen with language picker and demo option", caption: "Onboarding — welcome, language picker and demo data" },
    ],
    mockups: {
      desktop: "",
      mobile: "",
    },
    // Screen selected for the products-page showcase: the home status view,
    // which shows the core "what needs attention" idea of the app.
    showcaseScreenshot: "/projects/livanta/home.jpg",
    showcaseHighlights: [
      "Alerts — warns you before a deadline becomes an emergency",
      "Calendar — month grid with due-day marks, day agenda and upcoming",
      "Quick Add — capture an item in seconds: name, category, amount, date",
      "Local-first — every feature works offline, with no trackers, in 4 languages",
    ],
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
  {
    slug: "euphoriabykylie",
    name: "Euphoria by Kylie Lounge",
    industry: "Hospitality & Dining",
    services: ["Brand Strategy", "Web Design", "Development", "Digital Marketing"],
    outcome:
      "A premium web presence for a Lagos lounge — brand-aligned design, reservation-friendly layout, and digital marketing that drives footfall and bookings.",
    accent: "rose" as const,
    details: {
      problem:
        "Kylie Lounge needed a credible online venue to showcase its atmosphere, menu, events, and reservation options — without a clear way for prospective guests to explore or book ahead.",
      solution:
        "A sleek, mobile-first website that presents the lounge's brand, menu, upcoming events, and a reservation section. Integrated contact and social links make it easy for guests to connect and return.",
      highlights: [
        "Brand-aligned visual design",
        "Mobile-first layout",
        "Menu and events section",
        "Reservation-friendly booking area",
        "Integrated social media & contact",
        "Fast loading, SEO-optimised",
      ],
      techStack: [
        "Next.js (App Router, static export)",
        "Tailwind CSS",
        "Framer Motion for subtle interactions",
        "Cloudflare Workers deployment",
      ],
      links: {
        website: "https://euphoriabykylielounge.com/",
      },
    },
  },
];

export const portfolio = [
  {
    slug: "carenbuddi",
    name: "CareNBuddi",
    category: "Mobile Apps",
    industry: "Healthcare Technology",
    status: "Beta" as const,
    accent: "cyan" as const,
    featured: true,
    logo: "/logo/carenbuddi.jpg",
    coverImage: "/projects/carenbuddi/cover.jpg",
    screenshots: [
      { src: "/projects/carenbuddi/home.jpg", alt: "CareNBuddi home dashboard", caption: "Home — health guide, next appointment, reminders" },
      { src: "/projects/carenbuddi/find-care.jpg", alt: "CareNBuddi Find Care screen", caption: "Find Care — search hospitals, PHCs, labs and pharmacies" },
      { src: "/projects/carenbuddi/health.jpg", alt: "CareNBuddi Health screen", caption: "Health — vitals check-ins, records and reminders" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [
      "Find Healthcare — hospitals, clinics, PHCs, laboratories, pharmacies by name or area",
      "Book Appointments — schedule visits and track what's coming up",
      "Health Records — store records, results and details in one place",
    ],
    techStack: [
      "Next.js (App Router, static export)",
      "PWA — installable, offline-capable",
      "Cloudflare Workers deployment",
    ],
    links: {
      website: "https://carenbuddi.folababy02.workers.dev/",
      app: "https://carenbuddi.folababy02.workers.dev/app",
      download: "https://carenbuddi.folababy02.workers.dev/CareNBuddi-1.0.0.zip",
    },
    longDescription:
      "CareNBuddi was created from a simple belief: getting healthcare should not be harder than it needs to be. CareNBuddi uses technology to help people connect with healthcare, manage their care and find the right next step — whether at home, working remotely, travelling, or navigating the healthcare system.",
    description:
      "A digital healthcare platform for Nigeria — find care, book appointments, track health records and connect with providers. Available in English, Yoruba, Hausa and Igbo. Offline-capable PWA.",
  },
  {
    slug: "livanta",
    name: "Livanta",
    category: "Mobile Apps",
    industry: "Life Admin & Productivity",
    status: "Beta" as const,
    accent: "violet" as const,
    featured: false,
    logo: "/logo/livanta.jpg",
    coverImage: "/projects/livanta/cover.jpg",
    screenshots: [
      { src: "/projects/livanta/home.jpg", alt: "Livanta home screen", caption: "Home — status overview, urgent items" },
      { src: "/projects/livanta/life.jpg", alt: "Livanta Life hub", caption: "Life — life areas with counts and filters" },
      { src: "/projects/livanta/calendar.jpg", alt: "Livanta calendar", caption: "Calendar — month grid with due-day markers" },
      { src: "/projects/livanta/quick-add.jpg", alt: "Livanta quick add", caption: "Quick add — capture a new item" },
      { src: "/projects/livanta/detail.jpg", alt: "Livanta item detail", caption: "Thing detail — full record" },
      { src: "/projects/livanta/profile.jpg", alt: "Livanta profile", caption: "Profile — language, notifications, export" },
      { src: "/projects/livanta/welcome.jpg", alt: "Livanta welcome", caption: "Onboarding — welcome and language picker" },
    ],
    mockups: { desktop: "", mobile: "" },
    features: [
      "Home — status hero, urgent/important/on-track readings",
      "Life — five life areas with live counts, search, filters",
      "Quick Add — capture in seconds: name, category, amount, date, recurrence",
    ],
    techStack: [
      "Next.js (App Router, output: 'export')",
      "IndexedDB (lifedesk)",
      "Service Worker — offline shell, PWA",
    ],
    links: {
      prototype: "https://livanta.folababy02.workers.dev/prototype/",
      landing: "https://livanta.folababy02.workers.dev/landing/",
      apk: "https://github.com/temmyadekunle/Livanta/releases",
    },
    longDescription:
      "Livanta — your life, organized. A local-first app that keeps a household's rent, bills, documents, vehicles and schedules in one place — and warns you before each one becomes an emergency. Runs entirely offline, installs as a PWA.",
    description:
      "A local-first life admin app that keeps rent, bills, documents, vehicles and schedules in one place — and warns you before each becomes an emergency. Runs entirely offline, installs as a PWA.",
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
    screenshots: [
      { src: "/projects/farm-pal/1.jpg", alt: "Farm Pal — dashboard screen", caption: "Dashboard — farm management overview" },
      { src: "/projects/farm-pal/2.jpg", alt: "Farm Pal — product screen", caption: "Products — browse farm items" },
      { src: "/projects/farm-pal/3.jpg", alt: "Farm Pal — profile screen", caption: "Profile — account settings" },
      { src: "/projects/farm-pal/4.jpg", alt: "Farm Pal — additional screen", caption: "Farm app — additional UI screen" },
      { src: "/projects/farm-pal/5.jpg", alt: "Farm Pal — additional screen", caption: "Farm app — additional UI screen" },
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
    screenshots: [
      { src: "/projects/social-media-designs/1.jpg", alt: "Flyer 1", caption: "Flyer 1" },
      { src: "/projects/social-media-designs/2.png", alt: "Flyer 2", caption: "Flyer 2" },
      { src: "/projects/social-media-designs/3.png", alt: "Flyer 3", caption: "Flyer 3" },
      { src: "/projects/social-media-designs/4.png", alt: "Flyer 4", caption: "Flyer 4" },
      { src: "/projects/social-media-designs/5.png", alt: "Flyer 5", caption: "Flyer 5" },
      { src: "/projects/social-media-designs/6.png", alt: "Flyer 6", caption: "Flyer 6" },
      { src: "/projects/social-media-designs/7.png", alt: "Flyer 7", caption: "Flyer 7" },
      { src: "/projects/social-media-designs/8.png", alt: "Flyer 8", caption: "Flyer 8" },
      { src: "/projects/social-media-designs/9.png", alt: "Flyer 9", caption: "Flyer 9" },
      { src: "/projects/social-media-designs/10.png", alt: "Flyer 10", caption: "Flyer 10" },
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
    category: "Mobile Apps",
    industry: "Agriculture",
    status: "Concept" as const,
    accent: "amber" as const,
    featured: false,
    coverImage: "/projects/agro-fresh/cover.jpg",
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
        { label: "Products", href: "/products/" },
        { label: "Solutions", href: "/solutions/" },
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