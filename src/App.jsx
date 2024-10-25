import { Route, Routes } from 'react-router-dom';
import { OverviewPage, ProductsPage } from './pages/w-allPages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
