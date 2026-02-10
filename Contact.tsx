import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-16 border border-slate-800 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-shadow duration-500"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Connect</h2>
          
          <p className="text-slate-400 mb-10 leading-relaxed max-w-2xl text-lg">
            I am a beginner in cybersecurity but I will always give my best. I am eager to join open source projects and contribute to the community.
          </p>

          <div className="flex flex-col items-center gap-4 text-white mb-10">
            <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
              <Mail size={32} />
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-2">Email Me</p>
              <a href="mailto:koushikpodeti@gmail.com?subject=Portfolio%20Contact" className="text-xl md:text-3xl font-bold hover:text-brand-blue transition-colors break-all">
                koushikpodeti@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-slate-500 text-sm font-medium mb-6 uppercase tracking-wider">Follow Me</p>
            <div className="flex gap-6 justify-center">
              <SocialBtn 
                href="https://github.com/podetivenkatakoushik" 
                icon={Github} 
                label="GitHub"
              />
              <SocialBtn 
                href="https://www.linkedin.com/in/koushik-podeti-2516a6375" 
                icon={Linkedin} 
                label="LinkedIn"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialBtn: React.FC<{ href: string; icon: any; label: string }> = ({ href, icon: Icon, label }) => (
  <a 
    href={href}
    target={href.startsWith('mailto') ? undefined : "_blank"}
    rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
    aria-label={label}
    className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer"
  >
    <Icon size={24} />
  </a>
);

export default Contact;