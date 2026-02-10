import React from 'react';
import { motion } from 'framer-motion';
import { FEATURE_CARDS } from './constants';
import { ArrowUpRight } from 'lucide-react';

const FeatureCards: React.FC = () => {
  
  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Prevent default anchor behavior for smooth scrolling
    e.preventDefault();
    
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Match Navbar offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURE_CARDS.map((item) => (
          <a
            key={item.id}
            href={`#${item.targetId}`}
            onClick={(e) => handleCardClick(e, item.targetId)}
            className="group relative block cursor-pointer h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-full"
            >
              {/* Glowing Gradient Border (Behind) - creating the neon edge */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-blue/40 via-brand-cyan/40 to-brand-blue/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
              
              {/* Main Card Container */}
              <div className="relative h-full bg-slate-950 rounded-2xl p-8 border border-slate-800 group-hover:border-transparent transition-colors duration-300 overflow-hidden flex flex-col">
                
                {/* Soft Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Glass Reflection Top */}
                <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Brighter Corners (simulated with radial gradients) */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-brand-blue/10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-cyan/10 blur-2xl rounded-full translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon & Arrow */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-900/50 border border-slate-700/50 backdrop-blur-md rounded-xl text-slate-400 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/10 transition-all duration-300 shadow-lg">
                    <item.icon size={28} />
                  </div>
                  <ArrowUpRight className="text-slate-600 group-hover:text-brand-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="relative z-10 text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300">
                  {item.title}
                </h3>
                <p className="relative z-10 text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
