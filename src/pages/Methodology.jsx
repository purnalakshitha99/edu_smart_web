import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Methodology = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
                  <span className="block">Methodology</span>
                  <span className="block text-primary-600">Our Approach to AI Education</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover how we combine cutting-edge AI technologies with proven educational methodologies to create an effective learning environment.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                  <div className="rounded-md shadow">
                    <Link
                      to="/learning-module"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                      Try Demo
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <Link
                      to="/results"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out hover:shadow-md"
                    >
                      View Results
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Methodology
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              A comprehensive approach to AI-powered education
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="mt-12">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 justify-center">
                {['overview', 'technology', 'implementation'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize transition duration-300 ease-in-out`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-lg font-medium text-gray-900">AI-Powered Learning</h3>
                    </div>
                    <p className="text-gray-500">Our system uses advanced AI algorithms to analyze student behavior and provide personalized learning experiences.</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-lg font-medium text-gray-900">Adaptive Assessment</h3>
                    </div>
                    <p className="text-gray-500">Dynamic assessment system that adapts to student performance and provides targeted feedback.</p>
                  </div>
                </div>
              )}

              {activeTab === 'technology' && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Computer Vision</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Face detection
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Object recognition
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Machine Learning</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Pattern recognition
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Predictive analytics
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Natural Language Processing</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Text analysis
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Sentiment analysis
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'implementation' && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Development Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition duration-300">
                        <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-gray-600">Research & Analysis</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition duration-300">
                        <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-gray-600">Model Development</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Quality Assurance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition duration-300">
                        <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Testing & Validation</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition duration-300">
                        <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Performance Monitoring</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Impact
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { label: 'Research Papers', value: '15+', icon: '📚' },
                { label: 'Accuracy Rate', value: '95%', icon: '🎯' },
                { label: 'Implementation Time', value: '2-4 weeks', icon: '⏱️' },
                { label: 'Success Rate', value: '98%', icon: '📈' }
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
            <span className="block">Ready to learn more?</span>
            <span className="block text-primary-200">Contact us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/results"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-400 transition duration-300 ease-in-out"
              >
                View Results
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology; 