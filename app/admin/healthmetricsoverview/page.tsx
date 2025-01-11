'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const HealthMetricsOverview: React.FC = () => {
  const [dataExport, setDataExport] = useState(false);

  const healthData = {
    averageWeight: 72, // Average weight (kg)
    averageActivityLevel: 3.2, // Scale from 1 to 5 (e.g., 1 = low, 5 = high)
    fitnessGoals: {
      'Lose Weight': 40,
      'Build Muscle': 30,
      'Maintain Health': 20,
      'Increase Endurance': 10,
    },
    weightTrends: [70, 71, 72, 73, 72, 71, 70],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {
        label: 'Average Weight (kg)',
        data: healthData.weightTrends,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: Object.keys(healthData.fitnessGoals),
    datasets: [
      {
        data: Object.values(healthData.fitnessGoals),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  };

  const handleExportData = () => {
    // Placeholder for data export functionality
    setDataExport(true);
    setTimeout(() => setDataExport(false), 3000); // Simulate export and reset state after 3 seconds
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
            <h1 className="text-2xl font-bold">Health Metrics Overview</h1>
            <p>Monitor your health data and trends</p>
          </div>
          <button
            onClick={handleExportData}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {dataExport ? 'Exporting...' : 'Export Data'}
          </button>
        </header>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">Average Weight</h3>
            <p className="text-xl font-bold">{healthData.averageWeight} kg</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">Average Activity Level</h3>
            <p className="text-xl font-bold">{healthData.averageActivityLevel} / 5</p>
          </div>
        </div>

        {/* Trends and Insights */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-bold mb-4">Weight Trends</h2>
          <Line data={lineData} />
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Fitness Goals Distribution</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default HealthMetricsOverview;
