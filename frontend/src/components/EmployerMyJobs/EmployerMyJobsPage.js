import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaEye, FaHourglass, FaLock, FaMapMarked, FaPenSquare, FaTimes } from "react-icons/fa";
import EmpSidebar from "../EmpSidebar/EmpSidebar";
import img1 from "../../public/airbnb.jpg";

const EmployerMyJobsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="mt-[50px] bg-[#F5F7FC] h-screen">
      <EmpSidebar />
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

          {/* Mobile-specific horizontal scroll */}
          <div className="overflow-x-auto sm:overflow-x-hidden">
            <table className="min-w-full bg-white mb-6">
              <thead className="h-12 bg-gray-100">
                <tr className="text-blue-400">
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Job Title
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Applicants
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Created & Expired
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Status
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 py-2 sm:px-4">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <div>
                        <h2 className="text-sm sm:text-lg font-semibold">
                          <a href="/" className="hover:underline">
                            Junior Graphic Designer (Web)
                          </a>
                        </h2>
                        <div className="text-xs sm:text-sm text-gray-600">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                          <FaHourglass />
                            <i className="flaticon-briefcase-1"></i>
                            <a href="/"> Accounting / Finance</a>
                          </div>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <FaMapMarked />
                            <i className="flaticon-location"></i>
                            <a href="/">New York</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-xs sm:text-sm text-gray-600 sm:px-4">
                    448 Applicants
                  </td>
                  <td className="px-2 py-2 text-xs sm:text-sm text-yellow-600 sm:px-4">
                   <p>Created: June 20, 2021</p>
                    <p>Expiry date: May 6, 2026</p>
                  </td>
                  <td className="px-2 py-2 text-xs sm:text-sm text-gray-600 sm:px-4">
                   Published
                  </td>
                  <td className="px-2 py-2 sm:px-4">
                    <div className="flex space-x-2">
                    <button
                        className="text-blue-600 hover:text-red-800"
                        title="Remove"
                      >
                        <FaLock />
                      </button>

                      <button
                        className="text-blue-600 hover:text-red-800"
                        title="Remove"
                      >
                       <FaPenSquare />
                      </button>
                      <a
                        href="/"
                        className="text-blue-600 hover:text-blue-800"
                        data-toggle="tooltip"
                        title="View Job"
                      >
                        <FaTimes />
                        
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
  );
};

export default EmployerMyJobsPage;
