import React, { useState } from 'react';
import { User, Edit, Trash2, Key, Eye } from 'lucide-react';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<UserData[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', lastLogin: '2023-03-15 10:30 AM' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', lastLogin: '2023-03-14 02:45 PM' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Cashier', lastLogin: '2023-03-13 09:15 AM' },
  ]);

  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const handleEditUser = (user: UserData) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleViewPermissions = (user: UserData) => {
    // Implement view permissions logic
    console.log(`View permissions for ${user.name}`);
  };

  const handleViewDetails = (user: UserData) => {
    // Implement view details logic
    console.log(`View details for ${user.name}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">User Management</h1>
      <div className="mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add New User
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleEditUser(user)} className="text-blue-600 hover:text-blue-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900 mr-2">
                    <Trash2 size={18} />
                  </button>
                  <button onClick={() => handleViewPermissions(user)} className="text-green-600 hover:text-green-900 mr-2">
                    <Key size={18} />
                  </button>
                  <button onClick={() => handleViewDetails(user)} className="text-purple-600 hover:text-purple-900">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Edit User: {selectedUser.name}</h2>
          {/* Add form fields for editing user details */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" defaultValue={selectedUser.name} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" defaultValue={selectedUser.email} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select id="role" name="role" defaultValue={selectedUser.role} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Cashier">Cashier</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;