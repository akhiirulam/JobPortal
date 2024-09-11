import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import EducationFormList from "./EducationFormList";

import CandidateSidebar from "../CandidateSidebar/CandidateSidebar";
import ExperienceFormList from "./ExperienceFormList";
import AwardFormList from "./AwardFormList";
import axios from "axios";

const CandidateResumeAdd = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const resumeInputRef = useRef(null);

  const handleResumeUpload = (event) => {
    const files = Array.from(event.target.files); // Get the files as an array
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]); // Append new files to the existing list
  };

  const triggerResumeUpload = () => {
    resumeInputRef.current.click();
  };

  const handleFileRemove = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const [education, setEducation] = useState([
    { title: "", academy: "", year: "", description: "" },
  ]);
  const [visibleEducation, setVisibleEducation] = useState([false]);

  // Toggle visibility of the form for a specific education item
  const toggleEducationVisibility = (index) => {
    setVisibleEducation((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  // Handle input change for a specific education item
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setEducation((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [name]: value } : item))
    );
  };

  // Handle removal of a specific education item
  const handleRemoveForm = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
    setVisibleEducation((prev) => prev.filter((_, i) => i !== index));
  };

  // Add a new education item with its visibility initially set to false
  const handleAddForm = () => {
    setEducation((prev) => [
      ...prev,
      { title: "", academy: "", year: "", description: "" },
    ]);
    setVisibleEducation((prev) => [...prev, false]);
  };

  // Initialize state for experience items and their visibility
  const [experience, setExperience] = useState([
    { title: "", company: "", year: "", description: "" },
  ]);
  const [visibleExperience, setVisibleExperience] = useState([false]);

  // Toggle visibility of the form for a specific experience item
  const toggleExperienceVisibility = (index) => {
    setVisibleExperience((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  // Handle input change for a specific experience item
  const handleExperienceInputChange = (e, index) => {
    const { name, value } = e.target;
    setExperience((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [name]: value } : item))
    );
  };

  // Handle removal of a specific experience item
  const handleExperienceRemoveForm = (index) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
    setVisibleExperience((prev) => prev.filter((_, i) => i !== index));
  };

  // Add a new experience item with its visibility initially set to false
  const handleExperienceAddForm = () => {
    setExperience((prev) => [
      ...prev,
      { title: "", company: "", year: "", description: "" },
    ]);
    setVisibleExperience((prev) => [...prev, false]);
  };

  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files); 
    setImages((prevImages) => [...prevImages, ...files]); 
  };
  

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const [awards, setAwards] = useState([
    { title: "", year: "", description: "" },
  ]);
  const [visibleAwards, setVisibleAwards] = useState([false]);

  const toggleAwardVisibility = (index) => {
    setVisibleAwards((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleAwardsInputChange = (e, index) => {
    const { name, value } = e.target;
    setAwards((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [name]: value } : item))
    );
  };

  const handleAwardsRemoveForm = (index) => {
    setAwards((prev) => prev.filter((_, i) => i !== index));
    setVisibleAwards((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAwardsAddForm = () => {
    setAwards((prev) => [...prev, { title: "", year: "", description: "" }]);
    setVisibleAwards((prev) => [...prev, false]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      const formData = new FormData();
      formData.append("education", JSON.stringify(education));
      formData.append("experience", JSON.stringify(experience));
      formData.append("awards", JSON.stringify(awards));

      uploadedFiles.forEach((file, index) => {
        formData.append(`uploadedFile[]`, file);
      });
      images.forEach((image, index) => {
        formData.append(`images[]`, image);
      });

      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
        try {
          const response = await axios.post('http://localhost:5000/api/v1/user/addResume', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          console.log('Success:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }

  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarElement = document.getElementById("default-sidebar");
      if (sidebarElement && !sidebarElement.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="mt-[50px] bg-[#F5F7FC] h-fit">
      <CandidateSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Edit Profile</h3>

        <div className="flex flex-col  p-4 md:p-[30px] rounded">
          <div className="flex flex-col gap-6">
            {/* Logo Image and Browse Button Section */}

            <label className="text-md font-bold">Profile Image</label>
            <div className="flex flex-col items-center gap-4">
              {/* Display uploaded files */}
              {uploadedFiles.length > 0 ? (
                <div className="flex flex-col gap-4 w-full">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="relative flex items-center p-2 bg-gray-100 rounded-md"
                    >
                      <span className="flex-1 text-gray-700">
                        {file.name.length > 20
                          ? `${file.name.substring(0, 20)}...`
                          : file.name}
                      </span>
                      <button
                        onClick={() => handleFileRemove(index)}
                        className="ml-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      >
                        <FaTimes size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* File upload input */}
              <label className="flex flex-col items-center justify-center w-full h-12 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                <button
                  className="button bg-custom-dark px-6 py-3 md:px-8 md:py-4 rounded-md font-medium text-primary"
                  onClick={triggerResumeUpload}
                >
                  Browse
                </button>
                <input
                  ref={resumeInputRef}
                  type="file"
                  accept=".pdf" // Updated to accept PDF files
                  style={{ display: "none" }}
                  onChange={handleResumeUpload}
                />
              </label>
            </div>
          </div>

          {/* Cover Image */}

          <div className="mt-[50px] bg-[#F5F7FC] h-fit">
            <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 md:p-[30px] rounded h-full">
              <div className="flex flex-col gap-6">
                <div className="p-4">
                  {/* Render Education Labels and Forms */}
                  {education.map((educationItem, index) => (
                    <div key={index}>
                      {/* Education Label */}
                      <div
                        className="text-lg font-bold cursor-pointer border-black border-2 p-2 bg-white rounded flex items-center mb-2"
                        onClick={() => toggleEducationVisibility(index)}
                      >
                        Education {index + 1}
                        <FaChevronDown
                          className={`ml-6 transform ${
                            visibleEducation[index] ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>

                      {/* Education Form */}
                      {visibleEducation[index] && (
                        <EducationFormList
                          index={index}
                          education={educationItem}
                          handleInputChange={(e) => handleInputChange(e, index)}
                          handleRemove={() => handleRemoveForm(index)}
                        />
                      )}
                    </div>
                  ))}

                  {/* Optional: Add New Education Entry */}
                  <button
                    type="button"
                    onClick={handleAddForm}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Add Another Education
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-[50px] bg-[#F5F7FC] h-fit">
              <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 md:p-[30px] rounded h-full">
                <div className="flex flex-col gap-6">
                  <div className="p-4">
                    {/* Render Experience Labels and Forms */}
                    {experience.map((exp, index) => (
                      <div key={index}>
                        {/* Experience Label */}
                        <div
                          className="text-lg font-bold cursor-pointer border-black border-2 p-2 bg-white rounded flex items-center mb-2"
                          onClick={() => toggleExperienceVisibility(index)}
                        >
                          Experience {index + 1}
                          <FaChevronDown
                            className={`ml-6 transform ${
                              visibleExperience[index]
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </div>

                        {/* Experience Form */}
                        {visibleExperience[index] && (
                          <ExperienceFormList
                            index={index}
                            experience={exp}
                            handleExperienceInputChange={(e) =>
                              handleExperienceInputChange(e, index)
                            }
                            handleExperienceRemove={() =>
                              handleExperienceRemoveForm(index)
                            }
                          />
                        )}
                      </div>
                    ))}

                    {/* Optional: Add New Experience Entry */}
                    <button
                      type="button"
                      onClick={handleExperienceAddForm}
                      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                      Add Another Experience
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[50px] bg-[#F5F7FC] h-fit">
              <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 md:p-[30px] rounded h-full">
                <div className="flex flex-col gap-6">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mb-4"
                  />
                  <div className="flex flex-wrap gap-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-32 h-32 bg-gray-200 rounded overflow-hidden"
                      >
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`uploaded-img-${index}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[50px] bg-[#F5F7FC] h-fit">
              <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 md:p-[30px] rounded h-full">
                <div className="flex flex-col gap-6">
                  <div className="p-4">
                    {/* Render Award Labels and Forms */}
                    {awards.map((award, index) => (
                      <div key={index}>
                        {/* Award Label */}
                        <div
                          className="text-lg font-bold cursor-pointer border-black border-2 p-2 bg-white rounded flex items-center mb-2"
                          onClick={() => toggleAwardVisibility(index)}
                        >
                          Award {index + 1}
                          <FaChevronDown
                            className={`ml-6 transform ${
                              visibleAwards[index] ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>

                        {/* Award Form */}
                        {visibleAwards[index] && (
                          <AwardFormList
                            index={index}
                            award={award}
                            handleAwardsInputChange={(e) =>
                              handleAwardsInputChange(e, index)
                            }
                            handleAwardsRemove={() =>
                              handleAwardsRemoveForm(index)
                            }
                          />
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAwardsAddForm}
                      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                      Add Another Award
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[50px] bg-[#F5F7FC] h-fit">
              <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 md:p-[30px] rounded h-full items-center">
                <button
                  className="bg-blue-600 w-48 h-12 rounded text-white font-semibold"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateResumeAdd;
