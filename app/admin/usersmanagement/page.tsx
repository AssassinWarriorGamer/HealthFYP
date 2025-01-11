'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  registrationDate: string;
}

const usersData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', registrationDate: '2022-05-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive', registrationDate: '2023-07-12' },
  // Add more user data as needed
];

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Active' | 'Inactive' | 'All'>('All');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({ start: '', end: '' });

  // Filter users based on search term and filters
  const filteredUsers = usersData.filter((user) => {
    const matchesSearchTerm =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || user.status === statusFilter;

    const matchesDateRange =
      (!dateRange.start || new Date(user.registrationDate) >= new Date(dateRange.start)) &&
      (!dateRange.end || new Date(user.registrationDate) <= new Date(dateRange.end));

    return matchesSearchTerm && matchesStatus && matchesDateRange;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">User Management</h1>
            <p>Manage user accounts and roles</p>
          </div>
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-0">
            <input
              type="text"
              placeholder="Search by name/email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border rounded mb-2 sm:mb-0 w-full sm:w-auto"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'Active' | 'Inactive' | 'All')}
              className="p-2 border rounded mb-2 sm:mb-0 w-full sm:w-auto"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="p-2 border rounded mb-2 sm:mb-0 w-full sm:w-auto"
            />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="p-2 border rounded mb-2 sm:mb-0 w-full sm:w-auto"
            />
          </div>
        </header>

        {/* User Table */}
        <div className="bg-white p-6 rounded shadow">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">User ID</th>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">Email</th>
                  <th className="px-4 py-2 border-b">Role</th>
                  <th className="px-4 py-2 border-b">Status</th>
                  <th className="px-4 py-2 border-b">Registration Date</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2 border-b">{user.id}</td>
                    <td className="px-4 py-2 border-b">{user.name}</td>
                    <td className="px-4 py-2 border-b">{user.email}</td>
                    <td className="px-4 py-2 border-b">{user.role}</td>
                    <td className="px-4 py-2 border-b">{user.status}</td>
                    <td className="px-4 py-2 border-b">{user.registrationDate}</td>
                    <td className="px-4 py-2 border-b">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded">Deactivate</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
