import React from 'react';

const CodeFooter = () => {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827]"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#4F46E5]/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-[#06B6D4]/8 rounded-full blur-2xl animate-float"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/5 left-1/6 w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-float opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse-subtle opacity-50"></div>
      
      <div className="container mx-auto text-center relative z-10 px-6">
        <h3 className="text-2xl mb-6 font-bold text-white flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
          Let's <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent ml-2">Connect</span>
        </h3>
        <p className="mb-8 text-gray-300 text-lg max-w-md mx-auto">Ready to bring ideas to life? Let's collaborate on your next project!</p>  
      </div>
    </footer>
  );
};

export default CodeFooter;
