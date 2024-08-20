import React, { useState } from "react";

const CustomSwitch = ({ isChecked, onChange }) => (
  <label className="flex cursor-pointer select-none items-start">
    <div className="relative">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        className={`h-4 w-8 rounded-full ${
          isChecked ? "bg-sky-500" : "bg-gray-400"
        }`}
      ></div>
      <div
        className={`absolute top-0 left-0 flex h-4 w-4 items-center justify-center rounded-full bg-white transition-transform ${
          isChecked ? "translate-x-4" : "translate-x-0"
        }`}
      ></div>
    </div>
  </label>
);

export default function App() {
  const [experienceLevels, setExperienceLevels] = useState({
    fresher: false,
    oneYears: false,
    twoYears: false,
    threeYears: false,
    fourYears: false,
    fiveYears: false
  });

  const handleCheckboxChange = (level) => () => {
    setExperienceLevels((prev) => ({
      ...prev,
      [level]: !prev[level],
    }));
  };

  return (
    <div className=" space-y-4 p-4  max-w-xs mx-auto">
      {/* Container */}
      <div className="bg-gray-200 border border-gray-300 rounded p-4 space-y-4">
        {/* Search Keyword */}
        <div>
          <h1 className="text-lg font-semibold mb-2">Search Keyword</h1>
          <input
            className="rounded   text-white p-2 w-full"
            type="text"
            placeholder="Search keyword"
          />
        </div>

        {/* Location */}
        <div>
          <h1 className="text-lg font-semibold mb-2">Location</h1>
          <input
            className="rounded text-white p-2 w-full"
            type="text"
            placeholder="Location"
          />
        </div>

        {/* Radius */}
        <div>
          <p className="  text-sky-600">Radius</p>
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            className="w-full"
          />
        </div>

        {/* Categories Dropdown */}
        <div>
          <h1 className="text-lg font-semibold mb-2">Categories</h1>
          <select className="rounded 0 text-gray-500 hover:text-sky-500 p-2 w-full">
            <option value="category1">Accounting/Finance</option>
            <option value="category2">Automotive Jobs</option>
            <option value="category3">Customer</option>
            <option value="category3">Design</option>
            <option value="category3">Development</option>
            <option value="category3">Health and Care</option>
            <option value="category3">Human Resource</option>
            <option value="category3">Marketing</option>
            <option value="category3">Project Mangment 3</option>
          </select>
        </div>
        <div>
          {/* Job Type Dropdown */}
          <h1 className="text-lg font-semibold mb-2">Job type</h1>
          <select className="rounded 0 text-gray-500 hover:text-sky-500 p-2 w-full">
            <option value="category1">Freelance</option>
            <option value="category2">Full Time</option>
            <option value="category3">Internship</option>
            <option value="category3">Part Time</option>
            <option value="category3">Temporary</option>
          </select>
        </div>

        {/* Date Posted Radio Buttons */}
        <div>
          <h1 className="text-lg font-semibold mb-2">Date Posted</h1>
          <div className="flex-col ">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dateposted"
                value="last hrs"
                className="text-sky-500"
              />
              <span>Last Hour</span>
            </label> <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dateposted"
                value="last 24 hrs"
                className="text-sky-500"
              />
              <span>Last 24 Hour</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dateposted"
                value="last 7 days"
                className="text-sky-500"
              />
              <span>Last 7 days</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dateposted"
                value="last 14 days"
                className="text-sky-500"
              />
              <span>Last 14 days</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="dateposted"
                value="last 30 days"
                className="text-sky-500"
              />
              <span>Last 30 days</span>
            </label>
          </div>
        </div>

        {/* Experience Level Toggle Switches */}
        <div>
          <h1 className="text-lg font-semibold mb-2">Experience Level</h1>
          <div className="flex flex-col space-y-2">
            <p className="flex items-center space-x-2">
              <CustomSwitch
                isChecked={experienceLevels.fresher}
                onChange={handleCheckboxChange("fresher")}
              />
              <span>Fresher</span>
            </p>
            <p className="flex items-center space-x-2">
              <CustomSwitch
                isChecked={experienceLevels.oneYear}
                onChange={handleCheckboxChange("oneYear")}
              />
              <span>1 Year</span>
            </p>
            <p className="flex items-center space-x-2">
              <CustomSwitch
                isChecked={experienceLevels.twoYears}
                onChange={handleCheckboxChange("twoYears")}
              />
              <span>2 Years</span>
            </p>
            <p className="flex items-center space-x-2">
              <CustomSwitch
                isChecked={experienceLevels.threeYears}
                onChange={handleCheckboxChange("threeYears")}
              />
              <span>3 Years</span>
            </p>
            <p className="flex items-center space-x-2">
              <CustomSwitch
                isChecked={experienceLevels.fourYears}
                onChange={handleCheckboxChange("fourYears")}
              />
              <span>4 years</span>
            </p>
          </div>
        </div>

        {/* Salary Slider */}
        <div>
          <h1 className="text-lg font-semibold mb-2">Salary</h1>
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            className="w-full"
          />
        </div>

        {/* Find Jobs Button */}
        <div>
          <button className="  p-2 rounded bg-sky-500 text-white border border-sky-600 hover:bg-white hover:text-sky-600 hover:border border-sky-600 w-full">
            Find Jobs
          </button>
        </div>
      </div>

      {/* Job Alert Section */}
      <div className="bg-gray-200 border border-gray-300 rounded  p-4">
        <h1 className="text-lg font-semibold mb-2">Job Alert</h1>
        <div className="flex flex-col space-y-4">
          <div>
            <h5 className="text-sm font-medium mb-1">Title</h5>
            <input
              type="text"
              className="  p-2 w-full"
              placeholder="Enter alert title"
            />
          </div>
          <div>
            <h5 className="text-sm font-medium mb-1">Email Frequency</h5>
            <select className="    p-2 w-full">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="fortnightly">Fortnightly</option>
              <option value="monthly">Monthly</option>
              <option value="Biannually">Biannually</option>
              
            </select>
          </div>
          <button className=" p-2 rounded bg-sky-500 text-white border border-sky-600 hover:bg-white hover:text-sky-600 hover:border border-sky-600 w-full">
            Save Job Alert
          </button>
        </div>
      </div>

    </div>
  );
}
