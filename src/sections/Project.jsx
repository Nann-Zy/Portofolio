// src/sections/Project.jsx
import React, { useEffect, useState } from "react";
import { Github } from "lucide-react";

// Komponen teks gradasi
const ShinyText = ({ text, className }) => (
  <span className={`bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text ${className}`}>
    {text}
  </span>
);

const Project = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "KAI",
      image: "/assets/kai.png",  // <-- dari public/assets
      link: "https://www.figma.com/proto/GEohNFHpMEB3Zv7YevLO8B/KAI?node-id=41-3",
      techStack: ["Figma"],
    },
    {
      id: 2,
      title: "Student Absention",
      image: "/assets/test.jpg",
      link: "https://github.com/Rifandiysf/CRUD-MERN-Stack.git",
      techStack: ["MySQL", "Express.js", "React.js", "Node.js", "TailwindCSS"],
    },
    {
      id: 3,
      title: "Conseling Guidance",
      image: "/assets/test.jpg",
      link: "https://github.com/Rifandiysf/Conseling-Guidance-Apps.git",
      techStack: ["Laravel", "React.js"],
    },
    {
      id: 4,
      title: "Conseling Guidance 2",
      image: "/assets/test.jpg",
      link: "https://github.com/Rifandiysf/Conseling-Guidance-Apps.git",
      techStack: ["Laravel", "React.js"],
    },
  ];

  return (
    <section id="projects" className="flex flex-col py-16 px-4 gap-10">
      <ShinyText
        text="My Project"
        className="font-semibold text-2xl max-sm:text-xl text-center"
      />

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/Rifandiysf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition text-sm"
        >
          <Github size={16} />
          <p className="font-medium">More Projects on GitHub</p>
        </a>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, image, link, techStack }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="rounded-lg overflow-hidden relative shadow-md cursor-pointer group mb-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center text-white opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
        >
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-black/60 px-2 py-1 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-1">
        <h2 className="text-base sm:text-lg font-semibold">{title}</h2>
      </div>

      <div className="mt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 rounded-md transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
