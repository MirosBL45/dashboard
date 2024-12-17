import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
} from 'recharts';
import { CUSTOMER_SEGMENT_DATA } from '../../data/ChartsData';

export default function CustomerSegmentation() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Customer Segmentation
      </h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={CUSTOMER_SEGMENT_DATA}
          >
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9CA3AF" />
            <Radar
              name="Display"
              dataKey="A"
              stroke="#6438cc"
              fill="#6438cc"
              fillOpacity={0.6}
            />
            <Radar
              name="Light"
              dataKey="B"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563',
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}