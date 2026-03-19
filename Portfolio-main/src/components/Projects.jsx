import React from 'react';
import Project from './Project';
import data from './../data/projectsData.js';

function Projects() {
  return (
    <section id='projects' className='py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden'>
      {/* Light Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] via-[#F3F4F6] to-[#F9FAFB]"></div>
      <div className="absolute top-1/5 right-1/5 w-80 h-80 bg-[#4F46E5]/6 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-[#06B6D4]/4 rounded-full blur-2xl animate-float"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-float opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse-subtle opacity-50"></div>
      <div className="absolute top-2/3 left-1/6 w-2 h-2 bg-[#4F46E5] rounded-full animate-pulse-subtle opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-gradient bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mt-6">
            A showcase of my recent work, featuring modern technologies and innovative solutions
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {data.ProjectsData.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Project 
                image={project.img}
                name={project.name}
                live={project.live}
                source={project.source}
                desc={project.description}
                stack={project.stack}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
