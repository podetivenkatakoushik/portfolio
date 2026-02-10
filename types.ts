import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  targetId: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export interface CertItem {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface QualityItem {
  text: string;
  icon: LucideIcon;
}