
import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const Card = ({ children, className, ...props }) => {
  return (
    <motion.div
      className={clsx(
        'bg-white rounded-lg shadow-md overflow-hidden',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

