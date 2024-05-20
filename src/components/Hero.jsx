import React from 'react'

const Hero = () => {
  return (
    <section className="py-12">
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <div className="text-center md:text-left text-[18px] px-8">
            <h2 className="text-white  font-bold mb-4">
            <span
        className="inline-block text-transparent bg-clip-text"
        style={{
          backgroundImage: 'linear-gradient(90deg, #F87516 16%, #5E11FF 43%)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >

            Transform <br /> Your Website
            </span>
            </h2>
            <p className="text-gray-600">
            <span>

            With Motion <br /> Art Effect
            </span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 md:-mx-20">
          <div className="text-center md:text-left">
            <h1 className="flex flex-col text-white md:text-[55px] text-[35px] font-semibold mb-4">Attract Your Visitors Attention With Colorful 
            <span
        className="inline-block text-transparent bg-clip-text"
        style={{
          backgroundImage: 'linear-gradient(90deg, #F87516 16%, #5E11FF 43%)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
            Motion Art Effect
            </span>
            </h1>
            <p className="text-gray-600">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          {/* This column is empty */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero