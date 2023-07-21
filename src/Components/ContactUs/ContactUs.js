import React from "react";
import emailjs from "emailjs-com";

const ContactUs = ({ contactData, smtpInfo }) => {
  const mapSrc = `https://www.google.com/maps/embed?pb=${encodeURIComponent(
    contactData.address
  )}`;

  const emailJsServiceId = smtpInfo.serviceId;
  const emailJsTemplateId = smtpInfo.templateId;
  const emailJsUserId = smtpInfo.userId;

  const sendEmail = (e) => {
    e.preventDefault();

    const fullName = e.target.elements.fullName.value;
    const email = e.target.elements.email.value;
    const phoneNumber = e.target.elements.phoneNumber.value;
    const message = e.target.elements.message.value;

    const templateParams = {
      fullName,
      email,
      phoneNumber,
      message,
    };

    emailjs
      .send(emailJsServiceId, emailJsTemplateId, templateParams, emailJsUserId)
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
    e.target.reset();
  };

  return (
    <div className="px-5" id="contact">
      <h1 className="text-center font-semibold text-5xl mb-10">Contact Us</h1>
      <div className="md:flex justify-between">
        <div>
          <h3 className="text-2xl font-bold">Address</h3>
          <p className="text-xl font-semibold">{contactData.address}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Phone</h3>
          <p className="text-xl font-semibold">{contactData.phone}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Email</h3>
          <p className="text-xl font-semibold">{contactData.email}</p>
        </div>
      </div>
      <div className="md:flex my-10">
        <div className="md:w-1/2">
          <iframe
            title="map"
            src={mapSrc}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:w-1/2">
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            onSubmit={sendEmail}
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="fullName"
                placeholder="Leroy Jenkins"
                className="block w-full px-2 py-2 mt-2  border border-black shadow-sm"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email</span>
              <input
                type="email"
                name="email"
                placeholder="leroy@jenkins.com"
                className="block w-full px-2 py-2 mt-2  border border-black shadow-sm"
              />
            </label>
            <label className="block">
              <span className="mb-1">Phone Number</span>
              <input
                type="number"
                name="phoneNumber"
                placeholder="1234567890"
                className="block w-full px-2 py-2 mt-2  border border-black shadow-sm"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                name="message"
                placeholder="Your message here..."
                rows="3"
                className="block w-full px-2 py-2 mt-2  border border-black shadow-sm"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-end px-8 py-3 text-lg rounded bg-black text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
