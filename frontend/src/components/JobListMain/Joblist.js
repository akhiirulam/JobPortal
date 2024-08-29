import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { PiBriefcaseLight } from "react-icons/pi";
import { CiLocationOn, CiBookmark, CiCalendar } from "react-icons/ci";
import { GiMoneyStack, GiSandsOfTime } from "react-icons/gi";
import { LiaUserTieSolid } from "react-icons/lia";
import { PiUserThin } from "react-icons/pi";
import { FaTimeline, FaCoins } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

import logo1 from "../Public/junior.jpg";


const jobData = [
  {
    logo: logo1,
    title: "Junior Graphic Designer (Web)",
    feature: "Featured",
    details: "Design, Development",
    location: "New York",
    salary: "$150-180/week",
    type: "Full Time",
    dateposted: "dd/mm/year",
    expirationdate: "dd/mm/year",
    experience: "4 years",
    gender: "Both",
    qualification: "Bachelor's Degree",
    careerlevel: "Officer",
    categories: "Developer",
    founded: "2005",
    companylocation: "New York",
    phonenumber: "123-444-555",
    email: "employer@apus.com",
    social: ["facebook.com", "twitter.com", "linkedin.com", "instagram.com"],
    jobdiscription:
      "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.",
    keyresponsibilities: [
      "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
      "Work with BAs, product managers and tech teams to lead the Product Design",
     "Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.","Accurately estimate design tickets during planning sessions.","Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.","Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.","Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel","Present your work to the wider business at Show & Tell sessions."
    ],
    skillsandexperience: [
      "You have at least 3 years’ experience working as a Product Designer.",
      "You have experience using Sketch and InVision or Framer X.",
      // More skills and experience...
    ],
    sharethispost: ["www.facebook.com", "www.twitter.com", "www.pinterest.com"],
    phtos: [
      "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/blog6.jpg",
      "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/blog5.jpg",
      "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/blog4.jpg",
      "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/blog3.jpg",
      "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/blog2.jpg",
    ],
    video: ["https://www.youtube.com/embed/7e90gBu4pas"], // Ensure the video URL is in the embed format
  },
];

const Joblist = () => {
  return (
    <div className="w-full p-4 flex flex-col items-center">
      {jobData.map((job, index) => (
        <div
          key={index}
          className="bg-gray-200 text-gray-700 w-full p-4 flex flex-col md:flex-row items-start mb-4 rounded-lg shadow-md"
        >
          {/* Logo Column */}
          <div className="flex-shrink-0 w-full md:w-1/6 flex justify-center md:justify-start mb-4 md:mb-0">
            <img
              src={job.logo}
              alt={`Logo for ${job.title}`}
              className="h-16 w-16 rounded-full"
            />
          </div>

          {/* Details Column */}
          <div className="w-full md:w-3/6 flex flex-col md:pl-4">
            <div className="flex items-center mb-2">
              <h1 className="text-lg font-bold">{job.title}</h1>
              <div className="flex items-center ml-3 space-x-2">
                <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded-full">
                  <FontAwesomeIcon
                    icon={faCrown}
                    style={{ color: "#fcfcfc" }}
                    size="lg"
                  />
                </div>
                <p className="text-red-500">{job.feature}</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-4 mb-2">
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <PiBriefcaseLight className="text-gray-600" />
                <p>{job.details}</p>
              </div>
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <CiLocationOn className="text-gray-600" />
                <p>{job.location}</p>
              </div>
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <IoIosTimer  className="text-gray-600" />
                <p>{job.dateposted}</p>
              </div>
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <GiMoneyStack className="text-gray-600" />
                <p>{job.salary}</p>
              </div>
            </div>
          </div>

          {/* Apply Column */}
          <div className="w-full md:w-2/6 flex flex-col items-center md:items-end md:text-right">
            <div className="flex flex-col md:flex-row items-center space-x-2 mb-4">
              <p className="text-sm">Application ends:</p>
              <p className="text-red-500 text-sm">{job.expirationdate}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Apply Now
              </button>
              <CiBookmark className="text-gray-600" size={24} />
            </div>
          </div>
        </div>
      ))}

      {/* Two Column Layout */}
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="container flex flex-col p-2">
          <h2 className="text-lg font-bold mb-4">Job Description</h2>
          <p>{jobData[0].jobdiscription}</p>

          <h2 className="text-lg font-bold mt-4 mb-4">Key Responsibilities</h2>
          <ul className="list-disc pl-5">
            {jobData[0].keyresponsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
          <h2 className="text-lg font-bold mt-4 mb-4">Skills And Experience</h2>
          <ul className="list-disc pl-5">
            {jobData[0].skillsandexperience.map((skillsandexperience, idx) => (
              <li key={idx}>{skillsandexperience}</li>
            ))}
          </ul>

          <h2 className="text-lg font-bold mt-4 mb-4">Share This Post:</h2>
          <ul className="list-disc pl-5">
            {jobData[0].sharethispost.map((post, idx) => (
              <li key={idx}>
                <a
                  className="text-blue-500 hover:underline"
                  href={`https://${post}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post}
                </a>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-bold mt-4 mb-4">Photos:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {jobData[0].phtos.map((photo, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-lg">
                <img
                  src={photo}
                  alt={`Photo ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-bold mt-4 mb-4">Video:</h2>
            <iframe
              src={jobData[0].video[0]}
              frameBorder="0"
              className="w-full h-60"
              allowFullScreen
              title="Company Video"
            ></iframe>
          </div>
          <div> <h2 className="text-lg font-bold mt-4 mb-4">related Jobs</h2></div>
        </div>

        {/* Right colum job details*/}
        <div className="">
        <div className="bg-gray-200 p-4 m-5 rounded-lg shadow-md ">
          <div >
            {" "}
            <h2 className="text-lg font-bold mb-4">Job Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <CiCalendar className="text-sky-600 mr-2" />
                <div>
                  <h3 className="font-bold">Date Posted</h3>
                  <p>{jobData[0].dateposted}</p>
                </div>
              </div>
              <div className="flex items-center">
                <CiLocationOn className="text-sky-600 mr-2" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p>{jobData[0].location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <GiMoneyStack className="text-sky-600 mr-2" />
                <div>
                  <h3 className="font-bold">Offered Salary</h3>
                  <p>{jobData[0].salary}</p>
                </div>
              </div>
              <div className="flex items-center">
                <GiSandsOfTime className="text-sky-600 mr-2" />
                <div>
                  <h3 className="font-bold">Expiration Date</h3>
                  <p>{jobData[0].expirationdate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <LiaUserTieSolid className="text-sky-600 mr-2" />
                <div>
                  <h3 className="font-bold">Experience</h3>
                  <p>{jobData[0].experience}</p>
                </div>
              </div>
              <div className="flex items-center">
                <PiUserThin className="text-sky-600 mr-2" />
                <div>
                  <h3 className="font-bold">Gender</h3>
                  <p>{jobData[0].gender}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaTimeline className="text-sky-600 mr-2" />
                <div>
                  <h3 className="font-bold">Qualification</h3>
                  <p>{jobData[0].qualification}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCoins className="text-sky-600 mr-2" />
                <div>
                  <h3 className="font-bold">Career Level</h3>
                  <p>{jobData[0].careerlevel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* right map */}

        <div className="w-full p-4">
          <h2 className="text-lg font-bold mb-4">Job Location</h2>
         
        </div>
        
       
        {/* right jobskills */}
       
        <div className="   ">
          <div className=" flex-col bg-gray-200 p-4 rounded-lg shadow-md m-5">
            <h2 className="text-lg font-bold mb-4">Job Skills</h2>
            <div className="space-y-2 ">
              <button className="bg-gray-100  text-black hover:bg-black hover:text-white px-4 py-2  m-2 rounded">
                App
              </button>
              <button className="bg-gray-100  text-black hover:bg-black hover:text-white px-4 py-2  m-2 rounded">
                Jobs
              </button>
              <button className="bg-gray-100  text-black hover:bg-black hover:text-white px-4 py-2  m-2 rounded">
                Superio
              </button>
              <button className="bg-gray-100  text-black hover:bg-black hover:text-white px-4 py-2  m-2 rounded">
                Support
              </button>
            </div>
          </div>
        

        {/* right employer */}
      

        <div className="bg-gray-200 p-4 flex flex-col rounded-lg shadow-md m-5">
          <div className="flex-shrink-0 w-full md:w-1/6 flex justify-center md:justify-start mb-4 md:mb-0">
            <img
              src={jobData[0].logo}
              alt={`Logo for ${jobData[0].title}`}
              className="h-16 w-16 rounded-full"
            />
          </div>
          <h2 className="text-lg font-bold mb-4">Employer</h2>

          <button className="text-sky-500 hover:under-line">
            View Company Profile
          </button>
          <div>
            <div className="list-disc pl-5">
              <h3>Categories: {jobData[0].categories}</h3>
              <h3>Founded Date: {jobData[0].founded}</h3>
              <h3>Location:{jobData[0].companylocation}</h3>
              <h3>Phone Number: {jobData[0].phonenumber}</h3>
              <h3>Email: {jobData[0].email}</h3>
              <h3> Socials:</h3>
              <ul className="list-disc pl-5">
                {jobData[0].social.map((platform, idx) => (
                  <li key={idx}>
                    <a
                      href={`https://${platform}`}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Visit ThemeForest
            </button>
          </div>
        </div>
      </div>
    </div>
    </div></div>
  );
};

export default Joblist;