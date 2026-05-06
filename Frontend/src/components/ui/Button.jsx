import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30',
      outline: 'border-2 border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white bg-transparent',
      ghost: 'bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      default: 'px-5 py-2.5',
      lg: 'px-8 py-4 text-lg font-medium',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
