import React, { useState } from "react";
// import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUserTie,
  faFile,
  faBullhorn,
  faBookmark,
  faComments,
  faHandshake,
  faLock,
  faUserXmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import img1 from "../../public/member1.jpg";
import { FaClock, FaHourglass,  FaSpinner, FaTimes } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Meeting = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const sideBarItems = [
    {
      id: 1,
      icon: faAddressBook,
      description: "User Dashboard",
      link: "/user",
    },
    { id: 2, icon: faUserTie, description: "Profile", link: "/profile" },
    { id: 3, icon: faFile, description: "My Resume", link: "/resume" },
    {
      id: 4,
      icon: faBullhorn,
      description: "My Applied",
      link: "/applied-jobs",
    },
    {
      id: 5,
      icon: faBookmark,
      description: "Shortlist Employee",
      link: "/shortlisted-jobs",
    },
    {
      id: 6,
      icon: faUserTie,
      description: "Following Employee",
      link: "/following-employee",
    },
    { id: 7, icon: faBullhorn, description: "Alert Jobs", link: "/alert-jobs" },
    { id: 8, icon: faComments, description: "Messages", link: "/messages" },
    { id: 9, icon: faHandshake, description: "Meetings", link: "/meetings" },
    {
      id: 10,
      icon: faLock,
      description: "Change Password",
      link: "/change-password",
    },
    {
      id: 11,
      icon: faUserXmark,
      description: "Delete Profile",
      link: "/delete-profile",
    },
    { id: 12, icon: faArrowRightFromBracket, description: "Logout", link: "/" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-[112px] left-0 h-full overflow-y-auto bg-white text-gray-600 p-4 transition-transform duration-300 ease-in-out scrollbar-custom
        ${isSidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full"} 
        md:w-96 md:translate-x-0 z-20`}
      >
        {/* Sidebar content */}
        <div className="flex items-center space-x-4">
          <img
            className="w-20 h-20 rounded-full"
            src={img1}
            alt="User Avatar"
          />
          <div className="flex flex-col p-2 gap-1">
            <span className="text-xl font-bold">Name</span>
            <span className="text-sm">Place</span>
            <button className="text-sm text-white w-24 h-6 rounded-md bg-blue-600">
              View Profile
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2 p-4">
          <ul>
            {sideBarItems.map((item) => (
              <NavLink key={item.id} to={item.link} activeClassName="active">
                <li className="mb-0.5 px-5 py-3 flex hover:text-blue-600 hover:bg-blue-100 text-gray-600 rounded-lg cursor-pointer">
                  <div className="mr-4">
                    <FontAwesomeIcon icon={item.icon} size="xl" />
                  </div>
                  <div>{item.description}</div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-4 mt-12 ml-0 md:ml-96 overflow-y-auto transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="ml-20 mt-12">
          <span className="text-4xl">Meetings</span>
        </div>
        <div className="p-4">
          <button
            className="md:hidden mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
          {/* Main page Cards */}
        </div>
        <div className="flex justify-center mt-2 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg p-4 overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24">
                        <div className="bg-blue-600 flex justify-center rounded-t-lg p-2">
                          <span className="text-4xl font-bold ">24</span>
                        </div>
                        <div className="bg-gray-200 flex justify-center rounded-b-lg h-8">
                          <span className="text-sm text-gray-600 mt-2">
                            Today - Jul
                          </span>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-md sm:text-lg font-semibold">
                          <a href="/" className="text-blue-600 hover:underline">
                            Product Designer
                          </a>
                        </h2>
                        <div className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">
                          <div className="flex items-center space-x-2">
                            <i className="flaticon-briefcase-1"></i>
                            <a href="/" className="hover:underline">
                              Meeting with: Employer
                            </a>
                          </div>
                          <div className="flex items-center space-x-2 mt-1 sm:mt-1.5">
                            <div className="flex items-center space-x-2">
                              <span className="flex items-center text-gray-600">
                                <FaClock className="mr-2 text-blue-500" />
                                00:00
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="flex items-center text-gray-600">
                                <FaHourglass className="mr-2 text-blue-500" />
                                30 Minutes
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <div className="flex space-x-4">
                      <button
                        className="text-red-600 hover:text-red-800"
                        data-job_id="1044"
                        data-nonce="ddc42e1639"
                        data-toggle="tooltip"
                        title="Remove"
                      >
                        <FaMessage />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        data-job_id="1044"
                        data-nonce="ddc42e1639"
                        data-toggle="tooltip"
                        title="Remove"
                      >
                        <FaSpinner />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        data-job_id="1044"
                        data-nonce="ddc42e1639"
                        data-toggle="tooltip"
                        title="Remove"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
