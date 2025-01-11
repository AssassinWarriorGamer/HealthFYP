'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import { useRouter } from 'next/navigation'; // Use for redirect

export default function SignUpPage() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/sign-in'); // Redirect to Sign-In page
  };

  return (
    <SignUp.Root>
      {/* Start Step (Sign-Up Form) */}
      <SignUp.Step
        name="start"
        className="w-106 rounded-2xl py-10 px-8 shadow-xl space-y-8"
      >
        {/* Header Section */}
        <section className="mb-12 space-y-4">
          <h1 className="text-2xl font-semibold text-center text-white">Join Us 🏃</h1>
          <p className="text-sm text-center text-white">Create a new account</p>
        </section>

        {/* Social Sign-up Buttons (aligned in a row) */}
        <div className="flex space-x-4 mb-6">
          <Clerk.Connection
            name="google"
            className="border-green-500 flex items-center gap-x-3 justify-center font-medium border shadow-sm py-2 px-4 rounded-md transition-transform transform hover:scale-105 w-full"
          >
            <Clerk.Icon className="size-4" />
            Google
          </Clerk.Connection>
          <Clerk.Connection
            name="github"
            className="border-green-500 flex items-center gap-x-3 justify-center font-medium border shadow-sm py-2 px-4 rounded-md transition-transform transform hover:scale-105 w-full"
          >
            <Clerk.Icon className="size-4" />
            GitHub
          </Clerk.Connection>
          <Clerk.Connection
            name="facebook"
            className="border-green-500 flex items-center gap-x-3 justify-center font-medium border shadow-sm py-2 px-4 rounded-md transition-transform transform hover:scale-105 w-full"
          >
            <Clerk.Icon className="size-4" />
            Facebook
          </Clerk.Connection>
        </div>

        {/* Horizontal Divider */}
        <div className="flex items-center justify-center mb-6">
          <hr className="border-t border-gray-400 w-full" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="border-t border-gray-400 w-full" />
        </div>

        {/* Username Field */}
        <Clerk.Field name="username" className="space-y-4">
          <Clerk.Label className="text-sm font-medium text-white">Username</Clerk.Label>
          <Clerk.Input
            className="border-dark-500 bg-dark-400 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Clerk.FieldError className="block text-red-500 text-sm" />
        </Clerk.Field>

        {/* Email Field */}
        <Clerk.Field name="identifier" className="space-y-4">
          <Clerk.Label className="text-sm font-medium text-white">Email Address</Clerk.Label>
          <Clerk.Input
            className="border-dark-500 bg-dark-400 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Clerk.FieldError className="block text-red-500 text-sm" />
        </Clerk.Field>

        {/* Phone Number Field */}
        <Clerk.Field name="phone" className="space-y-4">
          <Clerk.Label className="text-sm font-medium text-white">Phone Number</Clerk.Label>
          <Clerk.Input
            type="tel"
            className="border-dark-500 bg-dark-400 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Clerk.FieldError className="block text-red-500 text-sm" />
        </Clerk.Field>

        {/* Password Field */}
        <Clerk.Field name="password" className="space-y-4">
          <Clerk.Label className="text-sm font-medium text-white">Password</Clerk.Label>
          <Clerk.Input
            type="password"
            className="border-dark-500 bg-dark-400 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Clerk.FieldError className="block text-red-500 text-sm" />
        </Clerk.Field>

        {/* Submit Button */}
        <SignUp.Action
          submit
          className="bg-green-500 text-white rounded-md py-2 px-4 w-full hover:bg-green-700 transition ease-in-out"
        >
          Sign Up
        </SignUp.Action>

        {/* Login Redirect Text */}
        <div className="flex gap-4 mt-6 justify-center">
          <span className="text-white text-sm">
            Already have an account?{' '}
            <span
              onClick={handleLoginRedirect}
              className="text-green-500 cursor-pointer hover:underline"
            >
              Login
            </span>
          </span>
        </div>
      </SignUp.Step>
    </SignUp.Root>
  );
}