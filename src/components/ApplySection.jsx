import React from 'react'

const ApplySection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-[#EEE5FF] text-[35px] font-[500]">Apply On Any Section Or Enable For <br /> Whole Page</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className=" rounded-xl w-full md:w-1/2 px-4">
          <div className='border-2 p-8 rounded-xl bg-gradient-to-b from-[#0d061f] to-[#251e35] border-[#FFFFFF10]'>
            <div className="p-4 rounded-lg mb-4">
              <h2 className="text-[25px] font-[500] text-[#EEE5FF] mb-4">Apply On Section</h2>
              <p className="text-[#EEE5FFBD] text-[18px]">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png"
                alt="Image 11"
                className="object-contain"
                width="552"
                height="357"
              />
            </div>
          </div>
        </div>
          <div className="rounded-xl w-full md:w-1/2 px-4 mt-12">
          <div className='border-2 p-8 rounded-xl bg-gradient-to-b from-[#0d061f] to-[#251e35] border-[#FFFFFF10]'>
            <div className="p-4 rounded-lg mb-4">
              <h2 className="text-[25px] font-[500] text-[#EEE5FF] mb-4">Apply On Page</h2>
              <p className="text-[#EEE5FFBD] text-[18px]">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img10.png"
                alt="Image 10"
                className="object-contain"
                width="552"
                height="397"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplySection