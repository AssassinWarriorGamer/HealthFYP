'use client';

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import UserForm from "@/components/forms/loginform";
import { PasskeyModal } from "@/components/PasskeyModal"; // Ensure this points to your modal component

export default function Home() {
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  return (
    <div className="flex h-screen max-h-screen bg-white">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/images/mind-well.png"
            height={1000}
            width={1000}
            alt="MindWell logo"
            className="mb-10 h-32 w-fit"
          />

          {/* User login form */}
          <UserForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 MindWell
            </p>
            <Link href="/auth/sign-in/?admin=true" className="text-green-500">
              Admin Login
            </Link>
          </div>
        </div>
      </section>

      {/* Side image */}
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="Patient onboarding"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
