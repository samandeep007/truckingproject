import React from 'react';

const Card = ({ data }) => {
  const { title, description, logoUrl } = data;

  return (
    <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4`}>
      <div
        style={{ height: "330px" }}
        className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 hover:bg-gray-100"
      >
        <img src={logoUrl} alt={title} className="w-16 h-16 mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
