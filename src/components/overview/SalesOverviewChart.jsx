import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import ChartWrapper from '../common/ChartWrapper';
import { SALES_DATA } from '../../data/ChartsData';

export default function SalesOverviewChart() {
  return (
    <ChartWrapper title="Sales Overview" transitionDelay={0.2}>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <LineChart data={SALES_DATA}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey={'name'} stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.8)',
              borderColor: '#4B5563',
            }}
            itemStyle={{ color: '#E5E7EB' }}
          />
          <Line
            type="monotone"
            dataKey={'sales'}
            stroke="#25a514"
            strokeWidth={3}
            dot={{ fill: '#0a0d9a', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
