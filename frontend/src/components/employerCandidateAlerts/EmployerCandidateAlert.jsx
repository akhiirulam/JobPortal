import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaTimes } from "react-icons/fa";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import EmpSidebar from "../EmpSidebar/EmpSidebar";



const EmployerCandidateAlert = () => {
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
    <div className="mt-[50px] bg-[#F5F7FC] h-[calc(-111px_+_100vh)]">
      <EmpSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Candidate Alert</h3>
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
              <div className="w-auto md:w-[148px] bg-gray-100  flex rounded-lg">
                <select className="outline-blue-400 bg-transparent w-full mr-2 h-10 px-4">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto sm:overflow-x-hidden">
            <table className="min-w-full bg-white mb-6">
              <thead className="h-12 bg-gray-100">
                <tr className="text-blue-600">
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Title
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Alert Query
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Number Candidates
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Times
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
                        <span className="text-sm sm:text-sm ">
                          Marketing
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-xs sm:text-sm text-gray-600 sm:px-4">
                    ****
                  </td>
                  <td className="px-2 py-2 text-xs sm:text-sm text-gray-600 sm:px-4">
                    Candidates found 14
                  </td>
                  <td className="px-2 py-2 text-xs sm:text-sm text-yellow-600 sm:px-4">
                    Daily
                  </td>
                  <td className="px-2 py-2 sm:px-4">
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

export default EmployerCandidateAlert;