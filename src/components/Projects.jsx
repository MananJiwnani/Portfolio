import {React, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import { FaCheckSquare, FaShoppingCart, FaUser, FaFolderOpen } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const projects = [
    {
      title: 'Taskify App',
      description:
        'A task management app with real-time collaboration, built using React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      icon: <FaCheckSquare />,
    },
    {
      title: 'E-Shop Platform',
      description:
        'A scalable e-commerce platform with Next.js, Stripe payments, and TailwindCSS.',
      technologies: ['Next.js', 'Stripe', 'TailwindCSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      icon: <FaShoppingCart />,
    },
    {
      title: 'Portfolio Site',
      description:
        'My personal portfolio showcasing my work, built with HTML, TailwindCSS, and Alpine.js.',
      technologies: ['HTML', 'TailwindCSS', 'Alpine.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      icon: <FaUser />,
    },
  ];

  return (
    <div id='projects' className="border-t border-gray-700 bg-gray-950 py-12 px-4">
      <div className="subheading mb-12 justify-center font-bold text-3xl md:text-4xl flex items-center">
        <FaFolderOpen className='text-2xl md:text-3xl mr-3 text-green-400' />
        <h2 className='font-mono text-green-400 mr-1'>My</h2>
        <h2 className='font-mono'>Projects</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 items-center">
        {projects.map((project, index) => (
          <div data-aos="zoom-in">
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            icon={project.icon}
          />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

