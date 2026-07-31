export type ServiceOffering = {
  title: string;
  description: string;
  tags: string[];
  symbol: string;
};

export type ServiceCategory = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  offerings: ServiceOffering[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "mobile",
    eyebrow: "Mobile product engineering",
    title: "Mobile products built for",
    accent: "daily use.",
    description: "Native-quality experiences, one resilient product architecture, and a release process designed for continuous improvement.",
    offerings: [
      { title: "Flutter Applications", description: "One maintainable codebase for polished iOS and Android experiences without compromising interaction quality.", tags: ["Flutter", "Dart", "Firebase"], symbol: "FL" },
      { title: "Native iOS", description: "High-performance Apple platform experiences aligned with accessibility and App Store requirements.", tags: ["Swift", "SwiftUI", "iOS"], symbol: "iOS" },
      { title: "Native Android", description: "Reliable Android products designed for diverse devices, connectivity, and operational environments.", tags: ["Kotlin", "Compose", "Android"], symbol: "AN" },
    ],
  },
  {
    id: "web",
    eyebrow: "Web platform engineering",
    title: "Web systems that stay",
    accent: "fast at scale.",
    description: "Customer-facing platforms and internal systems engineered around performance, accessibility, and long-term change.",
    offerings: [
      { title: "Next.js Platforms", description: "SEO-ready product and commerce experiences with modern rendering, caching, and content architecture.", tags: ["Next.js", "TypeScript", "Vercel"], symbol: "NX" },
      { title: "SaaS Applications", description: "Complex multi-role products with clear workflows, robust permissions, and maintainable design systems.", tags: ["React", "Node.js", "Postgres"], symbol: "SA" },
      { title: "Backend & APIs", description: "Secure service layers, integrations, data models, and event-driven systems built for observability.", tags: ["Node.js", "GraphQL", "AWS"], symbol: "API" },
    ],
  },
  {
    id: "ai",
    eyebrow: "Applied intelligence",
    title: "AI that improves a",
    accent: "real workflow.",
    description: "Production AI designed around your process, data boundaries, evaluation criteria, and human decision points.",
    offerings: [
      { title: "Knowledge Assistants", description: "Grounded internal or customer assistants connected to trusted company knowledge and clear escalation paths.", tags: ["RAG", "LLMs", "Evaluation"], symbol: "KA" },
      { title: "Document Automation", description: "Extract, classify, validate, and route information from operational documents with human review.", tags: ["OCR", "Workflows", "Python"], symbol: "DA" },
      { title: "Predictive Systems", description: "Decision-support tools for demand, risk, operations, and prioritization using explainable data signals.", tags: ["ML", "Analytics", "MLOps"], symbol: "PS" },
    ],
  },
  {
    id: "quality",
    eyebrow: "Quality & reliability",
    title: "Confidence before every",
    accent: "release.",
    description: "Quality engineering embedded in delivery—not added after development—so teams can ship faster with less risk.",
    offerings: [
      { title: "Test Automation", description: "Stable end-to-end and integration coverage around the customer journeys that matter most.", tags: ["Playwright", "CI/CD", "API tests"], symbol: "TA" },
      { title: "Exploratory QA", description: "Structured human testing across workflows, devices, accessibility, and edge conditions.", tags: ["Manual QA", "Accessibility", "Mobile"], symbol: "QA" },
      { title: "Performance Engineering", description: "Measure and remove frontend, backend, database, and infrastructure bottlenecks.", tags: ["Core Web Vitals", "Load tests", "APM"], symbol: "PE" },
    ],
  },
  {
    id: "cloud",
    eyebrow: "Cloud & delivery operations",
    title: "Infrastructure teams can",
    accent: "trust.",
    description: "Secure cloud foundations, reliable delivery pipelines, and useful observability without unnecessary platform complexity.",
    offerings: [
      { title: "Cloud Architecture", description: "Pragmatic AWS and GCP foundations designed for security, cost visibility, and incremental scale.", tags: ["AWS", "GCP", "Terraform"], symbol: "CL" },
      { title: "Delivery Systems", description: "Repeatable CI/CD pipelines with safe environments, automated checks, and clear release controls.", tags: ["GitHub Actions", "Docker", "CI/CD"], symbol: "CD" },
      { title: "Observability", description: "Logs, metrics, traces, and alerts organized around customer and operational impact.", tags: ["Monitoring", "Tracing", "SRE"], symbol: "OB" },
    ],
  },
];
