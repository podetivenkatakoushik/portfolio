import { 
  Terminal, Server, Shield, Database, Layout, 
  Cpu, Code, Globe, User, BookOpen, 
  Award, Briefcase, Mail, Zap, Target, Search, Clock
} from 'lucide-react';
import { SkillCategory, FeatureItem, ProjectItem, CertItem, QualityItem } from './types';

export const HERO_TAGS = [
  "Python", "DSA", "Linux", "SQL", "Cybersecurity", "AI", "Vibe Coding"
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "C"],
    icon: Code
  },
  {
    title: "Core CS",
    skills: ["DSA", "OS Basics"],
    icon: Cpu
  },
  {
    title: "Cybersecurity",
    skills: ["Networking Basics", "Linux", "Nmap"],
    icon: Shield
  },
  {
    title: "Database",
    skills: ["SQL"],
    icon: Database
  },
  {
    title: "Web Dev Basics",
    skills: ["HTML", "CSS", "JavaScript"],
    icon: Globe
  },
  {
    title: "Vibe Coding Tools",
    skills: ["Cursor AI", "Google AI Studio"],
    icon: Zap
  }
];

export const QUALITIES: QualityItem[] = [
  { text: "Curious Learner", icon: BookOpen },
  { text: "Consistent", icon: Clock },
  { text: "Problem Solver", icon: Target },
  { text: "Quick Adapter", icon: Zap },
  { text: "Tech Explorer", icon: Search },
  { text: "Hardworking", icon: Briefcase },
];

export const FEATURE_CARDS: FeatureItem[] = [
  { id: 'feat-projects', title: "My Work", description: "Real-world projects & case studies", icon: Briefcase, targetId: "projects" },
  { id: 'feat-skills', title: "Tech Stack", description: "Tools and technologies I use", icon: Terminal, targetId: "skills" },
  { id: 'feat-certs', title: "Credentials", description: "Verified certifications & learning", icon: Award, targetId: "certifications" },
  { id: 'feat-achieve', title: "Milestones", description: "Progress, goals, and highlights", icon: Target, targetId: "achievements" },
  { id: 'feat-contact', title: "Let’s Connect", description: "Reach out and collaborate", icon: Mail, targetId: "contact" },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Cybersecurity Portfolio Website",
    description: "A secure, responsive personal portfolio showcasing skills, write-ups, and security research.",
    tags: ["Next.js", "Tailwind", "React", "Security Headers"],
    image: "https://picsum.photos/seed/portfolio/600/400",
    githubUrl: "#",
    demoUrl: "#"
  }
];

export const CERTIFICATIONS: CertItem[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera / Google",
    date: "2024",
    image: "https://picsum.photos/seed/googlecert/100/100"
  },
  {
    title: "Vulnerability Scanning and Exploitation Boot Camp",
    issuer: "DevTown",
    date: "2023",
    image: "https://picsum.photos/seed/devtown/100/100"
  }
];