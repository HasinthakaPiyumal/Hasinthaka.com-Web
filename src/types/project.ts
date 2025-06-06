export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  techStack: string[];
  date: string;
  category:
    | "Web Development"
    | "Full Stack"
    | "Mobile Development"
    | "IoT"
    | "AI & Machine Learning"
    | "Blockchain";
  featured: boolean;
  gradient: string;
};
