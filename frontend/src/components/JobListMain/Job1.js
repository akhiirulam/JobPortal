import React from "react";
import Record from "./record.json";
import { PiBriefcaseLight } from "react-icons/pi";
import { CiLocationOn, CiBookmark } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";



const Button = ({ label, className }) => (
  <button className={`px-4 py-1 rounded-full text-xs ${className}`}>
    {label}
  </button>
);

const JobCard = ({ logo, title, feature, details, location, salary, type, urgent }) => (
  <div className="relative text-center rounded-lg border border-slate-200 shadow-sm transition-shadow duration-200 hover:shadow-lg m-6 p-4 md:p-6 lg:p-8">
    {/* Bookmark Icon */}
    <CiBookmark className="absolute top-4 right-4 text-gray-600 hover:text-yellow-500 transition-colors duration-200" />
    
    <div className="flex items-start mb-4">
      <img src={logo} alt={`Logo for ${title}`} className="mr-3 h-12 w-12" />
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

function Job1() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-center text-2xl font-bold mb-4">Featured Jobs</h2>
        <p className="text-center mb-8">
          Know your worth and find the job that qualifies your life
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Record.map((job, index) => (
          <JobCard 
            key={index}
            logo={job.logo} // Ensure correct paths in the JSON
            title={job.title}
            feature={job.feature}
            details={job.details}
            location={job.location}
            salary={job.salary}
            type={job.type}
            urgent={job.urgent}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button 
          label="Load More Listings" 
          className="m-8 h-10 w-50 rounded border-solid border-2 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800" 
        />
      </div>
    </section>
  );
}

export default Job1;