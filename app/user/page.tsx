'use client';

import Head from 'next/head';
import Header2 from '@/components/Header2';
import UserSidebar from '@/components/UserSidebar'; // Adjust the path if necessary
import EventCarousel from '@/components/EventCaraousel';
import Link from 'next/link';
import { IoPerson } from 'react-icons/io5';
import { FaRegClipboard, FaDumbbell } from 'react-icons/fa';

const UserMainPage = () => {
  // Example events data
  const events = [
    {
      id: 1,
      imageSrc: 'assets/images/milo.jpg', // Replace with your image path
      link: '/events/yoga-session', // Replace with your event link
    },
    {
      id: 2,
      imageSrc: 'assets/images/100plus.jpg', // Replace with your event link
      link: '/events/step-challenge', // Replace with your event link
    },
    {
      id: 3,
      imageSrc: 'assets/images/100plus.png', // Replace with your event link
      link: '/events/healthy-eating', // Replace with your event link
    },
  ];

  return (
    <>
      <Head>
        <title>User Dashboard</title>
        <meta name="description" content="Welcome to your health dashboard!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserSidebar>
        <main className="bg-gray-100 min-h-screen">
          <Header2 />
          <div className="p-4 grid grid-cols-1 gap-6">
            {/* Top Card: Events */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
              <EventCarousel events={events} />
            </div>

            {/* Middle Section */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {/* Left: Quick Actions */}
              <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
                <div className="grid grid-cols-3 gap-4">
                  {/* Update Profile */}
                  <Link
                    href="user/profile"
                    className="flex flex-col items-center justify-center bg-blue-500 text-white rounded-lg w-24 h-24 shadow-md hover:bg-blue-600 transition-all"
                  >
                    <IoPerson size={32} />
                    <span className="text-sm mt-2 text-center">Update Profile</span>
                  </Link>

                  {/* Log Health Metrics */}
                  <Link
                    href="user/health-metrics"
                    className="flex flex-col items-center justify-center bg-green-500 text-white rounded-lg w-24 h-24 shadow-md hover:bg-green-600 transition-all"
                  >
                    <FaRegClipboard size={32} />
                    <span className="text-sm mt-2 text-center">Log Metrics</span>
                  </Link>

                  {/* View Workout */}
                  <Link
                    href="user/get-workout-plan"
                    className="flex flex-col items-center justify-center bg-purple-500 text-white rounded-lg w-24 h-24 shadow-md hover:bg-purple-600 transition-all"
                  >
                    <FaDumbbell size={32} />
                    <span className="text-sm mt-2 text-center">View Plan</span>
                  </Link>
                </div>
              </div>

              {/* Right: Suggestions/Fun Facts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Tip of the Day</h2>
                <div className="text-gray-700">
                  Did you know? <br />Drinking water before meals can help digestion.
                  
                </div>
              </div>
            </div>
          </div>
        </main>
      </UserSidebar>
    </>
  );
};

export default UserMainPage;

