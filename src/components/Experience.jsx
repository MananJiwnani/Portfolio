import React, { useEffect } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    const experience = [
        {
            company: "Sprinklr",
            role: "Product Engineer Intern",
            duration: "JUNE 2026 - JULY 2026",
            logo: "assets/Exp/sprinklr.jpeg",
            description: "Upcoming Product Engineer Intern for Summer 2026 at Sprinklr.",
        },
        {
            company: "Fluxus",
            role: "Web Team Coordinator",
            duration: "OCT 2024 - MAR 2025",
            logo: "assets/Exp/fluxus.jpeg",
            description: "Worked in Fluxus Web Team to build the website for Central India's largest techno-cultural fest.",
        },
    ];


    return (
        <>
            <div id='experience' className="px-6 md:px-10 pt-14 pb-16 bg-black w-screen overflow-hidden">
                <div className="subheading justify-center font-bold text-3xl md:text-4xl flex items-center">
                    <FaBriefcase className='text-2xl md:text-3xl mr-3 text-green-400' />
                    <h2 className='font-mono mr-1'>Work </h2>
                    <h2 className='font-mono text-green-400'>Experience</h2>
                </div>

                <div className="flex flex-col gap-10 px-2 md:px-6 lg:px-10 mt-10 md:mt-8">
                    {experience.map((exp, idx) => (
                        <div data-aos="fade-up" className="card gap-6 flex">
                            <div className="left">
                                <div className="logo flex justify-center items-center rounded-lg bg-gray-800 h-10 w-10 md:h-14 md:w-14">
                                    <img src={exp.logo} className='h-6 md:h-10 rounded-lg' alt="" />
                                </div>
                                <div className="relative left-1/2 transform -translate-x-1/2 h-[calc(100%-3rem)] w-[1px] dark:bg-gray-700"></div>
                            </div>
                            <div className="right flex flex-col font-mono">
                                <div className="company text-lg font-bold">{exp.company}</div>
                                <div className="role">{exp.role}</div>
                                <div className="duration text-gray-500">{exp.duration}</div>
                                <div className="desc text-sm">{exp.description}</div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Experience