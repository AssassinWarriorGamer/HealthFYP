'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';

const ContentManagement: React.FC = () => {
  const [isAddingContent, setIsAddingContent] = useState(false);

  // Sample data for content items
  const contentList = [
    { title: 'How to Stay Fit', category: 'Blog', creationDate: '2024-05-01', views: 1200, likes: 100 },
    { title: 'Understanding Nutrition', category: 'FAQ', creationDate: '2024-06-15', views: 800, likes: 50 },
    { title: 'Mental Health and Wellness', category: 'Blog', creationDate: '2024-07-20', views: 1500, likes: 200 },
  ];

  const handleAddContent = () => {
    setIsAddingContent(true);
    setTimeout(() => {
      setIsAddingContent(false); // Simulate adding content
    }, 3000);
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
            <h1 className="text-2xl font-bold">Content Management</h1>
            <p>Manage your health and wellness content</p>
          </div>
          <button
            onClick={handleAddContent}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {isAddingContent ? 'Adding Content...' : 'Add New Content'}
          </button>
        </header>

        {/* Content List */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-bold mb-4">Content List</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Creation Date</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contentList.map((content, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{content.title}</td>
                  <td className="px-4 py-2">{content.category}</td>
                  <td className="px-4 py-2">{content.creationDate}</td>
                  <td className="px-4 py-2">
                    <button className="bg-yellow-500 text-white py-1 px-3 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Content Analytics */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Content Analytics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentList.map((content, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded shadow">
                <h3 className="text-lg font-semibold">{content.title}</h3>
                <p className="text-sm">Views: {content.views}</p>
                <p className="text-sm">Likes: {content.likes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
