import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "@/components/PostHogProvider";
import ModelViewer from "./home/ModelViewer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasinthaka Piyumal | Machine Learning Enthusiast",
  keywords: [
    "Hasinthaka Piyumal",
    "Portfolio",
    "Machine Learning",
    "Web Development",
    "AI",
    "Software Engineer",
    "Data Science",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Full Stack Developer",
    "AI Engineer",
    "Data Engineer",
    "Cloud Computing",
    "DevOps",
    "Open Source",
    "Tech Enthusiast",
    "Personal Portfolio",
    "Web Portfolio",
    "Software Portfolio",
    "AI Portfolio",
    "Machine Learning Portfolio",
    "Data Science Portfolio",
    "3d Portfolio Website",
    "3D Portfolio",
    "3D Web Development",
    "3D Web Portfolio",
  ],
  authors: [
    {
      name: "Hasinthaka Piyumal",
      url: "https://hasinthaka.com",
    },
  ],
  openGraph: {
    title: "Hasinthaka Piyumal | Machine Learning Enthusiast",
    description: "Explore the portfolio of Hasinthaka Piyumal, a machine learning enthusiast and software engineer. Discover projects, skills, and insights into AI and web development.",
    url: "https://hasinthaka.com",
    siteName: "Hasinthaka Piyumal",
    images: [
      {
        url: "https://hasinthaka.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hasinthaka Piyumal Portfolio",
      },
    ],
    type: "website",
  },
  icons: { icon: "favicon.svg" },
  description: "Hasinthaka Piyumal is a machine learning enthusiast and software engineer. Explore his portfolio to discover projects, skills, and insights into AI and web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(inter.className, "antialiased")}>
        <div
          id="loader"
          className="fixed hidden sm:flex inset-0 bg-gradient-to-br from-[rgba(17,24,39,0.8)] via-[rgba(31,41,55,0.8)] to-[rgba(0,0,0,0.8)] backdrop-blur-lg flex-col items-center justify-center z-[7000] transition-opacity duration-500 bg-opacity-30"
        >
          <div className="w-20 h-20 border-8 border-gray-600 border-t-primary rounded-full animate-spin mb-6 shadow-xl"></div>
          <p className="text-primary text-xl font-semibold animate-pulse">Loading, please wait...</p>
        </div>
        <PostHogProvider>
          <div className="min-h-screen bg-background">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}