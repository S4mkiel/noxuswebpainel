import { AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Alert = ({ message, type = 'success' }) => {
  const isSuccess = type === 'success';
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn(
        'mt-4 p-3 rounded-lg text-center flex items-center gap-2',
        isSuccess ? 'bg-green-800 text-green-400' : 'bg-red-800 text-red-400',
      )}
    >
      {isSuccess ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
      {message}
    </motion.div>
  );
};
