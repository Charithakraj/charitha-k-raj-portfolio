
import React from 'react';
import { Code, Database, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["Python", "C++", "Java"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      skills: ["HTML/CSS", "JavaScript", "React", "REST APIs"],
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Database size={24} />,
      title: "Tools & Databases",
      skills: ["Git", "MySQL", "Firebase", "Arduino"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Settings size={24} />,
      title: "Software",
      skills: ["MS Office", "Ansys", "Eclipse", "Jupyter Notebook", "Visual Studio Code"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full w-fit mb-4`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 px-3 py-2 rounded-lg text-gray-700 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
