import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const strings = [
    'Full Stack Developer',
    'Developer',
    'Tech Enthusiast',
    "Enterprise Architect",
  ];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentString === strings[currentStringIndex]) {
        setTimeout(() => {
          setIsTyping(false);
        }, 500); // Pause duration before erasing
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(strings[currentStringIndex].slice(0, currentString.length + 1));
        }, 100); // Typing speed

        return () => clearTimeout(timeout);
      }
    } else {
      if (currentString === '') {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(currentString.slice(0, currentString.length - 1));
        }, 50); // Erasing speed

        return () => clearTimeout(timeout);
      }
    }
  }, [currentString, currentStringIndex, isTyping]);

  return (
    <div className="flex items-center justify-center lg:justify-start">
      <span
        className="font-medium text-[#6699CC] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 tracking-wide"
        aria-label={currentString}
      >
        {currentString}
      </span>
      <span className="blinking-cursor text-[#6699CC] text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-1">|</span>
    </div>
  );
};

export default Typewriter;
