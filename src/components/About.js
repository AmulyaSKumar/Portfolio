import React from 'react';

function About() {
    return (
        <section id="about" className="py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827]"></div>
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#4F46E5]/10 rounded-full blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-[#06B6D4]/8 rounded-full blur-2xl animate-float"></div>
            
            {/* Floating particles */}
            <div className="absolute top-1/5 left-1/6 w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-float opacity-40"></div>
            <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse-subtle opacity-50"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        About <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] mx-auto rounded-full shadow-lg"></div>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mt-6">
                        My story, philosophy, and educational background
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Personal Story */}
                    <div className="space-y-8 animate-fade-in-left">
                        <div className="bg-[#1F2937]/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-[#374151] shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                    My Journey
                                </h3>
                            </div>
                            <div className="relative">
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    My journey with technology began after my 10th, when I discovered how exciting coding could be. That spark led me to pursue a Diploma in Computer Science, where I graduated with a 9.9 CGPA and ranked 29th in DCET, which secured my admission into R.V. College of Engineering.
                                </p>
                                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#4F46E5] to-transparent rounded-full opacity-30"></div>
                            </div>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                Over the past 3+ years, I've had the privilege of working on diverse projects 
                                ranging from simple weather platforms to complex web applications. Each project 
                                has taught me something new and reinforced my belief that technology should 
                                serve humanity.
                            </p>
                        </div>

                        <div className="bg-[#1F2937]/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-[#374151] shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                    Philosophy
                                </h3>
                            </div>
                            <div className="relative">
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    I follow the principle of "Code with Purpose" - every solution I build focuses 
                                    on user experience, maintainability, and scalability. I believe in documented code that future developers (including myself) can easily 
                                    understand and build upon.
                                </p>
                                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#4F46E5] to-transparent rounded-full opacity-30"></div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Stats */}
                    <div className="space-y-8 animate-fade-in-right">
                        <div className="bg-[#1F2937]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#374151] shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                    Education
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div className="border-l-4 border-[#4F46E5] pl-6 hover:bg-[#4F46E5]/10 transition-colors duration-300 rounded-r-lg p-4">
                                    <h4 className="text-lg font-semibold text-white">Bachelor of Education</h4>
                                    <p className="text-gray-300 text-sm">Information Science & Engineering</p>
                                    <p className="text-gray-400 text-sm">RV College of Engineering, Bengaluru • 2023-2026 • CGPA: 8.77/10</p>
                                </div>
                                <div className="border-l-4 border-[#06B6D4] pl-6 hover:bg-[#06B6D4]/10 transition-colors duration-300 rounded-r-lg p-4">
                                    <h4 className="text-lg font-semibold text-white">Diploma</h4>
                                    <p className="text-gray-300 text-sm">Computer Science & Engineering</p>
                                    <p className="text-gray-400 text-sm">JSS Polytechnic for Women, Mysuru • 2020-2023 • CGPA: 9.9/10</p>
                                </div>
                                <div className="border-l-4 border-[#4F46E5] pl-6 hover:bg-[#4F46E5]/10 transition-colors duration-300 rounded-r-lg p-4">
                                    <h4 className="text-lg font-semibold text-white">High School-SSLC</h4>
                                    <p className="text-gray-400 text-sm">Nisarga Vidyanikethana, Kollegal • 2020</p>
                                </div>
                            </div>
                        </div>

                        {/* Personal Interests */}
                        <div className="bg-[#1F2937]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#374151] shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                    When I'm Not Coding
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-[#4F46E5]/20 text-[#D1D5DB] rounded-full text-sm border border-[#4F46E5]/30 hover:bg-[#4F46E5]/30 transition-colors duration-300">Dance</span>
                                <span className="px-4 py-2 bg-[#06B6D4]/20 text-[#D1D5DB] rounded-full text-sm border border-[#06B6D4]/30 hover:bg-[#06B6D4]/30 transition-colors duration-300">Cooking</span>
                                <span className="px-4 py-2 bg-[#4F46E5]/20 text-[#D1D5DB] rounded-full text-sm border border-[#4F46E5]/30 hover:bg-[#4F46E5]/30 transition-colors duration-300">Traveling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
