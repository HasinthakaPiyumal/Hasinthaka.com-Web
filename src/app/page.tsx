import React from 'react'
import Hero from './home/Hero'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { IconHome, IconUser, IconMessage, IconCode } from '@tabler/icons-react'
const page = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];
  return (
    <main
      className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <Hero />
      <div className='relative top-0 left-0 w-full h-full z-50'>
        <FloatingNav navItems={navItems} />
      </div>
      <div className='max-w-7xl w-full'>
      </div>
    </main>
  )
}

export default page