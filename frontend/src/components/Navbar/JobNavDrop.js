import React from "react";

const JobNavDrop = () => {
  return (
    <div className="relative group">
      <span className="cursor-pointer">Find Jobs</span>
      <div className="absolute hidden group-hover:block mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
        <ul className="flex flex-col space-y-2">
          <li className="px-4 hover:bg-gray-100 cursor-pointer">Job 1</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Job 2</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Job 3</li>
        </ul>
      </div>
    </div>
  );
};

export default JobNavDrop;
