'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Hero from './home/Hero'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { IconHome, IconUser, IconMessage, IconCode } from '@tabler/icons-react'
import dynamic from 'next/dynamic';
import About from './home/About'
import gsap from 'gsap'
import Skills from './home/Skills'
import ContactSection from './home/Contact'
import ProjectShowcase from './home/Projects'

// Import your 3D model component with dynamic import and SSR disabled
const ModelViewer = dynamic(() => import('./home/ModelViewer'), {
  ssr: false
});

const Page = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];

  const pageRef = useRef<HTMLDivElement>(null);
  const modalViewRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageSectionContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);


  const [previous, setPrevious] = useState(0);
  const [navbarVisibility, setNavbarVisibility] = useState(true);

  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentPos = pageRef.current?.scrollTop || 0;
      const difference = currentPos - previous;

      setPrevious(currentPos);
      if (typeof window === 'undefined') return;
      const windowHeight = window.innerHeight;
      console.log("Current position:", currentPos, "Window Height:", windowHeight);

      if (currentPos > windowHeight * 1.2) {
        gsap.killTweensOf(modalViewRef.current)
        gsap.to(modalViewRef.current, {
          opacity: 0,
          duration: 0.01,
          ease: "power2.inOut",
          onComplete: () => {
            setModalVisible(false);
          }
        });
      }
      else if (currentPos > windowHeight) {
        gsap.killTweensOf(modalViewRef.current)
        gsap.killTweensOf(imageContainerRef.current)
        if (modalViewRef.current?.style.opacity === '1') {
          gsap.to(modalViewRef.current, {
            opacity: 0,
            duration: 1,
            delay: 1.8,
            ease: "power2.inOut",
            onComplete: () => {
              setModalVisible(false);
            }
          });
          gsap.to(imageContainerRef.current, {
            opacity: 1,
            duration: 1.5,
            delay: 1.3,
            ease: "power2.inOut",
          })
          gsap.to(textContainerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            delay: 2.3,
            ease: "back.out(1.7)",
          })
        }

      } else {
        gsap.killTweensOf(modalViewRef.current)
        gsap.killTweensOf(imageContainerRef.current)
        setModalVisible(true);
        gsap.to(imageContainerRef.current, {
          opacity: 0,
          duration: 0.1,
          scale: 1,
          ease: "power2.inOut",
        })
        gsap.to(textContainerRef.current, {
          opacity: 0,
          duration: 0.1,
          ease: "power2.inOut",
        })
        gsap.to(modalViewRef.current, {
          opacity: 1,
          duration: 0.01,
          ease: "power2.inOut",
        });
      }

      console.log("Difference:", difference);
      console.log("Current position:", currentPos);

      if (difference < 0) {
        setNavbarVisibility(true)
      } else {
        if (currentPos < 500) {
          setNavbarVisibility(true)

        } else {
          setNavbarVisibility(false)
        }
      }
    };

    const pageElement = pageRef.current;
    pageElement?.addEventListener("scroll", handleScroll);

    return () => {
      pageElement?.removeEventListener("scroll", handleScroll);
    };
  }, [previous]);
  const MemoizedModelViewer = useMemo(() => <ModelViewer pageRef={pageRef} />, []);
  return (
    <div ref={pageRef} className="h-screen w-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory">
      <section id='home' className='w-full h-screen snap-start ph-no-capture'>
        <Hero />
      </section>
      <section id="about" className="h-screen flex items-center justify-center snap-start relative z-10 ph-no-capture">
        {/* <h1 className="text-white text-4xl font-bold">About Section</h1> */}
        <About imageContainerRef={imageContainerRef} imageSectionContainerRef={imageSectionContainerRef} textContainerRef={textContainerRef} />
      </section>
      <section id="skills" className="h-screen flex items-center justify-center snap-start relative z-10">
        {/* <h1 className="text-white text-4xl font-bold">Skills Section</h1> */}
        <Skills />
      </section>
      <section id="projects" className="h-screen flex items-center justify-center snap-start relative z-10">
        {/* <h1 className="text-white text-4xl font-bold">Project Section</h1> */}
        <ProjectShowcase />
      </section>
      <section id="projects" className="h-screen flex items-center justify-center snap-start relative z-10">
        {/* <h1 className="text-white text-4xl font-bold">Contact</h1> */}
        <ContactSection />
      </section>

      <div className='absolute top-0 left-0 w-full'>
        <FloatingNav navItems={navItems} visible={navbarVisibility} />
      </div>

      <div ref={modalViewRef} className={`${modalVisible ? 'top-0 right-0' : 'top-full right-full'} w-[50%] h-screen hidden sm:block fixed z-10 pointer-events-none`}>
        {/* <ModelViewer scrollPosition={previous} /> */}
        {MemoizedModelViewer}
      </div>
    </div>
  );

  // return (
  //   <main
  //     className='relative overflow-x-hidden max-w-[100vw] bg-black-100 flex justify-center items-center flex-col mx-auto'
  //   >
  //     <section id='home' className='w-full h-screen'>
  //       <Hero />
  //     </section>
  // <div className='absolute top-0 left-0 w-full h-screen'>
  //   <FloatingNav navItems={navItems} />
  // </div>
  //     {/* <div className='max-w-7xl w-full'>
  //     </div> */}
  {/* <div className='w-[50%] h-screen fixed top-0 right-0 z-0'>
        <ModelViewer />
      </div> */}
  // <section id="about" className='bg-red-500 h-screen w-full'>
  //   <h1>About Section</h1>
  // </section>
  // <section id="skills" className='bg-green-500 h-screen w-full'>
  //   <h1>SKills Section</h1>
  // </section>
  // <section id="projects" className='bg-blue-500 h-screen w-full'>
  //   <h1>Project Section</h1>
  // </section>
  //   </main>
  // )
}

export default Page