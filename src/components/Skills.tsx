
import React from "react";
import { Code2, FileJson, Cpu, FileCode, Coffee, Server } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const skillsList: Skill[] = [
    {
      name: "Java",
      icon: <Coffee className="h-12 w-12 text-red-500" />,
    },
    {
      name: "HTML",
      icon: <Code2 className="h-12 w-12 text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FileCode className="h-12 w-12 text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FileJson className="h-12 w-12 text-yellow-500" />,
    },
    {
      name: "React",
      icon: <Cpu className="h-12 w-12 text-cyan-400" />,
    },
    {
      name: "Node.js",
      icon: <Server className="h-12 w-12 text-green-500" />,
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-6 bg-[#0a0f2c]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffff] mb-4">
            Skills
          </h2>
          <div className="h-1 w-20 bg-[#00ffff] mx-auto mb-6"></div>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skillsList.map((skill, index) => (
            <div 
              key={index}
              className="bg-[#1b1f3b] rounded-xl p-6 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#00ffff]/10 transition-all duration-300 flex flex-col items-center justify-center transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-medium text-[#ffffff]">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
