import React from 'react';

const Services = ({ data }) => {
  const { title, description, logoUrl } = data;

  return (
    <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[16%] xl:mx-auto p-4`}>
      <div
        style={{ height: "200px" }}
        className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 hover:bg-gray-100"
      >
        {data.title === 'LTL' || data.title === 'Truckload' ? (
          <img
            src={logoUrl}
            alt={title}
            className="w-28 h-20 mb-4 mx-auto mt-5"
          />
        ) : (
          <img src={logoUrl} alt={title} className="w-24 h-18 mb-4 mx-auto" />
        )}
        <h2 className="text-2xl xl:text-[20px] font-semibold mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default Services;
