import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import About from "../../Components/About/About";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("config.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar onMenuItemClick={scrollToSection} />
      {!loading && (
        <>
          <Hero heroData={data.hero} />
          <Services servicesData={data.services} />
          <About aboutData={data.about} />
          <ContactUs contactData={data.contactUs} smtpInfo={data.email} />
          <Footer footerData={data.footer} />
        </>
      )}
    </div>
  );
};

export default Home;
