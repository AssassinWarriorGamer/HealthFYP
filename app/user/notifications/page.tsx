import Head from 'next/head';
import Header2 from '@/components/Header2';
import UserSidebar from '@/components/UserSidebar'; // Adjust the path if necessary
import NotificationsPage from '@/components/Notifications';

export default function Home() {
  return (
    <>
      <Head>
        <title>Notifications</title>
        <meta name="description" content="View your health data, reminders, and achievements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserSidebar>
        <main className="bg-dark-400 min-h-screen">
          <Header2 />
          <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            {/* Content goes here */}
            <NotificationsPage />
          </div>
        </main>
      </UserSidebar>
    </>
  );
}
