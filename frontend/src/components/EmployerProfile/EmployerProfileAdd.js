import React, { useState, useEffect, useRef } from "react";
import img1 from "../../public/member1.jpg";
import MemberFormList from "./MemberForm";
import EmpSidebar from "../EmpSidebar/EmpSidebar";
import { Editor } from "@tinymce/tinymce-react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import SocialMediaFormList from "./SocialMediaFormList";
import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete";
import Select from "react-select";
import axios from "axios";


const EmployerProfileAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [showProfileOption, setShowProfileOption] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [foundedDate, setFoundedDate] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [introVideo, setIntroVideo] = useState("");

  const handleShowProfileSelect = (event) => {
    setShowProfileOption(event.target.value);
  };

  const clearShowProfileSelection = (event) => {
    setShowProfileOption("");
  };

  const [isEditing, setIsEditing] = useState(false);
  const [url, setUrl] = useState(
    "https://apusthemes.com/wp-demo/superio/employer/acemero/"
  );
  const [tempUrl, setTempUrl] = useState(url);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleURLInputChange = (e) => {
    setTempUrl(e.target.value);
  };

  const handleOkayClick = () => {
    setUrl(tempUrl); // Set the new URL
    setIsEditing(false); // Exit editing mode
  };

  const handleCancelClick = () => {
    setTempUrl(url); // Reset to the original URL
    setIsEditing(false); // Exit editing mode
  };

  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const [visibleMembers, setVisibleMembers] = useState([true]);
  const [members, setMembers] = useState([
    {
      name: "",
      designation: "",
      experience: "",
      profileImage: null,
      facebookUrl: "",
      twitterUrl: "",
      googlePlusUrl: "",
      linkedinUrl: "",
      dribbbleUrl: "",
      description: "",
      previewImage: null, // Add previewImage to store file URL
    },
  ]);

  const handleAddForm = () => {
    setMembers([
      ...members,
      {
        name: "",
        designation: "",
        experience: "",
        profileImage: null,
        facebookUrl: "",
        twitterUrl: "",
        googlePlusUrl: "",
        linkedinUrl: "",
        dribbbleUrl: "",
        description: "",
        previewImage: null,
      },
    ]);
    setVisibleMembers([...visibleMembers, true]);
  };

  const handleRemoveForm = (index) => {
    setMembers(members.filter((_, i) => i !== index));
    setVisibleMembers(visibleMembers.filter((_, i) => i !== index));
  };

  const handleInputChange = (e, index) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      const previewImage = file ? URL.createObjectURL(file) : null;

      setMembers(
        members.map((member, i) =>
          i === index ? { ...member, profileImage: file, previewImage } : member
        )
      );
    } else {
      setMembers(
        members.map((member, i) =>
          i === index ? { ...member, [name]: value } : member
        )
      );
    }
  };
  const toggleMemberVisibility = (index) => {
    setVisibleMembers(
      visibleMembers.map((isVisible, i) =>
        i === index ? !isVisible : isVisible
      )
    );
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

  const [location, setLocation] = useState("");

  const handlePlaceSelected = (placeName) => {
    setLocation(placeName);
  };

  const [logoImage, setLogoImage] = useState(img1);
  const [coverImage, setCoverImage] = useState(null);

  const logoInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogoImage(URL.createObjectURL(file));
    }
  };

  const handleCoverUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const triggerLogoUpload = () => {
    logoInputRef.current.click();
  };

  const triggerCoverUpload = () => {
    coverInputRef.current.click();
  };

  const categoriesOptions = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
    // Add more options as needed
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.filter((category) => category !== categoryToRemove)
    );
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("showProfileOption", showProfileOption);
    formData.append("employerName", employerName);
    formData.append("email", localStorage.getItem("email"));
    formData.append("mobileNumber", mobileNumber);
    formData.append("website", website);
    formData.append("foundedDate", foundedDate);
    formData.append("companySize", companySize);
    formData.append('selectedCategories', JSON.stringify(selectedCategories));
    formData.append("tempUrl", tempUrl);
    formData.append("jobDescription", jobDescription);
  
    if (logoInputRef.current && logoInputRef.current.files[0]) {
      formData.append("logoImage", logoInputRef.current.files[0]);
    }
    if (coverInputRef.current && coverInputRef.current.files[0]) {
      formData.append("coverImage", coverInputRef.current.files[0]);
    }
    images.forEach((image) => {
      formData.append("images[]", image);
    });

    formData.append('members', JSON.stringify(members));
    formData.append('socialMediaEntries', JSON.stringify(socialMediaEntries));
  
    console.log('Members:', members[0].profileImage);
    console.log('Social Media Entries:', socialMediaEntries);

    try {
      const response = await axios.post('http://localhost:5000/api/v1/user/addEmployer', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    
    
      console.log('Success:', response.data);
    
    } catch (error) {
     
      if (error.response) {
     
        console.error('Error Response:', error.response.data);
        console.error('Status:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
      
        console.error('No response received:', error.request);
      } else {
       
        console.error('Error Message:', error.message);
      }
    }
    
  };

  return (
    <div className="mt-[50px] bg-[#F5F7FC] h-fit">
      <EmpSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Edit Profile</h3>
        <div className="flex flex-col bg-white p-4 md:p-[30px] rounded">
          <div className="flex flex-col gap-6">
            {/* Dropdown Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full max-w-xs">
                <select
                  id="showProfileOption"
                  value={showProfileOption}
                  onChange={handleShowProfileSelect}
                  className="appearance-none w-full p-3 md:p-4 bg-white border rounded-md focus:outline-none text-gray-700"
                >
                  <option value="" disabled>
                    Show my profile
                  </option>
                  <option value="Show">Show</option>
                  <option value="Hide">Hide</option>
                </select>

                {/* Clear button */}
                {showProfileOption && (
                  <button
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={clearShowProfileSelection}
                  >
                    <FaTimes />
                  </button>
                )}

                {/* Down arrow */}
                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Logo Image and Browse Button Section */}

            <label className="text-md font-bold">Logo Image</label>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <img
                src={logoImage}
                alt="logo"
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover"
              />
              <button
                className="button bg-custom-dark px-6 py-3 md:px-8 md:py-4 rounded-md font-medium text-primary"
                onClick={triggerLogoUpload}
              >
                Browse
              </button>
              <input
                ref={logoInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleLogoUpload}
              />
            </div>

            {/* Cover Image */}

            <label className="text-md font-bold">Cover Image</label>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <button
                className="button bg-custom-dark px-6 py-3 md:px-8 md:py-4 rounded-md font-medium text-primary"
                onClick={triggerCoverUpload}
              >
                Browse
              </button>
              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleCoverUpload}
              />
            </div>

            {/* Display uploaded cover image (if any) */}
            {coverImage && (
              <img
                src={coverImage}
                alt="Cover"
                className="w-full h-40 object-cover mt-4"
              />
            )}
            {/* Cover Image */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Employer Name</label>
                  <input
                    type="text"
                    value={employerName}
                    placeholder="Employer"
                    className="p-4 bg-slate-100 w-full rounded-md"
                    onChange={(e) => setEmployerName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Email</label>
                  <input
                    type="email"
                    placeholder={localStorage.email}
                    className="p-4 bg-slate-100 w-full rounded-md"
                    disabled
                    required
                  />
                </div>
              </div>
            </div>
            {/* Cover Image */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Phone Number</label>
                  <input
                    type="number"
                    value={mobileNumber}
                    placeholder="123 444 555"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Website</label>
                  <input
                    type="text"
                    value={website}
                    placeholder="themeforest.net"
                    onChange={(e) => setWebsite(e.target.value)}
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Cover Image */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Founded Date</label>
                  <input
                    type="number"
                    value={foundedDate}
                    placeholder="2005"
                    onChange={(e) => setFoundedDate(e.target.value)}
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Company Size</label>
                  <input
                    type="text"
                    value={companySize}
                    placeholder="50-100"
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="p-4 bg-slate-100 w-full rounded-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Cover Image */}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">
                    Categories <span className="text-red-500 text-base">*</span>
                  </label>
                  <Select
                    isMulti
                    options={categoriesOptions}
                    value={selectedCategories}
                    onChange={handleChange}
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="Select categories..."
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="font-bold">Introduction Video URL</label>
                  <input
                    type="text"
                    vlaue={introVideo}
                    placeholder="https://www.youtube.com/watch?v=nrJtHemSPW4"
                    className="p-4 bg-slate-100 w-full rounded-md"
                    onChange={(e) => setIntroVideo(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="md:w-80 flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col my-5">
                  <p className="text-md font-bold">Profile url</p>
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
                    {isEditing ? (
                      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
                        <input
                          type="text"
                          value={tempUrl}
                          onChange={handleURLInputChange}
                          className="p-2 border rounded w-full sm:w-auto"
                          autoFocus
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={handleOkayClick}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                          >
                            Okay
                          </button>
                          <button
                            onClick={handleCancelClick}
                            className="px-4 py-2 bg-gray-300 text-black rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
                        <p className="text-gray-500 w-full break-all">{url}</p>
                        <a
                          href="https://example.com"
                          onClick={handleEditClick}
                          className="text-blue-500 cursor-pointer"
                        >
                          Edit
                        </a>
                      </div>
                    )}
                  </div>
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
                {/* Render Member Labels and Forms */}
                {members.map((member, index) => (
                  <div key={index}>
                    {/* Member Label */}
                    <div
                      className="text-lg font-bold cursor-pointer border-black border-2 p-2 bg-white rounded flex items-center mb-2"
                      onClick={() => toggleMemberVisibility(index)}
                    >
                      Member {index + 1}
                      <FaChevronDown
                        className={`ml-6 transform ${
                          visibleMembers[index] ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>

                    {/* Member Form */}
                    {visibleMembers[index] && (
                      <MemberFormList
                        index={index}
                        member={member}
                        handleInputChange={(e) => handleInputChange(e, index)}
                        handleRemove={() => handleRemoveForm(index)}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleAddForm}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Add Another Member
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[50px] bg-[#F5F7FC] h-fit">
          <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 md:p-[30px] rounded h-full">
            <div className="flex flex-col gap-6">
              <div className="p-4">
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
                <button
                  type="button"
                  onClick={addSocialMediaEntry}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Add Another Social Media
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[50px] bg-[#F5F7FC] h-fit">
          <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 md:p-[30px] rounded h-full">
            <div className="flex flex-col gap-6">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <GooglePlacesAutocomplete
                  onPlaceSelected={handlePlaceSelected}
                />
                <input
                  id="location"
                  type="text"
                  value={location}
                  readOnly
                  className="p-2 border rounded-md mt-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px] bg-[#F5F7FC] h-fit">
          <div className="flex flex-col bg-blue-100 p-4 mt-4 mb-4 md:p-[30px] rounded h-full">
            <div className="flex flex-col gap-6 items-center">
            <button className="bg-blue-600 w-48 h-12 rounded text-white font-semibold" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfileAdd;
