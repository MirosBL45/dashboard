import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import ChartWrapper from './ChartWrapper';

export default function CategoryChart({
  CATEGORY_DATA,
  title,
  transitionDelay,
}) {
  return (
    <ChartWrapper title={title} transitionDelay={transitionDelay}>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <PieChart>
          <Pie
            data={CATEGORY_DATA}
            cx={'50%'}
            cy={'50%'}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {CATEGORY_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.8)',
              borderColor: '#4B5563',
            }}
            itemStyle={{ color: '#E5E7EB' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
