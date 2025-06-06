"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Github,
    Linkedin,
    Facebook,
    Send,
    MessageSquare,
    FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IconBrandWhatsapp } from "@tabler/icons-react";

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setFormStatus("success");
            reset();
            setTimeout(() => setFormStatus("idle"), 5000);
        } catch (error) {
            setFormStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="contact" className="min-h-screen w-full relative bg-gradient-to-b from-gray-950 to-gray-900 py-4 sm:py-12 overflow-hidden">
            {/* Background elements - Keep for all screen sizes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[100px]" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
                {/* Section header - Added for better structure */}
                {/* <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Get In <span className="text-blue-400">Touch</span>
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-blue-400 mx-auto mb-3 sm:mb-4"></div>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-md">
                        Have a question or want to work together? Feel free to contact me.
                    </p>
                </motion.div> */}

                <div className="text-center sm:mb-4">
                    <div className="text-center sm:mb-4">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Contact <span className="text-blue-400">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-2"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-8 w-full max-w-5xl">
                    {/* Contact Info Column */}
                    <motion.div
                        className="md:col-span-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-900/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800 h-full">
                            <motion.div variants={itemVariants} className="mb-4 sm:mb-8">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">Contact Information</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-6">
                                    Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
                                </p>

                                <div className="space-y-3 sm:space-y-4">
                                    <motion.div variants={itemVariants} className="flex items-start">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 mr-3 sm:mr-4">
                                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Email</p>
                                            <a href="mailto:hasinthakapiyumal@gmail.com" className="text-white text-xs sm:text-sm hover:text-blue-400 transition-colors">
                                                hasinthakapiyumal@gmail.com
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="flex items-start">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 mr-3 sm:mr-4">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">Location</p>
                                            <p className="text-white text-xs sm:text-sm">Sri Lanka</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">Connect With Me</h3>
                                <div className="grid grid-cols-4 xs:grid-cols-3 gap-2 sm:gap-3">
                                    <SocialLink
                                        href="https://github.com/HasinthakaPiyumal"
                                        icon={<Github className="w-3 h-3 sm:w-5 sm:h-5" />}
                                        label="GitHub"
                                        color="from-gray-600 to-gray-700"
                                    />
                                    <SocialLink
                                        href="https://www.linkedin.com/in/hasinthaka-piyumal"
                                        icon={<Linkedin className="w-3 h-3 sm:w-5 sm:h-5" />}
                                        label="LinkedIn"
                                        color="from-blue-600 to-blue-700"
                                    />
                                    {/* <SocialLink
                                        href="https://www.facebook.com/100082670280048"
                                        icon={<Facebook className="w-3 h-3 sm:w-5 sm:h-5" />}
                                        label="Facebook"
                                        color="from-blue-500 to-blue-600"
                                    /> */}
                                    <SocialLink
                                        href="https://wa.me/94763215389"
                                        icon={<IconBrandWhatsapp className="w-3 h-3 sm:w-5 sm:h-5" />}
                                        label="Whatsapp"
                                        color="from-green-500 to-green-700"
                                    />
                                    <SocialLink
                                        href="https://hasinthaka.medium.com"
                                        icon={<FileText className="w-3 h-3 sm:w-5 sm:h-5" />}
                                        label="Medium"
                                        color="from-gray-700 to-gray-800"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        className="md:col-span-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gray-900/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800 relative overflow-hidden">
                            {/* Gradient decorations - keep but make smaller on mobile */}
                            <div className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-xl sm:blur-2xl" />
                            <div className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-xl sm:blur-2xl" />

                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-6">Send Me a Message</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs sm:text-sm text-gray-400 mb-1">Your Name</label>
                                        <Input
                                            id="name"
                                            className={`bg-gray-800/50 border h-9 sm:h-10 text-sm ${errors.name ? "border-red-500" : "border-gray-700"} focus:border-blue-500 text-white`}
                                            {...register("name", { required: "Name is required" })}
                                        />
                                        {errors.name && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs sm:text-sm text-gray-400 mb-1">Your Email</label>
                                        <Input
                                            id="email"
                                            className={`bg-gray-800/50 border h-9 sm:h-10 text-sm ${errors.email ? "border-red-500" : "border-gray-700"} focus:border-blue-500 text-white`}
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                        {errors.email && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs sm:text-sm text-gray-400 mb-1">Subject</label>
                                    <Input
                                        id="subject"
                                        className={`bg-gray-800/50 border h-9 sm:h-10 text-sm ${errors.subject ? "border-red-500" : "border-gray-700"} focus:border-blue-500 text-white`}
                                        {...register("subject", { required: "Subject is required" })}
                                    />
                                    {errors.subject && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.subject.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs sm:text-sm text-gray-400 mb-1">Message</label>
                                    <Textarea
                                        id="message"
                                        className={`bg-gray-800/50 border text-sm ${errors.message ? "border-red-500" : "border-gray-700"} focus:border-blue-500 text-white min-h-[80px] sm:min-h-[120px]`}
                                        {...register("message", { required: "Message is required" })}
                                    />
                                    {errors.message && <p className="text-red-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{errors.message.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full text-white border-0 h-9 sm:h-11 relative overflow-hidden group text-xs sm:text-sm"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="relative flex items-center justify-center gap-1 sm:gap-2">
                                        {formStatus === "idle" && (
                                            <>
                                                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                                                Send Message
                                            </>
                                        )}
                                        {isSubmitting && "Sending..."}
                                        {formStatus === "success" && "Message Sent!"}
                                        {formStatus === "error" && "Error! Try Again"}
                                    </span>
                                </Button>

                                {formStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-500 text-xs sm:text-sm flex items-center gap-1"
                                    >
                                        <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                                        Thanks for reaching out! I'll get back to you soon.
                                    </motion.div>
                                )}

                                {formStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-xs sm:text-sm flex items-center gap-1"
                                    >
                                        Something went wrong. Please try again later.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

function SocialLink({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-1 sm:p-2 sm:px-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300"
        >
            <div className={`flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${color} mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <span className="text-[8px] sm:text-xs text-gray-400 group-hover:text-white transition-colors">{label}</span>
        </a>
    );
}

function Footer() {
    return (
        <footer className="mt-4 z-10 absolute bottom-2 sm:bottom-4 w-full">
            <div className="container mx-auto px-4">
                <div className="border-t border-gray-800 pt-2 sm:pt-4">
                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-[10px] sm:text-xs text-gray-500">
                            © {new Date().getFullYear()} Hasinthaka Piyumal. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Add this to your styles or in a style tag
// @media (min-width: 400px) {
//   .xs\:grid-cols-3 {
//     grid-template-columns: repeat(3, minmax(0, 1fr));
//   }
// }