
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-[#0d0d0d] text-[#f2f2f2] border-t border-[#1a1a1a] font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-[#a0a0a0]">
          <p className="flex items-center justify-center">
            &copy; {currentYear} Prashant Patil. All rights reserved.
            
          </p>
          <p className="mt-2">
            <a href="mailto:contact@prashantpatil.com" className="text-[#a0a0a0] hover:text-[#9b59b6] transition-colors duration-300">
              contact prashantmp264@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
