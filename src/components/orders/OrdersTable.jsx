import TableSearchHeader from '../common/TableSearchHeader';
import { motion } from 'framer-motion';
import { HEADER_ORDERS, ORDER_DATA } from '../../data/ChartsData';

export default function OrdersTable() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <TableSearchHeader title="Order List" placeholder={'Search orders...'} />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {HEADER_ORDERS.map((head, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </motion.div>
  );
}
