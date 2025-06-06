import React from 'react'
import { Coffee, MapPin } from "lucide-react"
import Me from "@/assets/images/hasinthaka.jpg"
import Image from 'next/image'

import { motion } from 'framer-motion'
import { GlowingEffect } from '@/components/GlowingEffect'

const About = ({ imageContainerRef, imageSectionContainerRef, textContainerRef }: { imageContainerRef: React.RefObject<HTMLDivElement>, imageSectionContainerRef: React.RefObject<HTMLDivElement>, textContainerRef: React.RefObject<HTMLDivElement> }) => {

    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-slate-950 to-slate-900 py-12 px-4">
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    className="absolute w-64 h-64 rounded-full bg-blue-600/5 blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ top: '10%', left: '15%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-purple-600/5 blur-3xl"
                    animate={{
                        x: [0, -150, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ bottom: '5%', right: '10%' }}
                />
                <motion.div
                    className="absolute w-72 h-72 rounded-full bg-cyan-600/5 blur-3xl"
                    animate={{
                        x: [0, 120, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ top: '40%', right: '25%' }}
                />
            </div>
            <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-white mb-2">
                    About <span className="text-blue-400">Me</span>
                </h2>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            </div>
            {/* <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />

            </div> */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                    <GlowingEffect
                        blur={0}
                        borderWidth={3}
                        spread={80}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />
                    <h3 className="text-2xl font-semibold text-white mb-6">Get to know me</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            I'm a passionate Software Engineering student with a focus on mobile development using Flutter and React. I've been sharpening my skills in software architecture and backend systems like NestJS and Spring Boot through hands-on projects and team leadership.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring machine learning, catching up on the latest tech trends, or helping fellow students grow. I believe in using technology to solve real-world problems and build meaningful digital experiences.
                        </p>

                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-700">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">Kelaniya, Sri Lanka</span>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                        <Coffee className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">Available for freelance work</span>
                    </div>
                </div>
                <div ref={imageSectionContainerRef} className='hidden sm:flex items-center justify-center flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 ml-12'>
                    <GlowingEffect
                        blur={0}
                        borderWidth={3}
                        spread={80}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />
                    <div
                        ref={imageContainerRef}
                        className='opacity-0 w-[200px] h-[200px] relative rounded-full overflow-hidden border-4 border-blue-400/30 transition-all duration-300 hover:border-blue-400/80 hover:shadow-lg hover:shadow-blue-500/20 group cursor-pointer'
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
                    <div ref={textContainerRef} className="opacity-0 mt-6 text-center scale-50">
                        <h3 className="text-xl font-semibold text-white mb-2">Hasinthaka Piyumal</h3>
                        <p className="text-blue-400 font-medium">Software Engineering student</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About