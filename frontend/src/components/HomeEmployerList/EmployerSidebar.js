import React, { useState } from "react";
import {
  FaTimes,
  FaSearch,
  FaMapMarkerAlt,
  FaChevronDown,
  FaBriefcase,
} from "react-icons/fa";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

import "./Style.css";

const EmployerSidebar = ({ isOpen, closeSidebar }) => {
  const [locationValue, setLocationValue] = useState("");

  const selectHandleChange = (event) => {
    setLocationValue(event.target.value);
  };

  const selectHandleClear = () => {
    setLocationValue("");
  };

  // const [radiusSliderValue, setRadiusSliderValue] = useState(10);

  // const handleRadiusSliderChange = (event, newValue) => {
  //   setRadiusSliderValue(newValue);
  // };

 const [DropDownSelectedValue, DropDownsetSelectedValue] = useState("");

  const handleDropDownChange = (event) => {
    DropDownsetSelectedValue(event.target.value);
  };

  const [DropDownLocationSelectedValue, setDropDownLocationSelectedValue] =
    useState("");

  const handleLocationDropDownChange = (event) => {
    setDropDownLocationSelectedValue(event.target.value);
  };

  const clearLocationSelection = () => {
    setDropDownLocationSelectedValue("");
  };

  // const [foundedSliderValue, setFoundedSliderValue] = useState(2000);

  // const handleFoundedSliderChange = (event, newValue) => {
  //   setFoundedSliderValue(newValue);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData.entries());

    console.log(data);

    fetch("/your-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Form submission result:", result);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (

    <aside
      id="default-sidebar"
      className={`fixed top-12 left-0 z-40 md:h-fit sm:h-full w-72 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:relative md:translate-x-0`}
    >
      <form onSubmit={handleSubmit}>
        <div className="md:h-fit sm:h-96 px-3 py-4 mt-12 md:w-80 md:ml-16 bg-blue-50 dark:bg-gray-800 overflow-y-auto scrollbar-custom">
          {/* Close button */}
          <span
            className="flex justify-center p-2 md:hidden cursor-pointer"
            onClick={closeSidebar}
          >
            <FaTimes size={24} className="text-red-500" />
            <p className="text-red-500 ml-2 font-bold">Close Sidebar</p>
          </span>

          <ul className="space-y-2 font-medium">
            {/* Search Input */}
            <li>
              <div className="flex items-center bg-white border h-12 border-gray-300 rounded-md p-2">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="searchQuery"
                  placeholder="Search..."
                  className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </li>
            {/* Location Input */}
            <li>
              <div className="relative flex items-center bg-white border h-12 border-gray-300 rounded-md p-2">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="location"
                  placeholder="City or Pincode"
                  value={locationValue}
                  onChange={selectHandleChange}
                  className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                />
                {locationValue && (
                  <button
                    type="button"
                    onClick={selectHandleClear}
                    className="absolute right-2 text-gray-500"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </li>
            {/* Slider */}
            {/* <li>
              <div className="flex justify-center">
                <Box className="p-4" sx={{ width: 300 }}>
                  <span className="mt-2 text-lg font-semibold">
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
                  <input
                    type="hidden"
                    name="radius"
                    value={radiusSliderValue}
                  />
                </Box>
              </div>
            </li>
             */}

            {/* Location */}
            <li>
              <div className="flex bg-white border border-gray-200 w-full h-12 rounded-md items-center relative">
                <FaMapMarkerAlt className="text-gray-500 ml-4" />
                <select
                  name="jobType"
                  value={DropDownSelectedValue}
                  onChange={handleDropDownChange}
                  className="flex-1 appearance-none bg-transparent pl-4 pr-10 focus:outline-none"
                >
                  <option value="" disabled>
                    City or Pincode
                  </option>
                  <option value="Kochi">Kochi</option>
                  <option value="Calicut">Calicut</option>
                  <option value="Trivandrum">Trivandrum</option>
                  <option value="Trissur">Trissur</option>
                </select>
                <FaChevronDown className="absolute right-10 text-gray-500 pointer-events-none" />
                {DropDownSelectedValue && (
                  <button
                    className="absolute right-3 text-gray-500 hover:text-red-500 focus:outline-none"
                    onClick={() =>
                      handleDropDownChange({
                        target: { name: "jobType", value: "" },
                      })
                    }
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </li>
{/* 
            <li>
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
            </li> */}

            {/* Job Catogory */}
            <li>
              <div className="flex bg-white border border-gray-200 w-full h-12 rounded-md items-center relative">
                <FaBriefcase className="text-gray-500 ml-4" />
                <select
                  name="locationDropdown"
                  value={DropDownLocationSelectedValue}
                  onChange={handleLocationDropDownChange}
                  className="appearance-none w-full h-full pl-4 pr-10 text-gray-700 bg-transparent focus:outline-none ml-2"
                >
                  <option value="" disabled>
                    Choose a category
                  </option>
                  <option value="Advertising">Advertising</option>
                  <option value="Application">Application</option>
                  <option value="Customer">Customer</option>
                  <option value="Design">Design</option>
                  <option value="Developers">Developers</option>
                </select>
                {/* Down arrow */}
                <FaChevronDown className="absolute right-10 text-gray-500 pointer-events-none" />

                {/* Clear selection button */}
                {DropDownLocationSelectedValue && (
                  <button
                    type="button"
                    onClick={clearLocationSelection}
                    className="absolute right-3 text-gray-500 hover:text-red-500 focus:outline-none"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </li>
            {/* Submit Button */}
            <li>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"
              >
                Apply Filters
              </button>
            </li>
          </ul>
        </div>
      </form>
    </aside>
    
  );
};

export default EmployerSidebar;
