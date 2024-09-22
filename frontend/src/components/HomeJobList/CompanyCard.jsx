import React, { useState } from 'react';
import { FaBookmark } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({ image, company, title, address, minSalary, salaryType, jobId, userId }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = async () => {

    try {
      const response = await axios.post('http://localhost:5000/api/v1/user/shortlist', {
        jobId: jobId,
        userId: userId,
      });

      if (response.status === 200) {
        setBookmarked(true);
      }
    } catch (error) {
      console.error('Error adding job to shortlist:', error);
    }
  };
  const navigate = useNavigate()
  const handleViewJob=(jobId)=>{
    navigate(`/job/${jobId}`)
  }

  return (
    <div onClick={()=>{handleViewJob(jobId)}} style={{cursor:"pointer"}} className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-4 md:h-36">
      {/* Company Image and Name */}
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src={image}
          alt={company}
          className="w-16 h-16 rounded-full object-cover md:mr-4"
        />
        <div className="flex flex-col ml-4 md:ml-8">
          <div>
            <h3 className="text-md md:text-lg font-semibold">{title}</h3>
          </div>
          <div className=''>
            <span className="text-xs md:text-sm font-semibold">{company} </span>
            <span className="text-xs md:text-sm font-semibold ml-2">|| {address} </span>
            <span className="text-xs md:text-sm font-semibold ml-2">|| {minSalary} / {salaryType} </span>
          </div>
        </div>
      </div>

      {/* Bookmark Icon */}
      <div>
        <FaBookmark 
          className={`mr-12 mb-24 cursor-pointer ${bookmarked ? 'text-yellow-500' : ''}`} 
          onClick={handleBookmarkClick} 
        />
      </div>
    </div>
  );
};

export default CompanyCard;
