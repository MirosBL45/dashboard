import ChartWrapper from '../common/ChartWrapper';
import { USER_RETAN_DATA } from '../../data/ChartsData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function UserRetention() {
  return (
    <ChartWrapper title={'User Retention'} transitionDelay={0.5}>
      <ResponsiveContainer>
        <LineChart data={USER_RETAN_DATA}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.8)',
              borderColor: '#4B5563',
            }}
            itemStyle={{ color: '#E5E7EB' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="retention"
            stroke="#25a514"
            dot={{ fill: '#0a0d9a', strokeWidth: 2, r: 5 }}
            activeDot={{ r: 8, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
