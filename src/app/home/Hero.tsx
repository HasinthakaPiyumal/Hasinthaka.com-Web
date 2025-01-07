import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'

const Hero = () => {
    return (


        <div className='h-screen relative'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    <BackgroundBeamsWithCollision className='h-screen md:h-[100vh] w-[100vw] top-0 left-0'>
                        <div className='h-screen w-full'>
                        </div>
                    </BackgroundBeamsWithCollision>
                </div>
            </div>

        </div>
    )
}

export default Hero