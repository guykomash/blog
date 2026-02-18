import { defineCollection } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
  }),
});

export const collections = { posts };
