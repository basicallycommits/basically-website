export type ProjectStatus = "in-progress" | "published" | "coming-soon";

export type Project = {
  title: string;
  description?: string;
  descriptionHtml?: string;
  imageUrl: string;
  repoUrl?: string;
  date: string;
  status: ProjectStatus;
  skillsUsed?: string[];
  placeholderImage?: boolean;
};
