import { Header, StatCard } from '../components/common/w-allCommon';
import { motion } from 'framer-motion';
import { STATCARD_ITEMS_OVP } from '../data/StatCardItems';
import SalesOverviewChart from '../components/overview/SalesOverviewChart';

export default function OverviewPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {STATCARD_ITEMS_OVP.map((item) => (
            <StatCard
              key={item.name}
              name={item.name}
              icon={item.icon}
              value={item.value}
              color={item.color}
            />
          ))}
        </motion.div>
        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
        </div>
      </main>
    </div>
  );
}
