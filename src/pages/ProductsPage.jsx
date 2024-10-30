import { STATCARD_ITEMS_PDP } from '../data/StatCardItems';
import {
  StatCard,
  PageWrapper,
  BottomPageWrapper,
} from '../components/common/w-allCommon';
import {
  ProductsTable,
  SalesTrendChart,
  ProductsChart,
} from '../components/products/w-allProducts';

export default function ProductsPage() {
  return (
    <PageWrapper
      title={'Products'}
      motionContent={
        <>
          {/* STATS */}
          {STATCARD_ITEMS_PDP.map((item) => (
            <StatCard
              key={item.name}
              name={item.name}
              icon={item.icon}
              value={item.value}
              color={item.color}
            />
          ))}
        </>
      }
      mainContent={
        <>
          <ProductsTable />
          <BottomPageWrapper>
            <SalesTrendChart />
            <ProductsChart />
          </BottomPageWrapper>
        </>
      }
    />
  );
}
