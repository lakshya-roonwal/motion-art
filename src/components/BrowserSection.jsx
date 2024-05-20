import React from 'react'

const BrowserSection = () => {
  return (
    <section className="py-8">
    <div className="border-2 container mx-auto bg-gradient-to-b from-[#0d061f] to-[#251e35] border-[#FFFFFF10] rounded-xl py-12">
      <div className="text-center my-4">
        <h2 className="text-[#EEE5FF] text-[25px] font-[500]">Supported by All Popular Browsers</h2>
      </div>
      <div className="text-center mb-4">
        <p className='text-gray-600'>Rest assured, Motion Art is designed to be compatible <br /> with all major web browsers.</p>
      </div>
      <div className="flex justify-center items-center mb-8">
        <img
          src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png"
          alt="Browser support"
          className="object-contain"
          width="441"
          height="48"
        />
      </div>
    </div>
  </section>
  )
}

export default BrowserSection