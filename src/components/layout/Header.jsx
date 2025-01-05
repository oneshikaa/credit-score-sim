import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="bg-white shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.h1 
              className="text-2xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              Credit Score Simulator
            </motion.h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#simulator" className="text-gray-600 hover:text-gray-900">
              Simulator
            </a>
            <a href="#history" className="text-gray-600 hover:text-gray-900">
              History
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
