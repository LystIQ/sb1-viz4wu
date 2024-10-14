import React from 'react';
import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Sales" value="$15,234" icon={<DollarSign size={24} />} />
        <DashboardCard title="Products" value="156" icon={<Package size={24} />} />
        <DashboardCard title="Orders" value="28" icon={<ShoppingCart size={24} />} />
        <DashboardCard title="Customers" value="1,203" icon={<Users size={24} />} />
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="bg-green-100 p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;