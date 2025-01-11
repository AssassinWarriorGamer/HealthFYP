import Head from 'next/head';

import UserSidebar from '@/components/UserSidebar'; // Adjust the path if necessary
import GetWorkoutDietPlanPage from '@/components/GetWorkoutDietPlan';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Workout/Diet Plan</title>
        <meta name="description" content="Personalized workout and diet plans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserSidebar>
        <main className="bg-white min-h-screen">
          
         
            {/* Content goes here */}
            <GetWorkoutDietPlanPage />
       
        </main>
      </UserSidebar>
    </>
  );
}
