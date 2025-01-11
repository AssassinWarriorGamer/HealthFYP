'use client';

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define types for the chart data
interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension?: number; // For smooth lines
  }[];
}

const LineChart: React.FC = () => {
  const [chartData, setChartData] = useState<LineChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState<ChartOptions<'line'>>({});

  useEffect(() => {
    setChartData({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Steps Over Time',
          data: [12000, 15000, 13000, 17000, 14000, 16000, 18000], // Example step data
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4, // Smooth line
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Steps Over Time',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Days of the Week',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Steps',
          },
          beginAtZero: true,
        },
      },
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;