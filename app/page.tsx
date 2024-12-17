import Image from "next/image";
import Link from "next/link";
import UserForm from "@/components/forms/UserForm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-between container mx-auto">
      {/* Left Content Section */}
      <section className="flex flex-col justify-between max-w-lg w-full px-4">
        {/* Logo */}
        <div>
          <Image
            src="/assets/icons/logo-full.svg"
            height={100}
            width={100}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <UserForm />
        </div>

        {/* Footer Text */}
        <div className="text-14-regular mt-10 flex justify-between">
          <p className="text-dark-600 xl:text-left">© 2024 All right reserved</p>
          <Link href="/admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </section>

      {/* Right Onboarding Image */}
     
        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="user"
          className="side-img max-w-[50%]"
       />
    </div>
  );
}