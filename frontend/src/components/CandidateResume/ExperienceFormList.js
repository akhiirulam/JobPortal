// ExperienceFormList.js
import React from 'react';

const ExperienceFormList = ({ index, experience, handleExperienceInputChange, handleExperienceRemove }) => {
  return (
    <div className="p-4 bg-white rounded border border-gray-300">
      <input
        type="text"
        name="title"
        value={experience.title}
        onChange={handleExperienceInputChange}
        placeholder="Title"
        className="block w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        name="company"
        value={experience.company}
        onChange={handleExperienceInputChange}
        placeholder="Company"
        className="block w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        name="year"
        value={experience.year}
        onChange={handleExperienceInputChange}
        placeholder="Year"
        className="block w-full p-2 mb-2 border rounded"
      />
      <textarea
        name="description"
        value={experience.description}
        onChange={handleExperienceInputChange}
        placeholder="Description"
        className="block w-full p-2 mb-2 border rounded"
      />
      <button
        type="button"
        onClick={handleExperienceRemove}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default ExperienceFormList;
