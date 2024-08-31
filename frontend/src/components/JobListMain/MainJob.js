import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import SearchableDropdown from "./SearchableDropdown";
import { names } from "./data/names";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./EmployersList.css";
import JobList from "./JobList";

import { Dropdown } from "rsuite";

import "./Style.css";

const EmployerList = () => {
  const [isOpen, setIsOpen] = useState(false); // Start with sidebar closed
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // For detecting large screens
  const [locationValue, setLocationValue] = useState(""); // State for the first select input
  const [categoryValue, setCategoryValue] = useState("");
  const [radiusSliderValue, setRadiusSliderValue] = useState(10);
  const [foundedSliderValue, setFoundedSliderValue] = useState(2000);
  const [value, setValue] = useState("Select option...");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // const selectHandleChange = (event) => {
  //   setLocationValue(event.target.value);
  // };

  const selectHandleClear = () => {
    setLocationValue("");
  };

  // const categoryHandleChange = (event) => {
  //   setCategoryValue(event.target.value);
  // };

  const categoryHandleClear = () => {
    setCategoryValue("");
  };
  const handleRadiusSliderChange = (event, newValue) => {
    setRadiusSliderValue(newValue);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleFoundedSliderChange = (event, newValue) => {
    setFoundedSliderValue(newValue);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    const handleScroll = () => {
      // Check if the user has scrolled
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex mt-[50px] flex-col h-screen">
      {/* Header */}
      <div className="flex justify-center bg-gray-100">
        <span className="text-2xl flex items-center font-bold h-48">
          Employers
        </span>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}

        <div
          className={`transition-transform duration-300 ease-in-out bg-gray-200 text-black overflow-hidden z-0
          ${isOpen || isLargeScreen ? "ml-0 mt-0 w-72" : "-ml-72 w-0"} 
          md:ml-12 md:mt-12 md:mb-12 md:w-72 sm:w-64`} // Added z-index to ensure correct stacking
        >
          <button
            className="md:hidden mt-2 mr-2 p-2 text-gray-700 z-50"
            onClick={toggleSidebar}
          >
            {isOpen ? <FaTimes className="text-xl" /> : ""}
          </button>
          <div className="p-4 space-y-4 mt-6">
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

              <input
                type="text"
                placeholder="City or Pincode"
                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />

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

              <SearchableDropdown
                options={names}
                label="name"
                id="id"
                selectedVal={value}
                handleChange={(val) => setValue(val)}
              />

              {categoryValue && (
                <button
                  onClick={categoryHandleClear}
                  className="absolute right-2 text-gray-500 mr-8"
                >
                  <FaTimes />
                </button>
              )}
            </div>
            {/*Job type*/}
            <div className="flex justify-center bg-white border border-gray-300 rounded-md">
              <Dropdown
                title={selectedValue || "Dropdown"}
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="New File">New File</Dropdown.Item>
                <Dropdown.Item eventKey="New File with Current Profile">
                  New File with Current Profile
                </Dropdown.Item>
                <Dropdown.Item eventKey="Download As...">
                  Download As...
                </Dropdown.Item>
                <Dropdown.Item eventKey="Export PDF">Export PDF</Dropdown.Item>
                <Dropdown.Item eventKey="Export HTML">
                  Export HTML
                </Dropdown.Item>
                <Dropdown.Item eventKey="Settings">Settings</Dropdown.Item>
                <Dropdown.Item eventKey="About">About</Dropdown.Item>
              </Dropdown>
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
            {!isScrolled && (
              <button
                className="fixed top-[300px] left-0 w-36 text-black rounded-md md:hidden z-20"
                onClick={toggleSidebar}
              >
                {isOpen ? "" : "Open Sidebar"}
              </button>
            )}
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
            <JobList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerList;
