import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const SkillBar = ({ skill, index }) => (
    <div className="glass-effect-strong group rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
          </div>
        <span className="text-[#4F46E5] font-bold text-lg">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-700/30 rounded-full h-3 mb-3 overflow-hidden backdrop-blur-sm border border-gray-600/20">
        <div 
          className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${skill.level}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1E293B] to-[#111827]"></div>
      <div className="absolute top-1/6 left-1/5 w-80 h-80 bg-[#4F46E5]/6 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/5 right-1/6 w-72 h-72 bg-[#06B6D4]/4 rounded-full blur-2xl animate-float"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/5 w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-float opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse-subtle opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-gradient bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mt-6">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {Object.entries(skillsData).map(([key, category], index) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-lg'
                  : 'glass-effect text-gray-300 hover:text-white border border-gray-600/20 hover:border-[#4F46E5]/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {activeCategory === key && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 rounded-xl animate-pulse-subtle"></div>
              )}
              <span className="relative z-10">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {skillsData[activeCategory]?.skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
