import React from 'react'
import Hero from './home/Hero'

const page = () => {
  return (
    <main
      className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <Hero />
      <div className='max-w-7xl w-full'>
      </div>
    </main>
  )
}

export default page