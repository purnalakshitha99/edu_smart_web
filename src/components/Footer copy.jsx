import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              EduSmart
            </Link>
            <p className="mt-4 text-gray-500">
              Revolutionizing e-learning with AI-powered intelligence for enhanced student engagement and academic integrity.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-500 hover:text-gray-900">
                  Learning Module
                </Link>
              </li>
              <li>
                <Link to="/exam-module" className="text-base text-gray-500 hover:text-gray-900">
                  Exam Module
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="text-base text-gray-500 hover:text-gray-900">
                  Methodology
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-base text-gray-500 hover:text-gray-900">
                  Results
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:contact@edusmart.lk" className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/edusmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {currentYear} EduSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 