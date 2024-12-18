import { motion } from 'framer-motion';

const FadeLeft = ({ delay, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeft;
