import React from 'react';
import { motion } from 'framer-motion';
import { QUALITIES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
            <div className="text-lg text-slate-300 leading-relaxed space-y-6">
              <p>
                Hi, I’m <span className="text-white font-semibold">Koushik Podeti</span>, a Computer Science (Cybersecurity) student passionate about building secure and modern software solutions. I’m deeply interested in <span className="text-brand-blue">Cybersecurity</span>, <span className="text-brand-blue">Networking</span>, and <span className="text-brand-blue">AI</span>, and I enjoy exploring how technology can be used to solve real-world security challenges.
              </p>
              <p>
                I believe that learning small new things consistently is the best way to grow in the tech field. Along with cybersecurity, I also explore different areas of CSE such as software development, databases, and problem solving, because I want to become a well-rounded engineer.
              </p>
              <p>
                Currently, I’m improving my skills in <span className="text-white">Python</span>, <span className="text-white">Linux</span>, <span className="text-white">SQL</span>, <span className="text-white">Data Structures & Algorithms</span>, and modern development tools like <span className="text-white">Vibe Coding</span>. My goal is to become a highly skilled professional who can build powerful applications with security in mind.
              </p>
            </div>
          </motion.div>

          {/* Qualities Grid */}
          <motion.div 
             id="achievements"
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-1/2 w-full scroll-mt-24"
          >
             <h3 className="text-xl font-semibold mb-6 text-slate-400">Personal Qualities & Milestones</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {QUALITIES.map((quality, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-brand-blue/40 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                  >
                    <quality.icon className="text-brand-blue" size={20} />
                    <span className="font-medium text-slate-200">{quality.text}</span>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;