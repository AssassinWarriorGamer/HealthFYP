"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Import useRouter

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
});

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter(); // Initialize router
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Registration Data:", data);
  };

  // Navigate to login page
  const handleLoginRedirect = () => {
    router.push("/"); // Navigate to UserForm page (assuming it's the root)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 text-light w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-green-400 text-center mb-6">
        Register
      </h2>

      {/* First Name */}
      <div>
        <label className="block text-sm font-medium text-green-400 mb-2">
          First Name
        </label>
        <input
          type="text"
          {...register("firstName")}
          placeholder="Enter your first name"
          className="w-full bg-transparent border border-white rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.firstName && (
          <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium text-green-400 mb-2">
          Last Name
        </label>
        <input
          type="text"
          {...register("lastName")}
          placeholder="Enter your last name"
          className="w-full bg-transparent border border-white rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.lastName && (
          <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-green-400 mb-2">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className="w-full bg-transparent border border-white rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-green-400 mb-2">
          Phone Number
        </label>
        <input
          type="text"
          {...register("phone")}
          placeholder="Enter your phone number"
          className="w-full bg-transparent border border-white rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-green-500 text-black font-bold py-2 rounded-md hover:bg-green-600"
      >
        Register
      </Button>

      {/* Already have an account? Login */}
      <div className="text-center mt-4">
        <p className="text-sm text-white">
          Already have an account?{" "}
          <button
            type="button"
            onClick={handleLoginRedirect} // Redirect to UserForm
            className="text-green-400 hover:text-green-300"
          >
            Login
          </button>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;