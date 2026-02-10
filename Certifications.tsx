import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Certifications</h2>
          <p className="text-slate-400">Continuous learning and validation</p>
        </motion.div>

        <div className="space-y-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-blue/40 hover:bg-slate-800/40 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-brand-blue/50 group-hover:scale-110 transition-all">
                 <Award className="text-brand-blue" size={32} />
              </div>
              
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  Issued by <span className="text-slate-300 font-medium">{cert.issuer}</span> • {cert.date}
                </p>
              </div>

              <div className="hidden sm:block">
                 <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <CheckCircle size={20} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;