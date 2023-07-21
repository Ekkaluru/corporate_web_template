import React from "react";

const Services = ({servicesData}) => {
  return (
    <div className="my-5" id="services">
      <h1 className="text-center font-semibold text-5xl mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="p-5 rounded-lg shadow-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <img src={`../Icons/service-${service.id}.png`} alt="" className="w-[60px] h-[60px]" />
              <div className="ml-4">
                <h1 className="text-2xl text-center font-semibold">{service.title}</h1>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
