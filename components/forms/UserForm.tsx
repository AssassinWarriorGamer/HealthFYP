"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react"; // Import useState for managing loading state
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput", // Keep PHONE_INPUT type
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().regex(
    /^\+?[1-9]\d{1,14}$/,
    "Invalid phone number format."
  ), // Phone number validation regex
});

const UserForm = () => {
  const [isLoading, setIsLoading] = useState(false); // Define isLoading state
  const router = useRouter(); // Initialize the router for navigation

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "", // Add default value for phone
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true); // Set isLoading to true when form submission starts
    setTimeout(() => {
      console.log(values); // Simulate submission logic
      setIsLoading(false); // Set isLoading to false when form submission is complete
    }, 2000); // Simulate a 2-second delay for the submission
  }

  // Navigate to registration page when "Register" button is clicked
  function handleRegister() {
    router.push("/registration"); // Replace "/registration" with your registration page URL
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome</h1>
          <p className="text-dark-700"></p>
        </section>

        {/* Username Field */}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="username"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        {/* Email Field */}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        {/* Phone Number Field using PhoneInput */}
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="+1234567890"
        />

        {/* Submit Button with Loading State */}
        <SubmitButton isLoading={isLoading}>Log In</SubmitButton>

        {/* Register Button */}
        <button
          type="button"
          onClick={handleRegister}
          className="shad-primary-btn w-full flex items-center justify-center gap-2 py-2 px-4 border-2 border-primary bg-primary text-white rounded-lg hover:bg-primary-dark"
        >
          Register
        </button>
      </form>
    </Form>
  );
};

export default UserForm;