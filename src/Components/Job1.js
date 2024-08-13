import React from "react";

// Import icons
import { PiBriefcaseLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";


// Import logos
import logo1 from "../Public/junior.jpg"
import logo2 from "../Public/finance.jpg";
import logo3 from "../Public/general.jpg";
import logo4 from "../Public/Assistant.jpg";
import logo5 from "../Public/product.jpg";

const JobCard = ({
  logo,
  title,
  feature,
  details,
  location,
  salary,
  type,
  urgent,
}) => (
  <div className=" text-center rounded-lg border border-slate-200 shadow-sm transition-shadow duration-200 hover:shadow-lg m-6 p-4 sm:p-4 md:p-6 lg:p-8">
    <CiBookmark className=" text-gray-600 hover:text-yellow-500 transition-colors duration-200" />
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
    <div className="absolute bottom-4 left-4 lg:left-20 sm:left-20">
      <button className=" justify-items-center bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-xs mr-4">
        {type}
      </button>
      {urgent && (
        <button className="justify-items-center bg-orange-200 text-orange-500 px-4 py-1 rounded-full text-xs">
          {urgent}
        </button>
      )}
    </div>
  </div>
);

const jobData = [
  {
    logo: logo1,
    title: "Junior Graphic Designer (Web)",
    feature: "Featured",
    details: "Design, Development",
    location: "New York",
    salary: "$150-180/week",
    type: "Full Time",
    urgent: "Urgent",
  },

  {
    logo: logo2,
    title: "Finance Manager & Health",
    feature: "Featured",
    details: "Finance",
    location: "New York",
    salary: "$450 - $500 / month",
    type: "Full Time",
    urgent: "Urgent",
  },

  {
    logo: logo3,
    title: "General Ledger Accountant",
    feature: "Feature",
    details: "Design, Marketing",
    location: "New York",
    salary: "$50-68/day",
    type: "Full Time",
  },
  {
    logo: logo4,
    title: "Assistant / Store Keeper",
    feature: "Feature",
    details: "Automotive Jobs, Marketing",
    location: "New York",
    salary: "$250-280/week",
    type: "Part Time",
  },
  {
    logo: logo5,
    title: "Group Marketing Manager",
    details: "Customer, Marketing",
    location: "Miami",
    salary: "$800-850/month",
    type: "Part Time",
  },
  {
    logo: logo5,
    title: "Product Sales Specialist",
    feature: "Featured",
    details: "Project Management",
    location: "New York",
    salary: "$520-650/month",
    type: "Internship",
  },
];

function Job1() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-lg">Featured Jobs</h2>
        <p className="text-sm">
          Know your worth and find the job that qualifies your life
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {jobData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="p-2 w-60 border-solid border-2 border-blue-800 bg-blue-800 text-white hover:bg-white hover:text-blue-800 p-2 rounded">
          Load More Listings
        </button>
      </div>
    </section>
  );
}

export default Job1 ;
