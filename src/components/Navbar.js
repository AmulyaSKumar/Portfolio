import { useState, useEffect, useCallback } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('main');
    const [scrolled, setScrolled] = useState(false);
    
    // Track scroll position for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Track active section based on scroll position
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = ['main', 'about', 'experience', 'skills', 'projects', 'achievements'];
            const scrollPosition = window.scrollY + 200;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScrollSpy);
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({
                behavior: 'smooth',
                duration: 2000,
                block: 'start',
                inline: 'nearest',
            });
            setShowMenu(false); // Close mobile menu after clicking
        }
    };

    const handleWindowResize = useCallback(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 768 && showMenu) {
            setShowMenu(false);
        }
    }, [showMenu]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);


    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'achievements', label: 'Achievements' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 border-b border-gray-200 shadow-lg py-2' 
                : 'bg-white/80 border-b border-gray-100 shadow-md py-0'
        }`}>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center h-16 sm:h-18">
                    {/* Clean Logo/Brand */}
                    <div 
                        className="text-fluid-xl font-display font-bold text-gray-900 cursor-pointer transition-colors duration-200 hover:text-[#4F46E5]" 
                        onClick={() => scrollToComponent('main')}
                    >
                        Amulya
                    </div>

                    {/* Clean Desktop Menu */}
                    <ul className="hidden lg:flex items-center space-x-6 font-medium">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.id;
                            return (
                                <li key={item.id}>
                                    <button
                                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                                            isActive 
                                                ? 'text-white bg-gradient-to-r from-[#4F46E5] to-[#06B6D4]' 
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                        onClick={() => scrollToComponent(item.id)}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Enhanced Mobile Menu Button */}
                    <button
                        className="lg:hidden bg-gray-100 p-3 rounded-xl border border-[#4F46E5]/20 text-gray-600 hover:text-gray-900 hover:border-[#4F46E5]/40 transition-all duration-300 hover-scale relative group"
                        onClick={() => setShowMenu(!showMenu)}
                        aria-label="Toggle menu"
                    >
                        <div className="relative z-10">
                            {showMenu ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/5 to-[#06B6D4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {showMenu && (
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full animate-pulse"></div>
                        )}
                    </button>
                </div>

                {/* Enhanced Mobile Menu with animations and active states */}
                {showMenu && (
                    <div className="lg:hidden animate-slide-in-bottom">
                        <div className="bg-white/95 border-t border-[#4F46E5]/30 shadow-2xl backdrop-blur-xl mx-4 my-4 rounded-2xl overflow-hidden">
                            {/* Mobile menu header */}
                            <div className="px-6 py-4 border-b border-[#4F46E5]/20">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 text-sm font-medium tracking-wide">Navigation</span>
                                    <div className="w-12 h-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full"></div>
                                </div>
                            </div>
                            
                            <ul className="py-4 space-y-2">
                                {navItems.map((item, index) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <li key={item.id}>
                                            <button
                                                className={`w-full text-left block px-6 py-4 text-fluid-lg font-body font-semibold transition-all duration-300 cursor-pointer rounded-xl mx-2 relative group ${
                                                    isActive 
                                                        ? 'text-white bg-gradient-to-r from-[#4F46E5]/80 to-[#06B6D4]/60 border-l-4 border-[#4F46E5]' 
                                                        : 'text-gray-600 hover:text-gray-900 hover:bg-[#4F46E5]/10'
                                                }`}
                                                onClick={() => scrollToComponent(item.id)}
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="relative z-10">{item.label}</span>
                                                    {isActive && (
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full animate-pulse"></div>
                                                    )}
                                                </div>
                                                
                                                {/* Active state background */}
                                                {isActive && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/10 to-[#06B6D4]/5 rounded-xl"></div>
                                                )}
                                                
                                                {/* Hover effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/5 to-[#06B6D4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                
                                                {/* Side indicator */}
                                                <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 h-8 bg-gradient-to-b from-[#4F46E5] to-[#06B6D4] rounded-full transition-all duration-300 ${
                                                    isActive ? 'w-1 opacity-100' : 'w-0 opacity-0 group-hover:w-0.5 group-hover:opacity-50'
                                                }`}></div>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            
                            {/* Mobile menu footer */}
                            <div className="px-6 py-4 border-t border-[#4F46E5]/20 bg-gradient-to-r from-[#4F46E5]/5 to-[#06B6D4]/5">
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-1 h-1 bg-[#4F46E5] rounded-full animate-pulse"></div>
                                    <div className="w-1 h-1 bg-[#06B6D4] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="w-1 h-1 bg-[#4F46E5] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
