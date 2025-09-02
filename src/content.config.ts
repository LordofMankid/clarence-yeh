import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  dateRange: z.string(),
  description: z.string(),
  publishDate: z.date(),
  techStack: z.array(z.string()),
  thumbnail: z.string().optional(),
  additionalInfo: z.array(z.string()).optional(),
  links: z
    .array(
      z.object({
        url: z.string().url(),
        linkText: z.string(),
      })
    )
    .optional(),
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
  tags: z.array(z.string()),
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
