import React from 'react';
import bg from '../../assets/bgVideo1.mp4';
import './hero.css'


const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden"> 
      
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        src={bg} 
        autoPlay 
        loop 
        muted 
        playsInline
      />

      <div className="center-part relative z-10 flex flex-col items-center top-40 h-full space-y-10">
        

        <button className="bg-[#e6ffe6] bg-opacity-70 p-4 rounded-lg text-center text-black shadow-lg h-28 w-3/4 md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold">Menu</h2>
        </button>


        <button className="bg-[#e6ffe6] bg-opacity-70 p-4 rounded-lg text-center text-black shadow-lg h-28 w-3/4 md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold">Gallery</h2>

        </button>


        <button className="bg-[#e6ffe6] bg-opacity-70 p-4 rounded-lg text-center text-black shadow-lg h-28 w-3/4 md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold">Contacts</h2>

        </button>

      </div>

    </div>
  );
};

export default Hero;
