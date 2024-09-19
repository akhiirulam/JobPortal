import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";
import * as Yup from "yup";
import EmpSidebar from "../EmpSidebar/EmpSidebar";
import { useNavigate } from "react-router-dom";


const Jobpost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("idle");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [photos, setPhotos] = useState([]);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);

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

  const [errors, setErrors] = useState({});

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

  const handleSelectChange = (setter) => (option) => {
    setter(option);
    console.log(`Option selected:`, option);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setStatus("uploading");

      setTimeout(() => {
        if (Math.random() > 0.5) {
          setStatus("uploaded");
        } else {
          setStatus("error");
        }
      }, 2000);
    }
    setStatus("uploading");
    setTimeout(() => {
      setStatus(null);
    }, 1000);
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


  const jobSchema = Yup.object().shape({
    jobTitle: Yup.string().required("Job title is required"),
    companyName: Yup.string().required("Company name is required"),
    jobDescription: Yup.string().required("Job description is required"),
    category: Yup.object().shape({
      value: Yup.string().required("Job category is required"),
    }),
    type: Yup.object().shape({
      value: Yup.string().required("Job type is required"),
    }),
    tag: Yup.string(),
    gender: Yup.object().shape({
      value: Yup.string().required("Gender is required"),
    }),
    jobApplyType: Yup.object().shape({
      value: Yup.string().required("Job apply type is required"),
    }),
    externalUrl: Yup.string().url("Invalid external URL"),
    jobApplyEmail: Yup.string().email("Invalid email"),
    salaryType: Yup.object().shape({
      value: Yup.string().required("Salary type is required"),
    }),
    minSalary: Yup.number()
      .required("Minimum salary is required")
      .positive("Salary must be a positive number"),
    maxSalary: Yup.number()
      .required("Maximum salary is required")
      .positive("Salary must be a positive number")
      .moreThan(
        Yup.ref("minSalary"),
        "Maximum salary must be greater than minimum salary"
      ),
    experience: Yup.object().shape({
      value: Yup.string().required("Experience level is required"),
    }),
    CareerType: Yup.object().shape({
      value: Yup.string().required("Career type is required"),
    }),
    qualification: Yup.object().shape({
      value: Yup.string().required("Qualification is required"),
    }),
    videoURL: Yup.string().url("Invalid video URL"),
    applicationDeadline: Yup.string().required(
      "Application deadline is required"
    ),
    address: Yup.string().required("Address is required"),
    location: Yup.string().required("Location is required"),
    photos: Yup.array().of(Yup.mixed()), // If you're validating file uploads
  });

  const handleSaveAndPreview = async (event) => {
    event.preventDefault();

    const jobData = {
      jobTitle,
      companyName,
      jobDescription,
      category,
      type,
      tag,
      gender,
      jobApplyType,
      externalUrl,
      jobApplyEmail,
      salaryType,
      minSalary,
      maxSalary,
      experience,
      CareerType,
      qualification,
      videoURL,
      applicationDeadline,
      address,
      location,
    };
    try {
      setLoading(true);
  
      // Validate the plain object with Yup
      await jobSchema.validate(jobData, { abortEarly: false });
  
      // If validation passes, reset errors and proceed with form submission
      setErrors({});
  
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
  
      // Submit form data to the server
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
        navigate(0); 
      } else {
        toast.error("Failed to add job");
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors); // Set validation errors in the state
      } else {
        toast.error("Error submitting form");
      }
    } finally {
      setLoading(false);
      console.error("Error submitting form:", errors);

    }
  };

   return (
    <div className="mt-[50px] bg-[#F5F7FC] h-[calc(-111px_+_100vh)]">
      <EmpSidebar />

      {/* Main Content */}
      <div className="flex-1 md:ml-72 mt-[45px] overflow-y-auto scrollbar-custom ease-in-out h-fit bg-gray-200 p-4 transition-all duration-300 ">
        {/* Show Open Sidebar button only on mobile view */}

        <form onSubmit={handleSaveAndPreview}>
          <div className="flex flex-col bg-white mt-4 mb-4 p-4 gap-y-4">
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
 {errors.featuredImage && (
              <div className="error-message text-red-600 font-semibold">{errors.featuredImage}</div>
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
            {errors.jobTitle && (
              <div className="error-message text-red-600 font-semibold">{errors.jobTitle}</div>
            )}
            <label
              htmlFor="job-title"
              className="block text-sm font-medium text-gray-700"
            >
              Conpany Name*
            </label>
            <input
              id="companyName"
              type="text"
              className="bg-gray-100 h-10 p-4 mt-1 block w-full"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            {errors.companyName && (
              <div className="error-message text-red-600 font-semibold">{errors.companyName}</div>
            )}
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
            {errors.jobDescription && (
              <div className="error-message text-red-600 font-semibold">{errors.jobDescription}</div>
            )}
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
{errors.category && (
              <div className="error-message text-red-600 font-semibold">{errors.category}</div>
            )}
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
{errors.tag && (
              <div className="error-message text-red-600 font-semibold">{errors.tag}</div>
            )}
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
{errors.jobApplyType && (
              <div className="error-message text-red-600 font-semibold">{errors.jobApplyType}</div>
            )}
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
{errors.jobApplyEmail && (
              <div className="error-message text-red-600 font-semibold">{errors.jobApplyEmail}</div>
            )}
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
{errors.minSalary && (
              <div className="error-message text-red-600 font-semibold">{errors.minSalary}</div>
            )}
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
{errors.experience && (
              <div className="error-message text-red-600 font-semibold">{errors.experience}</div>
            )}
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
{errors.qualification && (
              <div className="error-message text-red-600 font-semibold">{errors.qualification}</div>
            )}
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
{errors.photos && (
              <div className="error-message text-red-600 font-semibold">{errors.photos}</div>
            )}
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
{errors.TypeOptionsArray && (
              <div className="error-message text-red-600 font-semibold">{errors.TypeOptionsArray}</div>
            )}
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
{errors.GenderOptionsArray && (
              <div className="error-message text-red-600 font-semibold">{errors.GenderOptionsArray}</div>
            )}
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
{errors.externalUrl && (
              <div className="error-message text-red-600 font-semibold">{errors.externalUrl}</div>
            )}
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
{errors.salaryType && (
              <div className="error-message text-red-600 font-semibold">{errors.salaryType}</div>
            )}
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
{errors.maxSalary && (
              <div className="error-message text-red-600 font-semibold">{errors.maxSalary}</div>
            )}
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
{errors.CareerType && (
              <div className="error-message text-red-600 font-semibold">{errors.CareerType}</div>
            )}
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
{errors.videoURL && (
              <div className="error-message text-red-600 font-semibold">{errors.videoURL}</div>
            )}
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
{errors.applicationDeadline && (
              <div className="error-message text-red-600 font-semibold">{errors.applicationDeadline}</div>
            )}
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
{errors.address && (
              <div className="error-message text-red-600 font-semibold">{errors.address}</div>
            )}
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
{errors.location && (
              <div className="error-message text-red-600 font-semibold">{errors.location}</div>
            )}  
            <button
              // disabled={loading}
              className="bg-button-clr w-36 text-white text-sm h-8 p-2 rounded hover:bg-white hover:text-blue-600 hover:border flex justify-center items-center"
              // onClick={handleSaveAndPreview}
              type="submit"
            >
              {loading ? "loading..." : "Save and Preview"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jobpost;
