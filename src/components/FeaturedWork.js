import React from 'react';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

function FeaturedWork() {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-[#F3F4F6] to-[#F9FAFB]"></div>
      <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-[#4F46E5]/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 left-1/6 w-72 h-72 bg-[#06B6D4]/4 rounded-full blur-2xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Small Badge */}
        <div className="flex items-center justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/10 to-[#06B6D4]/10 border border-[#4F46E5]/30 text-sm font-medium text-[#4F46E5]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F46E5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F46E5]"></span>
            </span>
            Featured Client Work
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                GRL Logistics
              </h2>
              <p className="text-[#4F46E5] font-semibold text-lg">Transport Management System</p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Built and deployed a comprehensive <span className="font-semibold text-[#4F46E5]">transport management system</span> for GRL Logistics—a real client in the logistics industry.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] flex items-center justify-center flex-shrink-0 mt-1">
                  <FaArrowRight className="text-white text-xs" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Real-world deployment</h4>
                  <p className="text-gray-600 text-sm">Hosted on Hostinger with production-grade reliability and performance optimization</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] flex items-center justify-center flex-shrink-0 mt-1">
                  <FaArrowRight className="text-white text-xs" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Live in production</h4>
                  <p className="text-gray-600 text-sm">Currently handling real logistics operations and managing transport workflows</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] flex items-center justify-center flex-shrink-0 mt-1">
                  <FaArrowRight className="text-white text-xs" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Custom-built solution</h4>
                  <p className="text-gray-600 text-sm">Tailored to client requirements with modern web technologies (HTML, TailwindCSS)</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'TailwindCSS', 'JavaScript', 'Hostinger'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-[#4F46E5]/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://grllogistics.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                View Live Project
              </a>
            </div>
          </div>

          {/* Right Side - Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Stat Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#E0E7FF]/40 hover:shadow-lg hover:border-[#4F46E5]/30 transition-all duration-300">
              <p className="text-gray-600 text-sm font-medium mb-2">Project Status</p>
              <p className="text-2xl font-bold text-[#4F46E5]">Live</p>
              <p className="text-gray-600 text-xs mt-1">In production since 2024</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#E0E7FF]/40 hover:shadow-lg hover:border-[#4F46E5]/30 transition-all duration-300">
              <p className="text-gray-600 text-sm font-medium mb-2">Client Type</p>
              <p className="text-2xl font-bold text-[#06B6D4]">Logistics</p>
              <p className="text-gray-600 text-xs mt-1">Real-world B2B client</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#E0E7FF]/40 hover:shadow-lg hover:border-[#4F46E5]/30 transition-all duration-300">
              <p className="text-gray-600 text-sm font-medium mb-2">Commitment</p>
              <p className="text-2xl font-bold text-[#4F46E5]">Full-Stack</p>
              <p className="text-gray-600 text-xs mt-1">Design to deployment</p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#E0E7FF]/40 hover:shadow-lg hover:border-[#4F46E5]/30 transition-all duration-300">
              <p className="text-gray-600 text-sm font-medium mb-2">Impact</p>
              <p className="text-2xl font-bold text-[#06B6D4]">✓ Proof</p>
              <p className="text-gray-600 text-xs mt-1">Concrete portfolio piece</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
