
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);
  const fullName = "Prashant Patil";
  
  useEffect(() => {
    // Reset the animation if we navigate back to this page
    setDisplayedName("");
    setShowHeader(false);
    setShowSubheading(false);
    
    // Sequence the animations
    const headerTimer = setTimeout(() => {
      setShowHeader(true);
      
      // Start name animation after header appears
      const nameTimer = setTimeout(() => {
        let nameIndex = 0;
        const typingInterval = setInterval(() => {
          if (nameIndex < fullName.length) {
            setDisplayedName(fullName.substring(0, nameIndex + 1));
            nameIndex++;
          } else {
            clearInterval(typingInterval);
            
            // Show subheading after name is complete
            setTimeout(() => {
              setShowSubheading(true);
            }, 400);
          }
        }, 100); // 0.1s timing between each letter
        
        return () => clearInterval(typingInterval);
      }, 600); // Start typing name after header appears
      
      return () => clearTimeout(nameTimer);
    }, 300); // Initial delay for header
    
    return () => clearTimeout(headerTimer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#0a0f2c] py-20 px-6"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-[#00ffff] to-[#00ced1]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-tr from-[#00ffff] to-[#00ced1]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative mt-20">
        <h2 
          className={`text-xl md:text-2xl font-medium text-[#00ffff] mb-4 font-['Poppins',sans-serif] min-h-[2rem] transform transition-all duration-700 ${
            showHeader 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-6"
          }`}
        >
          Hello
        </h2>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-['Poppins',sans-serif] min-h-[1.2em] transition-all duration-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <span 
            className="bg-gradient-to-r from-[#00ffff] to-[#00ced1] text-transparent bg-clip-text inline-block"
          >
            {displayedName}
          </span>
          <span className="sr-only">Prashant Patil</span>
        </motion.h1>
        
        <p 
          className={`text-xl md:text-2xl text-[#b0b0b0] max-w-2xl mx-auto mb-10 font-['Poppins',sans-serif] transition-all duration-700 ${
            showSubheading 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-6"
          }`}
        >
          A passionate <span className="text-[#00ffff] font-semibold">developer</span> turning ideas into elegant digital solutions.
        </p>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a 
          href="#about" 
          className="text-[#b0b0b0] hover:text-[#00ffff] transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
