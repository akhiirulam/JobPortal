import React, { useState, useEffect } from "react";
import img1 from "../../public/member1.jpg";
import GraphComponent from "./GraphComponent";
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faUser, faFile, faBookmark, faComments, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faBullhorn, faBoxesPacking, faUserTie, faLock, faUserXmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
=======
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook,faUser, faFile,faBookmark,faComments,faHandshake} from '@fortawesome/free-regular-svg-icons'
import {faBullhorn,faBoxesPacking,faUserTie,faLock,faUserXmark,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
>>>>>>> origin/doneByBasil
import { NavLink } from 'react-router-dom';

import {
  FaEye,
  FaCheck,
<<<<<<< HEAD

  FaStar,
  FaBriefcase,

  FaMapMarkerAlt,
  FaDollarSign,
} from "react-icons/fa";
import img1 from "../../public/emplyer.png";
=======
  
  FaStar,
  FaBriefcase,
  
  FaMapMarkerAlt,
  FaDollarSign,
} from "react-icons/fa";
import img1 from "../../public/member1.jpg";
>>>>>>> origin/doneByBasil

const EmpDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stats = [
    { icon: FaBriefcase, label: "Applied Jobs", value: 5 },
    { icon: FaStar, label: "Review", value: 2 },
    { icon: FaEye, label: "Views", value: 2408 },
    { icon: FaCheck, label: "Shortlisted", value: 3 },
  ];

  const sideBarItems = [
<<<<<<< HEAD
    { id: 1, icon: faAddressBook, description: "User Dashboard", link: "/user" },
    { id: 2, icon: faUserTie, description: "Profile", link: "/profile" },
    { id: 3, icon: faFile, description: "My Jobs", link: "/myJobs" },
    { id: 4, icon: faBullhorn, description: "Submit Job", link: "/applied-jobs" },
    { id: 5, icon: faBookmark, description: "Applicants Jobs", link: "/shortlisted-jobs" },
    { id: 6, icon: faUser, description: "Shortlist Candidates", link: "/following-employee" },
    { id: 7, icon: faBullhorn, description: "Candidate Alerts ", link: "/alert-jobs" },
    { id: 8, icon: faBoxesPacking, description: "Packages", link: "/messages" },
    { id: 9, icon: faComments, description: "Messages", link: "/messages" },
    { id: 10, icon: faHandshake, description: "Meetings", link: "/meetings" },
    { id: 11, icon: faLock, description: "Change Password", link: "/change-password" },
    { id: 12, icon: faUserXmark, description: "Delete Profile", link: "/delete-profile" },
    { id: 13, icon: faArrowRightFromBracket, description: "Logout", link: "/" }
=======
    {id:1, icon:faAddressBook, description:"User Dashboard",link:"/user"},
    {id:2, icon:faUserTie, description:"Profile",link:"/profile"},
    {id:3, icon:faFile, description:"My Jobs",link:"/myJobs"},
    {id:4, icon:faBullhorn, description:"Submit Job",link:"/applied-jobs"},
    {id:5, icon:faBookmark, description:"Applicants Jobs",link:"/shortlisted-jobs"},
    {id:6, icon:faUser, description:"Shortlist Candidates",link:"/following-employee"},
    {id:7, icon:faBullhorn, description:"Candidate Alerts ",link:"/alert-jobs"},
    {id:8, icon:faBoxesPacking, description:"Packages",link:"/messages"},
    {id:9, icon:faComments, description:"Messages",link:"/messages"},
    {id:10, icon:faHandshake, description:"Meetings",link:"/meetings"},
    {id:11, icon:faLock, description:"Change Password",link:"/change-password"},
    {id:12, icon:faUserXmark, description:"Delete Profile",link:"/delete-profile"},
    {id:13, icon:faArrowRightFromBracket, description:"Logout",link:"/"}
>>>>>>> origin/doneByBasil
  ]

  const notification = [{ icon: FaBriefcase, label: "Job Status" }];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-gray-100 ">
      {/* Sidebar */}
      <div
        className={`fixed top-[115px] left-0 h-[calc(100vh-4rem)] overflow-y-auto bg-white text-gray-600 p-4 transition-transform duration-300 ease-in-out scrollbar-custom
    ${isSidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full"} 
    md:w-96 md:translate-x-0`}
      >
        {/* Sidebar content */}
        <div className="flex items-center space-x-4">
          <img
<<<<<<< HEAD
            className="w-20 h-20 rounded-lg"
            src={img1}
            alt="avatar"
          />
          <div className="flex flex-col p-2 gap-1">
            <span className="text-xl font-bold">Employer</span>
            <span className="text-sm">New York</span>
=======
            className="w-20 h-20 rounded-full"
            src={img1}
            alt="Rounded avatar"
          />
          <div className="flex flex-col p-2 gap-1">
            <span className="text-xl font-bold">Name</span>
            <span className="text-sm">Place</span>
>>>>>>> origin/doneByBasil
            <button className="text-sm text-white w-24 h-6 rounded-md bg-blue-600">
              View Profile
            </button>
          </div>
        </div>
        {/* User Dashboard */}
        <div className="flex flex-col space-y-2 p-4 mb-16">
<<<<<<< HEAD
          <ul className=''>
            {sideBarItems.map((item) => (
              <NavLink to={item.link} activeClassName="active" ><li key={item.id} className='mb-0.5 px-5 py-[13px] flex hover:text-[#1967D2] hover:bg-[#E8F0FA] text-[#696696] rounded-lg cursor-pointer'>
                <div className='mr-[15px] '><FontAwesomeIcon icon={item.icon} size="xl" /></div>
                <div>{item.description}</div>
              </li>
              </NavLink>
            ))}
          </ul>
=======
        <ul className=''>
                    {sideBarItems.map((item)=>(
                    <NavLink to={item.link} activeClassName="active" ><li  key={item.id} className='mb-0.5 px-5 py-[13px] flex hover:text-[#1967D2] hover:bg-[#E8F0FA] text-[#696696] rounded-lg cursor-pointer'>
                        <div className='mr-[15px] '><FontAwesomeIcon icon={item.icon} size="xl" /></div>
                        <div>{item.description}</div>
                    </li>
                    </NavLink>
                    ))}
                </ul>
>>>>>>> origin/doneByBasil
        </div>
      </div>

      {/* Main Content */}
      <div
<<<<<<< HEAD
        className={`flex-1 p-4 mt-[50px] ml-0 md:ml-96 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-0"
          }`}
=======
        className={`flex-1 p-4 mt-[50px] ml-0 md:ml-96 overflow-y-auto transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
>>>>>>> origin/doneByBasil
      >
        <div className="p-4">
          <button
            className="md:hidden mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
          {/* Main page Cards */}
          <div className="">
            <div className="flex flex-wrap gap-4 p-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-48"
                >
                  <stat.icon className="text-blue-500 text-4xl mr-4" />
                  <div>
                    <p className="text-2xl  text-blue-600 font-bold">
                      {stat.value}
                    </p>
                    <span className="text-sm font-semibold">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 mb-4">
            <div className="flex items-center justify-center h-80 rounded bg-gray-50 dark:bg-gray-800">
              <GraphComponent />
            </div>
            <div className="flex flex-col items-center justify-center h-fit rounded bg-gray-50 dark:bg-gray-800">
              {notification.map((noti, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 text-black md:flex-row md:items-center md:space-x-4"
                >
                  <noti.icon className="text-blue-500 text-4xl mb-2 md:text-6xl md:mb-0 " />
                  <span className="text-center md:text-left text-sm md:text-base">
                    {noti.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4"></div>
          <div>
            <h1 className="text-base sm:text-lg">Recent Applicants</h1>
          </div>
          <div className="flex flex-col sm:flex-row border rounded-sm p-4">
            <div className="flex justify-center sm:justify-start mb-4 sm:mb-0 sm:mr-8">
              <img
                src={img1}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                alt="job1"
              />
            </div>
            <div className="flex flex-col sm:flex-col ">
              <div>
                <span className="text-sm sm:text-base">
                  Junior Graphic Designer (Web)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                <div className="flex items-center mb-2 sm:mb-0">
                  <FaBriefcase className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mr-2" />
                  <span className="text-xs sm:text-sm">
                    Design, Development
                  </span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <FaMapMarkerAlt className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mr-2" />
                  <span className="text-xs sm:text-sm">New York</span>
                </div>
                <div className="flex items-center mt-2">
<<<<<<< HEAD
                  <button className="bg-blue-200 rounded-3xl ml-4 w-24 p-1 "> Full Time </button>
                  <button className="bg-orange-200 rounded-3xl ml-4 w-24 p-1 "> Urgent </button>
                </div>
=======
                    <button className="bg-blue-200 rounded-3xl ml-4 w-24 p-1 "> Full Time </button>
                    <button className="bg-orange-200 rounded-3xl ml-4 w-24 p-1 "> Urgent </button>
                  </div>
>>>>>>> origin/doneByBasil
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDashboard;
