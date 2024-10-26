import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import ChartWrapper from '../common/ChartWrapper';
import { SALES_CHANNEL_DATA } from '../../data/ChartsData';

export default function SalesChannelChart() {
  return (
    <ChartWrapper
      title="Category Distribution"
      transitionDelay={0.4}
      additionalClass="lg:col-span-2"
    >
      <ResponsiveContainer>
        <BarChart data={SALES_CHANNEL_DATA}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.8)',
              borderColor: '#4B5563',
            }}
            itemStyle={{ color: '#E5E7EB' }}
          />
          <Bar dataKey={'value'} fill="#8884d8">
            {SALES_CHANNEL_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
