import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";

const Jobpost = () => {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("idle");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [photos, setPhotos] = useState([]);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [tag, setTag] = useState("");
  const [jobApplyEmail, setJobApplyEmail] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [externalUrl, setExternalUrl] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(null);
  const [jobApplyType, setJobApplyType] = useState(null);
  const [experience, setExperience] = useState(null);
  const [qualification, setQualification] = useState(null);
  const [type, setType] = useState(null);
  const [gender, setGender] = useState(null);
  const [salaryType, setSalaryType] = useState(null);
  const [CareerType, setCareerType] = useState(null);
  const [videoURL, setVideoURL] = useState(null);

  const categoryOptionsArray = [
    { value: "Accounting/Finance", label: "Accounting/Finance" },
    { value: "Automotive", label: "Automotive" },
    { value: "Customer", label: "Customer" },
    { value: "Design", label: "Design" },
    { value: "Development", label: "Development" },
    { value: "Health and Care", label: "Health and Care" },
    { value: "Human Resource", label: "Human Resource" },
    { value: "Marketing", label: "Marketing" },
    { value: "Project Manager", label: "Project Manager" },
  ];

  const TypeOptionsArray = [
    { value: "Freelance", label: "Freelance" },
    { value: "FullTime", label: "Full Time" },
    { value: "Internship", label: "Internship" },
    { value: "PartTime", label: "Part Time" },
    { value: "Temporary", label: "Temporary" },
  ];

  const GenderOptionsArray = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  const ApplyTypeArray = [
    { value: "Internal", label: "Internal" },
    { value: "ExternalURL", label: "External URL" },
    { value: "ByEmail", label: "By Email" },
    { value: "CalltoApply", label: "Call to Apply" },
  ];

  const SalaryTypeArray = [
    { value: "Yearly", label: "Yearly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Weekly", label: "Weekly" },
    { value: "Daily", label: "Daily" },
    { value: "Hourly", label: "Hourly" },
  ];

  const ExperienceArray = [
    { value: "1year", label: "1 year" },
    { value: "2year", label: "2 year" },
    { value: "3year", label: "3year" },
    { value: "4year", label: "4 year" },
    { value: "5year", label: "5 year" },
    { value: "Morethan5", label: "More than 5 year" },
  ];

  const CareerTypeArray = [
    { value: "Manager", label: "Manager" },
    { value: "Officer", label: "Officer" },
    { value: "Student", label: "Student" },
    { value: "Executive", label: "Executive" },
    { value: "Others", label: "Others" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectChange = (setter) => (option) => {
    setter(option);
    console.log(`Option selected:`, option);
  };

  const handleFileChange = (event, type) => {
    const files = event.target.files;
    if (type === "featuredImage") {
      setFeaturedImage(files[0]);
    } else if (type === "photos") {
      setPhotos(Array.from(files));
    }
    setStatus("uploading");
    setTimeout(() => {
      setStatus(null);
    }, 1000);
  };

  const handleSaveAndPreview = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("jobTitle", jobTitle);
    formData.append("companyName", companyName);
    formData.append("jobDescription", jobDescription);
    formData.append("featuredImage", featuredImage);
    formData.append("category", category?.value);
    formData.append("type", type?.value);
    formData.append("tag", tag);
    formData.append("gender", gender?.value);
    formData.append("jobApplyType", jobApplyType?.value);
    formData.append("externalUrl", externalUrl);
    formData.append("jobApplyEmail", jobApplyEmail);
    formData.append("salaryType", salaryType?.value);
    formData.append("minSalary", minSalary);
    formData.append("maxSalary", maxSalary);
    formData.append("experience", experience?.value);
    formData.append("CareerType", CareerType?.value);
    formData.append("qualification", qualification?.value);
    formData.append("videoURL", videoURL);
    photos.forEach((photo) => {
      formData.append("photos", photo);
    });
    formData.append("applicationDeadline", applicationDeadline);
    formData.append("address", address);
    formData.append("location", location);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/job/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);

      if (response.status === 201) {
        toast.success("Job added successfully");
      } else {
        toast.error("Failed to add job");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    }
  };

  return (
    <div className="flex mt-12  fixed w-full  flex-col md:flex-row h-full">
      {/* Sidebar */}

      <div
        className={`fixed  md:mb-32 left-0 h-full border bg-blue-200 p-4 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-auto h-screen md:w-72 md:relative md:translate-x-0`}
        style={{ zIndex: 1000 }}
      >
        <button
          className="md:hidden p-2 text-white bg-blue-500 rounded mb-4"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        <div className="flex flex-col">
          {/* Your sidebar content here */}
          <label
            htmlFor="job-title"
            className="block text-sm font-medium text-black mt-4"
          >
            Test1*
          </label>
          <input
            id="Test1"
            type="text"
            className="bg-gray-100 h-8 p-4 mt-1 block w-full"
          />

          {/* Add more content if needed */}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 border overflow-auto h-full mb-12 bg-gray-200 p-4 transition-all duration-300 ${
          isSidebarOpen ? "ml-24 md:ml-48" : "ml-0"
        }`}
      >
        {/* Show Open Sidebar button only on mobile view */}
        {!isSidebarOpen && (
          <button
            className="md:hidden p-2 text-white bg-blue-500 rounded mb-4"
            onClick={toggleSidebar}
          >
            Open Sidebar
          </button>
        )}
        <div>
          <h1 className="text-lg font-bold">veendum hello</h1>
        </div>
        <div className="flex flex-col bg-white mt-4 mb-24 p-4 gap-y-4">
          <span className="text-sm text-gray-600">
            Add Job Details. * items are mandatory
          </span>

          <label
            htmlFor="job-title"
            className="block text-sm font-medium text-gray-700"
          >
            Featured Image *
          </label>
          <label
            htmlFor="featuredImage" // Ensure this matches the input id
            className="mt-4 w-36 h-10 cursor-pointer bg-gray-100 hover:bg-blue-50 text-blue-500 font-normal py-2 px-4 rounded flex justify-center items-center"
          >
            {status === "uploading" ? "Uploading..." : "Browse"}
          </label>
          <input
            id="featuredImage" // Match this id with the label's htmlFor
            type="file"
            className="hidden"
            onChange={(e) => handleFileChange(e, "featuredImage")}
          />
          {featuredImage && (
            <div className="mt-2 text-sm text-gray-800">
              Selected File: {featuredImage.name}
            </div>
          )}

          <label
            htmlFor="job-title"
            className="block text-sm font-medium text-gray-700"
          >
            Job Title *
          </label>
          <input
            id="job-title"
            type="text"
            className="bg-gray-100 h-10 p-4 mt-1 block w-full"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />

          <label
            htmlFor="job-title"
            className="block text-sm font-medium text-gray-700"
          >
            Conpany Name*
          </label>
          <input
            id="job-title"
            type="text"
            className="bg-gray-100 h-10 p-4 mt-1 block w-full"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <label
            htmlFor="job-description"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Job Description *
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
          <div className="flex flex-col md:flex-row justify-between border p-4 gap-y-4 md:gap-x-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Category *
              </label>
              <Select
                className="mt-1"
                id="category"
                value={category}
                onChange={handleSelectChange(setCategory)}
                options={categoryOptionsArray}
              />

              <label
                htmlFor="tag"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Tag *
              </label>
              <input
                id="tag"
                type="text"
                className="bg-gray-100 h-10 p-4 mt-1 block w-full"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />

              <label
                htmlFor="job-apply-type"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Job Apply Type *
              </label>
              <Select
                className="mt-1"
                id="job-apply-type"
                value={jobApplyType}
                onChange={handleSelectChange(setJobApplyType)}
                options={ApplyTypeArray}
              />

              <label
                htmlFor="job-apply-email"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Job Apply Email *
              </label>
              <input
                id="job-apply-email"
                type="text"
                className="bg-gray-100 h-10 p-4 mt-1 block w-full"
                value={jobApplyEmail}
                onChange={(e) => setJobApplyEmail(e.target.value)}
              />

              <label
                htmlFor="min-salary"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Min. Salary *
              </label>
              <input
                id="min-salary"
                type="text"
                className="bg-gray-100 h-10 p-4 mt-1 block w-full"
                value={minSalary}
                onChange={(e) => setMinSalary(e.target.value)}
              />

              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Experience *
              </label>
              <Select
                className="mt-1"
                id="experience"
                value={experience}
                onChange={handleSelectChange(setExperience)}
                options={ExperienceArray}
              />

              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Qualification *
              </label>
              <Select
                className="mt-1"
                id="qualification"
                value={qualification}
                onChange={handleSelectChange(setQualification)}
                options={CareerTypeArray}
              />

              <label
                htmlFor="photos"
                className="mt-4 block text-sm font-medium text-gray-700"
              >
                Photos *
              </label>
              <label
                htmlFor="photos-upload"
                className="mt-4 w-36 h-10 cursor-pointer bg-gray-100 hover:bg-blue-50 text-blue-500 font-normal py-2 px-4 rounded flex justify-center items-center"
              >
                {status === "uploading" ? "Uploading..." : "Browse"}
              </label>
              <input
                id="photos-upload"
                type="file"
                className="hidden"
                multiple // Allow multiple files
                onChange={(e) => handleFileChange(e, "photos")}
              />
              {photos.length > 0 && (
                <div className="mt-2 text-sm text-gray-800">
                  {photos.map((photo, index) => (
                    <div key={index}>Selected File: {photo.name}</div>
                  ))}
                </div>
              )}

              {status === "error" && (
                <div className="mt-2 text-sm text-red-600">
                  Error uploading file. Please try again.
                </div>
              )}
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Type *
              </label>
              <Select
                className="mt-1"
                id="type"
                value={type}
                onChange={handleSelectChange(setType)}
                options={TypeOptionsArray}
              />

              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Gender *
              </label>
              <Select
                className="mt-1"
                id="gender"
                value={gender}
                onChange={handleSelectChange(setGender)}
                options={GenderOptionsArray}
              />

              <label
                htmlFor="external-url"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                External URL for Apply Job *
              </label>
              <input
                id="external-url"
                type="text"
                className="bg-gray-100 h-10 p-4 mt-1 block w-full"
                value={externalUrl}
                onChange={(e) => setExternalUrl(e.target.value)}
              />

              <label
                htmlFor="salary-type"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Salary Type *
              </label>
              <Select
                className="mt-1"
                id="salary-type"
                value={salaryType}
                onChange={handleSelectChange(setSalaryType)}
                options={SalaryTypeArray}
              />

              <label
                htmlFor="max-salary"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Max. Salary *
              </label>
              <input
                id="max-salary"
                type="text"
                className="bg-gray-100 h-10 p-4 mt-1 block w-full"
                value={maxSalary}
                onChange={(e) => setMaxSalary(e.target.value)}
              />

              <label
                htmlFor="career-level"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Career Level *
              </label>
              <Select
                className="mt-1"
                id="career-level"
                value={CareerType}
                onChange={handleSelectChange(setCareerType)}
                options={CareerTypeArray}
              />

              <label
                htmlFor="intro-video-url"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Introduction Video URL *
              </label>
              <input
                id="intro-video-url"
                type="text"
                className="bg-gray-100 h-10 p-4 mt-1 block w-full"
                value={videoURL}
                onChange={(e) => setVideoURL(e.target.value)}
              />
            </div>
          </div>

          <label
            htmlFor="job-title"
            className="block text-sm font-medium text-gray-700"
          >
            Application Deadline Date *
          </label>
          <input
            id="job-title"
            type="date"
            className="bg-gray-100 h-10 p-4 mt-1 block w-full"
            value={applicationDeadline}
            onChange={(e) => setApplicationDeadline(e.target.value)}
          />

          <label
            htmlFor="job-title"
            className="block text-sm font-medium text-gray-700"
          >
            Friendly Address *
          </label>
          <input
            id="job-title"
            type="text"
            className="bg-gray-100 h-10 p-4 mt-1 block w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label
            htmlFor="job-title"
            className="block text-sm font-medium text-gray-700"
          >
            Location *
          </label>
          <input
            id="job-title"
            type="text"
            className="bg-gray-100 h-10 p-4 mt-1 block w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            disabled={loading}
            className="bg-button-clr w-36 mb-8 text-white text-sm h-8 p-2 rounded hover:bg-white hover:text-blue-600 hover:border flex justify-center items-center"
            onClick={handleSaveAndPreview}
          >
            {loading ? "loading..." : "Save and Preview"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobpost;
