import React, { useState, useEffect } from "react";
import HomeSidebar from "./HomeSidebar";
import JobList from "./JobList";

const JoblistMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

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
    <div className="relative flex flex-col md:flex-row h-[calc(100vh_-_111px)] p-4 ">
      {/* Sidebar Toggle Button - Visible on Mobile */}
      <div className="fixed top-36 left-4 z-100 md:hidden">
        <button
          onClick={toggleSidebar}
          aria-controls="default-sidebar"
          aria-expanded={isOpen}
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
      </div>

      {/* Sidebar */}
      <HomeSidebar isOpen={isOpen} closeSidebar={closeSidebar} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 h-fit md:ml-32 sm:ml-0 mt-24 md:mt-24 p-4 transition-all duration-300 md:mr-12">
        <aside className="mb-16 ">
          <div className="flex flex-col md:flex-row justify-between mt-4 p-4">
            <div className="mb-4 md:mb-0">
              <span className="text-sm">Showing 1 – 9 of 12 results</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <select className="mb-4 md:mb-0 w-full md:w-36 bg-blue-50 border border-gray-300 rounded-md p-2 text-sm">
                <option value="" disabled selected>
                  Sort By (default)
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <select className="w-full md:w-36 bg-blue-50 border border-gray-300 rounded-md p-2 text-sm">
                <option value="" disabled selected>
                  Per Page
                </option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>

          <div>
            <JobList />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default JoblistMain;
