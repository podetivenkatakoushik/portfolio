import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-900 bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Built with <Heart size={14} className="text-red-500 fill-red-500" /> by <span className="text-white font-medium">Koushik Podeti</span>
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/podetivenkatakoushik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-brand-blue transition-colors hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/koushik-podeti-2516a6375" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-brand-blue transition-colors hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;