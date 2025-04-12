import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-6 bg-[#0a0f2c] font-['Poppins',sans-serif]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffff] mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-[#00ffff] mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#ffffff] mb-4 text-center">
            I'm <span className="text-[#00ffff]">Prashant Patil</span>, a Developer
          </h3>
          <p className="text-[#b0b0b0] mb-6 text-center">
            Aspiring Software Engineer with a strong foundation in AI, Machine Learning, and Full-Stack Development. Passionate about building intelligent systems, optimizing software performance, and developing scalable applications. Adept at problem-solving, collaborating in cross-functional teams, and staying updated with emerging technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <h4 className="font-bold text-[#ffffff]">Name:</h4>
              <p className="text-[#b0b0b0]">Prashant Patil</p>
            </div>
            <div>
              <h4 className="font-bold text-[#ffffff]">Email:</h4>
              <p className="text-[#b0b0b0]">prashantmp264@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-[#ffffff]">Location:</h4>
              <p className="text-[#b0b0b0]">Shirprur, Dhule</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#00ffff] hover:bg-[#00ced1] text-[#0a0f2c] px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_-4px_rgba(0,255,255,0.4)]">
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
