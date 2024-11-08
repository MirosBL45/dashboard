import { SALES_STATS_SP } from '../data/StatCardItems';
import {
  PageWrapper,
  StatCard,
  // BottomPageWrapper,
} from '../components/common/w-allCommon';

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
    />
  );
}
