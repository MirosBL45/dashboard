import { CATEGORY_DATA_OVERVIEW } from '../../data/ChartsData';
import CategoryChart from '../common/CategoryChart';

export default function OverviewChart() {
  return (
    <CategoryChart
      CATEGORY_DATA={CATEGORY_DATA_OVERVIEW}
      title="Category Distribution"
      transitionDelay={0.3}
    />
  );
}
