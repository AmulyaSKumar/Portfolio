import React from 'react';

const skillCategories = [
  {
    title: 'Frontend Technologies',
    skills: [  
      'HTML & CSS', 
      'TypeScript','ReactJS', 
      'Next.js','Tailwind CSS',
    ]
  },
  {
    title: 'Backend Technologies',
    skills: [
      'Spring Boot', 
      'Maven', 
      'Flask'
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      'MySQL', 
      'MongoDB', 
      'Firebase'
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      'Git', 
      'GitHub', 
    ]
  }
];

function Skills() {
  return (
    <div 
      id="skills" 
      className="min flex flex-col p-8 sm:p-16 lg:p-24 "
    >
      <h1 className="w-72 mb-8 tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl">
        Skills
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <h2 className="mb-4 text-xl font-semibold">{category.title}</h2>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li 
                  key={skillIndex} 
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Skills;
