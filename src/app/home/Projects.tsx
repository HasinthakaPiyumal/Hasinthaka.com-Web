"use client"

import { useState } from "react"
import { Github, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import FuelMaster from "@/assets/images/projects/fuel-master.png"
import Restaurant from "@/assets/images/projects/helataure.png"
import FarmIt from "@/assets/images/projects/farm-it.png"
import BotCpanel from "@/assets/images/projects/bot-cpanel.png"
import Image from "next/image"
const projects = [
    {
        id: 1,
        title: "Fuel Master",
        description: "Next-gen fuel management system",
        image: FuelMaster,
        tech: ["React", "Flutter", "SpringBoot"],
        demoUrl: "https://fuel-master.vercel.app/",
        githubUrl: "https://github.com/HasinthakaPiyumal/fuel-master",
        gradient: "from-blue-600/20 to-purple-600/20",
    },
    {
        id: 2,
        title: "Restaurant",
        description: "AI-powered analytics platform",
        image: Restaurant,
        tech: ["React.js"],
        demoUrl: "https://helataurent.vercel.app/",
        githubUrl: "https://github.com/HasinthakaPiyumal/helatauren",
        gradient: "from-purple-600/20 to-pink-600/20",
    },
    {
        id: 3,
        title: "Whatsapp Automated Chat",
        description: "Automated WhatsApp bot control panel",
        image: BotCpanel,
        tech: ["Node.js", "React.js", "baileyes"],
        demoUrl: "https://bot-control-panel.vercel.app/",
        githubUrl: "https://github.com/HasinthakaPiyumal/whatsapp-bot-web-cpanel",
        gradient: "from-pink-600/20 to-blue-600/20",
    },
    {
        id: 4,
        title: "FarmIT | Farming Helper",
        description: "AI-driven farming assistant",
        image: FarmIt,
        tech: ["React.js", "Node.js", "Tailwild CSS"],
        demoUrl: "https://cryptx-01-ipv404.vercel.app/",
        githubUrl: "https://github.com/HasinthakaPiyumal/cryptx-01-ipv404",
        gradient: "from-blue-600/20 to-purple-600/20",
    },
    {
        id: 5,
        title: "Neon Commerce",
        description: "E-commerce platform with AR features",
        image: "/placeholder.svg?height=200&width=300",
        tech: ["React Native", "AR.js", "Stripe"],
        demoUrl: "#",
        githubUrl: "#",
        gradient: "from-purple-600/20 to-pink-600/20",
    },
    {
        id: 6,
        title: "Matrix IDE",
        description: "Cloud-based development environment",
        image: "/placeholder.svg?height=200&width=300",
        tech: ["Monaco Editor", "Docker", "Kubernetes"],
        demoUrl: "#",
        githubUrl: "#",
        gradient: "from-pink-600/20 to-blue-600/20",
    },
]

export default function ProjectShowcase() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <section className="relative min-h-screen bg-[#0b0b0f] overflow-hidden py-20">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-600/5 to-transparent rounded-full" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
            linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)
          `,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            My <span className="text-blue-400">Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
                    </div>
                </div>

                {/* Scrolling Container */}
                <div className="relative">
                    <div className="flex gap-8 animate-scroll-diagonal">
                        {/* First set of cards */}
                        {projects.map((project, index) => (
                            <div
                                key={`first-${project.id}`}
                                className="flex-shrink-0 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0 transition-transform duration-500 ease-out"
                                style={{
                                    transform: hoveredCard === project.id ? '' : `perspective(1000px) rotateX(${5 + (index % 3) * 2}deg) rotateY(${-10 + (index % 2) * 20}deg) rotateZ(${-2 + (index % 3)}deg)`,
                                }}
                            >
                                <ProjectCard
                                    project={project}
                                    isHovered={hoveredCard === project.id}
                                    onHover={() => setHoveredCard(project.id)}
                                    onLeave={() => setHoveredCard(null)}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {projects.map((project, index) => (
                            <div
                                key={`second-${project.id}`}
                                className="flex-shrink-0"
                                style={{
                                    transform: `perspective(1000px) rotateX(${5 + (index % 3) * 2}deg) rotateY(${-10 + (index % 2) * 20}deg) rotateZ(${-2 + (index % 3)}deg)`,
                                }}
                            >
                                <ProjectCard
                                    project={project}
                                    isHovered={hoveredCard === project.id}
                                    onHover={() => setHoveredCard(project.id)}
                                    onLeave={() => setHoveredCard(null)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-diagonal {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
        
        .animate-scroll-diagonal {
          animation: scroll-diagonal 30s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
        </section>
    )
}

function ProjectCard({
    project,
    isHovered,
    onHover,
    onLeave,
}: {
    project: (typeof projects)[0]
    isHovered: boolean
    onHover: () => void
    onLeave: () => void
}) {
    return (
        <div
            className={`
        relative w-80 h-96 group cursor-pointer transition-all duration-500 ease-out
        ${isHovered ? "scale-110 z-20" : "scale-100 z-10"}
      `}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Card Background with Glow */}
            <div
                className={`
        absolute inset-0 rounded-2xl transition-all duration-500
        bg-gradient-to-br ${project.gradient}
        border border-white/10
        ${isHovered ? "shadow-2xl shadow-blue-500/20 border-white/20" : "shadow-lg shadow-black/20"}
      `}
            >
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />

                {/* Spotlight effect */}
                <div
                    className={`
          absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-32 h-32 bg-white/10 rounded-full blur-2xl transition-opacity duration-500
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
                />
            </div>

            {/* Card Content */}
            <div className="relative h-full p-6 flex flex-col">
                {/* Project Image */}
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-gray-900/50">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-white/10 text-blue-300 rounded-full border border-white/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        View Project
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Github className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div
                className={`
        absolute -inset-1 rounded-2xl transition-opacity duration-500 -z-10
        bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl
        ${isHovered ? "opacity-100" : "opacity-0"}
      `}
            />
        </div>
    )
}
