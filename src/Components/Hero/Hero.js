import React from "react";
import bannerImg from "../../Assets/Images/header-banner.png";

const Hero = ({ heroData }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home">
      <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:py-26 md:py-12 md:px-10 lg:px-32 text-gray-900">
        <h1 className="text-5xl font-bold sm:text-6xl text-gray-900">
          {heroData.heading}
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
          {heroData.subheading}
        </p>
        <div className="flex flex-wrap justify-center">
          <button
            type="button"
            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
      <img
        src={bannerImg}
        alt=""
        className="mx-auto mb-12 shadow-md -mt-10 bg-gray-500"
      />
    </section>
  );
};

export default Hero;
