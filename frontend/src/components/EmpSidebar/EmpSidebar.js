import React, { useState, useEffect } from "react";
import img1 from "../../public/member1.jpg";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUser,
  faFile,
  faBookmark,
  faComments,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBullhorn,
  faBoxesPacking,
  faUserTie,
  faLock,
  faUserXmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const EmpSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideBarItems = [
    {
      id: 1,
      icon: faAddressBook,
      description: "User Dashboard",
      link: "/user",
    },
    { id: 2, icon: faUserTie, description: "Profile", link: "/profile" },
    { id: 3, icon: faFile, description: "My Jobs", link: "/myJobs" },
    {
      id: 4,
      icon: faBullhorn,
      description: "Submit Job",
      link: "/applied-jobs",
    },
    {
      id: 5,
      icon: faBookmark,
      description: "Applicants Jobs",
      link: "/shortlisted-jobs",
    },
    {
      id: 6,
      icon: faUser,
      description: "Shortlist Candidates",
      link: "/following-employee",
    },
    {
      id: 7,
      icon: faBullhorn,
      description: "Candidate Alerts",
      link: "/alert-jobs",
    },
    { id: 8, icon: faBoxesPacking, description: "Packages", link: "/messages" },
    { id: 9, icon: faComments, description: "Messages", link: "/messages" },
    { id: 10, icon: faHandshake, description: "Meetings", link: "/meetings" },
    {
      id: 11,
      icon: faLock,
      description: "Change Password",
      link: "/change-password",
    },
    {
      id: 12,
      icon: faUserXmark,
      description: "Delete Profile",
      link: "/delete-profile",
    },
    { id: 13, icon: faArrowRightFromBracket, description: "Logout", link: "/" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarElement = document.getElementById("default-sidebar");
      if (sidebarElement && !sidebarElement.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        aria-expanded={isOpen}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3  text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-[50px] left-0 z-40 w-72 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-[calc(100vh_-_111px)] md:h-[calc(100vh_-_111px)] px-3 py-4 mt-16 overflow-y-scroll md:scrollbar-custom bg-blue-200 dark:bg-gray-800">
          <span
            className="flex justify-center p-2 md:hidden"
            onClick={closeSidebar}
          >
            <FaTimes size={24} className="text-red-500" />{" "}
            <p className="text-red-500 ml-2 font-bold">Close Sidebar</p>
          </span>
          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex items-center space-x-4">
                <img
                  className="w-20 h-20 rounded-full"
                  src={img1}
                  alt="Rounded avatar"
                />
                <div className="flex flex-col p-2 gap-1">
                  <span className="text-xl font-bold">Name</span>
                  <span className="text-sm">Place</span>
                  <button className="text-sm text-white w-24 h-6 rounded-md bg-blue-600">
                    View Profile
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col space-y-2 p-4">
                <ul>
                  {sideBarItems.map((item) => (
                    <NavLink
                      to={item.link}
                      key={item.id}
                      activeClassName="active"
                    >
                      <li className="px-5 py-[13px] flex hover:text-[#1967D2] hover:bg-[#E8F0FA] text-[#696696] rounded-lg cursor-pointer">
                        <div className="mr-[15px]">
                          <FontAwesomeIcon icon={item.icon} size="xl" />
                        </div>
                        <div>{item.description}</div>
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default EmpSidebar;
