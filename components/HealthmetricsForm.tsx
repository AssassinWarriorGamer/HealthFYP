'use client'

import React, { useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import { Line, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register all necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const HealthmetricsForm = () => {
  const [weight, setWeight] = useState<number | string>('');
  const [height, setHeight] = useState<number | string>('');
  const [age, setAge] = useState<number | string>('');
  const [activityLevel, setActivityLevel] = useState('Sedentary');
  const [fitnessGoal, setFitnessGoal] = useState('Lose weight');
  const [syncData, setSyncData] = useState(false); // Wearable device sync status
  const [errorMessage, setErrorMessage] = useState('');

  const weightTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Weight',
        data: [70, 72, 73, 70, 69, 68, 67],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const sleepData = {
    labels: ['Light Sleep', 'Deep Sleep', 'REM'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        hoverOffset: 4,
      },
    ],
  };

  const handleSyncData = () => {
    if (navigator.bluetooth) {
      setSyncData(true);
      setTimeout(() => {
        setSyncData(false);
      }, 2000);
    } else {
      setErrorMessage('Error: No wearable device found.');
    }
  };

  const handleSaveMetrics = () => {
    if (isNaN(Number(weight)) || Number(weight) <= 0) {
      setErrorMessage('Weight must be a positive number');
      return;
    }
    if (isNaN(Number(height)) || Number(height) <= 0) {
      setErrorMessage('Height must be a positive number');
      return;
    }
    if (isNaN(Number(age)) || Number(age) <= 0) {
      setErrorMessage('Age must be a positive number');
      return;
    }

    setErrorMessage('');
    console.log({ weight, height, age, activityLevel, fitnessGoal });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <motion.div className="text-center mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-gray-800">Health Metrics</h1>
      </motion.div>

      {/* Form Section */}
      <motion.div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Enter Your Health Metrics</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-gray-600">Weight (kg/lbs)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-gray-600">Height (cm/ft)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-gray-600">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-gray-600">Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option>Sedentary</option>
              <option>Lightly Active</option>
              <option>Moderately Active</option>
              <option>Very Active</option>
              <option>Extremely Active</option>
            </select>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <label className="block text-gray-600">Fitness Goals</label>
            <select
              value={fitnessGoal}
              onChange={(e) => setFitnessGoal(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option>Lose weight</option>
              <option>Build muscle</option>
              <option>Maintain fitness</option>
            </select>
          </motion.div>
        </div>
        <motion.button
          onClick={handleSaveMetrics}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mt-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Save Metrics
        </motion.button>
      </motion.div>

      {/* Wearable Device Section */}
      <motion.div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Wearable Device</h2>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSyncData}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
          >
            <FaSyncAlt className="text-lg" />
            {syncData ? 'Syncing...' : 'Sync with Device'}
          </button>
          {syncData && <span className="text-gray-500">Syncing data from wearable...</span>}
        </div>
      </motion.div>

      {/* Metrics Summary Section */}
      <motion.div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Metrics Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weight Trend Card */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Weight Trend</h3>
            <Line data={weightTrendData} />
          </motion.div>

          {/* Sleep Pattern Card */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sleep Pattern</h3>
            <Pie data={sleepData} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HealthmetricsForm;
