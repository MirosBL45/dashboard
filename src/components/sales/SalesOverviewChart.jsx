import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  SALES_DATA_YEAR,
  SALES_DATA_QUARTER,
  SALES_DATA_HALF,
  SALES_DATA_MONTH,
} from '../../data/ChartsData';

export default function SalesOverviewChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Year');

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 
          focus:ring-blue-500
          "
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Year</option>
          <option>This Half</option>
          <option>This Quarter</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart
            data={
              selectedTimeRange === 'This Quarter'
                ? SALES_DATA_QUARTER
                : selectedTimeRange === 'This Half'
                ? SALES_DATA_HALF
                : selectedTimeRange === 'This Year'
                ? SALES_DATA_YEAR
                : SALES_DATA_MONTH
            }
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            {selectedTimeRange === 'This Month' ? (
              <XAxis dataKey="date" stroke="#9CA3AF" />
            ) : (
              <XAxis dataKey="month" stroke="#9CA3AF" />
            )}
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
