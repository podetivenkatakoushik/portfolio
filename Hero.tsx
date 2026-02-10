import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { HERO_TAGS } from './constants';

const Hero: React.FC = () => {
  // Stagger container for the main content
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4, // Wait for navbar to start
      }
    }
  };

  // Slide up animation for text elements
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // Special stagger for the tags container
  const tagsContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Tag item animation
  const tagItemVariants: Variants = {
    hidden: { opacity: 0, x: -10, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  // Scale in for buttons
  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" }
    }
  };

  // Fade in for social icons
  const fadeInLast: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8 }
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -z-10 opacity-30" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] -z-10 opacity-20" />

      <div className="container mx-auto px-6 text-center max-w-4xl z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-bold tracking-wider mb-6 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              WELCOME TO MY PORTFOLIO
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            Koushik <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Podeti</span>
          </motion.h1>

          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 font-light mb-8">
            CSE (Cybersecurity) Student | Developer | AI Explorer
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            I’m a Computer Science (Cybersecurity) student passionate about building secure and modern software solutions. 
            I’m deeply interested in <span className="text-brand-blue font-medium">Cybersecurity</span>, <span className="text-brand-blue font-medium">Networking</span>, and <span className="text-brand-blue font-medium">AI</span>, and I believe that learning small new things 
            consistently creates long-term mastery.
          </motion.p>

          <motion.div 
            variants={tagsContainerVariants} 
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {HERO_TAGS.map((tag) => (
              <motion.span
                key={tag}
                variants={tagItemVariants}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-brand-blue/50 hover:text-brand-blue transition-colors cursor-default hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={scaleIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={fadeInLast} className="flex items-center justify-center gap-6">
            <SocialLink href="https://github.com/podetivenkatakoushik" icon={<Github size={24} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/koushik-podeti-2516a6375" icon={<Linkedin size={24} />} label="LinkedIn" />
            <SocialLink href="mailto:koushikpodeti@gmail.com?subject=Portfolio%20Contact" icon={<Mail size={24} />} label="Email" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target={href.startsWith('mailto') ? undefined : "_blank"}
    rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
    className="text-slate-400 hover:text-brand-cyan hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;
