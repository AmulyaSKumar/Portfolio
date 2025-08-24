import React, { useState } from 'react';
import data from './../data/experienceData.js';

function Experience() {
  return (
    <section id="experience" className='py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden'>
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827]"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#4F46E5]/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-[#06B6D4]/8 rounded-full blur-2xl animate-float"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/5 left-1/6 w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-float opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse-subtle opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mt-6">
            My professional journey through innovative projects and impactful contributions
          </p>
        </div>

        {/* Timeline Experience Cards */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#4F46E5]/30 transform md:-translate-x-px"></div>
          
          <div className="space-y-12">
            {data.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Experience Card
function ExperienceCard({ experience, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center">
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] border-4 border-[#1F2937] rounded-full transform md:-translate-x-2 z-10 shadow-lg"></div>
      
      {/* Experience Card */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:ml-auto md:pl-8' : 'md:pr-8'} ml-20 md:ml-0`}>
        <div className="glass-effect-light rounded-xl p-6 hover:shadow-lg transition-all duration-300 shadow-md animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div className="flex-1">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-[#111827]">
                  {experience.title}
                </h3>
                <p className="text-[#4F46E5] font-semibold">{experience.org}</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#4B5563] mb-3">
                <span>{experience.date}</span>
                <span>•</span>
                <span>{experience.location}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mt-3 sm:mt-0">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                experience.type === 'Full-time' 
                  ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30' 
                  : experience.type === 'Internship' 
                  ? 'bg-[#4F46E5]/20 text-[#4F46E5] border border-[#4F46E5]/30'
                  : 'bg-[#D946EF]/20 text-[#D946EF] border border-[#D946EF]/30'
              }`}>
                {experience.type}
              </span>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 px-3 py-1 bg-[#4F46E5]/10 hover:bg-[#4F46E5]/20 text-[#4F46E5] rounded-lg text-xs font-medium transition-colors duration-200 border border-[#4F46E5]/30"
              >
                {isExpanded ? 'Less' : 'More'}
                <div className={`w-2 h-2 border-r border-b border-[#4F46E5] transform transition-transform duration-200 ${
                  isExpanded ? '-rotate-135' : 'rotate-45'
                }`}></div>
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#1F2937] text-base leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 space-y-6">
              {/* Responsibilities */}
              {experience.responsibilities && experience.responsibilities.length > 0 && (
                <div>
                  <h4 className="text-[#111827] font-semibold mb-3 text-sm flex items-center gap-2">
                    <div className="w-2 h-4 bg-[#4F46E5] rounded-full"></div>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-[#374151] flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#4F46E5] rounded-full mt-1.5 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div>
                  <h4 className="text-[#111827] font-semibold mb-3 text-sm flex items-center gap-2">
                    <div className="w-2 h-4 bg-[#06B6D4] rounded-full"></div>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-[#374151] flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#06B6D4] rounded-full mt-1.5 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Technologies */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-[#F3F4F6] text-[#4F46E5] rounded-lg text-xs font-medium border border-[#E0E7FF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
 