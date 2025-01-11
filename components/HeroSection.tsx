"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
         <h1 className="text-dark-200 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          Welcome To MINDWELL
        </h1>

          <h3 className="text-blue-700 text-base sm:text-lg mb-6 lg:text-xl font-bold">
          Revolutionize your health journey with personalized, AI-driven insights and guidance.
         </h3>
         <p className="text-dark-600 text-base sm:text-lg mb-6 lg:text-xl">
          At Mind Well, we harness the power of artificial intelligence to provide you with a virtual assistant that supports your health and wellness every step of the way. 
         Whether youre looking to improve your fitness, manage stress, track nutrition, 
         or get personalized wellness tips, our AI-powered assistant is here to help you achieve your goals with ease and efficiency.         
          </p>
          <div>
            <Link
              href="auth/sign-in"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br bg-blue-800 from-primary-500 to-secondary-500 hover:bg-blue-400 text-white"
            >
              LOGIN
            </Link>
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-blue-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/assets/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;