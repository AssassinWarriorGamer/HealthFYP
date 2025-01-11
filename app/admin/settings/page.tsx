'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import AddAdminForm from '@/components/forms/adminform'; // Import the AddAdminForm component

const Settings: React.FC = () => {
  const [admins, setAdmins] = useState([
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  
  const handleAddAdmin = () => {
    setIsModalOpen(true); // Open the modal to add a new admin
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSaveAdmin = (admin: { name: string; email: string; role: string }) => {
    setAdmins([...admins, admin]); // Add the new admin to the list
    setIsModalOpen(false); // Close the modal after saving
  };

  const handleRemoveAdmin = (email: string) => {
    setAdmins(admins.filter(admin => admin.email !== email)); // Remove admin from list
  };

  const handleBackup = () => {
    alert('Initiating backup...');
  };

  const handleRestore = () => {
    alert('Initiating restore...');
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
            <h1 className="text-2xl font-bold">Settings</h1>

            <p>Configure platform-wide settings</p>
          </div>
          <div>
            <span className="font-medium">Admin: Admin</span>

            <span className="ml-2 text-sm text-gray-500">Role: Super Admin</span>
          </div>
        </header>

        {/* Admin Settings */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-bold mb-4">Admin Settings</h2>
          <div className="mb-4">
            <button
              onClick={handleAddAdmin}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Admin
            </button>
          </div>

          {/* Admin List */}
          <div className="space-y-4">
            {admins.map((admin, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{admin.name}</h3>
                  <p>{admin.email} - {admin.role}</p>
                </div>
                <button
                  onClick={() => handleRemoveAdmin(admin.email)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Settings */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-bold mb-4">Platform Settings</h2>
          <div>
            <h3 className="text-md font-semibold mb-2">Wearable Device Integrations</h3>
            <p>Configure integration with wearable devices like fitness trackers and smartwatches.</p>
            <div className="mt-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded">
                Configure Wearables
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-md font-semibold mb-2">Mobile Device Integrations</h3>
            <p>Set up integration for mobile devices for seamless communication and data sync.</p>
            <div className="mt-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded">
                Configure Mobile Devices
              </button>
            </div>
          </div>
        </div>

        {/* System Maintenance */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-4">System Maintenance</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-md font-semibold">Backup Options</h3>
              <p>Perform a system backup to secure data and configurations.</p>
              <button
                onClick={handleBackup}
                className="bg-yellow-500 text-white py-2 px-4 rounded"
              >
                Backup Now
              </button>
            </div>

            <div>
              <h3 className="text-md font-semibold">Restore Options</h3>
              <p>Restore data from the most recent backup.</p>
              <button
                onClick={handleRestore}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Restore Backup
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Admin Modal */}
      <AddAdminForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAdmin}
      />
    </div>
  );
};

export default Settings;
