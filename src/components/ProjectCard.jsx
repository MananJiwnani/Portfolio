import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  icon,
}) => {
  return (
    <div className="bg-white w-[340px] font-mono rounded-2xl overflow-hidden border border-gray-700">
      
      <div className="bg-black h-min-[270px] text-white p-6">
        
        <div className="flex flex-col justify-center items-center gap-3 mb-3">
          <div className="text-green-400 bg-[#121b2d] p-3 rounded-full text-3xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 hidden sm:flex text-sm mb-4 leading-snug md:leading-normal">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="hidden sm:flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-gray-300 text-[12px] bg-[#121b2d] px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className='flex justify-center sm:justify-start'>

          {/* Links */}
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-100"
              >
                <FaGithub size={20} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-100"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;