"use client"
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Spotlight } from '@/components/ui/Spotlight'
import { SpotlightNew } from '@/components/ui/spotlight-new'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import React, { useState, useEffect } from 'react'
const Hero = () => {
    const words = ["Mobile Developer", "Machine Learning Enthusiast", "Full Stack Developer"]
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(50)
    const [isTyping, setIsTyping] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            const currentWord = words[currentWordIndex]

            // If deleting, remove the last character
            if (isDeleting) {
                setCurrentText(currentWord.substring(0, currentText.length - 1))
            } else {
                // If typing, add the next character
                setCurrentText(currentWord.substring(0, currentText.length + 1))
                setIsTyping(true)
            }

            // Adjust typing speed
            if (isDeleting) {
                setTypingSpeed(10) // Faster when deleting
            } else {
                setTypingSpeed(typingSpeed) // Normal speed when typing
            }

            // If word is complete, start deleting after a pause
            if (!isDeleting && currentText === currentWord) {
                setIsTyping(false)
                setTimeout(() => setIsDeleting(true), 3000)
            }
            // If word is deleted, move to next word
            else if (isDeleting && currentText === "") {
                setIsDeleting(false)
                setCurrentWordIndex((prev) => (prev + 1) % words.length)
            }
        }, typingSpeed)

        return () => clearTimeout(timer)
    }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])
    return (
        <div className='h-screen relative'>
            <SpotlightNew />
            {/* <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw] rotate-[100deg]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div> */}

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    <BackgroundBeamsWithCollision className='h-screen md:h-[100vh] w-[100vw] top-0 left-0'>
                        <div className='h-screen w-full flex items-center justify-center'>
                            <div className="grid grid-cols-2 gap-4">
                                <div className='text-white'>
                                    <h1 className='text-6xl font-bold mb-4'>
                                        Hi, It&apos;s{" "}
                                        <span className='text-primary'>
                                            Hasinthaka
                                        </span>
                                    </h1>
                                    <h1 className="text-3xl font-bold mb-4">
                                        I&apos;m a{" "}
                                        <span className="bg-clip-text text-primary inline-block min-w-0">
                                            {currentText}
                                            <span className={`border-r-4 border-primary ml-1 ${isTyping || isDeleting ? '' : 'animate-blink'}`}></span>
                                        </span>
                                    </h1>
                                </div>
                                <div className='text-white'>
                                    asdasd
                                </div>
                            </div>
                        </div>
                    </BackgroundBeamsWithCollision>
                </div>
            </div>


        </div>
    )
}

export default Hero