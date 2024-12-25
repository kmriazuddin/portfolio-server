export type IProject = {
  images: string[];
  title: string;
  category: string;
  technology: string;
  description: string;
  demoLink: string;
  repositories: string;
};

export type IProjectUpdate = {
  images?: string[];
  title: string;
  category: string;
  technology: string;
  description: string;
  demoLink: string;
  repositories: string;
};
