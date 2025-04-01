import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-gray-800 text-white rounded-lg shadow-xl ${className}`}>{children}</div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="px-4 py-2 text-center text-xl font-bold">{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="px-4 py-2">{children}</div>;
};
