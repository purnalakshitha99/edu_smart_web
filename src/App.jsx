import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LearningModule from './pages/LearningModule';
import ExamModule from './pages/ExamModule';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Team from './pages/Team';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/learning-module" element={<LearningModule />} />
            <Route path="/exam-module" element={<ExamModule />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/results" element={<Results />} />
            <Route path="/research" element={<Research />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 