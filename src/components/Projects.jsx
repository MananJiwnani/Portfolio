import {React, useEffect, useState} from 'react';
import ProjectCard from './ProjectCard';
import { FaShoppingCart, FaUser, FaFolderOpen, FaBrain, FaRegCalendarAlt, FaHome, FaTicketAlt } from 'react-icons/fa';
import { GiSnake } from 'react-icons/gi';
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

  const all_projects = [
    {
      title: 'Mental Wellness App',
      description:
        'A Mental Health Wellness web application for IIT Indore, serving 3000+ students.',
      technologies: ['React.js', 'PostgreSQL', 'Prisma'],
      githubUrl: 'https://github.com/NSuryansh/Built_it',
      liveUrl: 'https://wellness.iiti.ac.in/',
      icon: <FaBrain />,
    },
    {
      title: 'Event Management System',
      description:
        'A web-based application designed to streamline the organization and management of college fests.',
      technologies: ['React.js', 'MySQL', 'Django'],
      githubUrl: 'https://github.com/tanveeiii/Event-Management-System',
      liveUrl: '',
      icon: <FaRegCalendarAlt />,
    },
    {
      title: 'Rental Homes Website',
      description:
        'A web app to simplify property listing, booking, and rental management for owners and tenants.',
      technologies: ['Ejs', 'CSS', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/MananJiwnani/Rental-Homes-Website/tree/master',
      liveUrl: 'https://rentestate-vqpn.onrender.com/',
      icon: <FaHome />,
    },
    {
      title: 'Event Ticketing System',
      description:
        'An Ethereum DApp for creating and selling NFT event tickets without intermediaries.',
      technologies: ['React.js', 'Solidity', 'Web3.js'],
      githubUrl: 'https://github.com/tanveeiii/Event-Ticketing-System',
      liveUrl: '',
      icon: <FaTicketAlt />,
    },
    {
      title: 'Snake Game',
      description:
        'A turn-based Snake game built using object-oriented programming in C++, with input-driven movement.',
      technologies: ['C++'],
      githubUrl: 'https://github.com/MananJiwnani/Snake',
      liveUrl: '',
      icon: <GiSnake />,
    },
    {
      title: 'Portfolio Site',
      description:
        'My personal portfolio showcasing my work, built with React and TailwindCSS.',
      technologies: ['React.js', 'TailwindCSS'],
      githubUrl: 'https://github.com/MananJiwnani/Portfolio',
      liveUrl: 'https://mananjiwnani.github.io/Portfolio/',
      icon: <FaUser />,
    },
  ];

  const projects = all_projects.slice(0,6);

  return (
    <div id='projects' className="border-t border-gray-700 bg-gray-950 py-12 px-4">
      <div className="subheading mb-12 justify-center font-bold text-3xl md:text-4xl flex items-center">
        <FaFolderOpen className='text-2xl md:text-3xl mr-3 text-green-400' />
        <h2 className='font-mono text-green-400 mr-1'>My</h2>
        <h2 className='font-mono'>Projects</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center">
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

