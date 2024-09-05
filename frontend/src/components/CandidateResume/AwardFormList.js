import React from 'react';

const AwardFormList = ({ index, award, handleAwardsInputChange, handleAwardsRemove }) => {
  return (
    <div className="p-4 bg-white rounded border border-gray-300">
      <input
        type="text"
        name="title"
        value={award.title}
        onChange={handleAwardsInputChange}
        placeholder="Title"
        className="block w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        name="year"
        value={award.year}
        onChange={handleAwardsInputChange}
        placeholder="Year"
        className="block w-full p-2 mb-2 border rounded"
      />
      <textarea
        name="description"
        value={award.description}
        onChange={handleAwardsInputChange}
        placeholder="Description"
        className="block w-full p-2 mb-2 border rounded"
      />
      <button
        type="button"
        onClick={handleAwardsRemove}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default AwardFormList;
