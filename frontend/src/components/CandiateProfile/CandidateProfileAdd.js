import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import SocialMediaFormList from "./SocialMediaFormList";
import CandidateSidebar from "../CandidateSidebar/CandidateSidebar";
import Cookies from 'js-cookie';

const EmployerProfileAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [fullName,setFullName] = useState("");
  const [DOB, setDOB] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [email, setEmail] = useState('');
  const [categories,setCategory] = useState('');
  const [jobTitle,setJobTitle] = useState('');
  const [friendlyAddress,setFriendlyAddress] = useState('')
  const [location,setLocation] = useState('');
  const [introductionVideo,setIntroductionVideo] = useState('');
  const [salary,setSalary] = useState("");
  const role = "candidate";
  const profileInputRef = useRef(null)

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
    
        setProfileImage(URL.createObjectURL(file));
    }
  };

  const triggerProfileUpload = () => {
    profileInputRef.current.click();
  };

  const [genderOption, setGenderOption] = useState("");

  const handleGender = (event) => {
    setGenderOption(event.target.value);
  };

  const clearGender = (event) => {
    setGenderOption("");
  };

  const [ageOption, setAgeOption] = useState("");

  const handleAge = (event) => {
    setAgeOption(event.target.value);
  };

  const clearAge = (event) => {
    setAgeOption("");
  };

  const [qualificationOption, setQualificationOption] = useState("");

  const handleQualification = (event) => {
    setQualificationOption(event.target.value);
  };

  const clearQualification = (event) => {
    setQualificationOption("");
  };

  const [selectLanguage, setSelectLanguage] = useState([]); // Initialize as an array
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Hindi",
    "Arabic",
  ];

  // Handle language selection
  const handleLanguageSelect = (event) => {
    const value = event.target.value;
    if (value && !selectLanguage.includes(value)) {
      setSelectLanguage((prev) => [...prev, value]); // Add new language to array
    }
    event.target.value = ""; // Reset dropdown value after selection
  };

  // Handle removing a language
  const removeLanguage = (lang) => {
    setSelectLanguage(selectLanguage.filter((language) => language !== lang)); // Remove selected language
  };

  const [salaryTypeOption, setSalaryOption] = useState("");

  const handleSalary = (event) => {
    setSalaryOption(event.target.value);
  };

  const clearSalary = () => {
    setSalaryOption("");
  };

  const [selectedCategories, setSelectedCategories] = useState([]); // Initialize as an array
  const jobCategories = [
    "Software Development",
    "Marketing",
    "Sales",
    "Finance",
    "Human Resources",
    "Customer Support",
    "Design",
  ];


  const handleJobCategorySelect = (event) => {
    const value = event.target.value;
    if (value && !selectedCategories.includes(value)) {
      setSelectedCategories((prev) => [...prev, value]); 
    }
    event.target.value = ""; 
  };

 
  const removeJobCategory = (category) => {
    setSelectedCategories(selectedCategories.filter((cat) => cat !== category)); 
  };

  const [experiensOption, setExperienceOption] = useState("");

  const handleExperience = (event) => {
    setExperienceOption(event.target.value);
  };
  const clearExperiens = (event) => {
    setExperienceOption("");
  };

  const [profileOption, setProfileOption] = useState(""); 

 
  const handleProfileVisibility = (event) => {
    setProfileOption(event.target.value);
  };

  
  const clearProfileVisibility = () => {
    setProfileOption("");
  };

  const [socialMediaEntries, setSocialMediaEntries] = useState([
    { platform: "", url: "" },
  ]);

  const addSocialMediaEntry = () => {
    setSocialMediaEntries([...socialMediaEntries, { platform: "", url: "" }]);
  };

  const removeSocialMediaEntry = (index) => {
    setSocialMediaEntries(socialMediaEntries.filter((_, i) => i !== index));
  };

  const handleSocialMediaInputChange = (e, index) => {
    const { name, value } = e.target;
    setSocialMediaEntries(
      socialMediaEntries.map((entry, i) =>
        i === index ? { ...entry, [name]: value } : entry
      )
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("DOB",DOB);
      formData.append("gender", genderOption);
      formData.append("age",ageOption);
      formData.append("email", email);
      formData.append("qualification", qualificationOption);
      formData.append("experience",experiensOption);
      formData.append("language",selectLanguage);
      formData.append("salaryType",salaryTypeOption);
      formData.append("role",role)
      formData.append("salary",salary)
      formData.append("category",categories);
      formData.append("subCategories", selectedCategories);
      formData.append("profile", profileOption);
      formData.append("jobTitle", jobTitle);
      formData.append("jobDescription", jobDescription);
      formData.append('socialMediaEntries', JSON.stringify(socialMediaEntries));
      formData.append('location',location);
      formData.append('friendlyAddress',friendlyAddress);
      formData.append('introductionVideo',introductionVideo);
      formData.append('mobile',phoneNumber);
    
      if (profileInputRef.current && profileInputRef.current.files[0]) {
        formData.append("profileImage", profileInputRef.current.files[0]);
      }
     

      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      // Axios POST request
      const response = await axios.post("http://localhost:5000/api/v1/user/addCandidate", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Success:', response.data);
  
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
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

        <div className="flex flex-col bg-white p-4 md:p-[30px] rounded">
          <div className="flex flex-col gap-6">
            {/* Logo Image and Browse Button Section */}

            <label className="text-md font-bold">Profile Image</label>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
             
                <div className="relative w-48 h-48">
                  <img
                    src={profileImage}
                    alt="Uploaded"
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={triggerProfileUpload}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  >
                   Browse
                  </button>
                </div>

                  <input
                  ref={profileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    style={{ display: "none" }}
                    onChange={handleProfileImageChange}
                  />

            </div>
            {/* Cover Image */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Full Name</label>
                  <input
                    type="text"
                    placeholder="FullName"
                    value={fullName}
                    className="p-4 bg-slate-100 w-full rounded-md"
                    onChange={(e) => {setFullName(e.target.value)}}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Date of Birth</label>
                  <input
                    type="date"
                    value={DOB}
                    onChange={(e)=>{setDOB(e.target.value)}}
                    placeholder="Date of Birth"
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
            {/* Gender&Age */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="relative flex flex-col gap-1 w-full">
                  <label className="font-bold">Gender</label>
                  <select
                    value={genderOption}
                    onChange={handleGender}
                    className="appearance-none w-full p-3 md:p-4 bg-slate-100 border rounded-md focus:outline-none text-gray-700"
                  >
                    <option value="" disabled>
                      Show my profile
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="LGBTQ+">LGBTQ+</option>
                  </select>

                  {/* Clear button */}
                  {genderOption && (
                    <button
                      className="absolute right-12 mt-12 transform -translate-y-1/2 text-gray-500"
                      onClick={clearGender}
                    >
                      <FaTimes />
                    </button>
                  )}
                  <FaChevronDown className="absolute right-4 mt-12 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="relative flex flex-col gap-1 w-full">
                    <label className="font-bold">Age</label>
                    <select
                      value={ageOption}
                      onChange={handleAge}
                      className="appearance-none w-full p-3 md:p-4 bg-slate-100 border rounded-md focus:outline-none text-gray-700"
                    >
                      <option value="" disabled>
                        20 - 25
                      </option>
                      <option value="18and20">18 - 20</option>
                      <option value="20and25">20 - 25</option>
                      <option value="25and30">25 - 30</option>
                      <option value="30and35">30 - 35 </option>
                      <option value="35and40">35 - 40</option>
                    </select>

                    {/* Clear button */}
                    {ageOption && (
                      <button
                        className="absolute right-12 mt-12 transform -translate-y-1/2 text-gray-500"
                        onClick={clearAge}
                      >
                        <FaTimes />
                      </button>
                    )}
                    <FaChevronDown className="absolute right-4 mt-12 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Phone Number</label>
                  <input
                    type="Number"
                    value={phoneNumber}
                    onChange={(e) => {setPhoneNumber(e.target.value)}}
                    placeholder="Phone Number"
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Email</label>
                  <input
                    type="text"
                    value={Cookies.get(email)}
                    placeholder="Email"
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Qualification & Experience Time */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="relative flex flex-col gap-1 w-full">
                  <label className="font-bold">Qualification</label>
                  <select
                    value={qualificationOption}
                    onChange={handleQualification}
                    className="appearance-none w-full p-3 md:p-4 bg-slate-100 border rounded-md focus:outline-none text-gray-700"
                  >
                    <option value="" disabled>
                      Certificate
                    </option>
                    <option value="AssociateDegree">Associate Degree</option>
                    <option value="BachelorDegree">Bachelor Degree</option>
                    <option value="MastersDegree">Master's Degree</option>
                    <option value="DoctorateDegree">Doctorate Degree</option>
                  </select>

                  {/* Clear button */}
                  {qualificationOption && (
                    <button
                      className="absolute right-12 mt-12 transform -translate-y-1/2 text-gray-500"
                      onClick={clearQualification}
                    >
                      <FaTimes />
                    </button>
                  )}
                  <FaChevronDown className="absolute right-4 mt-12 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="relative flex flex-col gap-1 w-full">
                    <label className="font-bold">Experience Time</label>
                    <select
                      value={experiensOption}
                      onChange={handleExperience}
                      className="appearance-none w-full p-3 md:p-4 bg-slate-100 border rounded-md focus:outline-none text-gray-700"
                    >
                      <option value="fresh" disabled>
                        Fresh
                      </option>
                      <option value="1year">1 year</option>
                      <option value="2year">2 year</option>
                      <option value="3year">3 year</option>
                      <option value="4year">4 year </option>
                      <option value="5year">5 year</option>
                    </select>

                    {/* Clear button */}
                    {experiensOption && (
                      <button
                        className="absolute right-12 mt-12 transform -translate-y-1/2 text-gray-500"
                        onClick={clearExperiens}
                      >
                        <FaTimes />
                      </button>
                    )}
                    <FaChevronDown className="absolute right-4 mt-12 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Image */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <div className="relative flex flex-col gap-1 w-full">
                    <label className="font-bold">Select Language</label>
                    <select
                      onChange={handleLanguageSelect}
                      className="appearance-none w-full p-3 md:p-4 bg-slate-100 border rounded-md focus:outline-none text-gray-700"
                    >
                      <option value="" disabled>
                        Select a language
                      </option>
                      {languages.map((language, index) => (
                        <option key={index} value={language}>
                          {language}
                        </option>
                      ))}
                    </select>

                    {/* Display selected languages with remove button */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectLanguage.map((lang, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                        >
                          <span>{lang}</span>
                          <button
                            className="ml-2 text-red-500 hover:text-red-700"
                            onClick={() => removeLanguage(lang)}
                          >
                            <FaTimes />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col gap-1 w-full">
                  <label className="font-bold">SalaryType</label>
                  <select
                    value={salaryTypeOption}
                    onChange={handleSalary}
                    className="appearance-none w-full p-3 md:p-4 bg-slate-100 border rounded-md focus:outline-none text-gray-700"
                  >
                    <option value="Hourly" disabled>
                      Hourly
                    </option>
                    <option value="Monthly">Monthly</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Daily">Daily</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Yearly">Yearly</option>
                  </select>

                  {/* Clear button */}
                  {salaryTypeOption && (
                    <button
                      className="absolute right-12 mt-12 transform -translate-y-1/2 text-gray-500"
                      onClick={clearSalary}
                    >
                      <FaTimes />
                    </button>
                  )}
                  <FaChevronDown className="absolute right-4 mt-12 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4"> 
              <div className="flex flex-col gap-1 w-full">                
                <div className="relative flex flex-col gap-1 w-full">
                  <label className="font-bold">
                    Salary{" "}
                    <span className="text-red-500 text-base mr-1">*</span>
                  </label>
                  <input
                    type="number"
                    value={salary}
                    onChange={(e)=> {setSalary(e.target.value)}}
                    placeholder="Current or Previous Salary"
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">
                    Categories <span className="text-red-500 text-base">*</span>
                  </label>
                  <input
                    type="text"
                    value={categories}
                    onChange={(e)=> {setCategory(e.target.value)}}
                    placeholder="Categories"
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
              </div>
            </div>


            {/* Cover Image */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
              <div className="relative flex flex-col gap-1 w-full">
                  <label className="font-bold">Show My Profile</label>
                  <select
                    value={profileOption}
                    onChange={handleProfileVisibility}
                    className="appearance-none w-full p-3 md:p-4 bg-slate-100 border rounded-md focus:outline-none text-gray-700"
                  >
                    <option value="" disabled>
                      Select Visibility
                    </option>
                    <option value="Show">Show</option>
                    <option value="Hide">Hide</option>
                  </select>

                  {/* Clear button */}
                  {profileOption && (
                    <button
                      className="absolute right-12 mt-12 transform -translate-y-1/2 text-gray-500"
                      onClick={clearProfileVisibility}
                    >
                      <FaTimes />
                    </button>
                  )}

                  {/* Chevron icon */}
                  <FaChevronDown className="absolute right-4 mt-12 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className="relative flex flex-col gap-1 w-full">
                  <label className="font-bold">Select Job Category</label>
                  <select
                    onChange={handleJobCategorySelect}
                    className="appearance-none w-full p-3 md:p-4 bg-slate-100 border rounded-md focus:outline-none text-gray-700"
                  >
                    <option value="" disabled>
                      Select a job category
                    </option>
                    {jobCategories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  {/* Display selected job categories with remove button */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedCategories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                      >
                        <span>{category}</span>
                        <button
                          className="ml-2 text-red-500 hover:text-red-700"
                          onClick={() => removeJobCategory(category)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                  <FaChevronDown className="absolute right-4 mt-12 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="relative flex flex-col gap-1 w-full">
                <label className="font-bold">
                    Job Title{" "}
                    <span className="text-red-500 text-base mr-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e)=> {setJobTitle(e.target.value)}}
                    placeholder="Employer"
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
                <div className="relative flex flex-col gap-1 w-full">
                  
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">
                    Categories <span className="text-red-500 text-base">*</span>
                  </label>
                  <Editor
                    value={jobDescription}
                    onEditorChange={(content) => setJobDescription(content)}
                    apiKey="wjne60wcy99wk2hvbg2gtwlvgxk1vpfz21hz2y1kd4ujbbww" // Replace with your actual API key
                    init={{
                      height: 200,
                      menubar: false,
                      plugins:
                        "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
                      toolbar:
                        "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[50px] bg-[#F5F7FC] h-fit">
          <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 rounded h-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center sm:gap-6  gap-4">
                {socialMediaEntries.map((entry, index) => (
                  <SocialMediaFormList
                    key={index}
                    index={index}
                    socialMediaEntry={entry}
                    handleSocialMediaChange={handleSocialMediaInputChange}
                    handleRemoveSocialMedia={() =>
                      removeSocialMediaEntry(index)
                    }
                  />
                ))}
              </div>          
            </div>
            <button
                  type="button"
                  onClick={addSocialMediaEntry}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Add Another Social Media
                </button>
          </div>
        </div>

        <div className="mt-[50px] bg-[#F5F7FC] h-fit">
          <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 rounded h-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="font-bold">Friendly Address</label>
              <input
                type="text"
                placeholder="Friendly Address"
                value={friendlyAddress}
                onChange={(e)=>{setFriendlyAddress(e.target.value)}}
                className="p-4 bg-slate-100 w-full rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="font-bold">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e)=> {setLocation(e.target.value)}}
                placeholder="Location"
                className="p-4 bg-slate-100 w-full rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="font-bold">Introduction Video</label>
              <input
                type="text"
                value={introductionVideo}
                onChange={(e)=> {setIntroductionVideo(e.target.value)}}
                placeholder="https://www.youtube.com/watch?v=nrJtHemSPW4"
                className="p-4 bg-slate-100 w-full rounded-md"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-[50px] bg-[#F5F7FC] h-fit">
          <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 rounded h-full">
            <div className="flex flex-col items-center gap-1 w-full">
            <button className="bg-blue-600 w-48 h-12 rounded text-white font-semibold" type="submit" onClick={handleSubmit}>Submit</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfileAdd;
