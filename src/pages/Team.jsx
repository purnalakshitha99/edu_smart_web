import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lead AI Engineer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'PhD in Computer Science with 10+ years of experience in AI and machine learning. Leads our AI development team.',
      expertise: ['Machine Learning', 'Computer Vision', 'Deep Learning'],
      linkedin: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud architecture. Manages our frontend development.',
      expertise: ['React', 'Node.js', 'AWS'],
      linkedin: '#'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Research Scientist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Specializes in educational technology and AI research. Leads our research initiatives.',
      expertise: ['AI Research', 'EdTech', 'Data Science'],
      linkedin: '#'
    },
    {
      name: 'Emily Zhang',
      role: 'AI Engineer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Expert in computer vision and natural language processing. Develops our AI models.',
      expertise: ['Computer Vision', 'NLP', 'TensorFlow'],
      linkedin: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className={`sm:text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Our Team</span>
                  <span className="block text-primary-600">The Minds Behind EduSmart</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Meet the talented developers and researchers who are revolutionizing education through AI technology.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Core Team
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The driving force behind our innovative solutions
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-500">{member.bio}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-primary-600 hover:text-primary-500"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span className="ml-2">View Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Team Impact
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { label: 'Team Members', value: '4', icon: '👥' },
                { label: 'Years Experience', value: '8+', icon: '⭐' },
                { label: 'Projects Completed', value: '50+', icon: '🚀' },
                { label: 'Research Papers', value: '20+', icon: '📚' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold text-primary-600">{stat.value}</div>
                  <div className="mt-2 text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Want to join our team?</span>
            <span className="block text-primary-200">We're always looking for talent.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Apply Now
              </Link>
            </div>
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/methodology"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-400 transition duration-300 ease-in-out"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 