import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  sourceLink: string;
  demoLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Akatsuki Project Hub",
      description: "A project selling platform of Akatsuki Coding Club",
      imageSrc: "/images/akat.png", // ✅ using your own image
      tags: ["React.js", "Typescript", "Tailwind CSS"],
      sourceLink: "https://github.com/prashantpatil12345/BuySellHub.git",
      demoLink: "https://buy-sell-hub.vercel.app/",
    },
    {
      id: 2,
      title: "Fitness Tracker Pro",
      description: "A website to log workouts, set fitness goals, and track progress with interactive charts.",
      imageSrc: "/images/fit.png", // ✅ using your own image
      tags: ["React.js", "Typescript", "Tailwind CSS"],
      sourceLink: "https://github.com/prashantpatil12345/athletrack-smart.git",
      demoLink: "localhost",
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 px-6 bg-[#1b1f3b] font-['Poppins',sans-serif]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffff] mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-[#00ffff] mx-auto mb-6"></div>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto">
            Here's a selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#0a0f2c] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#00ffff]/10 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${project.id * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ffffff] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#b0b0b0] mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#00ffff]/10 text-[#00ffff] text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.sourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                    <Button
                      className="w-full bg-[#00ffff] hover:bg-[#00ced1] text-[#0a0f2c] rounded-xl transform hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_14px_-4px_rgba(0,255,255,0.4)]"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </Button>
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                    <Button
                      className="w-full bg-[#00ffff] hover:bg-[#00ced1] text-[#0a0f2c] rounded-xl transform hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_14px_-4px_rgba(0,255,255,0.4)]"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
