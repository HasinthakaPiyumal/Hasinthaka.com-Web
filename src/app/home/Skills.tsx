import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Code,
    Database,
    Globe,
    Smartphone,
    Server,
    Wrench,
    GraduationCap,
    Zap,
    Layers,
    GitBranch,
    Container,
    Palette,
    Brain,
    Cpu,
    Terminal,
    FileCode,
    Monitor,
    Cloud,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillsData = [
    {
        category: "Frontend Development",
        icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
        skills: [
            { name: "React.js", icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Next.js", icon: <Layers className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Tailwind CSS", icon: <Palette className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "ShadCN/UI", icon: <Monitor className="w-3 h-3 sm:w-4 sm:h-4" /> },
        ],
        gradient: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-500/10 border-purple-500/20",
    },

    {
        category: "Backend Development",
        icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
        skills: [
            { name: "NestJS", icon: <Server className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Spring Boot", icon: <Cpu className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Node.js", icon: <Server className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Express.js", icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Prisma ORM", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
        ],
        gradient: "from-orange-500 to-red-500",
        bgColor: "bg-orange-500/10 border-orange-500/20",
    },

    {
        category: "DevOps & Tools",
        icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />,
        skills: [
            { name: "Docker", icon: <Container className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "GitHub Actions", icon: <GitBranch className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Azure", icon: <Cloud className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Postman", icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Swagger", icon: <FileCode className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Linux", icon: <Terminal className="w-3 h-3 sm:w-4 sm:h-4" /> },
        ],
        gradient: "from-gray-500 to-slate-500",
        bgColor: "bg-gray-500/10 border-gray-500/20",
    },
    {
        category: "Databases",
        icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
        skills: [
            { name: "PostgreSQL", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "MySQL", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "MongoDB", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
        ],
        gradient: "from-red-500 to-rose-500",
        bgColor: "bg-red-500/10 border-red-500/20",
    },

    {
        category: "Mobile Development",
        icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
        skills: [
            { name: "Flutter", icon: <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "React Native", icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Kotlin", icon: <Cpu className="w-3 h-3 sm:w-4 sm:h-4" /> },
        ],
        gradient: "from-green-500 to-emerald-500",
        bgColor: "bg-green-500/10 border-green-500/20",
    },
    {
        category: "Currently Learning",
        icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />,
        skills: [
            { name: "Machine Learning", icon: <Brain className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "Clean Architecture", icon: <Layers className="w-3 h-3 sm:w-4 sm:h-4" /> },
            { name: "AI-powered features", icon: <Brain className="w-3 h-3 sm:w-4 sm:h-4" /> },
        ],
        gradient: "from-yellow-500 to-amber-500",
        bgColor: "bg-yellow-500/10 border-yellow-500/20",
    },
]

export default function SkillsSection() {
    return (
        <div className="h-full w-full bg-gray-950 text-white">
            <section className="py-8 sm:py-16 px-4 max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        My <span className="text-blue-400">Skills</span>
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-blue-400 mx-auto mb-4 sm:mb-6"></div>
                </motion.div>

                {/* Skills Grid - Updated for better mobile layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
                    {skillsData.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>

                {/* Floating Elements - Hidden on small screens */}
                <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="hidden sm:block absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                <div className="hidden sm:block absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
            </section>
        </div>
    )
}

// New component for individual skill card with animation
type Skill = {
    name: string;
    icon: React.ReactNode;
};

type SkillCategory = {
    category: string;
    icon: React.ReactNode;
    skills: Skill[];
    gradient: string;
    bgColor: string;
};

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Adjusted for mobile
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
            }}
        >
            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 group h-full flex flex-col">
                <CardHeader className="pb-2 sm:pb-4 px-3 sm:px-6 pt-3 sm:pt-6">
                    <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-xl">
                        <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-r ${category.gradient}`}>
                            {category.icon}
                        </div>
                        <span className="text-white group-hover:text-gray-100 line-clamp-1">{category.category}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {category.skills.map((skill: Skill, skillIndex: number) => (
                            <motion.div
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1 + skillIndex * 0.05,
                                }}
                            >
                                <Badge
                                    variant="secondary"
                                    className={`${category.bgColor} text-white hover:scale-105 transition-all duration-200 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1.5 text-xs sm:text-sm`}
                                >
                                    {skill.icon}
                                    {skill.name}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
