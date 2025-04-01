import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="px-4 py-2 text-center text-xl font-bold">{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="px-4 py-2">{children}</div>;
};
