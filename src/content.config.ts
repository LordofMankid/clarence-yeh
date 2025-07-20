import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  image: z.string().optional(),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = {
  projects: projectsCollection,
};

export type Project = z.infer<typeof projectSchema>;
