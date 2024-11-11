import { SALES_BY_CATEGORY } from '../../data/ChartsData';
import CategoryChart from '../common/CategoryChart';

export default function SalesByCategoryChart() {
  return (
    <CategoryChart
      title={'Sales by Category'}
      transitionDelay={0.3}
      CATEGORY_DATA={SALES_BY_CATEGORY}
    />
  );
}
