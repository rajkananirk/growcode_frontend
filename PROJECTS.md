# Managing portfolio projects

Projects are stored in `data/projects.ts`. The website automatically renders every object in the exported `projects` array.

## Add a project

1. Put a landscape PNG, JPG, or WebP image in `public/images/projects/`.
2. Open `data/projects.ts`.
3. Copy an existing project object and update its fields.

```ts
{
  slug: "my-project",
  title: "My Project",
  sector: "E-commerce",
  description: "What the product does and why it matters.",
  image: "/images/projects/my-project.webp",
  imageAlt: "Accessible description of the project screen",
  metric: "40%",
  result: "higher conversion",
  stack: ["Next.js", "Node.js", "AWS"],
  liveUrl: "https://example.com",
  featured: false,
}
```

Set `featured: true` to make a project span the full grid width. Reorder objects to change display order. Delete an object to hide that project.

For non-technical editing later, this data layer can be replaced with Sanity, Contentful, or another headless CMS without changing the card component.
