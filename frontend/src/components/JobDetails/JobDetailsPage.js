import React, { useState, useEffect } from "react";
import img1 from "../../public/member1.jpg";
import JobList from "../HomeJobList/JobList";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaCalendar,
  FaMapMarker,
  FaDollarSign,
  FaHourglass,
  FaUser,
  FaNeuter,
  FaCertificate,
  FaLevelUpAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { viewJobDetailsAPI } from "../../services/jobServies";

// import "./EmployersList.css";

const JobDetailsPage = () => {
  const {id} = useParams()
  const {data}=useQuery({
    queryKey:['get-job-data'],
    queryFn:()=>viewJobDetailsAPI(id),
    refetchOnWindowFocus:false
  })
  let dateOfSubmission = new Date(data?.job?.createdAt);
  let formattedDate = dateOfSubmission?.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  
  
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-center mt-[50px] bg-gray-100 p-4">
        {/* Job Section */}
        <div className="w-full max-w-4xl p-4 rounded-lg  flex flex-col md:flex-row">
          {/* Left side: Image and Job Info */}
          <div className="flex-1 flex items-start space-x-4">
            {/* Image Box */}
            <div className="w-24 h-24 bg-gray-300 rounded-md">
              {/* Placeholder for Image */}
              <img
                src={data?.job?.featuredImage}
                alt="featuredImage"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Job Info */}
            <div>
              <h1 className="text-xl font-bold">
                {data?.job?.title}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Category: 
                <span className="font-medium">{data?.job?.category}</span> <br />
                Location: <span className="font-medium">{data?.job?.address}</span> <br />
                Date: <span className="font-medium">{(formattedDate==="NaN/NaN/NaN") ? 0:formattedDate}</span> <br />
                Salary: <span className="font-medium">${data?.job?.minSalary} - ${data?.job?.maxSalary}  / year</span>
              </p>

              {/* Buttons */}
              <div className="mt-4 space-x-2">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  {data?.job?.type}
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                  Urgent
                </button>
              </div>
            </div>
          </div>

          {/* Right side: Apply and Shortlist buttons */}
          <div className="flex mt-4 md:mt-0 md:ml-4 md:flex-col justify-end">
            <button className="px-6 py-2 bg-blue-500 mb-2 mr-2 text-white rounded-md w-36 h-12">
              Apply
            </button>
            <button className="px-6 py-2 bg-gray-500 text-white rounded-md w-36 h-12">
              Shortlist
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 bg-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-4">
          {/* Sidebar */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <ul>
              <li className="mb-2">
                <span className="font-semibold">Job Description</span>
                <p>
                  {data?.job?.description}
                </p>
              </li>
              <li className="mb-2">
                <span className="font-semibold">Key Responsibilities</span>
                <p>
                  {data?.job?.keyResponsibilities}
                </p>
              </li>
              <li className="mb-2">
                <span className="font-semibold">Skill & Experience</span>
                <p>
                  {data?.job?.skillAndExperience}
                </p>
              </li>
              <li>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                  <span className="font-semibold">Share this post :</span>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
                      <FaFacebook className="mr-2" /> Facebook
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-md">
                      <FaTwitter className="mr-2" /> Twitter
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-semibold">Photos :</span>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                    {data?.job?.photos?.map((element)=>(
                      <img
                      className="w-full sm:w-auto flex items-center text-white rounded-md"
                      src={element}
                      alt="image"
                    />
                    ))}
                  </div>
                </div>
              </li>
              <li className="mt-4">
                <span className="font-semibold">Video :</span>
                <div className="w-full mt-4 max-w-full md:max-w-2xl mx-auto">
                  <video
                    className="w-full h-auto aspect-video rounded-lg shadow-md"
                    controls
                    src={data?.job?.introVideoURL}
                  >
                  </video>
                </div>
              </li>
              <li className="mt-4">
                {" "}
                <JobList />
              </li>
            </ul>
          </div>

          {/* Main content section */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="bg-gray-200 p-4 shadow-md rounded-md">
              <ul>
                <span className="font-semibold">Job Description</span>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaCalendar className="text-blue-600" />
                    <span className="ml-2">Date Posted</span>
                  </div>
                  <span className="ml-[22px]">{(formattedDate==="NaN/NaN/NaN") ? 0:formattedDate}</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaMapMarker className="text-blue-600" />
                    <span className="ml-2">Location</span>
                  </div>
                  <span className="ml-[22px]">{data?.job?.address}</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaDollarSign className="text-blue-600" />
                    <span className="ml-2">Offered Salary:</span>
                  </div>
                  <span className="ml-[22px]">${data?.job?.minSalary} - ${data?.job?.maxSalary}/{data?.job?.salaryType}</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaUser className="text-blue-600" />
                    <span className="ml-2">Experience</span>
                  </div>
                  <span className="ml-[22px]">{data?.job?.experience}</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaNeuter className="text-blue-600" />
                    <span className="ml-2">Gender</span>
                  </div>
                  <span className="ml-[22px]">{data?.job?.gender}</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaCertificate className="text-blue-600" />
                    <span className="ml-2">Qualification</span>
                  </div>
                  <span className="ml-[22px]">{data?.job?.qualification}</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaLevelUpAlt className="text-blue-600" />
                    <span className="ml-2">Career Level</span>
                  </div>
                  <span className="ml-[22px]">{data?.job?.careerLevel}</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <li className="mb-2">
                  <span className="font-semibold">Job Description</span>
                  <p>
                    {data?.job?.description}
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <span className="font-semibold">Job Skills</span>
                <li className="mb-2">
                  <p>{data?.job?.preferredSkills?.map((element)=>element)}</p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <div className="flex flex-row space-y-4 md:space-y-0 md:flex-row md:space-x-6 p-4 bg-gray-50">
                {/* Employer Info */}
                <div className="w-full bg-white p-4 rounded-md shadow-md">
                  <div className="flex items-center">
                    <img src={data?.emp?.logoImg|| img1}></img>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold ml-2">
                        {data?.emp?.name || "Employer"}
                      </span>
                      <span className="text-md font-semibold mb-4 ml-2">
                        <a className="hover:cursor-pointer">Employer Details</a>
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mt-8">
                    <li>
                      <span className="font-semibold">Category:</span> Developer
                    </li>
                    <li>
                      <span className="font-semibold">Founded Date:</span> {data?.emp?.foundYear}
                    </li>
                    <li>
                      <span className="font-semibold">Location:</span> {data?.emp?.location[0]}
                    </li>
                    <li>
                      <span className="font-semibold">Phone Number:</span>{data?.emp?.mobile}
                    </li>
                    <li>
                      <span className="font-semibold">Email:</span>{" "}
                      <a
                        href={`mailto:${data?.emp?.email}`}
                        className="text-blue-500 hover:underline"
                      >
                        {data?.emp?.email}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">Socials:</span>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                      {data?.emp?.facebook ?<button className="bg-blue-600 text-white px-3 py-2 rounded-md">
                          Facebook
                        </button>:""}
                        {data?.emp?.twitter ?<button className="bg-blue-400 text-white px-3 py-2 rounded-md">
                          Twitter
                        </button>:""}
                        {data?.emp?.linkedIn ?<button className="bg-blue-700  text-white px-3 py-2 rounded-md">
                          Pinterest
                        </button>:""}
                        
                        
                        
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
