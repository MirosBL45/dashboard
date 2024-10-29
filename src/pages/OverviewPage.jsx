import { STATCARD_ITEMS_OVP } from '../data/StatCardItems';
import {
  StatCard,
  PageWrapper,
  BottomPageWrapper,
} from '../components/common/w-allCommon';
import {
  SalesOverviewChart,
  CategoryDistributionChart,
  SalesChannelChart,
} from '../components/overview/w-allOverview';

export default function OverviewPage() {
  return (
    <PageWrapper
      title={'Overview'}
      motionContent={
        <>
          {/* STATS */}
          {STATCARD_ITEMS_OVP.map((item) => (
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
          {/* CHARTS */}
          <BottomPageWrapper>
            <SalesOverviewChart />
            <CategoryDistributionChart />
            <SalesChannelChart />
          </BottomPageWrapper>
        </>
      }
    />
  );
}
