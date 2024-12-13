import { Header } from '../components/common/w-allCommon';

import { OverviewCards } from '../components/analytics/w-allAnalytics';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={'Analytics Dashboard'} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
      </main>
    </div>
  );
}
