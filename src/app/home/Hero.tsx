"use client"
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { Spotlight } from '@/components/ui/Spotlight'
import { SpotlightNew } from '@/components/ui/spotlight-new'
import { Vector3 } from '@react-three/fiber'
import { OrbitControls, } from '@react-three/drei'
import React, { useState, useEffect, useRef } from 'react'
import { Mesh } from 'three'
import ModelViewer from './ModelViewer'
import { Button } from '@/components/ui/button'
import { IconBrandWhatsapp } from '@tabler/icons-react'

import Me from "@/assets/images/hasinthaka.jpg"
import Image from 'next/image'

const TypeWriterEffect = () => {

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

    return <h1 className="text-xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
        I&apos;m a{" "}
        <span className="bg-clip-text text-primary inline-block min-w-0">
            {currentText}
            <span className={`border-r-4 border-primary ml-1 ${isTyping || isDeleting ? '' : 'animate-blink'}`}></span>
        </span>
    </h1>
}
const Hero = () => {
    return (
        <div className='h-screen relative width-full'>
            <SpotlightNew />
            {/* <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw] rotate-[100deg]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div> */}

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="w-full text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    {/* <BackgroundBeamsWithCollision className='h-screen md:h-[100vh] w-full top-0 left-0'>
                       
                    </BackgroundBeamsWithCollision> */}
                    <div className='h-screen w-full flex items-between justify-center'>
                        <div className="flex items-center justify-center sm:justify-between flex-col sm:flex-row w-full max-w-7xl">
                            <div
                                className='sm:hidden w-[200px] h-[200px] relative rounded-full overflow-hidden border-4 border-blue-400/30 transition-all duration-300 hover:border-blue-400/80 hover:shadow-lg hover:shadow-blue-500/20 group cursor-pointer'
                            >
                                <Image
                                    src={Me}
                                    alt="About Me"
                                    className="absolute transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        transform: `translate(0, -15px)`,
                                        transformOrigin: 'center',
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className='text-white w-full sm:w-[50%] px-4 sm:px-4'>
                                <div className='flex h-[60px]'></div>
                                <h1 className='text-4xl sm:text-6xl font-bold mb-4 text-center sm:text-left'>
                                    Hi, It&apos;s{" "}
                                    <span className='text-primary'>
                                        Hasinthaka
                                    </span>
                                </h1>
                                <TypeWriterEffect />
                                <p className="text-gray-300 max-w-xl text-base font-light text-center sm:text-left">
                                    Software Engineering undergraduate at University of Kelaniya, passionate about tech and innovation.
                                </p>

                                <div className="flex gap-4 mt-12 justify-center sm:justify-start">
                                    <Button onClick={() => {
                                        if (window) window.open('/CV-Hasinthaka.pdf', '_blank')
                                    }}>
                                        Download CV
                                    </Button>
                                    <Button variant={'outline'} onClick={() => {
                                        if (window) window.open('https://wa.me/94763215389', '_blank')
                                    }}>
                                        <IconBrandWhatsapp />
                                        Contact
                                    </Button>
                                </div>
                            </div>
                            <div className='text-white w-[50%] h-[80px]'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

const Cube = ({ position, color, size }: { position: Vector3, color: string, size: number }) => {
    const ref = useRef<Mesh>(null)
    const [isHovering, setIsHovering] = useState(false)
    // useFrame((state, delta) => {
    //     if (ref.current) {
    //         ref.current.rotation.x += delta
    //         // ref.current.rotation.y += delta
    //         // ref.current.rotation.z += delta
    //     }
    // })
    return (
        <mesh ref={ref} position={position} scale={isHovering ? 0.9 : 1} onPointerEnter={(event) => { event.stopPropagation(); setIsHovering(true) }} onPointerLeave={(event) => setIsHovering(false)}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color={isHovering ? 'orange' : color} wireframe />
            <OrbitControls />
        </mesh>
    )
}

export default Hero