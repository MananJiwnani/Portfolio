import React, { useState } from 'react'
import './../index.css'
import reactLogo from '.././assets/react.svg'
import { FaCode, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [open, setopen] = useState(false)
  return (
    <>
    <div className="fixed top-0 z-10 w-screen overflow-hidden">
        <div className={`flex justify-between w-screen bg-black px-6 md:px-10 lg:px-20 py-4 transition-all ease-in-out duration-100 ${!open ? 'border-b border-gray-400' : ''}`}>
            <div className="left flex align-center text-center gap-4">
                <div className="logo flex align-center text-center">
                    <FaCode className='text-green-400 text-3xl drop-shadow-[0_0_14px_#86efac]'/>
                </div>
                <div className="name text-white text-2xl font-semibold font-mono">Manan Jiwnani</div>
            </div>
            <div className="right flex align-center text-center relative top-1.5">
                <FaTimes className={`lg:hidden absolute right-1 md:right-2 text-gray text-xl transition-all duration-300 ease-in-out ${open? 'opacity-100':'opacity-0'}`} onClick={()=>setopen(!open)}/>
                    
                <FaBars className={`lg:hidden absolute right-1 md:right-2 text-gray text-xl transition-all duration-300 ease-in-out ${!open? 'opacity-100':'opacity-0'}`} onClick={()=>setopen(!open)}/>
                
                <div className="menu hidden lg:flex gap-8 font-mono">
                    <a href="#hero">About</a>
                    <a href="#experience">Experience</a> 
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

            </div>
        </div>
        <div
            className={`mobile-menu overflow-hidden bg-black w-screen font-mono flex flex-col gap-1 pb-3 px-6 md:px-10 transition-all duration-300 ease-in-out
                ${open ? 'max-h-40 opacity-100 border-b border-gray-400' : 'max-h-0 opacity-0 border-b-0'}`}
            >
                <a href="#hero" className="py-1">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects" className="py-1">Projects</a>
                <a href="#contact" className="py-1">Contact</a>
            </div>
    </div>
    </>
  )
}

export default Navbar