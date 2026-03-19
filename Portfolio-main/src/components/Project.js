import React from 'react';
import { AiFillGithub, AiOutlineEye } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects({ image, name, live, source, desc, stack }) {
  return (
    <div className='card-hover group rounded-2xl p-6 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100'>
        {/* Project Image */}
        <div className='relative overflow-hidden rounded-xl mb-6'>
            <img 
                alt='project' 
                src={image} 
                className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110' 
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            {/* Overlay buttons */}
            <div className='absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                {live && (
                    <a 
                        href={live} 
                        target='_blank' 
                        rel='noreferrer' 
                        className='bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#4F46E5] transition-all duration-300 transform hover:scale-110'
                    >
                        <AiOutlineEye className='w-5 h-5' />
                    </a>
                )}
                {source && (
                    <a 
                        href={source} 
                        target='_blank' 
                        rel='noreferrer' 
                        className='bg-white/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#06B6D4] transition-all duration-300 transform hover:scale-110'
                    >
                        <AiFillGithub className='w-5 h-5' />
                    </a>
                )}
            </div>
        </div>
        
        {/* Project Content */}
        <div className='space-y-4'>
            <h3 className='text-xl font-bold text-gray-900 group-hover:text-[#4F46E5] transition-colors duration-300'>{name}</h3>
            <p className='text-gray-700 text-sm leading-relaxed line-clamp-3'>{desc}</p>
            
            {/* Tech Stack */}
            <div className='space-y-2'>
                <span className='text-gray-600 text-sm font-medium'>Technologies:</span>
                <div className='flex flex-wrap gap-2'>
                    {stack && stack.map((tech, index) => (
                        <span 
                            key={index} 
                            className='px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:border-[#4F46E5]/50 hover:bg-gray-50 transition-colors duration-300'
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Action Buttons */}
            <div className='flex gap-3 pt-2'>
                {live && (
                    <a 
                        href={live} 
                        target='_blank' 
                        rel='noreferrer' 
                        className='flex items-center gap-2 px-4 py-2 rounded-xl text-sm bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white hover:shadow-md hover:shadow-indigo-500/20 transition-all duration-300 flex-1 justify-center'
                    >
                        <FaExternalLinkAlt className='w-3 h-3' />
                        Live Demo
                    </a>
                )}
                {source && (
                    <a 
                        href={source} 
                        target='_blank' 
                        rel='noreferrer' 
                        className='flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm bg-white text-gray-700 hover:text-[#4F46E5] hover:border-[#4F46E5]/50 transition-all duration-300 flex-1 justify-center'
                    >
                        <AiFillGithub className='w-4 h-4' />
                        Code
                    </a>
                )}
            </div>
        </div>
    </div>
  );
}

export default Projects;
