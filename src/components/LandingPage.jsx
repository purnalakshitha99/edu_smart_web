import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <Icon className="h-12 w-12 text-primary-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing Remote Education Integrity
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Advanced AI-powered solutions for secure and reliable remote examinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Request Demo
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <Section>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Solution?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={ShieldCheckIcon}
                title="Enhanced Security"
                description="Advanced object detection and head pose estimation to prevent cheating"
              />
              <FeatureCard
                icon={ChartBarIcon}
                title="Data-Driven Insights"
                description="Comprehensive analytics and reporting for better decision making"
              />
              <FeatureCard
                icon={AcademicCapIcon}
                title="Academic Integrity"
                description="Maintain the highest standards of academic excellence"
              />
            </div>
          </Section>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Section>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Who Benefits?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <UserGroupIcon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Educational Institutions</h3>
                <p className="text-gray-600">
                  Enhance exam security while maintaining credibility and cost-effectiveness
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ShieldCheckIcon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certification Bodies</h3>
                <p className="text-gray-600">
                  Ensure rigorous compliance while maintaining quality standards
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <Section>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Remote Education?
              </h2>
              <p className="text-xl mb-8">
                Join leading institutions in securing the future of remote learning
              </p>
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Started Today
              </button>
            </div>
          </Section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: contact@example.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">GDPR Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 