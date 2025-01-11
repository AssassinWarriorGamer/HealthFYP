import React from "react";
import Image from "next/image";  // Import Image from Next.js

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* Use the Image component to render the logo */}
        <div>
          <Image
            src="/assets/images/MindWell.png"  // Path to your logo image
            alt="Mind Well Logo"  // Alt text for accessibility
            width={120}  // Set a fixed width for the footer logo
            height={40}  // Set a fixed height for the footer logo
            className="object-contain"
          />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
