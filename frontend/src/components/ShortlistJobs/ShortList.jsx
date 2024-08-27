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
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import img1 from "../../public/member1.jpg";
import {  FaEye, FaSearch, FaTimes } from "react-icons/fa";

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
        <div className="p-4">
          <button
            className="md:hidden mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
          {/* Main page Cards */}
        </div>
        <div className="flex flex-col bg-white p-4">
          <div className="flex flex-col md:flex-row mb-4">
            <div className="relative flex-1 mb-4 md:mb-0">
              <input
                type="text"
                className="border-none outline-none bg-gray-100 w-full pl-10 pr-4 py-2"
                placeholder="Search..."
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative flex-1 flex items-center justify-end">
              <div
                ref={dropdownRef}
                className={`relative inline-block text-left ease-in-out ${
                  isOpen ? "opacity-100" : "opacity-100"
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700">Sort By:</span>
                  <button
                    onClick={toggleDropdown}
                    className="bg-gray-100 text-black px-4 py-2 rounded shadow flex items-center justify-between w-full md:w-36"
                  >
                    Default
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-full md:w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Option 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Option 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
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
                          <a href="#">
                            <img
                              src={img1}
                              alt="Description of image"
                              className="rounded-full object-cover w-full h-full"
                            />
                          </a>
                        </div>
                        <div>
                          <h2 className="text-sm sm:text-lg font-semibold">
                            <a
                              href="#"
                              className="text-blue-600 hover:underline"
                            >
                              Product Designer
                            </a>
                          </h2>
                          <div className="text-xs sm:text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <i className="flaticon-briefcase-1"></i>
                              <a href="#">Accounting / Finance</a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <i className="flaticon-location"></i>
                              <a href="#">New York</a>
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
                          href="#"
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
      </div>
    </div>
  );
};

export default ShortList;
