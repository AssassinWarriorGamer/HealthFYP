"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Import useRouter
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
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
  ),
});

const UserForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
    },
  });

  const router = useRouter(); // Initialize useRouter

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const handleRegister = () => {
    router.push("/register"); // Redirect to Register page
  };

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

        {/* Phone Number Field */}
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="+1234567890"
        />

        {/* Buttons */}
        <div className="flex gap-4">
          {/* Submit Button */}
          <SubmitButton isLoading={false}>Login</SubmitButton>

          {/* Register Button */}
          <button
            type="button" // Prevent form submission
            onClick={handleRegister}
            className="shad-primary-btn w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition ease-in-out"
          >
            Register
          </button>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;