'use client'

import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Define types for the chart data
interface PieChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const PieChart: React.FC = () => {
  const [chartData, setChartData] = useState<PieChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState<ChartOptions<'pie'>>({});

  useEffect(() => {
    setChartData({
      labels: ['Walking', 'Running', 'Other Activities'],
      datasets: [
        {
          data: [60, 30, 10], // Example proportions
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each segment
          borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderWidth: 1,
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              const value = tooltipItem.raw as number; // TypeScript casting
              return `${value}%`;
            },
          },
        },
        title: {
          display: true,
          text: 'Activity Distribution',
        },
      },
    });
  }, []);

  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
