import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-heading font-semibold tracking-wide transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gold text-slate-900 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/30',
    secondary: 'bg-slate-800 text-gold hover:bg-slate-700 border border-gold/30',
    outline: 'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-slate-900'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
