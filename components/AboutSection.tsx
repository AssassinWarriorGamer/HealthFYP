"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-[#2B2D33] text-white w-full" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Replace with your app's image */}
        <Image
          src="/assets/images/MindWell.png"
          width={500}
          height={500}
          alt="Mind Well Logo"
          className="object-contain"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Mind Well</h2>
          <p className="text-base lg:text-lg">
            Mind Well is your AI-powered virtual health and wellness assistant, designed to help you reach your wellness goals. Whether you're looking to improve your fitness, mental health, or overall lifestyle, Mind Well provides personalized guidance tailored to your unique needs.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2">Core Features</h3>
          <ul className="list-disc pl-4">
            <li>
              <strong>Personalized Health Guidance:</strong> AI-powered recommendations tailored to your fitness, nutrition, and wellness needs.
            </li>
            <li>
              <strong>Track Fitness & Nutrition:</strong> Monitor your daily activities and meals, and get real-time insights.
            </li>
            <li>
              <strong>24/7 Wellness Support:</strong> Access tips, routines, and expert advice whenever you need it.
            </li>
            <li>
              <strong>Mental Wellness:</strong> Guided meditation, stress-relief exercises, and mindfulness resources.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-4 mb-2">Our Mission</h3>
          <p>
            At Mind Well, our mission is simple: to empower individuals to take control of their health and wellness. By combining cutting-edge AI with a focus on holistic well-being, we provide you with personalized solutions for a healthier, happier life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
