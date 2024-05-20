import React from 'react'

const Ratings = () => {
  return (
    <section className="my-8">
      <div className="mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8 ">
            <div className="text-center">
              <h2 className="text-[#EEE5FF] text-[22px] font-bold">Trusted by thousands of users around the world</h2>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <div className="flex justify-center">
              <div className="w-24 h-24">
                <img
                  src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img2.png"
                  alt="Image 2"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p>
                <img
                  src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png"
                  alt=""
                  width="155"
                  height="20"
                  className="inline-block align-middle"
                />
              </p>
              <p className="text-gray-600"><strong>4.5</strong> Score, 9 Reviews</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <div className="flex justify-center">
              <div className="w-24 h-24">
                <img
                  src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img1.png"
                  alt="Image 1"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p>
                <img
                  src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png"
                  alt=""
                  width="155"
                  height="20"
                  className="inline-block align-middle"
                />
              </p>
              <p className="text-gray-600"><strong>4.5</strong> Score, 9 Reviews</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <div className="flex justify-center">
              <div className="w-24 h-24">
                <img
                  src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img3.png"
                  alt="Image 3"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p>
                <img
                  src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png"
                  alt=""
                  width="155"
                  height="20"
                  className="inline-block align-middle"
                />
              </p>
              <p className="text-gray-600"><strong>4.5</strong> Score, 9 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ratings