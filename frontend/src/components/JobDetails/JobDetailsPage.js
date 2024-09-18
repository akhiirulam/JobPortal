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

// import "./EmployersList.css";

const JobDetailsPage = () => {
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
                src="https://via.placeholder.com/150"
                alt="Job Image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Job Info */}
            <div>
              <h1 className="text-xl font-bold">
                Junior Graphic Designer (Web)
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Category:{" "}
                <span className="font-medium">Design, Development</span> <br />
                Location: <span className="font-medium">New York</span> <br />
                Date: <span className="font-medium">June 20, 2021</span> <br />
                Salary: <span className="font-medium">$150 - $180 / week</span>
              </p>

              {/* Buttons */}
              <div className="mt-4 space-x-2">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Full Time
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
                  As a Product Designer, you will work within a Product Delivery
                  Team fused with UX, engineering, product and data talent. You
                  will help the team design beautiful interfaces that solve
                  business challenges for our clients. We work with a number of
                  Tier 1 banks on building web-based applications for AML, KYC
                  and Sanctions List management workflows. This role is ideal if
                  you are looking to segue your career into the FinTech or Big
                  Data arenas.
                </p>
              </li>
              <li className="mb-2">
                <span className="font-semibold">Key Responsibilities</span>
                <p>
                  Be involved in every step of the product design cycle from
                  discovery to developer handoff and user acceptance testing.
                  Work with BAs, product managers and tech teams to lead the
                  Product Design Maintain quality of the design process and
                  ensure that when designs are translated into code they
                  accurately reflect the design specifications. Accurately
                  estimate design tickets during planning sessions. Contribute
                  to sketching sessions involving non-designersCreate, iterate
                  and maintain UI deliverables including sketch files, style
                  guides, high fidelity prototypes, micro interaction
                  specifications and pattern libraries. Ensure design choices
                  are data led by identifying assumptions to test each sprint,
                  and work with the analysts in your team to plan moderated
                  usability test sessions. Design pixel perfect responsive UI’s
                  and understand that adopting common interface patterns is
                  better for UX than reinventing the wheel Present your work to
                  the wider business at Show & Tell sessions.
                </p>
              </li>
              <li className="mb-2">
                <span className="font-semibold">Skill & Experience</span>
                <p>
                  You have at least 3 years’ experience working as a Product
                  Designer. You have experience using Sketch and InVision or
                  Framer X You have some previous experience working in an agile
                  environment – Think two-week sprints. You are familiar using
                  Jira and Confluence in your workflow
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
                    <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md">
                      <FaPinterest className="mr-2" /> Pinterest
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-semibold">Photos :</span>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                    <img
                      className="w-full sm:w-auto flex items-center text-white rounded-md"
                      src={img1}
                      alt="image"
                    />
                    <img
                      className="w-full sm:w-auto flex items-center text-white rounded-md"
                      src={img1}
                      alt="image"
                    />
                    <img
                      className="w-full sm:w-auto flex items-center text-white rounded-md"
                      src={img1}
                      alt="image"
                    />
                  </div>
                </div>
              </li>
              <li className="mt-4">
                <span className="font-semibold">Video :</span>
                <div className="w-full mt-4 max-w-full md:max-w-2xl mx-auto">
                  <video
                    className="w-full h-auto aspect-video rounded-lg shadow-md"
                    controls
                    src="/path/to/video.mp4" // Replace with your video file path
                  >
                    Your browser does not support the video tag.
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
                  <span className="ml-[22px]">Date Posted</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaMapMarker className="text-blue-600" />
                    <span className="ml-2">Location</span>
                  </div>
                  <span className="ml-[22px]">Date Posted</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaDollarSign className="text-blue-600" />
                    <span className="ml-2">Offered Salary:</span>
                  </div>
                  <span className="ml-[22px]">Date Posted</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaCalendar className="text-blue-600" />
                    <span className="ml-2">Date Posted</span>
                  </div>
                  <span className="ml-[22px]">Date Posted</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaHourglass className="text-blue-600" />
                    <span className="ml-2">Expiration date</span>
                  </div>
                  <span className="ml-[22px]">Date Posted</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaUser className="text-blue-600" />
                    <span className="ml-2">Experience</span>
                  </div>
                  <span className="ml-[22px]">Date Posted</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaNeuter className="text-blue-600" />
                    <span className="ml-2">Gender</span>
                  </div>
                  <span className="ml-[22px]">Date Posted</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaCertificate className="text-blue-600" />
                    <span className="ml-2">Qualification</span>
                  </div>
                  <span className="ml-[22px]">Date Posted</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaLevelUpAlt className="text-blue-600" />
                    <span className="ml-2">Career Level</span>
                  </div>
                  <span className="ml-[22px]">Date Posted</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <span className="font-semibold">Job Location</span>
                <li className="mb-2">
                  <p></p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Job Description</span>
                  <p>
                    You have at least 3 years’ experience working as a Product
                    Designer. You have experience using Sketch and InVision or
                    Framer X You have some previous experience working in an
                    agile environment – Think two-week sprints. You are familiar
                    using Jira and Confluence in your workflow
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <span className="font-semibold">Job Skills</span>
                <li className="flex flex-col md:flex-row mb-2 items-center">
                  <div className="flex flex-wrap md:space-x-2 md:space-y-0">
                    <button className="bg-blue-500 text-white p-2 rounded">
                      Skill 1
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded">
                      Skill 2
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded">
                      Skill 3
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded">
                      Skill 4
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <div className="flex flex-row space-y-4 md:space-y-0 md:flex-row md:space-x-6 p-4 bg-gray-50">
                {/* Employer Info */}
                <div className="w-full bg-white p-4 rounded-md shadow-md">
                  <div className="flex items-center">
                    <img src={img1}></img>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold ml-2">
                        Employer
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
                      <span className="font-semibold">Founded Date:</span> 2005
                    </li>
                    <li>
                      <span className="font-semibold">Location:</span> New York
                    </li>
                    <li>
                      <span className="font-semibold">Phone Number:</span> 123
                      444 ***
                      <button className="ml-2 text-blue-500 hover:underline">
                        Show
                      </button>
                    </li>
                    <li>
                      <span className="font-semibold">Email:</span>{" "}
                      <a
                        href="mailto:employer@apus.com"
                        className="text-blue-500 hover:underline"
                      >
                        employer@apus.com
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">Socials:</span>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                        <button className="bg-blue-600 text-white px-3 py-2 rounded-md">
                          Facebook
                        </button>
                        <button className="bg-blue-400 text-white px-3 py-2 rounded-md">
                          Twitter
                        </button>
                        <button className="bg-red-600 text-white px-3 py-2 rounded-md">
                          Pinterest
                        </button>
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
