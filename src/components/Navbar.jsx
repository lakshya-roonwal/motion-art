import React from 'react'

const Navbar = () => {
  return (
    <section className="box-border max-w-7xl mx-auto py-8">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 px-4">
        <div className="flex justify-start">
          <a href="https://qodematrix.com/motion-art-for-elementor/">
            <img
              decoding="async"
              width="220"
              height="52"
              src="https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png"
              alt="Motion Art Effect logo"
              className="inline-block align-middle"
            />
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4 hidden lg:flex justify-end items-center">
        <div className="flex justify-end">
          <a
            className="text-sm bg-white hover:bg-transparent text-black font-semibold hover:text-white text-[18px] transition ease-in-out duration-300 py-[16px] px-[35px] border border-white  rounded"
            href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Navbar