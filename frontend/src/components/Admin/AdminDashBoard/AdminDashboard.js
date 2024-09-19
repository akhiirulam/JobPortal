import React, { useState, useEffect } from "react";
import img1 from "../../../public/member1.jpg";
import GraphComponent from "./GraphComponent";
import Sidebar from "./Sidebar";


import {
  FaEye,
  FaCheck,
  FaStar,
  FaBriefcase
} from "react-icons/fa";


const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stats = [
    { icon: FaBriefcase, label: "Applied Jobs", value: 5 },
    { icon: FaStar, label: "Review", value: 2 },
    { icon: FaEye, label: "Views", value: 2408 },
    { icon: FaCheck, label: "Shortlisted", value: 3 },
  ];

  const notification = [
    {
      icon: FaBriefcase,
      label:
        "This is a notification bar. you will get notifiacation if any employer short listed your job",
    },
  ];

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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className=" mt-[115px]">
      <Sidebar/>
      {/* Overlay for mobile */}
      <div className="p-4 md:ml-72 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-4 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 sm:flex-row"
              >
                <stat.icon className="text-blue-500 text-4xl sm:mr-4 mb-2 sm:mb-0 hidden sm:block sm:mr-4" />
                <div className="text-center sm:text-left">
                  <p className="text-2xl text-blue-600 font-bold">
                    {stat.value}
                  </p>
                  <span className="text-sm font-semibold break-words">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
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
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
