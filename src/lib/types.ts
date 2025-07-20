interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  techStack: string[];
}

interface ProjectModule {
  frontmatter: ProjectFrontmatter;
  url?: string; // optional, you might inject this yourself
}
