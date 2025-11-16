import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code,
  Database,
  Smartphone,
  Globe,
  FileText,
} from "lucide-react";
import projects from "../projectsData/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div
                  className={`bg-gradient-to-br ${project.gradient} p-8 rounded-lg shadow-2xl`}
                >
                  <div className="bg-slate-900/90 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-4">
                <h4 className="text-xl font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-slate-600 hover:border-slate-500 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                  <a
                    href={project.readmeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-slate-600 hover:border-slate-500 px-4 py-2 rounded-lg transition-colors"
                  >
                    <FileText size={16} />
                    Project Details
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
