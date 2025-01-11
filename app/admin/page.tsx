'use client';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard: React.FC = () => {
  const summaryCards = [
    { label: 'Total Users', value: '12,340', icon: '👥' },
    { label: 'Active Users Today', value: '1,234', icon: '📊' },
    { label: 'New Registrations', value: '45', icon: '✨' },
  ];

  const barData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'New Users',
        data: [12, 19, 10, 15, 20, 25, 18],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 p-6 overflow-auto"> {/* Added overflow-auto to handle content overflow */} 
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Admin</h1>
            <p>{new Date().toLocaleString()}</p>
          </div>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {summaryCards.map((card) => (
            <div key={card.label} className="p-4 bg-white rounded shadow">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{card.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{card.label}</h3>
                  <p className="text-xl font-bold">{card.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Charts */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-4">User Engagement Trends</h2>
          <div className="relative">
            {/* Ensure the chart is responsive */}
            <Bar 
              data={barData} 
              options={{
                responsive: true, // Ensure the chart is responsive
                maintainAspectRatio: false, // Allow resizing
              }} 
              height={400} // Set a height for the chart
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
