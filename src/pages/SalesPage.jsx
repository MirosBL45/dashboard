import { SALES_STATS_SP } from '../data/StatCardItems';
import {
  BottomPageWrapper,
  PageWrapper,
  StatCard,
} from '../components/common/w-allCommon';
import {
  SalesOverviewChart,
  SalesByCategoryChart,
  DailySalesTrend,
} from '../components/sales/w-allSales';

export default function SalesPage() {
  return (
    <PageWrapper
      title={'Sales Dashboard'}
      motionContent={
        <>
          {/* STATS */}
          {SALES_STATS_SP.map((item) => (
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
          <SalesOverviewChart />
          <BottomPageWrapper>
            <SalesByCategoryChart />
            <DailySalesTrend />
          </BottomPageWrapper>
        </>
      }
    />
  );
}
