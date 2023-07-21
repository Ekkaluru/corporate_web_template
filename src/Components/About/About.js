import React from "react";
import aboutImg from "../../Assets/Images/about-img.png";

const About = ({ aboutData }) => {
  return (
    <section className="bg-[#F4F4F4] my-10" id="about">
      <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold sm:text-6xl">{aboutData.title}</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">{aboutData.description}</p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={aboutImg}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
