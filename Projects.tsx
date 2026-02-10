import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from './constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
       {/* Background accent - keeping it but allowing transparency */}
      <div className="absolute inset-0 bg-black/40 -z-20" /> 

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-brand-cyan rounded-full"></div>
          </div>
          <a href="https://github.com/podetivenkatakoushik" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-2 hover:underline">
            View Github <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:border-brand-cyan/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
