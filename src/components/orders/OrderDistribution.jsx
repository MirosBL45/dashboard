import CategoryChart from '../common/CategoryChart';
import { ORDER_STATUS_DATA } from '../../data/ChartsData';

export default function OrderDistribution() {
  return (
    <CategoryChart
      CATEGORY_DATA={ORDER_STATUS_DATA}
      title="Order Status Distribution"
      transitionDelay={0.3}
    />
  );
}
