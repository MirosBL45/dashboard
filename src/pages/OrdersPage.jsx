import { ORDER_STATS_OP } from '../data/StatCardItems';
import {
  BottomPageWrapper,
  PageWrapper,
  StatCard,
} from '../components/common/w-allCommon';
import { DailyOrders } from '../components/orders/w-allOrders';

export default function OrdersPage() {
  return (
    <PageWrapper
      title={'Orders'}
      motionContent={
        <>
          {/* STATS */}
          {ORDER_STATS_OP.map((item) => (
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
          <BottomPageWrapper>
            <DailyOrders />
            <div>content2</div>
          </BottomPageWrapper>
          <div>content3</div>
        </>
      }
    />
  );
}
