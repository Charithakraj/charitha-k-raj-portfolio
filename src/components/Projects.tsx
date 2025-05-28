
import React from 'react';
import { Bot, Calendar, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Interactive Chatbot",
      description: "Developed an interactive chatbot capable of responding to user queries related to campus events and facilities using Python and Natural Language Processing libraries.",
      technologies: ["Python", "NLP", "Flask", "Web Interface"],
      duration: "January 2025",
      role: "Developer",
      highlights: [
        "Improved response accuracy by 85% after iterative training",
        "Integrated into a simple web interface using Flask",
        "Handles campus events and facilities queries"
      ],
      icon: <Bot size={32} />,
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`bg-gradient-to-r ${project.color} p-4 rounded-full text-white shrink-0`}>
                  {project.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      {project.role}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar size={16} />
                      {project.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white px-3 py-1 rounded-full text-gray-700 text-sm border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
