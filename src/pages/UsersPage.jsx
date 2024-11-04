import { USER_STATS_UP } from '../data/StatCardItems';
import {
  PageWrapper,
  StatCard,
  BottomPageWrapper,
} from '../components/common/w-allCommon';

export default function UsersPage() {
  return (
    <PageWrapper
      title={'Users'}
      motionContent={
        <>
          {/* STATS */}
          {USER_STATS_UP.map((item) => (
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
