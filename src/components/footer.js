import React from 'react';

const CodeFooter = () => {
  return (
    <footer className="text-[#6699CC] font-mono pt-20 py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-xl mb-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M22 2L11 13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
          Let's Connect
        </h3>
        <p className="mb-4">Ready to bring ideas to life? Let's Collabrate</p>
        <a href="mailto:amulyasshivakumar@gmail.com" className="inline-block bg-transparent text-white border border-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Contact Me
        </a>
      </div>
      <div className="text-center mt-4 text-xs opacity-75">
        Developed with ❤️ in Code
      </div>
    </footer>
  );
};

export default CodeFooter;
