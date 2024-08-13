import React, { useState } from 'react';

const Dropdown = ({ options, placeholder, iconBefore, iconAfter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const clearSelection = (e) => {
    e.stopPropagation();
    setSelectedOption(null);
  };

  return (
    <div className="relative w-full md:w-auto" onClick={toggleDropdown}>
      <div className="flex items-center justify-between p-2 cursor-pointer bg-white w-[200px] mr-2">
        <span className="flex items-center truncate" role="textbox" aria-readonly="true">
          {iconBefore}
          {selectedOption ? selectedOption : <span className="text-gray-500">{placeholder}</span>}
        </span>
        {selectedOption && (
          <span
            className="text-lg text-gray-500 cursor-pointer ml-2"
            onClick={clearSelection}
            role="button"
          >
            &times;
          </span>
        )}
        {iconAfter}
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full md:w-64 mt-1 bg-white border rounded-md max-h-40 overflow-y-auto z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
