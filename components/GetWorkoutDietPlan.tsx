'use client';

import React, { useState } from 'react';

const GetWorkoutDietPlanPage = () => {
  // State for selecting fitness goal, dietary preferences, and user details
  const [fitnessGoal, setFitnessGoal] = useState('Weight Loss');
  const [dietaryPreference, setDietaryPreference] = useState('Vegetarian');
  const [age, setAge] = useState(30); // Example for age
  const [weight, setWeight] = useState(70); // Example for weight (in kg)
  const [workoutPlan, setWorkoutPlan] = useState('');
  const [dietPlan, setDietPlan] = useState('');
  const [healthRisk, setHealthRisk] = useState('');

  // Function to simulate an AI-based plan generation
  const generatePlan = () => {
    // AI logic can go here
    if (fitnessGoal === 'Weight Loss') {
      setWorkoutPlan('Weekly Workout Plan: 3 Cardio sessions, 2 Strength Training');
      setDietPlan('Diet Plan: 1500 kcal/day, high-protein, low-carb');
    } else if (fitnessGoal === 'Strength Training') {
      setWorkoutPlan('Weekly Workout Plan: 4 Strength Training sessions, 2 Cardio sessions');
      setDietPlan('Diet Plan: 2500 kcal/day, high-protein, moderate-carb');
    } else {
      setWorkoutPlan('Weekly Workout Plan: 2 Yoga sessions, 2 Cardio sessions');
      setDietPlan('Diet Plan: 1800 kcal/day, balanced nutrients');
    }

    // Example of adding complexity based on age and weight (simulated AI behavior)
    if (age > 40) {
      setWorkoutPlan((prev) => `${prev} with more low-impact exercises.`);
      setDietPlan((prev) => `${prev} with higher protein for muscle preservation.`);
    }

    if (weight > 80) {
      setWorkoutPlan((prev) => `${prev} with additional cardio.`);
    }

    // Simulate AI-based health risk prediction
    if (weight > 100) {
      setHealthRisk('Potential Health Risk: High risk of heart disease due to obesity. Consider consulting with a healthcare provider.');
    } else if (age > 50 && weight > 90) {
      setHealthRisk('Potential Health Risk: Increased risk of joint issues and diabetes. Incorporate low-impact exercises.');
    } else if (age > 60) {
      setHealthRisk('Potential Health Risk: Risk of osteoporosis and muscle loss. Focus on weight-bearing exercises and calcium intake.');
    } else {
      setHealthRisk('Potential Health Risk: No immediate concerns based on current data.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Your Personalized Plans</h1>
        <p className="text-gray-600">Select your preferences to get personalized workout, diet plans, and health risk predictions.</p>
      </div>

      {/* Input Section: Fitness Goal and Dietary Preferences */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Select Your Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Fitness Goal</label>
            <select
              value={fitnessGoal}
              onChange={(e) => setFitnessGoal(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option>Weight Loss</option>
              <option>Strength Training</option>
              <option>Flexibility</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600">Dietary Preference</label>
            <select
              value={dietaryPreference}
              onChange={(e) => setDietaryPreference(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option>Vegetarian</option>
              <option>Vegan</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-600">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Generate Plan Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={generatePlan}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Generate Plan
          </button>
        </div>
      </div>

      {/* Generated Plan Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Your Personalized Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Workout Plan */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Workout Plan</h3>
            <p>{workoutPlan || 'Your workout plan will appear here once generated.'}</p>
          </div>

          {/* Diet Plan */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Diet Plan</h3>
            <p>{dietPlan || 'Your diet plan will appear here once generated.'}</p>
          </div>
        </div>
      </div>

      {/* Health Risk Prediction Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Health Risk Prediction</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Potential Health Risks</h3>
          <p>{healthRisk || 'Health risk prediction will appear here once generated.'}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Save Plan
        </button>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
          Update Plan
        </button>
      </div>
    </div>
  );
};

export default GetWorkoutDietPlanPage;
