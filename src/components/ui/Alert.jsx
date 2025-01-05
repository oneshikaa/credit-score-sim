import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const Alert = ({ 
  children, 
  variant = 'info',
  isOpen,
  onClose 
}) => {
  const variants = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={clsx(
            'rounded-md border p-4',
            variants[variant]
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">{children}</div>
            {onClose && (
              <button
                onClick={onClose}
                className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};