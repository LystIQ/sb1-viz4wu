import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import ProductManagement from './pages/ProductManagement';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import CashRegister from './pages/CashRegister';
import IDVerification from './pages/IDVerification';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
import MetrcSync from './pages/MetrcSync';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/cash-register" element={<CashRegister />} />
            <Route path="/id-verification" element={<IDVerification />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/metrc-sync" element={<MetrcSync />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;