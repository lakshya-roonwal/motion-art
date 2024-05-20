import React from 'react'

const Footer = () => {
  return (
    <section className=" py-8"
    style={{
                backgroundImage: 'linear-gradient(90deg, #5E11FF 30%, #F87516 100%)',
              }}
    >
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
          <p className="text-white">&copy; 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>
        <div className="w-full md:w-auto text-center md:text-right">
          <ul className="flex justify-center md:justify-end">
            <FooterLink url="https://qodematrix.com/docs/motion-art-for-elementor/" text="Documentation" />
            <FooterLink url="https://support.qodematrix.com/" text="Support" />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer

const FooterLink = ({ url, text }) => {
    return (
      <li className="ml-4">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">{text}</a>
      </li>
    );
  };