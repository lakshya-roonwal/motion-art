import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Purchaze = () => {
  return (
    <section className="py-12">
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="text-center md:text-left">
            <h2 className="md:text-[35px] text-[25px] text-[#EEE5FF] font-semibold mb-4">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
            <p className="text-gray-600">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
          </div>
          <div className="flex md:justify-start justify-center mt-4">
            <a
              href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
              target="_blank"
              style={{
                backgroundImage: 'linear-gradient(90deg, #5E11FF 30%, #F87516 100%)',
              }}
              className="flex  items-center  gap-2 bg-blue-500 text-white text-[18px] px-[35px] py-[20px] rounded-[18px] uppercase tracking-wide hover:bg-blue-600 transition duration-300"
            >
              <i className="icon icon-arrow-right mr-2"></i>Purchase From Envato
              <FaArrowRight/>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="flex md:justify-end justify-center">
            <img
              src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img5.png"
              alt="Image 5"
              className="object-contain"
              width="248"
              height="246"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Purchaze