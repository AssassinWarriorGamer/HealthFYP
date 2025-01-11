'use client';

import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link'; // Import Link from Next.js

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="flex items-center mb-6">
        <Link href="/user"> {/* Using Link with href in Next.js */}
          <a className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <FaArrowLeft className="text-lg" />
            <span className="font-medium">Back to Main Page</span>
          </a>
        </Link>
      </div>

      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Your Profile</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* User Info Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500 flex items-center justify-center h-full">Upload</span>
              )}
            </div>
            <label className="mt-4">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <span className="cursor-pointer text-blue-500 hover:underline">Upload/Change</span>
            </label>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <label className="block text-gray-600">Full Name</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Date of Birth</label>
              <input type="date" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email Address</label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Phone Number</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Activity Level</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Sedentary</option>
                <option>Active</option>
                <option>Very Active</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600">Fitness Goals</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>Maintenance</option>
              </select>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save Changes
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
