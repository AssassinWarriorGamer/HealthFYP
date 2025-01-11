import Head from 'next/head';

import UserSidebar from '@/components/UserSidebar'; // Adjust the path if necessary
import HealthmetricsForm from '@/components/HealthmetricsForm'; // Import the HealthmetricsForm component

export default function Home() {
  return (
    <>
      <Head>
        <title>Health Metrics Page</title>
        <meta name="description" content="Track your health metrics and fitness goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserSidebar>
        <main className="bg-white min-h-screen">
          
      
            {/* Health Metrics Form */}
            <HealthmetricsForm />
         =
        </main>
      </UserSidebar>
    </>
  );
}
