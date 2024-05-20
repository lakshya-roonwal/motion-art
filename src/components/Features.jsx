import React from 'react'

const Features = () => {
  return (
    <section className="py-12">
    <div className="mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-[40px] text-[#EEE5FF] font-bold">An All-Round Plugin With <br /> Powerful Features</h2>
        <p className="mt-4 mx-auto md:w-1/3 px-8 text-gray-600">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-around flex-wrap gap-4 w-full px-8">
          <FeatureCard
            imageUrl="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img9.png"
            title="Light Weight"
            description="Motion Art for Elementor is designed to be lightweight."
          />
          <FeatureCard
            imageUrl="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img6.png"
            title="100% Responsive"
            description="Create a consistent visual experience across all devices."
          />
          <FeatureCard
            imageUrl="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img7.png"
            title="User Friendly Interface"
            description="Ensure a smooth experience for both applicants and administrators."
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features

const FeatureCard = ({ imageUrl, title, description }) => {
    return (
      <div className="md:max-w-96 w-full rounded-xl border-2 flex flex-col items-start p-8 bg-gradient-to-b from-[#0d061f] to-[#251e35] border-[#FFFFFF10] ">
        <img src={imageUrl} alt={title} className="mb-4 -mx-12 " width="188" height="188" />
        <h3 className="text-[#EEE5FF] text-[25px] font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };