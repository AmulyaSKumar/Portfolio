import React from 'react';
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaGraduationCap, FaCode } from 'react-icons/fa';

const achievementsData = {
    freelanceWork: [
        {
            id: 1,
            title: "Full Stack Developer",
            company: "GRL Logistics",
            date: "2024",
            description: "Developed and deployed a comprehensive transport management system for a logistics company. Built with modern web technologies and deployed using Hostinger for reliable hosting and performance.",
            technologies: ["HTML", "TailwindCSS", "Hostinger"],
            type: "Transport & Logistics"
        },
        {
            id: 2,
            title: "B2B Platform Developer",
            company: "EveryNeed Logistics",
            date: "Present",
            description: "Built a B2B business platform focused on transportation solutions. Created a scalable system to connect businesses with logistics providers, streamlining operations and improving efficiency.",
            technologies: ["Fultter", "Firebase", "Supbase", "API Integration"],
            type: "B2B Transportation"
        }
    ],
    awards: [
        {
            id: 1,
            title: "Award of Merit",
            event: "Enterprise Architecture Competition By Open Group",
            date: "01 August 2025",
            description: "Received an award for developing the architecture of a corporate medical society — a forward-thinking model that represents the future of medical retail and transportation.",
            icon: FaTrophy,
            category: "Competition"
        },
        {
            id: 2,
            title: "Second Price Winner",
            event: "Tech Tank Hackthon By RVCE,Bengaluru",
            date: "Jan 2025",
            description:"Received second prize for developing a solution to help fishermen avoid unintentionally crossing maritime borders.",
            icon: FaTrophy,
            category: "Competition"
        },
        {
            id: 3,
            title: "Participated in 48 hours Hackathon",
            event: "EduAIthon By RVCE,Bengaluru",
            date: "2025",
            description: "Built a platform enabling students, entrepreneurs, and mentors to communicate and collaborate, featuring AI-based mentorship support.",
            icon: FaMedal,
            category: "Academic"
        },
        
    ],
    
};

function Achievements() {
    return (
        <section id="achievements" className="py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1E293B] to-[#111827]"></div>
            <div className="absolute top-1/5 right-1/6 w-80 h-80 bg-[#4F46E5]/6 rounded-full blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-1/4 left-1/5 w-72 h-72 bg-[#06B6D4]/4 rounded-full blur-2xl animate-float"></div>
            
            {/* Floating particles */}
            <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-float opacity-40"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse-subtle opacity-50"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Achievements & <span className="text-gradient bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Freelance Work</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mx-auto rounded-full shadow-lg"></div>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mt-6">
                        Professional achievements, freelance projects, and milestones that mark my journey
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {/* Enhanced Freelance Work */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-lg flex items-center justify-center mr-3 shadow-lg">
                                <FaCode className="text-white text-lg" />
                            </div>
                            Freelance Projects
                        </h3>
                        <div className="space-y-6">
                            {achievementsData.freelanceWork.map((work, index) => (
                                <div key={work.id} className="glass-effect-strong group rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in-left" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-[#4F46E5]/30 group-hover:border-[#4F46E5]/60 transition-colors duration-300">
                                            <FaCode className="text-[#4F46E5] text-xl group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-3">
                                                <h4 className="text-lg font-semibold text-white">{work.title}</h4>
                                                <span className="px-3 py-1 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 text-[#06B6D4] rounded-full text-xs font-medium backdrop-blur-sm border border-[#4F46E5]/30">
                                                    {work.type}
                                                </span>
                                            </div>
                                            <p className="text-[#4F46E5] font-medium mb-2">{work.company}</p>
                                            <p className="text-gray-400 text-sm mb-3">{work.date}</p>
                                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{work.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {work.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-3 py-1 bg-gray-700/30 text-gray-300 rounded-lg text-xs font-medium backdrop-blur-sm border border-gray-600/20 hover:border-[#4F46E5]/50 transition-colors duration-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Awards & Recognition */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-lg flex items-center justify-center mr-3 shadow-lg">
                                <FaTrophy className="text-white text-lg" />
                            </div>
                            Awards & Recognition
                        </h3>
                        <div className="space-y-6">
                            {achievementsData.awards.map((award, index) => (
                                <div key={award.id} className="glass-effect-strong rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in-right" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-[#4F46E5]/30">
                                            <award.icon className="text-[#06B6D4] text-xl" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                                                <span className="px-3 py-1 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 text-[#06B6D4] rounded-full text-xs font-medium backdrop-blur-sm border border-[#4F46E5]/30">
                                                    {award.category}
                                                </span>
                                            </div>
                                            <p className="text-[#4F46E5] font-medium mb-1">{award.event}</p>
                                            <p className="text-gray-400 text-sm mb-2">{award.date}</p>
                                            <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
