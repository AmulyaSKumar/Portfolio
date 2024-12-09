import { useState, useEffect } from 'react';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({
                behavior: 'smooth',
                duration: 2000,
                block: 'start',
                inline: 'nearest',
            });
        }
    };

    const handleWindowResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 640 && showMenu) {
            setShowMenu(false);
        }
    };


    return (
        <div className="flex mt-[-2px] justify-between py-[2rem] pl-[3.5rem] pr-[3.5rem] sm:px-[1.5rem] items-center relative">
            {!showMenu && (
                <ul className="flex justify-end font-[400] text-white text-custom-20 gap-[5rem] md:gap-[3rem] lg:gap-[4rem] ml-auto">
                    <a
                        className="tracking-wider cursor-pointer hover:underline hover:underline-offset-4 hover:text-white hover:decoration-[#5C4DCE]"
                        onClick={() => scrollToComponent('experience')}
                    >
                        Experience
                    </a><a
                        className="tracking-wider cursor-pointer hover:underline hover:underline-offset-4 hover:text-white hover:decoration-[#5C4DCE]"
                        onClick={() => scrollToComponent('skills')}
                    >
                        Skills
                    </a>
                    <a
                        className="tracking-wide cursor-pointer hover:underline hover:underline-offset-4 hover:text-white hover:decoration-[#5C4DCE]"
                        onClick={() => scrollToComponent('projects')}
                    >
                        Projects
                    </a>
                    
                </ul>
            )}
        </div>
    );
}

export default Navbar;
