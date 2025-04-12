
import React from "react";
import { Github, Code, FileCode } from "lucide-react";

interface Profile {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const Profiles = () => {
  const profilesList: Profile[] = [
    {
      name: "GitHub",
      icon: <Github className="h-8 w-8" />,
      url: "https://github.com/prashantpatil12345",
    },
    {
      name: "HackerRank",
      icon: <Code className="h-8 w-8" />,
      url: "https://www.hackerrank.com/profile/prashantmp264",
    },
    {
      name: "CodeChef",
      icon: <FileCode className="h-8 w-8" />,
      url: "https://www.codechef.com/users/rcp_231101135",
    },
  ];

  return (
    <section id="profiles" className="py-20 px-6 bg-[#1b1f3b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00ffff] mb-4">
            My Profiles
          </h2>
          <div className="h-1 w-20 bg-[#00ffff] mx-auto mb-6"></div>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto">
            Connect with me on these platforms
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {profilesList.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0f2c] rounded-xl p-6 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#00ffff]/20 transition-all duration-300 flex items-center space-x-4 min-w-[220px] animate-fade-in transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 bg-[#00ffff] p-3 rounded-full text-[#0a0f2c]">
                {profile.icon}
              </div>
              <span className="text-lg font-medium text-[#ffffff]">
                {profile.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
