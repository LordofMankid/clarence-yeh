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

const blogSchema = z.object({
  title: z.string(),
  date: z.date(),
  subtitle: z.string(),
  thumbnail: z.string().optional(),
});

const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
});
export const collections = {
  projects: projectsCollection,
  blogs: blogCollection,
};

export type Project = z.infer<typeof projectSchema>;
