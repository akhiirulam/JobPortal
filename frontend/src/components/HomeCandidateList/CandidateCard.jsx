// src/components/CompanyCard.jsx
import React from "react";
import { FaLocationPin, FaDollarSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CandidateCard = ({
  image,
  name,
  category,
  location,
  salary,
  userId,
  salaryType,
  jobTags,
}) => {
  const navigate = useNavigate();

  const handleViewProfile = (userId) => {
    console.log("hello")
    navigate("/candidateDetails");
  };
  return (
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
          <div className="flex flex-row items-center space-x-4">
            <div className="flex items-center">
              <span className="text-xs md:text-sm font-semibold">
                {category}
              </span>
            </div>

            <div className="flex items-center">
              <FaLocationPin className="text-sm md:text-base" />
              <span className="text-xs md:text-sm font-semibold">
                {location}
              </span>
            </div>

            <div className="flex items-center">
              <FaDollarSign className="text-sm md:text-base" />
              <span className="text-xs md:text-sm font-semibold">
                {salary} / {salaryType}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center mt-1 space-x-4">
            {jobTags.map((tags, index) => (
              <button
                key={index}
                className="bg-gray-200 hover:bg-gray-600 hover:text-white rounded-xl w-fit px-2"
              >
                {tags}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div>
        <button
          className="py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 text-sm md:text-base"
          onClick={()=>handleViewProfile(userId)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
