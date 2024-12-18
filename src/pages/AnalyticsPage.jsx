import { Header } from '../components/common/w-allCommon';

import {
  OverviewCards,
  RevenueChart,
  ChannelPerformanceChart,
  ProductPerformance,
  UserRetention,
  CustomerSegmentation,
  AIPoweredInsights,
} from '../components/analytics/w-allAnalytics';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={'Analytics Dashboard'} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
        <RevenueChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformanceChart />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>
        <AIPoweredInsights />
      </main>
    </div>
  );
}
