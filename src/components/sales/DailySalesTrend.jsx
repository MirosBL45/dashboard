import ChartWrapper from '../common/ChartWrapper';
import { DAILY_SALES_DATA } from '../../data/ChartsData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function DailySalesTrend() {
  return (
    <ChartWrapper title="Daily Sales Trend" transitionDelay={0.4}>
      <ResponsiveContainer>
        <BarChart data={DAILY_SALES_DATA}>
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
          <Bar dataKey="sales" fill="#b98910" />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
