import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  dark = false 
}) => {
  return (
    <section className={`py-20 ${dark ? 'bg-slate-900' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {subtitle && (
              <p className="text-gold font-heading tracking-widest uppercase text-sm mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={`text-4xl lg:text-5xl font-display font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
