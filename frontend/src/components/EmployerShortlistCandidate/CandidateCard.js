import React, { useState } from "react";
import { FaEnvelope, FaEye, FaTimes } from "react-icons/fa";
import Modal from './Modal';
import ShowMessageBox from './ShowMessageBox'; // Make sure to import this component

const CandidateCard = ({ image, name, title, location, salary, candidateId }) => {
  const [showMessageBox, setShowMessageBox] = useState(false);

  const toggleshowMessageBox = () => {
    setShowMessageBox(!showMessageBox);
  };

  return (
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

      {/* Card Buttons */}
      <div>
        <div className="flex space-x-2 mr-8">
          <button className="text-blue-600 w-6 h-6 bg-gray-200 flex items-center justify-center rounded">
            <FaEye />
          </button>

          <button
            className="text-blue-600 w-6 h-6 bg-gray-200 flex items-center justify-center rounded"
            onClick={toggleshowMessageBox}
          >
            <FaEnvelope className="bg-gray-100 h-6 w-6 p-1 cursor-pointer hover:bg-gray-200 rounded" />
          </button>

          <button className="text-blue-600 w-6 h-6 bg-gray-200 flex items-center justify-center rounded">
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Modal for Scheduling Meeting */}
      <Modal isOpen={showMessageBox} onClose={toggleshowMessageBox}>
        <ShowMessageBox candidateId={candidateId} />
      </Modal>
    </div>
  );
};

export default CandidateCard;
