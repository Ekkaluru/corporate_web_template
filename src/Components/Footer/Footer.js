import React from "react";
import logo from "../../Assets/Images/your-logo.png";
import fb from "../../Assets/Images/facebook-logo.png";
import twitter from "../../Assets/Images/twitter-logo.png";
import linkedin from "../../Assets/Images/linkedin-logo.png";
import { Link } from "react-router-dom";

const Footer = ({ footerData }) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-4 pt-10 pb-20 bg-black text-gray-100">
      <img onClick={() => scrollToSection("home")} src={logo} alt="" className="w-[300px] h-[70px]" />
      <div className="flex gap-10">
        <div className="w-1/2">
          <p className="my-5">{footerData.text}</p>
          <div className="flex justify-between items-center w-[150px]">
            <Link to={footerData.facebookLink} className="text-2xl" target="_blank">
              <img src={fb} alt="" className="w-[40px]" />
            </Link>
            <Link to={footerData.twitterLink} className="text-2xl" target="_blank">
              <img src={twitter} alt="" className="w-[50px]" />
            </Link>
            <Link to={footerData.linkedinLink} className="text-2xl" target="_blank">
              <img src={linkedin} alt="" className="w-[40px]" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-start">
          <button
            type="button"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
