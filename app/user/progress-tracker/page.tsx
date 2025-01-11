'use client';

import Head from 'next/head';
import Header2 from '@/components/Header2';
import UserSidebar from '@/components/UserSidebar'; // Adjust the path if necessary
import ProgressHeader from '@/components/Progressheader';
import KeyMetrics from '@/components/KeyMetrics';
import ChartsSection from '@/components/ChartSection';
import GoalTracking from '@/components/GoalTracking';
import Insights from '@/components/Insight';

export default function ProgressTracker() {
  return (
    <>
      <Head>
        <title>Track Progress</title>
        <meta name='description' content='Monitor your fitness journey and key metrics.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <UserSidebar>
        <main className='bg-white min-h-screen'>
          <Header2 /> <br />
          <ProgressHeader />
          <KeyMetrics />
          <ChartsSection />
          <GoalTracking />
          <div className='p-4'>
            <Insights />
          </div>

          {/* Call-to-Action Section */}
         
            <button
              onClick={() => alert('Redirecting to goal setting')}
              className='bg-blue-500 text-white px-6 py-2 rounded-lg'
            >
              Set New Goals
            </button>
            <button
              onClick={() => alert('Redirecting to insights')}
              className='bg-green-500 text-white px-6 py-2 rounded-lg'
            >
              View More Insights
            </button>
         
        </main>
      </UserSidebar>
    </>
  );
}
