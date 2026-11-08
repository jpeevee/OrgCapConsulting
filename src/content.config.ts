// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 1. Settings Collection (reads JSON data)
const settings = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/settings" }),
  schema: z.object({
    companyName: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.string(),
  }),
});

// 2. Pages Collection (handles about.md, services.md, contact.md, etc.)
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
  }),
});

export const collections = { settings, pages };
