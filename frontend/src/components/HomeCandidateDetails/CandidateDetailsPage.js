import React, { useState, useEffect } from "react";
import img1 from "../../public/member1.jpg";
import JobList from "../HomeJobList/JobList";
import ReviewsSection from "./ReviewSection";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaCalendar,
  FaMapMarker,
  FaHourglass,
  FaUser,
  FaNeuter,
  FaCertificate,
  FaLevelUpAlt,
  FaLocationArrow,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";
import { FaBookBookmark, FaLinkedin } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { viewCandidateDataAPI } from "../../services/candidateServices";

const CandidateDetailsPage = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  const [rating, setRating] = useState(4.5);
  const totalStars = 5;
  const [reviews, setReviews] = useState([]);

  const {id} = useParams()
  const {data} = useQuery({
    queryKey:["get-candidate-data"],
    queryFn:()=>viewCandidateDataAPI(id)
  })
  const dateOfBirth = new Date(data?.dob);
  const formattedDoB = dateOfBirth.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

  const awards = data?.awards?.map(item => ({
    ...item,
    dateOfCertification: new Date(item.dateOfCertification).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })
  }));
  
  const workHistory = data?.workHistory?.map(item => ({
    ...item,
    previousStartingDate: new Date(item.previousStartingDate).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    previousEndDate: new Date(item.previousEndDate).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })
  }));
  

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-center flex-col mt-12 items-center p-4 bg-blue-600 w-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              {data?.profileImg?<img
                src={data?.profileImg}
                alt="Candidate Image"
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full"
              />:<img
              src="https://via.placeholder.com/150"
              alt="Candidate Image"
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full"
            />}
              
            </div>
            <div className="text-white text-center">
              <h6 className="text-base md:text-lg font-semibold">
                {data?.name}
              </h6>
            </div>
          </div>

          {/* Responsive layout for mobile stacking and row layout on larger screens */}
          <div className="flex flex-col md:flex-row text-black mt-4 md:space-x-24 items-center justify-center">
            {/* Skills Section */}
            <div className="flex flex-col md:flex-row text-center items-center text-center ">
              {data?.skill?.map((element)=>(
                <button className="mb-2 md:mb-0 md:mr-2 rounded-md bg-gray-100 w-24 h-10">
                {element?.title}
              </button>
              ))}
              
            </div>

            {/* Location, Salary, DOB Section */}
            <div className="flex flex-col md:flex-row text-center items-center mb-4 md:mb-0 md:space-x-6">
              <div className="flex items-center mb-2 md:mb-0">
                <FaLocationArrow className="mr-2" />
                <span className="text-base md:text-lg font-semibold">
                  {data?.address}
                </span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <FaDollarSign className="mr-2" />
                <span className="text-base md:text-lg font-semibold">
                  {data?.salary}/year
                </span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span className="text-base md:text-lg font-semibold">{formattedDoB}</span>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-col md:flex-row text-center items-center text-center">
              <button  className="mb-2 md:mb-0 md:mr-2 w-24 h-12 bg-gray-400 rounded">
                <Link to={data?.resume[0]} style={{textDecoration:"none",color:"black"}}>Download CV</Link>
                
              </button>
              <button className="mb-2 md:mb-0 md:mr-2 w-24 h-12 bg-gray-400 rounded">
                Invite
              </button>
              <button className="w-24 h-12 bg-gray-400 rounded flex items-center justify-center">
                <FaBookBookmark className="mr-2" />
                Bookmark
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 bg-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-4">
          {/* Sidebar */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <ul>
              <li className="mb-2">
                <span className="font-semibold">About Candidate</span>
                <p>
                  {data?.description}
                </p>
              </li>
              <li className="mb-2">
                <span className="font-semibold">Education</span>
                {data?.educationalHistory?.map((element)=>(
                  <><div key={element._id}>
                    <p>Degree: {element?.degreeName}</p>
                    <p> College: {element?.collegeName}</p>
                    <p>Description: {element?.educationDescription}</p>
                    </div>
                  </>
                ))}
                
              </li>
              <li className="mb-2">
                <span className="font-semibold">Experience</span>
                {workHistory?.map((element)=>(
                  <>
                    <p>Designation: {element?.previousDesignation}</p>
                    <p>Company Name: {element?.previousCompanyName}</p>
                    <p>Start Date: {element?.previousStartingDate}</p>
                    <p>End Date: {element?.previousEndDate}</p>
                    
                  </>
                ))}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Awards</span>
                {awards?.map((element)=>(
                  <>
                  <div className="mb-2">
                    <p>Award Name: {element?.awardName}</p>
                    <p>Occasion Name: {element?.occasionName}</p>
                    <p>Summery: {element?.shortSummery}</p>
                    <p>Company Name: {element?.dateOfCertification}</p>
                    </div>
                  </>
                ))}
              </li>
              <li>
                <span className="font-semibold">Portfolio:</span>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                    {data?.images?.map((element)=>(
                        <img
                        className="w-full sm:w-auto flex items-center text-white rounded-md"
                        src={element}
                        alt="image"
                      />
                    ))}
                    
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <span className="font-semibold">Awards</span>
                <p>
                  You have at least 3 years’ experience working as a Product
                  Designer. You have experience using Sketch and InVision or
                  Framer X You have some previous experience working in an agile
                  environment – Think two-week sprints. You are familiar using
                  Jira and Confluence in your workflow
                </p>
              </li>
              <li className="mt-4">
                <span className="font-semibold">Video :</span>
                <div className="w-full mt-4 max-w-full md:max-w-2xl mx-auto">
                  <video
                    className="w-full h-auto aspect-video rounded-lg shadow-md"
                    controls
                    src={data?.video} // Replace with your video file path
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </li>
              <li className="mt-4">
                {" "}
                <JobList />
              </li>
              <span className="font-semibold mb-8">Comments</span>
              <li className="mt-4">
                {/* Reviews */}
                <ReviewsSection reviews={reviews} />
              </li>
            </ul>
          </div>

          {/* Main content section */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="bg-gray-200 p-4 shadow-md rounded-md">
              <ul>
               
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaCalendar className="text-blue-600" />
                    <span className="ml-2">Offered Salary</span>
                  </div>
                  <span className="ml-[22px]">$2000 / year</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaMapMarker className="text-blue-600" />
                    <span className="ml-2">Gender</span>
                  </div>
                  <span className="ml-[22px]">Female</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaDollarSign className="text-blue-600" />
                    <span className="ml-2">Age:</span>
                  </div>
                  <span className="ml-[22px]">20-25</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaCalendar className="text-blue-600" />
                    <span className="ml-2">Qualification</span>
                  </div>
                  <span className="ml-[22px]">Master’s Degree</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaHourglass className="text-blue-600" />
                    <span className="ml-2">Languages</span>
                  </div>
                  <span className="ml-[22px]">English</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaUser className="text-blue-600" />
                    <span className="ml-2">Email</span>
                  </div>
                  <span className="ml-[22px]">ali@apus.com</span>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex items-center">
                    <FaNeuter className="text-blue-600" />
                    <span className="ml-2">Phone Number</span>
                  </div>
                  <span className="ml-[22px]"> (+88) 123 456 ***</span>
                </li>
                
               
              </ul>
            </div>
            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <span className="font-semibold">Send Message</span>
                <li className="mb-2">
                  <p></p>
                </li>
                <li className="mb-2">
                  <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold mb-4">
                      Contact Udamy
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <li className="flex mb-2 items-center">
                  <span className="font-semibold mr-2">Social Profile:</span>
                  <div className="flex space-x-2">
                    <button><Link to={data?.facebook}><FaFacebook /></Link></button>
                    <button Link to={data?.twitter}><Link to={data?.facebook}><FaTwitter /></Link></button>
                    <button Link to={data?.linkedIn}><Link to={data?.facebook}><FaLinkedin /></Link></button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <li className="mb-2">
                  <span className="font-semibold">Professional Skills</span>
                </li>
                <li className="flex flex-col md:flex-row mb-2 items-center">
                  <div className="flex flex-wrap md:space-x-2 md:space-y-0">
                  {data?.skills?.map((element)=>(
                  <button className="bg-blue-500 text-white p-2 rounded">
                  {element.name}
                </button>
                ))}
                    
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <li className="flex flex-row md:flex-row mb-2">

                  <span className="mt-2 md:mt-0 md:ml-auto text-blue-600 cursor-pointer hover:underline ">
                    <Link to={data?.resume[0]}>
                    Download CV
                    </Link>
                    
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsPage;
