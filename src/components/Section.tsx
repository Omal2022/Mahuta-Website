import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  id?: string; // 👈 Add this
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  subtitle, 
  dark = false,
  id 
}) => {
  return (
    <section 
      id={id} // 👈 Add this
      className={`relative py-20 ${dark ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <span className={`text-sm tracking-widest uppercase mb-4 block ${
                dark ? 'text-gold' : 'text-gold'
              }`}>
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className={`text-4xl md:text-5xl font-display font-bold ${
                dark ? 'text-white' : 'text-slate-900'
              }`}>
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;