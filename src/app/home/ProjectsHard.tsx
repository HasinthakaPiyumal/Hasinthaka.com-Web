import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Project } from "@/types/project";

const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A modern, interactive developer portfolio built with Next.js and Framer Motion featuring 3D animations and smooth scrolling effects.",
        image: "/projects/portfolio.png",
        demoLink: "https://your-portfolio-url.com",
        githubLink: "https://github.com/yourusername/portfolio",
        techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "GSAP"],
        date: "June 2023",
        category: "Web Development",
        featured: true,
        gradient: "from-blue-500 to-violet-500"
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        description: "Full-featured admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order processing.",
        image: "/projects/ecommerce-dashboard.png",
        demoLink: "https://dashboard-demo.com",
        githubLink: "https://github.com/yourusername/ecommerce-dashboard",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
        date: "March 2023",
        category: "Full Stack",
        featured: true,
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        id: 3,
        title: "Fitness Tracker App",
        description: "Cross-platform mobile application that helps users track workouts, nutrition, and progress with customizable fitness plans.",
        image: "/projects/fitness-app.png",
        demoLink: "https://play.google.com/store/fitness-app",
        githubLink: "https://github.com/yourusername/fitness-tracker",
        techStack: ["Flutter", "Firebase", "Dart", "RESTful API"],
        date: "January 2023",
        category: "Mobile Development",
        featured: false,
        gradient: "from-green-500 to-lime-500"
    },
    {
        id: 4,
        title: "Smart Home IoT Platform",
        description: "IoT platform that connects and manages smart home devices with intuitive dashboard and automated routines.",
        image: "/projects/smart-home.png",
        demoLink: "https://smart-home-demo.com",
        githubLink: "https://github.com/yourusername/smart-home",
        techStack: ["React", "Node.js", "MQTT", "WebSockets", "MongoDB"],
        date: "November 2022",
        category: "IoT",
        featured: true,
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 5,
        title: "AI Content Generator",
        description: "Web application that leverages machine learning to generate blog articles, social media posts, and marketing copy.",
        image: "/projects/ai-content.png",
        demoLink: "https://ai-content-gen.com",
        githubLink: "https://github.com/yourusername/ai-content-generator",
        techStack: ["Python", "TensorFlow", "Flask", "React", "OpenAI API"],
        date: "August 2022",
        category: "AI & Machine Learning",
        featured: false,
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 6,
        title: "Realtime Chat Application",
        description: "Feature-rich chat platform with private messaging, group chats, file sharing, and end-to-end encryption.",
        image: "/projects/chat-app.png",
        demoLink: "https://chat-app-demo.com",
        githubLink: "https://github.com/yourusername/chat-application",
        techStack: ["Socket.io", "React", "Node.js", "MongoDB", "Redux"],
        date: "May 2022",
        category: "Web Development",
        featured: false,
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        id: 7,
        title: "Task Management System",
        description: "Collaborative project management tool with task assignments, progress tracking, and team collaboration features.",
        image: "/projects/task-manager.png",
        demoLink: "https://task-manager-demo.com",
        githubLink: "https://github.com/yourusername/task-management",
        techStack: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
        date: "February 2022",
        category: "Web Development",
        featured: false,
        gradient: "from-amber-500 to-yellow-500"
    },
    {
        id: 8,
        title: "Weather Forecast App",
        description: "Mobile application providing detailed weather forecasts, radar maps, and severe weather alerts for locations worldwide.",
        image: "/projects/weather-app.png",
        demoLink: "https://weather-app-demo.com",
        githubLink: "https://github.com/yourusername/weather-forecast",
        techStack: ["React Native", "WeatherAPI", "Redux", "Geolocation"],
        date: "December 2021",
        category: "Mobile Development",
        featured: false,
        gradient: "from-indigo-500 to-blue-500"
    },
    {
        id: 9,
        title: "Blockchain Voting System",
        description: "Secure e-voting platform built on blockchain technology ensuring transparent and tamper-proof election processes.",
        image: "/projects/blockchain-voting.png",
        demoLink: "https://blockchain-voting-demo.com",
        githubLink: "https://github.com/yourusername/blockchain-voting",
        techStack: ["Solidity", "Ethereum", "Web3.js", "React", "Metamask"],
        date: "October 2021",
        category: "Blockchain",
        featured: true,
        gradient: "from-slate-500 to-gray-500"
    },
    {
        id: 10,
        title: "Restaurant Management System",
        description: "Complete POS and management system for restaurants with order processing, inventory tracking, and employee scheduling.",
        image: "/projects/restaurant-management.png",
        demoLink: "https://restaurant-system-demo.com",
        githubLink: "https://github.com/yourusername/restaurant-management",
        techStack: ["Angular", "Node.js", "PostgreSQL", "Express", "Socket.io"],
        date: "July 2021",
        category: "Full Stack",
        featured: false,
        gradient: "from-rose-500 to-red-500"
    }
];


const Projects = () => {
    const col1Ref = useRef(null);
    const col2Ref = useRef(null);
    const col3Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Vertical scrolling per column
            gsap.fromTo(
                col1Ref.current,
                {
                    yPercent: -20,
                    duration: 30,
                    ease: "linear",
                    repeat: -1,
                    yoyo: true,
                },
                {
                    yPercent: -50,
                    duration: 30,
                    ease: "linear",
                    repeat: -1,
                    yoyo: true,
                }
            );

            gsap.fromTo(
                col2Ref.current,
                {
                    yPercent: -20,
                    duration: 60,
                    ease: "linear",
                    yoyo: true,
                    repeat: -1,
                },
                {
                    yPercent: -50,
                    duration: 60,
                    ease: "linear",
                    yoyo: true,
                    repeat: -1,
                }
            );

            gsap.fromTo(
                col3Ref.current,
                {
                    yPercent: -20,
                    duration: 40,
                    ease: "linear",
                    yoyo: true,
                    repeat: -1,
                },
                {
                    yPercent: -50,
                    duration: 40,
                    ease: "linear",
                    yoyo: true,
                    repeat: -1,
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const renderCards = (project: Project) => (
        <div className="w-[300px] h-[220px] relative rounded-xl overflow-hidden group bg-gray-900/80 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col shadow-lg shadow-black/20">
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-all duration-300`}></div>

            {/* Content */}
            <div className="relative z-10 p-5 flex flex-col h-full">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{project.title}</h3>

                <p className="text-sm text-gray-300 mb-3 line-clamp-2 flex-grow">
                    {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full">
                            +{project.techStack.length - 3}
                        </span>
                    )}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                    <span className="text-xs text-blue-400">{project.category}</span>
                    <div className="flex gap-2">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Featured badge */}
            {project.featured && (
                <div className="absolute top-0 right-0">
                    <div className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-bl-lg">
                        Featured
                    </div>
                </div>
            )}
        </div>
    );

    const firstFiveProjects = projects.slice(0, 5);
    const secondFiveProjects = projects.slice(3, 8);
    const thirdFiveProjects = projects.slice(5, 10);

    return (
        <div className="flex w-full justify-center items-center flex-col min-h-screen bg-[#0f172a] overflow-hidden">
            <div className="text-center mb-12 absolute z-50 top-10">
                <h2 className="text-2xl font-bold text-white mb-2">
                    My <span className="text-blue-400">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            </div>
            <div className="max-w-7xl h-[calc(100vh - 220px)] border-2 border-gray-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0f172a] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f172a] to-transparent z-10 pointer-events-none" />
                <div
                    className="flex gap-10"
                    style={{
                        transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
                        willChange: "transform",
                    }}
                >
                    {/* Column 1 */}
                    <div className="h-[590px]">
                        <div ref={col1Ref} className="flex flex-col gap-8 items-center">
                            {firstFiveProjects.map((project) => (
                                <div key={project.id} className="transform hover:scale-105 transition-transform duration-300">
                                    {renderCards(project)}
                                </div>
                            ))}
                            {/* Duplicate for continuous scrolling */}
                            {firstFiveProjects.map((project) => (
                                <div key={`dup-${project.id}`} className="transform hover:scale-105 transition-transform duration-300">
                                    {renderCards(project)}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="h-[590px] pb-96">
                        <div
                            ref={col2Ref}
                            className="flex flex-col gap-8 items-center -translate-y-64 border-separate border-l-2 border-gray-700 pl-8"
                        >
                            {thirdFiveProjects.map((project) => (
                                <div key={project.id} className="transform hover:scale-105 transition-transform duration-300">
                                    {renderCards(project)}
                                </div>
                            ))}
                            {/* Duplicate for continuous scrolling */}
                            {thirdFiveProjects.map((project) => (
                                <div key={`dup-${project.id}`} className="transform hover:scale-105 transition-transform duration-300">
                                    {renderCards(project)}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="h-[590px]">
                        <div ref={col3Ref} className="flex flex-col gap-8 items-center border-separate border-l-2 border-gray-700 pl-8">
                            {secondFiveProjects.map((project) => (
                                <div key={project.id} className="transform hover:scale-105 transition-transform duration-300">
                                    {renderCards(project)}
                                </div>
                            ))}
                            {/* Duplicate for continuous scrolling */}
                            {secondFiveProjects.map((project) => (
                                <div key={`dup-${project.id}`} className="transform hover:scale-105 transition-transform duration-300">
                                    {renderCards(project)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
