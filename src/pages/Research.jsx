import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const [activeTab, setActiveTab] = useState('documents');

  const documents = [
    {
      category: "Project Documentation",
      items: [
        {
          title: "Terms of Reference (TOR)",
          type: "PDF",
          size: "2.4 MB",
          date: "2023-09-01",
          description: "Initial project scope and requirements document",
          link: "#"
        },
        {
          title: "Project Proposal",
          type: "PDF",
          size: "3.1 MB",
          date: "2023-09-15",
          description: "Detailed project proposal with methodology and timeline",
          link: "#"
        }
      ]
    },
    {
      category: "Progress Reports",
      items: [
        {
          title: "Progress Presentation I",
          type: "PPTX",
          size: "4.2 MB",
          date: "2023-12-15",
          description: "First progress presentation covering initial development phase",
          link: "#"
        },
        {
          title: "Progress Presentation II",
          type: "PPTX",
          size: "5.6 MB",
          date: "2024-02-15",
          description: "Second progress presentation showcasing implementation progress",
          link: "#"
        }
      ]
    },
    {
      category: "Final Deliverables",
      items: [
        {
          title: "Final Report",
          type: "PDF",
          size: "8.7 MB",
          date: "2024-04-01",
          description: "Comprehensive project report with all findings and results",
          link: "#"
        },
        {
          title: "Final Presentation",
          type: "PPTX",
          size: "6.3 MB",
          date: "2024-04-15",
          description: "Final project presentation with complete system overview",
          link: "#"
        }
      ]
    }
  ];

  const researchPapers = [
    {
      title: "AI-Powered Proctoring: A Novel Approach to Online Examination Security",
      authors: "Dr. Sarah Chen, Michael Rodriguez",
      journal: "Journal of Educational Technology",
      year: 2023,
      abstract: "This paper presents a novel approach to online examination proctoring using computer vision and machine learning techniques...",
      doi: "10.1234/jet.2023.001",
      link: "https://doi.org/10.1234/jet.2023.001"
    },
    {
      title: "Real-time Student Engagement Detection Using Deep Learning",
      authors: "Dr. James Wilson, Emily Zhang",
      journal: "International Conference on Educational Data Mining",
      year: 2023,
      abstract: "We propose a deep learning-based system for real-time detection of student engagement in online learning environments...",
      doi: "10.5678/edm.2023.002",
      link: "https://doi.org/10.5678/edm.2023.002"
    },
    {
      title: "Automated Assessment Systems: A Comprehensive Review",
      authors: "Dr. Sarah Chen, Dr. James Wilson",
      journal: "Computers & Education",
      year: 2022,
      abstract: "This comprehensive review examines the current state of automated assessment systems in education...",
      doi: "10.9012/ce.2022.003",
      link: "https://doi.org/10.9012/ce.2022.003"
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", description: "UI framework for building interactive user interfaces" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
        { name: "Framer Motion", description: "Animation library for React" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Flask", description: "Python web framework for building APIs" },
        { name: "MongoDB", description: "NoSQL database for storing application data" },
        { name: "TensorFlow", description: "Machine learning framework for AI models" }
      ]
    },
    {
      category: "AI/ML",
      items: [
        { name: "OpenCV", description: "Computer vision library for face and object detection" },
        { name: "PyTorch", description: "Deep learning framework for neural networks" },
        { name: "scikit-learn", description: "Machine learning library for data analysis" }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'documents':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 space-y-12"
          >
            {documents.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {category.items.map((doc, docIndex) => (
                    <motion.div
                      key={doc.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: docIndex * 0.1 }}
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                          <p className="text-gray-500 mb-4">{doc.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                              {doc.type}
                            </span>
                            <span className="flex items-center">
                              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {doc.date}
                            </span>
                            <span className="flex items-center">
                              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              {doc.size}
                            </span>
                          </div>
                        </div>
                        <a
                          href={doc.link}
                          className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
                        >
                          Download
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'papers':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 space-y-8"
          >
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.doi}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-2">Authors: {paper.authors}</p>
                <p className="text-gray-600 mb-2">Journal: {paper.journal} ({paper.year})</p>
                <p className="text-gray-500 mb-4">{paper.abstract}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">DOI: {paper.doi}</span>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
                  >
                    Read Paper
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'technologies':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {technologies.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              Research & Documentation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Explore our research papers, project documentation, and the technologies that power EduSmart.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 justify-center">
            {['documents', 'papers', 'technologies'].map((tab) => (
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

        {/* Content Section */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Research; 