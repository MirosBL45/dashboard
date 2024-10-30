import { CATEGORY_DATA_PRODUCTS } from '../../data/ChartsData';
import CategoryChart from '../common/CategoryChart';

export default function ProductsChart() {
  return (
    <CategoryChart
      CATEGORY_DATA={CATEGORY_DATA_PRODUCTS}
      title="Category Products"
      transitionDelay={0.3}
    />
  );
}
