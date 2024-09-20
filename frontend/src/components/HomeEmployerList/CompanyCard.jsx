// src/components/CompanyCard.jsx
import React from 'react';

const CompanyCard = ({ image, name, buttonText }) => (
  <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-4 md:h-36">
    {/* Company Image and Name */}
    <div className="flex items-center mb-4 md:mb-0">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover md:mr-4"
      />
      <div className="flex flex-col ml-4 md:ml-8">
        <h3 className="text-md md:text-lg font-semibold">{name}</h3>
        <span className="text-xs md:text-sm font-semibold">{name}</span>
      </div>
    </div>

    {/* Card Content */}
    <div>
      <button className="py-2 px-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 text-sm md:text-base">
      Vacancy
      </button>
    </div>
  </div>
);

export default CompanyCard;
