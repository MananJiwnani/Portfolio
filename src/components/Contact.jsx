import React from 'react'
import { FaGlobe, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import EatSleepCodeRepeat from './EatSleepCodeRepeat'


const Contact = () => {
  return (
    <div id='contact' className='bg-black flex flex-col items-center px-6 py-12 border-t border-gray-700'>
        <div className="subheading justify-center font-bold text-3xl md:text-4xl flex items-center">
            <FaGlobe className='text-2xl md:text-3xl mr-3 text-green-400' />
            <h2 className='font-mono'>Get.In.</h2>
            <h2 className='font-mono text-green-400'>Touch</h2>
        </div>

        <div className="relative flex justify-center mt-3"><p className='text-sm font-mono leading-snug sm:leading-normal md:text-[16px] text-center'>Have a project in mind or just want to say hi? I'd love to connect and collaborate!</p></div>


        <div className="flex justify-center mt-8 md:mt-10 mb-6 gap-4">
            <a
                href="https://github.com/MananJiwnani"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 p-4 md:p-6 rounded-full text-white text-2xl md:text-3xl transition-all duration-300 ease-in-out"
            >
                <FaGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/manan-jiwnani-3b1a8a285/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-blue-600 p-4 md:p-6 rounded-full text-white text-2xl md:text-3xl transition-all duration-300 ease-in-out"
                >
                <FaLinkedin />
            </a>

            <a
                href="https://www.instagram.com/manan_jiwnani_23/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-4 md:p-6 rounded-full text-white text-2xl md:text-3xl transition-all duration-300 ease-in-out"
                >
                <FaInstagram />
            </a>

            <a
                href="https://wa.me/7014649539"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-green-500 p-4 md:p-6 rounded-full text-white text-2xl md:text-3xl transition-all duration-300 ease-in-out"
                >
                <FaWhatsapp />
            </a>
        </div>

        <EatSleepCodeRepeat/>
        
    </div>
  )
}

export default Contact