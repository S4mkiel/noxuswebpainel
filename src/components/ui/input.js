import React from 'react';

export const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 border border-gray-700 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};
