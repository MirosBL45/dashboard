import { Route, Routes } from 'react-router-dom';

import {
  AnalyticsPage,
  OrdersPage,
  OverviewPage,
  ProductsPage,
  SalesPage,
  SettingsPage,
  UsersPage,
} from './pages/w-allPages';

import { Sidebar } from './components/common/w-allCommon';

function App() {
  return (
    <div className="flex h-screen bg-fuchsia-950 text-gray-100 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950 via-fuchsia-850 to-fuchsia-950 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
