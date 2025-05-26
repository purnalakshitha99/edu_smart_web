import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 opacity-50"></div>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="sm:text-center lg:text-left"
              >
                <motion.h1 
                  className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
                  variants={fadeInUp}
                >
                  <span className="block">Revolutionizing</span>
                  <span className="block text-primary-600">E-Learning with AI</span>
                </motion.h1>
                <motion.p 
                  className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base md:text-lg lg:text-xl sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
                  variants={fadeInUp}
                >
                  EduSmart combines advanced AI technologies to enhance student engagement, ensure academic integrity, and automate assessments in e-learning environments.
                </motion.p>
                <motion.div 
                  className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                  variants={fadeInUp}
                >
                  <div className="w-full sm:w-auto">
                    <Link
                      to="/learning-module"
                      className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-3 md:text-lg md:px-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="w-full sm:w-auto">
                    <Link
                      to="/methodology"
                      className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-3 md:text-lg md:px-8 transition duration-300 ease-in-out hover:shadow-md"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </main>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-8 sm:py-12 bg-white"
      >
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-sm sm:text-base font-semibold text-primary-600 tracking-wide uppercase">Trusted By</h2>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Leading Educational Institutions
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500">
              Join the growing network of institutions that trust EduSmart
            </p>
          </motion.div>
          <div className="mt-8 sm:mt-10">
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-3 lg:grid-cols-6"
            >
              {[
                {
                  name: 'Harvard University',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg',
                  type: 'University'
                },
                {
                  name: 'MIT',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png',
                  type: 'University'
                },
                {
                  name: 'Stanford',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg',
                  type: 'University'
                },
                {
                  name: 'Coursera',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
                  type: 'Online Platform'
                },
                {
                  name: 'edX',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/EdX_newer_logo.svg',
                  type: 'Online Platform'
                },
                {
                  name: 'Khan Academy',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Khan_Academy_logo_%282018%29.svg',
                  type: 'Educational Platform'
                }
              ].map((institution, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="col-span-1 flex justify-center items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="text-center">
                    <img
                      className="h-12 mx-auto mb-4 object-contain"
                      src={institution.logo}
                      alt={institution.name}
                    />
                    <h3 className="text-sm font-medium text-gray-900">{institution.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">{institution.type}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div> */}
      </motion.div>

      {/* Interactive Features Tabs */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              A Better Way to Learn
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500">
              Discover how our AI-powered platform transforms education
            </p>
          </motion.div>

          {/* Feature Tabs */}
          <motion.div 
            variants={fadeInUp}
            className="mt-8 sm:mt-12"
          >
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex flex-wrap sm:flex-nowrap justify-center space-x-4 sm:space-x-8">
                {['features', 'benefits', 'technology'].map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab)}
                    className={`${
                      activeTab === tab
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-sm capitalize transition duration-300 ease-in-out`}
                  >
                    {tab}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <motion.div 
              variants={staggerContainer}
              className="mt-6 sm:mt-8"
            >
              {activeTab === 'features' && (
                <motion.div 
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2"
                >
                  {/* Feature Cards */}
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-lg font-medium text-gray-900">Learning Module</h3>
                    </div>
                    <p className="text-gray-500">Real-time engagement monitoring and automated grading using advanced AI models.</p>
                    <div className="mt-4">
                      <Link
                        to="/learning-module"
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        Learn more
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <svg className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-lg font-medium text-gray-900">Exam Module</h3>
                    </div>
                    <p className="text-gray-500">Advanced proctoring system with object detection and head pose estimation.</p>
                    <div className="mt-4">
                      <Link
                        to="/exam-module"
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        Learn more
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'benefits' && (
                <motion.div 
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3"
                >
                  {/* Benefit Cards */}
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-4">For Students</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Real-time engagement feedback
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Personalized learning experience
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-4">For Educators</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Automated grading system
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Comprehensive analytics
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-4">For Institutions</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Scalable solution
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Cost-effective implementation
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'technology' && (
                <motion.div 
                  variants={staggerContainer}
                  className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2"
                >
                  {/* Technology Cards */}
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-4">AI Models</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition duration-300">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" alt="TensorFlow" className="h-8" />
                        <span className="text-gray-600">TensorFlow</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition duration-300">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png" alt="PyTorch" className="h-8" />
                        <span className="text-gray-600">PyTorch</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Infrastructure</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition duration-300">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png" alt="Flask" className="h-8" />
                        <span className="text-gray-600">Flask</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition duration-300">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png" alt="MongoDB" className="h-8" />
                        <span className="text-gray-600">MongoDB</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Stats Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-primary-50 py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Our Impact in Numbers
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            className="mt-8 sm:mt-10"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-4">
              {[
                { label: 'Active Users', value: '10K+', icon: '👥' },
                { label: 'Accuracy Rate', value: '85%', icon: '🎯' },
                { label: 'Time Saved', value: '60%', icon: '⏱️' },
                { label: 'Satisfaction', value: '92%', icon: '😊' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-4xl mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-4xl font-bold text-primary-600"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="mt-2 text-gray-600"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-white py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              What Our Users Say
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            className="mt-8 sm:mt-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  name: 'John Doe',
                  role: 'Professor, University of Colombo',
                  image: 'JD',
                  quote: 'EduSmart has revolutionized how we conduct online exams. The proctoring system is incredibly accurate and easy to use.'
                },
                {
                  name: 'Alice Smith',
                  role: 'Student, Computer Science',
                  image: 'AS',
                  quote: 'The engagement detection feature helps me stay focused during online lectures. It\'s like having a personal study coach!'
                },
                {
                  name: 'Robert Johnson',
                  role: 'IT Director, Education Institute',
                  image: 'RJ',
                  quote: 'Implementing EduSmart has significantly reduced our administrative workload while improving academic integrity.'
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-600 font-bold">{testimonial.image}</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Pricing Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gray-50 py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500">
              Select the perfect plan for your institution
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
          >
            {[
              {
                name: 'Basic',
                price: '$99',
                features: [
                  'Basic AI Proctoring',
                  'Up to 100 Students',
                  'Email Support',
                  'Basic Analytics'
                ],
                popular: false
              },
              {
                name: 'Professional',
                price: '$299',
                features: [
                  'Advanced AI Proctoring',
                  'Up to 500 Students',
                  'Priority Support',
                  'Advanced Analytics',
                  'Custom Branding'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: [
                  'Full AI Suite',
                  'Unlimited Students',
                  '24/7 Support',
                  'Custom Integration',
                  'Dedicated Account Manager'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ${
                  plan.popular ? 'border-2 border-primary-500' : ''
                }`}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/month</span>}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-500">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className={`block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white ${
                        plan.popular ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-white py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500">
              Find answers to common questions about EduSmart
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            className="mt-8 sm:mt-10"
          >
            <dl className="space-y-4 sm:space-y-6">
              {[
                {
                  question: 'How does the AI proctoring work?',
                  answer: 'Our AI proctoring system uses computer vision and machine learning to monitor student behavior during exams, detecting potential cheating attempts while respecting privacy.'
                },
                {
                  question: 'Is my data secure?',
                  answer: 'Yes, we use industry-standard encryption and security measures to protect all data. We are compliant with major data protection regulations.'
                },
                {
                  question: 'Can I customize the features?',
                  answer: 'Yes, our platform is highly customizable. You can choose which features to enable and configure them according to your needs.'
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                >
                  <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gradient-to-r from-primary-600 to-primary-700"
      >
        <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center lg:text-left"
            >
              <span className="block">Ready to get started?</span>
              <span className="block text-primary-200">Contact us today.</span>
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:mt-0"
            >
              <div className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
                >
                  Get Started
                </Link>
              </div>
              <div className="w-full sm:w-auto">
                <Link
                  to="/demo"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage; 