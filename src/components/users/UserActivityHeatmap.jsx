import ChartWrapper from '../common/ChartWrapper';
import { USER_ACTIVITY_DATA } from '../../data/ChartsData';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function UserActivityHeatmap() {
  const colors = [
    '#6366F1',
    '#8B5CF6',
    '#EC4899',
    '#10B981',
    '#F59E0B',
    '#3B82F6',
  ];

  const allKeys = [...new Set(USER_ACTIVITY_DATA.flatMap(Object.keys))];

  const filteredKeys = allKeys.filter((key) => key !== 'name');

  const segments = filteredKeys.map((segment, index) => ({
    range: segment,
    color: colors[index % colors.length],
  }));

  return (
    <div className="col-span-2 lg:col-span-1">
      <ChartWrapper title={'User Activity Heatmap'} transitionDelay={0.4}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={USER_ACTIVITY_DATA}>
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
            {segments.map(({ range, color }, index) => (
              <Bar key={index} dataKey={range} stackId={'a'} fill={color} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </div>
  );
}
