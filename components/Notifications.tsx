'use client';

import React, { useState } from 'react';
import { FaBell, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const NotificationsPage = () => {
  // State for storing notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Steps updated from your wearable device.', type: 'Health Update', isRead: false },
    { id: 2, message: 'Upcoming workout: Cardio at 6 PM.', type: 'Reminder', isRead: false },
    { id: 3, message: 'You’ve walked 10,000 steps today!', type: 'Achievement', isRead: true },
    { id: 4, message: 'Diet Plan updated for the day.', type: 'Health Update', isRead: false },
    { id: 5, message: 'Reminder: Yoga class tomorrow at 8 AM.', type: 'Reminder', isRead: true },
  ]);

  // Function to toggle the read/unread status
  const toggleReadStatus = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, isRead: !notification.isRead } : notification
      )
    );
  };

  // Function to filter notifications by type
  const filterNotifications = (type: string) => {
    if (type === 'All') return notifications;
    return notifications.filter(notification => notification.type === type);
  };

  const [filter, setFilter] = useState('All');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
        <p className="text-gray-600">Stay updated with health data, reminders, and achievements!</p>
      </div>

      {/* Filter Section (Optional) */}
      <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg mb-6">
        <label className="block text-gray-600 mb-2">Filter Notifications</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Health Update">Health Updates</option>
          <option value="Reminder">Reminders</option>
          <option value="Achievement">Achievements</option>
        </select>
      </div>

      {/* Notifications List Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          {filterNotifications(filter).map(notification => (
            <div
              key={notification.id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-md mb-4 ${notification.isRead ? 'bg-gray-200' : 'bg-gray-100'}`}
            >
              {/* Notification Icon */}
              <div className="flex items-center space-x-4">
                {notification.type === 'Health Update' && <FaBell className="text-blue-500 text-xl" />}
                {notification.type === 'Reminder' && <FaExclamationCircle className="text-yellow-500 text-xl" />}
                {notification.type === 'Achievement' && <FaCheckCircle className="text-green-500 text-xl" />}
                <p className="text-gray-800">{notification.message}</p>
              </div>
              {/* Read/Unread Button */}
              <button
                onClick={() => toggleReadStatus(notification.id)}
                className={`text-sm font-semibold ${notification.isRead ? 'text-blue-500' : 'text-gray-500'}`}
              >
                {notification.isRead ? 'Mark as Unread' : 'Mark as Read'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
