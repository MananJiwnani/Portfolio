import React from 'react'
import LetterGlitch from './LetterGlitch'
import EatSleepCodeRepeat from './EatSleepCodeRepeat'

const Hero = () => {
  return (
    <div className="container relative h-max pb-14">
        <div id="hero" className="hero -z-10 h-[100%] absolute pt-2 w-screen overflow-hidden bg-black">
            <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            />
        </div>

        <div className="foreground min-h-[60vh] w-screen h-max pt-36 flex flex-col justify-center items-center font-mono px-4 md:px-6 gap-6">
            <div className="second">
                <img src="./assets/portfolio_img.png" className='w-50 h-50 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-md' alt="" />
            </div>
            <div className="first max-w-[95%] md:max-w-[80%] lg:max-w-[65%] flex flex-col text-center items-center justify-center">
                <div className="text-xl w-max">Hi there! I'm</div>
                <div className="name text-4xl md:text-6xl tracking-wide font-bold w-max">Manan Jiwnani</div>
                <div className="relative mt-3 md:mt-4 inline-block bg-black/30">
                    <p className="text-sm leading-snug md:hidden">
                    I'm a web developer and CP enthusiast in my third year at IIT Indore. I enjoy building projects, collaborating, and solving problems.
                    </p>
                    <p className="hidden md:block text-[16px] leading-normal">
                    I'm a passionate web developer and competitive programming enthusiast, currently in my third year at IIT Indore. I love building impactful projects, collaborating with talented peers, and continuously improving my problem-solving skills.
                    </p>

                </div>

            </div>
            {/* <EatSleepCodeRepeat/> */}
        </div>

    </div>
      
  )
}

export default Hero