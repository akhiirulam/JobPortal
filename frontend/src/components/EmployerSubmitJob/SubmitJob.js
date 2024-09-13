import React, { useState, useEffect } from "react";
import EmpSidebar from "../EmpSidebar/EmpSidebar";
import { FaCheck } from "react-icons/fa";

const SubmitJob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stats = [
    {
      icon: <FaCheck />,
      label: "Extended",
      Price: "$799",
      value1: "50 job posting",
      value2: "10 featured job",
      value3: "Job displayed for 60 days",
      value4: "Premium Support 24/7",
    },
    {
      icon: <FaCheck />,
      label: "Standard",
      Price: "$499",
      value1: "40 job posting",
      value2: "5 featured job",
      value3: "Job displayed for 30 days",
      value4: "Premium Support 24/7",
    },
    {
      icon: <FaCheck />,
      label: "Basic",
      Price: "$199",
      value1: "30 job posting",
      value2: "3 featured job",
      value3: "Job displayed for 15 days",
      value4: "Premium Support 24/7",
    },
    {
      icon: <FaCheck />,
      label: "Company",
      Price: "$399",
      value1: "50 job posting",
      value2: "10 featured job",
      value3: "Job displayed for 30 days",
      value4: "Premium Support 24/7",
    },
    {
      icon: <FaCheck />,
      label: "Enterprise",
      Price: "$550",
      value1: "80 job posting",
      value2: "10 featured job",
      value3: "Job displayed for 60 days",
      value4: "Premium Support 24/7",
    },
    {
      icon: <FaCheck />,
      label: "Business",
      Price: "$699",
      value1: "100 job posting",
      value2: "10 featured job",
      value3: "Job displayed for 90 days",
      value4: "Premium Support 24/7",
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
    <div className=" mt-[50px] bg-gray-100">
      <EmpSidebar />
      {/* Overlay for mobile */}
      <div className="p-4 md:ml-72 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid md:grid-cols-3 gap-16 mb-4 sm:grid-cols-1">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col h-96 border border-blue-600 rounded bg-gray-50 dark:bg-gray-800 sm:flex-row"
              >
                <div className="flex flex-col w-full">
                  <div className="p-8 sm:text-left ">
                    <p className="text-xl text-blue-400 font-bold">
                      {stat.label}
                    </p>
                    <p className="text-2xl text-black-600 font-bold">
                      {stat.Price}
                    </p>
                    <p className="mt-6">
                      <span className="flex mt-4 ml-4 text-sm font-normal break-words">
                        <div className="mr-2 text-green-400">{stat.icon}</div>
                        {stat.value1}
                      </span>

                      <span className="flex mt-4 ml-4 text-sm font-normal break-words">
                        <div className="mr-2 text-green-400">{stat.icon}</div>
                        {stat.value2}
                      </span>

                      <span className="flex mt-4 ml-4 text-sm font-normal break-words">
                        <div className="mr-2 text-green-400">{stat.icon}</div>
                        {stat.value3}
                      </span>
                      <span className="flex mt-4 ml-4 text-sm font-normal break-words">
                        <div className="mr-2 text-green-400">{stat.icon}</div>
                        {stat.value4}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center w-full items-center p-4">
                    <button className=" text-center rounded h-12 w-48 bg-gray-200 mt-4 text-black hover:bg-blue-600 hover:text-white">
                      Get Started
                    </button>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitJob;
