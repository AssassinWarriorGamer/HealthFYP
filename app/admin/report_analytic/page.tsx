'use client';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportsAndAnalytics: React.FC = () => {
  // Sample report data
  const reports = [
    { title: 'Monthly User Activity', description: 'Report on user activities in the last month', date: '2024-12-01' },
    { title: 'Workout Plan Usage', description: 'Report on the usage of workout plans by users', date: '2024-12-01' },
    { title: 'User Growth Trends', description: 'Analysis of user growth over time', date: '2024-12-01' },
  ];

  // Sample data for charts
  const userGrowthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'User Growth',
        data: [100, 150, 200, 250, 300, 350, 400],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const workoutPlanUsageData = {
    labels: ['Plan A', 'Plan B', 'Plan C', 'Plan D'],
    datasets: [
      {
        label: 'Workout Plan Usage',
        data: [120, 200, 150, 180],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  // Handle report export
  const handleExport = () => {
    // You can implement actual export functionality here, such as generating a CSV file.
    alert('Exporting Report...');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Reports and Analytics</h1>
            <p>Explore detailed reports and analytics</p>
          </div>
          <button
            onClick={handleExport}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Export Report
          </button>
        </header>

        {/* Report List */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-bold mb-4">Available Reports</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded shadow">
                <h3 className="text-lg font-semibold">{report.title}</h3>
                <p>{report.description}</p>
                <p className="text-sm text-gray-500">Date: {report.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Key Metrics</h2>

          {/* User Growth Chart */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">User Growth Over Time</h3>
            <div className="relative">
              <Bar 
                data={userGrowthData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }} 
                height={400} // Fixed height for the chart
              />
            </div>
          </div>

          {/* Workout Plan Usage Chart */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Workout Plan Usage</h3>
            <div className="relative">
              <Bar 
                data={workoutPlanUsageData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }} 
                height={400} // Fixed height for the chart
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAndAnalytics;

