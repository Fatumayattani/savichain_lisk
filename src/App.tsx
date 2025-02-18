import React from 'react';
import { Shield, Award, Users, CheckCircle, Globe, Database, Link } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Savi<span className="text-blue-600">Chain</span></span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition">How it Works</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Verify Skills. Build Trust.
              <span className="block text-blue-600">Empower Africa.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              SaviChain revolutionizes professional validation in Africa through Lisk smart contracts,
              creating transparent and verifiable records of skills and expertise.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose SaviChain?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Smart Contract Verified"
              description="Immutable and transparent verification of skills using Lisk blockchain smart contracts."
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-blue-600" />}
              title="Skill Validation"
              description="Comprehensive skill assessment and validation process ensuring credibility."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="African Focus"
              description="Tailored specifically for African professionals, addressing unique regional needs."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How SaviChain Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              number="1"
              icon={<CheckCircle className="w-6 h-6 text-blue-600" />}
              title="Register & Submit"
              description="Create your profile and submit your skills and credentials for verification."
            />
            <ProcessCard
              number="2"
              icon={<Database className="w-6 h-6 text-blue-600" />}
              title="Smart Contract Verification"
              description="Your submissions are verified through our Lisk-powered smart contract network."
            />
            <ProcessCard
              number="3"
              icon={<Globe className="w-6 h-6 text-blue-600" />}
              title="Global Access"
              description="Showcase your verified skills to employers and opportunities worldwide."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Validate Your Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join SaviChain today and become part of Africa's trusted professional network.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Link className="w-5 h-5 text-blue-500 mr-2" />
                <h3 className="text-white font-bold text-lg">SaviChain</h3>
              </div>
              <p className="text-sm">
                Empowering African professionals through smart contract-verified credentials.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2024 SaviChain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessCard({ number, icon, title, description }) {
  return (
    <div className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center mb-4">
        <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold mr-2">
          {number}
        </span>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;