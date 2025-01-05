import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Credit Score Simulator. Educational purposes only.</p>
          <p className="mt-1">
            This simulator provides approximate calculations and should not be considered financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};