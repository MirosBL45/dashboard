import { motion } from 'framer-motion';

export default function ChartWrapper({
  children,
  title,
  transitionDelay,
  additionalClass,
}) {
  return (
    <motion.div
      className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 ${
        additionalClass || ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: transitionDelay }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">{title}</h2>
      <div className="h-80">{children}</div>
    </motion.div>
  );
}
