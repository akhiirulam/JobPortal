import React, { useState } from "react";
import {
  FaTimes,
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaChevronDown,
  FaUser,
} from "react-icons/fa";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
import "./Style.css";
import { useQuery } from "@tanstack/react-query";
import { filterCandidateSearchAPI } from "../../services/candidateServices";

const HomeCandidateSidebar = ({ isOpen, closeSidebar,setFetchedData }) => {
  const [filter,setFilter] = useState({searchQuery:"",location:"",category:"",qualification:"",gender:"",})

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

  const [qualification, setqualification] = useState({
    Certificate: false,
    AssociateDegree: false,
    BachelorDegree: false,
    MastersDegree: false,
    DoctorateDegree: false,
  });

  const handleQualificationToggle = (level) => {
    setqualification((prevLevels) => ({
      ...prevLevels,
      [level]: !prevLevels[level],
    }));
  };

  const [DropDownGenderSelectedValue, setDropDownGenderSelectedValue] =
    useState("");

  const handleGenderDropDownChange = (event) => {
    setDropDownGenderSelectedValue(event.target.value);
  };

  const [DropDownEmailAlertSelectedValue,setDropDownEmailAlertSelectedValue] = useState("");

  const handleEmailAlertDropDownChange = (event) => 
  {
    setDropDownEmailAlertSelectedValue(event.target.value);
  }

  const clearEmailSelection = (event) => [setDropDownEmailAlertSelectedValue("")]

  const {data} = useQuery({
    queryKey:['filter-data-employer'],
    queryFn:()=>filterCandidateSearchAPI(filter),
  })
  setFetchedData(data)
  console.log(data);

  const clearGenderSelection = (event) => [setDropDownGenderSelectedValue("")];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("filter=",data);
    
    setFilter(data)
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

          <ul className="space-y-4 font-medium">
            {/* Search Input */}
            <li>
              <label className="text-sm font-semibold">
                Search by Keywords
              </label>
              <div className="flex items-center mt-4 bg-white border h-12 border-gray-300 rounded-md p-2">
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
              <label className="text-sm font-semibold">Location</label>
              <div className="flex bg-white border mt-4 border-gray-200 w-full h-12 rounded-md items-center relative">
                <FaMapMarkerAlt className="text-gray-500 ml-4" />
                <select
                  name="location"
                  value={DropDownSelectedValue}
                  onChange={handleDropDownChange}
                  className="flex-1 appearance-none bg-transparent pl-4 pr-10 focus:outline-none"
                >
                  <option value="">
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
            </li> */}
            {/* Job Catogory */}
            <li>
              <label className="text-sm font-semibold">Category</label>
              <div className="flex bg-white mt-4 border border-gray-200 w-full h-12 rounded-md items-center relative">
                <FaBriefcase className="text-gray-500 ml-4" />
                <select
                  name="category"
                  value={DropDownLocationSelectedValue}
                  onChange={handleLocationDropDownChange}
                  className="appearance-none w-full h-full pl-4 pr-10 text-gray-700 bg-transparent focus:outline-none ml-2"
                >
                  <option value="">
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
            <li>
              <label className="text-sm font-semibold">
                Candidate Gender
                <label className="text-sm font-semibold">Gender</label>
                <div className="flex bg-white mt-4 border border-gray-200 w-full h-12 rounded-md items-center relative">
                  <FaUser className="text-gray-500 ml-4" />
                  <select
                    name="gender"
                    value={DropDownGenderSelectedValue}
                    onChange={handleGenderDropDownChange}
                    className="appearance-none w-full h-full pl-4 pr-10 text-gray-700 bg-transparent focus:outline-none ml-2"
                  >
                    <option value="" >
                      Choose a gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* Down arrow */}
                  <FaChevronDown className="absolute right-10 text-gray-500 pointer-events-none" />

                  {/* Clear selection button */}
                  {DropDownGenderSelectedValue && (
                    <button
                      type="button"
                      onClick={clearGenderSelection}
                      className="absolute right-3 text-gray-500 hover:text-red-500 focus:outline-none"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              </label>
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
            {/* Qualification Level */}
            <li>
              <label className="text-lg font-semibold">Qualification</label>
              <div className="mt-4 mb-4">
                {Object.entries(qualification).map(
                  ([level, isChecked]) => (
                    <div className="mb-4" key={level}>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="qualification"
                          value={level}
                          className="sr-only peer"
                          checked={isChecked}
                          onChange={() => handleQualificationToggle(level)}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 dark:border-gray-600 peer-checked:bg-blue-600" />
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">
                          {level}
                        </span>
                      </label>
                    </div>
                  )
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
              <label className="text-sm font-semibold mb-2">
                Email Frequency
              </label>
              <div className="relative bg-white border border-gray-200 w-full h-12 rounded-md flex items-center">
                <select
                  name="emailFrequencyDropdown"
                  value={DropDownEmailAlertSelectedValue}
                  onChange={handleEmailAlertDropDownChange}
                  className="appearance-none w-full h-full pl-4 pr-10 text-gray-700 bg-transparent focus:outline-none"
                >
                  
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Fortnight">Fortnight</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Biannually">Biannually</option>
                  <option value="Annually">Annually</option>
                </select>
                {/* Down arrow */}
                <FaChevronDown className="absolute right-10 text-gray-500 pointer-events-none" />
                {/* Clear selection button */}
                {DropDownEmailAlertSelectedValue && (
                  <button
                    type="button"
                    onClick={clearEmailSelection}
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
                Save Job Alert
              </button>
            </li>
          </ul>
        </form>
      </div>
    </aside>
  );
};

export default HomeCandidateSidebar;
