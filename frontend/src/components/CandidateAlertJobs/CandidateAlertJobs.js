import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSuitcase,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import EmpSidebar from "../EmpSidebar/EmpSidebar";

import img1 from "../../public/airbnb.jpg";
import { FaTimes } from "react-icons/fa";

const CandidateAlertJobs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const jobAlerts = [
    {
      id: 1,
      title: "Frontend Developer",
      alert: "React Developer",
      numberJobs: 5,
      times: "Daily",
    },
    {
      id: 2,
      title: "Backend Developer",

      alert: "Node.js Developer",
      numberJobs: 10,
      times: "Weekly",
    },
    {
      id: 3,
      title: "Full Stack Developer",

      alert: "Full Stack Engineer",
      numberJobs: 8,
      times: "Monthly",
    },
    // Add more jobs as needed
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
    <div className="mt-[50px] bg-[#F5F7FC] h-[calc(-111px_+_100vh)]">
      <EmpSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Following Employers</h3>
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

         
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left text-sm font-semibold">
                      Job Title
                    </th>
                    <th className="p-3 text-left text-sm font-semibold">
                      Alert
                    </th>
                    <th className="p-3 text-left text-sm font-semibold">
                      Number Jobs
                    </th>
                    <th className="p-3 text-left text-sm font-semibold">
                      Times
                    </th>
                    <th className="p-3 text-left text-sm font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobAlerts.map((alert) => (
                    <tr key={alert.id} className="border-t border-gray-200">
                      <td className="p-3 text-sm">{alert.title}</td>
                      <td className="p-3 text-sm">{alert.alert}</td>
                      <td className="p-3 text-sm text-center">
                        {alert.numberJobs}
                      </td>
                      <td className="p-3 text-sm">{alert.times}</td>
                      <td className="p-3 text-sm">
                        <button className="bg-red-500 text-white px-3 py-1 ml-2 rounded-md hover:bg-red-600">
                         <FaTimes />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default CandidateAlertJobs;
