import React, { useState } from "react";
import { FaTimes, FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SearchableDropdown from "./SearchableDropdown";
import { names } from "./data/names";
import "./Style.css";

const HomeSidebar = ({ isOpen, closeSidebar }) => {
  const [locationValue, setLocationValue] = useState("");

  const selectHandleChange = (event) => {
    setLocationValue(event.target.value);
  };

  const selectHandleClear = () => {
    setLocationValue("");
  };

  const [radiusSliderValue, setRadiusSliderValue] = useState(10);

  const handleRadiusSliderChange = (event, newValue) => {
    setRadiusSliderValue(newValue);
  };

  const [categoryValue, setCategoryValue] = useState("");

  const categoryHandleClear = () => {
    setCategoryValue("");
  };

  const [DropDownSelectedValue, DropDownsetSelectedValue] = useState("");

  const handleDropDownChange = (event) => {
    DropDownsetSelectedValue(event.target.value);
  };

  const [selectedRange, setSelectedRange] = useState("lastHour"); // Default selected range

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  const [experienceLevels, setExperienceLevels] = useState({
    fresh: false,
    oneYear: false,
    twoYear: false,
    threeYear: false,
    fourYear: false,
  });

  const handleExperienceToggle = (level) => {
    setExperienceLevels((prevLevels) => ({
      ...prevLevels,
      [level]: !prevLevels[level],
    }));
  };

  const [careerLevels, setCareerLevels] = useState({
    manager: false,
    officer: false,
    student: false,
    Executive: false,
    Others: false,
  });

  const handleCareerToggle = (level) => {
    setCareerLevels((prevLevels) => ({
      ...prevLevels,
      [level]: !prevLevels[level],
    }));
  };

  const [DropDownEmailAlertSelectedValue, setDropDownEmailAlertSelectedValue] =
    useState("Daily");

  const handleEmailAlertDropDownChange = (event) => {
    setDropDownEmailAlertSelectedValue(event.target.value);
  };

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
            <li>
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
            {/* Category Input */}
            <li>
              <div className="relative flex items-center bg-white border border-gray-300 h-12 rounded-md p-1">
                <FaBriefcase className="text-gray-500 mr-2 ml-2" />
                <SearchableDropdown
                  options={names}
                  label="name"
                  id="id"
                  selectedVal={categoryValue}
                  handleChange={(val) => setCategoryValue(val)}
                />
                <input type="hidden" name="category" value={categoryValue} />
                {categoryValue && (
                  <button
                    type="button"
                    onClick={categoryHandleClear}
                    className="absolute text-red-500 ml-48"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </li>
            {/* Job Type */}
            <li>
              <div className="flex bg-white border border-gray-200 w-full h-12 rounded-md">
                <select
                  name="jobType"
                  value={DropDownSelectedValue}
                  onChange={handleDropDownChange}
                  className="flex justify-between ml-4 px-2"
                >
                  <option value="" disabled>
                    Select Job Type
                  </option>
                  <option value="Full Time">Full Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </li>
            {/* Date Posted */}
            <li>
              <label className="text-lg font-semibold">Date Posted</label>
              <div className="ml-4 py-2">
                <div className="py-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="datePosted"
                      value="lastHour"
                      checked={selectedRange === "lastHour"}
                      onChange={handleRangeChange}
                      className="mr-2"
                    />
                    Last Hour
                  </label>
                </div>
                <div className="py-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="datePosted"
                      value="last24Hours"
                      checked={selectedRange === "last24Hours"}
                      onChange={handleRangeChange}
                      className="mr-2"
                    />
                    Last 24 hours
                  </label>
                </div>
                <div className="py-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="datePosted"
                      value="last7Days"
                      checked={selectedRange === "last7Days"}
                      onChange={handleRangeChange}
                      className="mr-2"
                    />
                    Last 7 days
                  </label>
                </div>
                <div className="py-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="datePosted"
                      value="last14Days"
                      checked={selectedRange === "last14Days"}
                      onChange={handleRangeChange}
                      className="mr-2"
                    />
                    Last 14 days
                  </label>
                </div>
                <div className="py-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="datePosted"
                      value="last30Days"
                      checked={selectedRange === "last30Days"}
                      onChange={handleRangeChange}
                      className="mr-2"
                    />
                    Last 30 days
                  </label>
                </div>
              </div>
            </li>
            {/* Experience Level */}
            <li>
              <label className="text-lg font-semibold">Experience Level</label>
              <div className="mt-4 mb-4">
                {Object.entries(experienceLevels).map(([level, isChecked]) => (
                  <div className="mb-4" key={level}>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="experienceLevels"
                        value={level}
                        className="sr-only peer"
                        checked={isChecked}
                        onChange={() => handleExperienceToggle(level)}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600 peer-checked:bg-blue-600" />
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">
                        {level.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </li>
            {/* Career Level */}
            <li>
              <label className="text-lg font-semibold">Career Level</label>
              <div className="mt-4 mb-4">
                {Object.entries(careerLevels).map(([level, isChecked]) => (
                  <div className="mb-4" key={level}>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="careerLevels"
                        value={level}
                        className="sr-only peer"
                        checked={isChecked}
                        onChange={() => handleCareerToggle(level)}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600 peer-checked:bg-blue-600" />
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">
                        {level}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </li>
            {/* Location Dropdown */}
            <li>
              <div className="flex bg-white border border-gray-200 w-full h-12 rounded-md">
                <select
                  name="locationDropdown"
                  value={DropDownSelectedValue}
                  onChange={handleDropDownChange}
                  className="flex justify-between ml-4 px-2"
                >
                  <option value="" disabled>
                    Location
                  </option>
                  <option value="Kochi">Kochi</option>
                  <option value="Calicut">Calicut</option>
                  <option value="Trivandrum">Trivandrum</option>
                  <option value="Trissur">Trissur</option>
                </select>
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
{/* Alert */}
      <div className="md:h-fit px-3 py-4 mt-12 mb-8 md:w-80 md:ml-16 bg-blue-50 dark:bg-gray-800">
        <form onSubmit={handleSubmit}>
          <ul className="space-y-4 font-medium">
{/* Title */}
            <li>
              <label className="flex text-lg font-semibold mb-2">
                Job Alert
              </label>
              <label className="mb-2">Title</label>
              <div className="flex items-center mt-2 bg-white border h-12 border-gray-300 rounded-md p-2">
                <input
                  type="text"
                  name="searchQuery"
                  placeholder="Search..."
                  className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </li>

{/* Email Frequency */}
            <li>
              <label className="mb-2">Email Frequency</label>
              <div className="flex bg-white border border-gray-200 w-full h-12 rounded-md">
                <select
                  name="locationDropdown"
                  value={DropDownEmailAlertSelectedValue}
                  onChange={handleEmailAlertDropDownChange}
                  className="flex justify-between ml-4 px-2"
                >
                  <option value="Daily" disabled>
                    Daily
                  </option>
                  <option value="Weekly">Weekly</option>
                  <option value="Fortnight">Fortnight</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Biannually">Biannually</option>
                  <option value="Annually">Annually</option>
                </select>
              </div>
            </li>

{/* Submit Button */}
            <li>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"
              >
                Save Job Alert
              </button>
            </li>
          </ul>
        </form>
      </div>
    </aside>
  );
};

export default HomeSidebar;
