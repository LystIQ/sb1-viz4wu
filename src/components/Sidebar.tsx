import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Users, Package, BarChart2, DollarSign, Settings, FileText, RefreshCw } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-green-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h1 className="text-2xl font-semibold text-center">Cannabis POS</h1>
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
          <Leaf className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
          <Users className="inline-block mr-2" size={20} />
          User Management
        </Link>
        <Link to="/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
          <Package className="inline-block mr-2" size={20} />
          Product Management
        </Link>
        <Link to="/inventory" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
          <BarChart2 className="inline-block mr-2" size={20} />
          Inventory
        </Link>
        <Link to="/sales" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
          <DollarSign className="inline-block mr-2" size={20} />
          Sales
        </Link>
        <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
          <Settings className="inline-block mr-2" size={20} />
          Settings
        </Link>
        <Link to="/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
          <FileText className="inline-block mr-2" size={20} />
          Reports
        </Link>
        <Link to="/metrc-sync" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
          <RefreshCw className="inline-block mr-2" size={20} />
          Metrc Sync
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;