
import React from 'react';
import { GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full">
                <Target className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Objective</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated and detail-oriented Information Science and Engineering student with a strong 
                  foundation in software development, data handling, and system design. Eager to apply my 
                  technical skills and creativity to real-world problem solving through internships and 
                  projects in the field of embedded systems, web development, and machine learning.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full">
                <GraduationCap className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Education</h3>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Bachelor of Engineering in Information Science and Engineering
                  </h4>
                  <p className="text-purple-600 font-medium mb-2">
                    RV Institute of Technology and Management, Bangalore, Karnataka
                  </p>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Expected Graduation: 2025</span>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm">
                      CGPA: 7.7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Languages</h4>
              <div className="space-y-2">
                <div className="text-gray-600">English - Fluent</div>
                <div className="text-gray-600">Kannada - Native</div>
                <div className="text-gray-600">Hindi - Conversational</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Areas of Interest</h4>
              <div className="space-y-2">
                <div className="text-gray-600">Embedded Systems</div>
                <div className="text-gray-600">Web Development</div>
                <div className="text-gray-600">Machine Learning</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Activities</h4>
              <div className="space-y-2">
                <div className="text-gray-600">GDSC Member</div>
                <div className="text-gray-600">Hackathon Participant</div>
                <div className="text-gray-600">NGO Volunteer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
