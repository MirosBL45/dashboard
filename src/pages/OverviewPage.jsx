// import { motion } from 'framer-motion';
import { STATCARD_ITEMS_OVP } from '../data/StatCardItems';
import { StatCard, PageWrapper } from '../components/common/w-allCommon';
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SalesOverviewChart />
            <CategoryDistributionChart />
            <SalesChannelChart />
          </div>
        </>
      }
    />
  );
}
