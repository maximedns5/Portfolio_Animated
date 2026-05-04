export type ProjectDomain =
  | 'mechanical'
  | 'electronic'
  | 'software'
  | 'machine-learning'
  | 'design'
  | 'research'
  | 'other';

export type ProjectLink = {
  label: string;
  url: string;
  type: 'github' | 'pdf' | 'demo' | 'external';
  disabled?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  year: number;
  duration?: string;
  context?: string;
  domains: ProjectDomain[];
  tags: string[];
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  images?: ProjectImage[];
  links?: ProjectLink[];
  featured?: boolean;
  status?: 'completed' | 'in-progress' | 'archived';
};

export type ProjectGroup = {
  id: string;
  title: string;
  shortDesc: string;
  coverImage: string;
  domains: ProjectDomain[];
  tags: string[];
  projects: Project[];
  featured?: boolean;
};
