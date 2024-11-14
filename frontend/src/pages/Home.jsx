import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'

const Home = () => {
  return (
    <>
      <div className='m-0 p-0 bg-white h-screen w-screen relative overflow-hidden'>
        {/* Navbar */}
        <Navbar className="relative"/>
        <Hero className='relative overflow-y-scroll'/>

      </div>
    </>
  )
}

export default Home
