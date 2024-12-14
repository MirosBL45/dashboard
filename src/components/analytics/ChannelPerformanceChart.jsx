import CategoryChart from '../common/CategoryChart';
import { ANALYTICS_PERFORMANCE_DATA } from '../../data/ChartsData';

export default function ChannelPerformanceChart() {
  return (
    <CategoryChart
      CATEGORY_DATA={ANALYTICS_PERFORMANCE_DATA}
      title="Channel Performance"
      transitionDelay={0.3}
    />
  );
}
