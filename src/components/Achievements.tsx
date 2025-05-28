
import React from 'react';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <BookOpen size={24} />,
      title: "Python for Everybody Certification",
      description: "Completed comprehensive Python programming course by University of Michigan on Coursera",
      type: "Certification",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award size={24} />,
      title: "Web Development Bootcamp",
      description: "Participated in intensive Web Development Bootcamp organized by DevTown",
      type: "Training",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users size={24} />,
      title: "RV Tech Fest 2024 Volunteer",
      description: "Managed event registrations and provided live support during the technical festival",
      type: "Leadership",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const activities = [
    {
      icon: <Users size={24} />,
      title: "Google Developer Student Club (GDSC)",
      description: "Active member at RVITM, participating in workshops and technical sessions",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Award size={24} />,
      title: "Hackathon Participant",
      description: "Participated in Hack the Valley and RV CodeSprint, building innovative solutions",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Heart size={24} />,
      title: "NGO Volunteer - Teach For Change",
      description: "Teaching basic computer literacy to underprivileged communities",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Achievements & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${achievement.color} p-3 rounded-full w-fit mb-4`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                  {achievement.type}
                </span>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Extra-Curricular Activities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${activity.color} p-3 rounded-full w-fit mb-4`}>
                  <div className="text-white">
                    {activity.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {activity.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
