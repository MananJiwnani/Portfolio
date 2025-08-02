import React from 'react'
import Marquee from 'react-fast-marquee'

const Skills = () => {

    const skills = [
        { name: 'HTML5', img: 'assets/Logos/Brand=html5, Style=Dark.svg' },
        { name: 'CSS', img: 'assets/Logos/Brand=css, Style=Dark.svg' },
        { name: 'JavaScript', img: 'assets/Logos/Brand=js, Style=Dark.svg' },
        { name: 'TailwindCSS', img: 'assets/Logos/Brand=tailwind, Style=Dark.svg' },
        { name: 'Bootstrap5', img: 'assets/Logos/Brand=bootstrap5, Style=Dark.svg' },
        { name: 'Flutter', img: 'assets/Logos/Brand=flutter, Style=Dark.svg' },
        { name: 'Figma', img: 'assets/Logos/Brand=figma, Style=Dark.svg' },
        { name: 'MongoDB', img: 'assets/Logos/Brand=mongodb, Style=Dark.svg' },
        { name: 'Firebase', img: 'assets/Logos/Brand=firebase, Style=Dark.svg' },
        { name: 'MySQL', img: 'assets/Logos/Brand=mysql, Style=Dark.svg' },
        { name: 'Django', img: 'assets/Logos/Brand=django, Style=Dark.svg' },
        { name: 'Git', img: 'assets/Logos/Brand=git, Style=Dark.svg' },
        { name: 'GitHub', img: 'assets/Logos/Brand=github, Style=Dark.svg' },
        { name: 'C++', img: 'assets/Logos/Brand=c++, Style=Dark.svg' },
        { name: 'Python', img: 'assets/Logos/Brand=python, Style=Dark.svg' },
        { name: 'Ubuntu', img: 'assets/Logos/Brand=ubuntu, Style=Dark.svg' },
    ];

    return (
        <div className="py-2 w-screen overflow-hidden bg-gray-900 text-white">
            <Marquee className='overflow-hidden' pauseOnHover={true} speed={80} gradient={false}>
                {skills.map((skill, idx) => (
                    <div key={idx} className="flex cursor-pointer items-center gap-1 mx-6">
                        <div className="Sphoto">
                            <img src={skill.img} alt={`${skill.name} logo`} className="h-12 w-auto" />
                        </div>
                        <div className="relative bottom-1 Sname font-mono mt-2 text-lg">{skill.name}</div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Skills
