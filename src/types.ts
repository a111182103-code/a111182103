
export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface BiographySection {
  title: string;
  content: string;
}
