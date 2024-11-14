import TableSearchHeader from '../common/TableSearchHeader';
import { motion } from 'framer-motion';

export default function OrdersTable() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <TableSearchHeader title="Order List" placeholder={'Search orders...'} />
    </motion.div>
  );
}
