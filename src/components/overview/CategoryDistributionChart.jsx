import { CATEGORY_DATA } from '../../data/ChartsData';
import CategoryChart from '../common/CategoryChart';

export default function CategoryDistributionChart() {
  return (
    <CategoryChart
      CATEGORY_DATA={CATEGORY_DATA}
      title="Category Distribution"
      transitionDelay={0.3}
    />
  );
}
