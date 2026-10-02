export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  alt: string;
  line1?: string;
  line2?: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client?: string;
  status?: string;
  contractValue?: string;
  duration?: string;
  role?: string;
  location: string;
  description: string;
  fullDescription?: string[];
  image: string;
  gallery?: string[];
}

