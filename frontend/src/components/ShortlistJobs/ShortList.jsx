import React, { useState, useRef, useEffect } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import img1 from "../../public/member1.jpg";
import { FaEye, FaSearch, FaTimes } from "react-icons/fa";
import CandidateSidebar from "../CandidateSidebar/CandidateSidebar";

const ShortList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div className="mt-[50px] bg-[#F5F7FC] h-screen">
      <CandidateSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Applied Jobs</h3>
        <div className="bg-white p-4 md:p-[30px] rounded">
          <div className="w-full mb-6 flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <form className="bg-gray-100 w-full md:w-[210px] flex rounded-lg">
                <button type="submit" className="py-2 px-4">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                  className="bg-transparent outline-none h-10 p-2 w-full md:w-[134px] text-gray-500"
                  type="text"
                  placeholder="Search..."
                />
              </form>
            </div>
            <div className="flex items-center">
              <span className="font-normal mr-2">Sort By:</span>
              <div className="w-auto md:w-[148px] bg-gray-100 flex rounded-lg">
                <select className="outline-blue-400 bg-transparent w-full mr-2 h-10 px-4">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center mt-8 md:ml-72">
        <div className="w-full max-w-4xl bg-white border border-gray-200 overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left font-semibold text-gray-600">
                  Job Title
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-600">
                  Posted Date
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 sm:w-24 sm:h-24">
                      <a href="/">
                        <img
                          src={img1}
                          alt="Descriptionofimage"
                          className="rounded-full object-cover w-full h-full"
                        />
                      </a>
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-lg font-semibold">
                        <a href="/" className="text-blue-600 hover:underline">
                          Product Designer
                        </a>
                      </h2>
                      <div className="text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <i className="flaticon-briefcase-1"></i>
                          <a href="/">Accounting / Finance</a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="flaticon-location"></i>
                          <a href="/">New York</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-xs sm:text-sm text-gray-600">
                  March 29, 2021
                </td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      className="text-red-600 hover:text-red-800"
                      data-job_id="1044"
                      data-nonce="ddc42e1639"
                      data-toggle="tooltip"
                      title="Remove"
                    >
                      <FaTimes />
                    </button>
                    <a
                      href="/"
                      className="text-blue-600 hover:text-blue-800"
                      data-toggle="tooltip"
                      title="View Job"
                    >
                      <FaEye />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShortList;
