import React from "react";
import { FaEnvelope, FaEye,FaLock,FaPenSquare,FaTimes } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const CandidateCard = ({ image, name, title, location, salary }) => (
  <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-4 md:h-36">
    {/* Candidate Image and Info */}
    <div className="flex items-center mb-4 md:mb-0">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover md:mr-4"
      />
      <div className="flex flex-col ml-4 md:ml-8">
        <h3 className="text-md md:text-lg font-semibold">{name}</h3>
        <span className="text-xs md:text-sm text-gray-500">{title}</span>
        <span className="text-xs md:text-sm text-gray-500">{location}</span>
        <span className="text-xs md:text-sm text-gray-500">
          Salary: {salary}
        </span>
      </div>
    </div>

    {/* Card Button */}
    <div>
      <div className="flex space-x-2 mr-8">
        <button className="text-blue-600 w-6 h-6 bg-gray-200 flex items-center justify-center rounded" >
          <FaEye />
        </button>

        <button className="text-blue-600 w-6 h-6 bg-gray-200 flex items-center justify-center rounded" >
          <FaEnvelope />
        </button>
        <button className="text-blue-600 w-6 h-6 bg-gray-200 flex items-center justify-center rounded" >
          <FaTimes />
        </button>
      </div>
    </div>
  </div>
);

export default CandidateCard;
