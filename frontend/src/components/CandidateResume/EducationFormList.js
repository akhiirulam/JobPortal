import React from "react";


// EducationFormList Component for individual education form fields
const EducationFormList = ({ index, education, handleInputChange, handleRemove }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Title Field */}
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={education.title}
          onChange={(e) => handleInputChange(e, index)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Academy Field */}
      <div>
        <label className="block text-sm font-medium">Academy</label>
        <input
          type="text"
          name="academy"
          value={education.academy}
          onChange={(e) => handleInputChange(e, index)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Year Field */}
      <div>
        <label className="block text-sm font-medium">Year</label>
        <input
          type="text"
          name="year"
          value={education.year}
          onChange={(e) => handleInputChange(e, index)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Description Field */}
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={education.description}
          onChange={(e) => handleInputChange(e, index)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Remove Button */}
      <button
        type="button"
        onClick={() => handleRemove(index)}
        className="px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Remove
      </button>
    </div>
  );
};

export default EducationFormList