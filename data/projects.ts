export type Project = {
  slug: string;
  title: string;
  sector: string;
  description: string;
  image: string;
  imageAlt: string;
  metric: string;
  result: string;
  stack: string[];
  liveUrl?: string;
  featured?: boolean;
};

// Add, remove, or reorder projects here. Images belong in /public/images/projects.
export const projects: Project[] = [
  {
    slug: "meridian-os",
    title: "Meridian OS",
    sector: "Logistics intelligence",
    description: "A real-time operating layer connecting inventory, fleet telemetry, and fulfillment decisions across 14 markets.",
    image: "/images/projects/meridian-os.png",
    imageAlt: "Meridian OS logistics intelligence dashboard",
    metric: "31%",
    result: "faster fulfillment",
    stack: ["Next.js", "Event streaming", "AWS"],
    liveUrl: "/contact",
    featured: true,
  },
  {
    slug: "axiom-health",
    title: "Axiom Health",
    sector: "Clinical operations",
    description: "A secure patient coordination platform replacing fragmented workflows with one accountable clinical system.",
    image: "/images/projects/axiom-health.png",
    imageAlt: "Axiom Health clinical operations dashboard",
    metric: "2.7×",
    result: "team throughput",
    stack: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "/contact",
  },
  {
    slug: "lattice-capital",
    title: "Lattice Capital",
    sector: "Financial infrastructure",
    description: "Portfolio intelligence for investment teams, transforming multi-source reporting into decision-grade views.",
    image: "/images/projects/lattice-capital.png",
    imageAlt: "Lattice Capital investment analytics dashboard",
    metric: "68%",
    result: "less reporting time",
    stack: ["TypeScript", "Data pipelines", "GCP"],
    liveUrl: "/contact",
  },
];
