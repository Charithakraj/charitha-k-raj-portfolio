
import React from 'react';
import { ArrowDown, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Charitha K Raj
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6 font-light">
              Information Science & Engineering Student
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dedicated and detail-oriented engineering student with a passion for software development, 
              embedded systems, and machine learning. Ready to transform ideas into innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} />
                <span>Bangalore</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={18} />
                <span>9876543432</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={18} />
                <span>chari@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Linkedin size={18} />
                <span>linkedin.com/in/charithakraj</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-200 to-pink-200 p-2">
                <img
                  src="/lovable-uploads/1bd5a9b3-5435-47f9-a399-b75e690ba75c.png"
                  alt="Charitha K Raj"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
