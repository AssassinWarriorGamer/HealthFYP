import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdHome, MdPerson } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { IoStatsChart, IoNotifications } from "react-icons/io5";

interface UserSidebarProps {
  children: ReactNode;
}
const UserSidebar: React.FC<UserSidebarProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-50 h-screen p-4 bg-blue-950 border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <div>
            <Image
              src="/assets/icons/user-avatar.svg"
              alt="icon"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <span className='border-b-[1px] border-gray-500 w-full p-2'></span>
          <Link href='/user'>
            <div className='bg-dark-400 text-white p-3 my-4 rounded-lg inline-block'>
              <MdHome size={50} />
            </div>
            
          </Link>
          <Link href='user/profile'>
            <div className='bg-dark-400 text-white p-3 my-4 rounded-lg inline-block'>
              <MdPerson size={50} />
            </div>
          </Link>
          <Link href='user/health-metrics'>
            <div className='bg-dark-400 text-white p-3 my-4 rounded-lg inline-block'>
              <FaHeartbeat size={50} />
            </div>
          </Link>
          <Link href='user/get-workout-plan'>
            <div className='bg-dark-400 text-white p-3 my-4 rounded-lg inline-block'>
              <FaDumbbell size={50} />
            </div>
          </Link>
          <Link href='user/progress-tracker'>
            <div className='bg-dark-400 text-white p-3 my-4 rounded-lg inline-block'>
              <IoStatsChart size={50} />
            </div>
          </Link>
          <Link href='user/notifications'>
            <div className='bg-dark-400 text-white p-3 my-4 rounded-lg inline-block'>
              <IoNotifications size={50} />
            </div>
          </Link>
          <button className="logout-btn">
            <Link href="/auth/sign-in">Logout</Link>
          </button>
        </div>
      </div>

      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
}

export default UserSidebar;