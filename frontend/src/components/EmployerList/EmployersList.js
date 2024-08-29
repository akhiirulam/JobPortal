import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./EmployersList.css";
import CompanyList from "./CompanyList";

const EmployerList = () => {
  const [isOpen, setIsOpen] = useState(false); // Start with sidebar closed
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // For detecting large screens
  const [locationValue, setLocationValue] = useState(""); // State for the first select input
  const [categoryValue, setCategoryValue] = useState("");
  const [radiusSliderValue, setRadiusSliderValue] = useState(10);
  const [foundedSliderValue, setFoundedSliderValue] = useState(2000);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const selectHandleChange = (event) => {
    setLocationValue(event.target.value);
  };

  const selectHandleClear = () => {
    setLocationValue("");
  };

  const categoryHandleChange = (event) => {
    setCategoryValue(event.target.value);
  };

  const categoryHandleClear = () => {
    setCategoryValue("");
  };
  const handleRadiusSliderChange = (event, newValue) => {
    setRadiusSliderValue(newValue);
  };

  const handleFoundedSliderChange = (event, newValue) => {
    setFoundedSliderValue(newValue);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex mt-[50px] flex-col h-screen">
      {/* Header */}
      <div className="flex justify-center bg-gray-100">
        <span className="text-2xl flex items-center font-bold h-48" >Employers</span>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`transition-transform mt-12 mb-12 duration-300 ease-in-out bg-gray-200 text-black ${
            isOpen || isLargeScreen ? "ml-0 w-72" : "-ml-72 w-0"
          } md:ml-16 md:w-72 sm:w-72 overflow-hidden z-0`} // Added z-index to ensure correct stacking
        >
          <div className="p-4 space-y-4">
            {/* Search Input */}
            <div className="flex items-center bg-white border border-gray-300 rounded-md p-2">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Location Input */}
            <div className="relative flex items-center bg-white border border-gray-300 rounded-md p-2">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />

              <select
                value={locationValue}
                onChange={selectHandleChange}
                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 pr-8"
              >
                <option value="" disabled>
                  Location...
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              {locationValue && (
                <button
                  onClick={selectHandleClear}
                  className="absolute right-2 text-gray-500 mr-8"
                >
                  <FaTimes />
                </button>
              )}
            </div>
            {/* Slider*/}
            <div className="flex justify-center">
              <Box className="p-4" sx={{ width: 300 }}>
                <span className="mt-2 text-lg">
                  {" "}
                  Radius: {radiusSliderValue} miles
                </span>
                <Slider
                  value={radiusSliderValue}
                  onChange={handleRadiusSliderChange}
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  sx={{ color: "#0080ff" }}
                />
              </Box>
            </div>
            {/* Category Input */}
            <div className="relative flex items-center bg-white border border-gray-300 rounded-md p-2">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />

              <select
                value={categoryValue}
                onChange={categoryHandleChange}
                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 pr-8"
              >
                <option value="" disabled>
                  Location...
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              {categoryValue && (
                <button
                  onClick={categoryHandleClear}
                  className="absolute right-2 text-gray-500 mr-8"
                >
                  <FaTimes />
                </button>
              )}
            </div>
            {/*Founded Date*/}
            <div className="flex justify-center">
              <Box className="p-4" sx={{ width: 300 }}>
                <span className="mt-2 text-lg">
                  {" "}
                  {foundedSliderValue} -2024
                </span>
                <Slider
                  value={foundedSliderValue}
                  onChange={handleFoundedSliderChange}
                  min={2000}
                  max={2024}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  sx={{ color: "#0080ff" }}
                />
              </Box>
            </div>
            {/*Sidebar Btton*/}
            <div className="flex justify-center">
              <button className="w-72 h-16 rounded-lg text-sm text-white bg-blue-600 border border-transparent hover:bg-white hover:border-blue-600 hover:text-blue-600 hover-delay">
                Find Employer
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 mt-12 transition-transform  duration-500 ease-in-out ${
            isOpen ? "ml-0" : isLargeScreen ? "-ml-36" : "ml-12"
          } md:ml-8`}
        >
          <div className="p-4">
            {/* Toggle Button for Mobile View */}
            <button
              className="fixed top-52 left-4 p-2 w-36 text-white bg-blue-500 rounded-md md:hidden z-20" // Fixed position and higher z-index
              onClick={toggleSidebar}
            >
              {isOpen ? "Close Sidebar" : "Open Sidebar"}
            </button>

            <div className="flex justify-between mt-4 p-4">
              <div>
                <span>Showing 1 – 9 of 12 results</span>
              </div>
              <div className="flex flex-wrap gap-4 mr-4">
                <select className="mr-4 w-36 bg-blue-50 border border-gray-300 rounded-md p-2 text-sm">
                  <option value="" disabled selected>
                    Sort By (default)
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <select className="bg-blue-50 w-36 border border-gray-300 rounded-md p-2 text-sm">
                  <option value="" disabled selected>
                    Per Page
                  </option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>

            {/* Company Image and Name */}
            <CompanyList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerList;
