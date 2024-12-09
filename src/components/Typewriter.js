import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const strings = [
    'Full Stack Developer',
    'Developer',
    'Tech Enthusiast',
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
    <div>
      <span
        className="font-medium dark:font-normal text-black dark:text-[#6699CC] text-[1.5rem] sm:text-[2rem] mb-2"
        aria-label={currentString}
      >
        {currentString}
      </span>
      <span className="blinking-cursor">|</span>
    </div>
  );
};

export default Typewriter;
