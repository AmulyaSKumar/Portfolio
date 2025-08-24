import React from 'react';
import myImage from './../assets/main_image.png';
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from 'react-icons/ai';
import Typewriter from './Typewriter';
import GmailCopy from './GmailCopy';

function Main() {
  return (
    <section id="main" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-8 pt-24 sm:pt-32 relative">
      {/* Light section background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4F46E5]/5 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#4F46E5]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/6 w-48 h-48 bg-[#06B6D4]/5 rounded-full blur-2xl"></div>
      <div className="absolute right-1/6 top-1/6 w-3 h-3 bg-[#4F46E5] rounded-full animate-pulse opacity-60"></div>
      <div className="absolute left-1/4 bottom-1/4 w-2 h-2 bg-[#06B6D4] rounded-full animate-float opacity-40"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Text Column */}
          <div className="space-y-8">
            <div className="space-y-6">              
              <h1 className="text-fluid-5xl font-display font-bold text-[#111827] leading-tight text-balance">
                Hi! I'm <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Amulya</span>
              </h1>
            </div>

            {/* Typewriter section */}
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#E0E7FF]/50">
              <div className="text-[#4F46E5] text-fluid-lg font-mono font-medium">
                <Typewriter />
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#E0E7FF]/40">
              <p className="text-[#1F2937] text-fluid-base font-body leading-relaxed text-balance">
                I'm a passionate developer with expertise in{' '}
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent font-semibold">
                  full-stack applications
                </span>
                , skilled in SQL, MongoDB, Flask, Spring Boot, and React.
                <br className="hidden sm:block" />
                <span className="mt-2 block">
                  Dedicated to{' '}
                  <span className="text-[#4F46E5] font-semibold">
                    transforming ideas into digital solutions
                  </span>
                  .
                </span>
              </p>
            </div>

            {/* Contact section */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#E0E7FF]/60">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#4F46E5] rounded-full"></div>
                    <span className="text-[#1F2937] text-sm font-medium">Ready to collaborate? Let's talk:</span>
                  </div>
                  <GmailCopy />
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#4F46E5]/30 to-transparent flex-1"></div>
                  <span className="text-[#4B5563] text-xs uppercase tracking-widest font-medium">Connect with me</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#4F46E5]/30 to-transparent flex-1"></div>
                </div>
                
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a 
                    rel="noreferrer" 
                    href="https://www.linkedin.com/in/amulya-s-082904261" 
                    target="_blank" 
                    className="bg-white/70 p-4 rounded-xl shadow-sm border border-[#E0E7FF]/40 hover:bg-white hover:shadow-md hover:border-[#4F46E5]/30 transition-all duration-200"
                  >
                    <AiFillLinkedin size={24} className="text-[#4F46E5] transition-colors duration-200" />
                  </a>
                  
                  <a 
                    rel="noreferrer" 
                    href="https://github.com/AmulyaSKumar" 
                    target="_blank" 
                    className="bg-white/70 p-4 rounded-xl shadow-sm border border-[#E0E7FF]/40 hover:bg-white hover:shadow-md hover:border-[#4F46E5]/30 transition-all duration-200"
                  >
                    <AiFillGithub size={24} className="text-[#111827] transition-colors duration-200" />
                  </a>
                  
                  <a 
                    rel="noreferrer" 
                    href="https://drive.google.com/file/d/1ccmupSuAfVdekuc4W5vUqtWkzB405a5w/view?usp=sharing" 
                    target="_blank" 
                    className="bg-white/70 p-4 rounded-xl shadow-sm border border-[#E0E7FF]/40 hover:bg-white hover:shadow-md hover:border-[#4F46E5]/30 transition-all duration-200"
                  >
                    <AiFillFilePdf size={24} className="text-[#F43F5E] transition-colors duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced image column */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Image with colored border */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-[#4F46E5] via-[#06B6D4] to-[#4F46E5] blur-sm animate-pulse-subtle"></div>
              <img 
                src={myImage} 
                alt="Amulya - Full Stack Developer" 
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl" 
              />
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}export default Main;
