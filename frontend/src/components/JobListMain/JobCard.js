import React from 'react';
import { PiBriefcaseLight } from 'react-icons/pi';
import { CiLocationOn, CiBookmark } from 'react-icons/ci';
import { GiMoneyStack } from 'react-icons/gi';
import logo from '../../public/airbnb.jpg';

const Button = ({ label, className }) => (
  <button className={`px-4 py-1 rounded-full text-xs ${className}`}>
    {label}
  </button>
);

export const JobCard = ({ logo, title, feature, details, location, salary, type, urgent }) => (
  <div className="relative text-center rounded-lg border border-slate-200 shadow-sm transition-shadow duration-200 hover:shadow-lg m-6 p-4 md:p-6 lg:p-8">
    <CiBookmark className="absolute top-4 right-4 text-gray-600 hover:text-yellow-500 transition-colors duration-200" />
    
    <div className="flex items-start mb-4">
    <img 
      src={logo} 
      alt={`Logo for ${title}`} 
      className="mr-3 h-12 w-12" 
    />
      <div className="w-full text-left">
        <div className="flex items-center mb-2">
          <h1 className="text-lg font-semibold mr-2">{title}</h1>
          <p className="text-green-600 text-xs">{feature}</p>
        </div>
        <div className="flex flex-wrap items-center space-x-4 mb-2 text-sm text-slate-400">
          <p className="flex items-center text-inherit">
            <PiBriefcaseLight className="mr-2 text-slate-400" />
            {details}
          </p>
          <p className="flex items-center text-slate-400">
            <CiLocationOn className="mr-2" />
            {location}
          </p>
          <p className="flex items-center text-slate-400">
            <GiMoneyStack className="mr-2 text-slate-400" />
            {salary}
          </p>
        </div>
      </div>
    </div>
    <div className="flex space-x-2 mt-4">
      <Button label={type} className="bg-blue-200 text-blue-800" />
      {urgent && <Button label="Urgent" className="bg-orange-200 text-orange-500" />}
    </div>
  </div>
);

export default JobCard;