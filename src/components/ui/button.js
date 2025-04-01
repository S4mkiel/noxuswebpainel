import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Button = ({ children, onClick, type = 'button', className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={cn(
        'w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-transform shadow-lg',
        className,
      )}
    >
      {children}
    </motion.button>
  );
};
