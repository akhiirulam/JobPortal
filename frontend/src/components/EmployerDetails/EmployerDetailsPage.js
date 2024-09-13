import React, { useState, useEffect } from "react";
import img1 from "../../public/member1.jpg";
import JobList from "../HomeJobList/JobList";
import ReviewsSection from "./ReviewSection";

import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaMapMarker,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaBriefcase,
  FaPhone,
  FaEnvelope,
  FaBookmark,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const EmployerDetailsPage = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const employerDetails = {
    name: "Awesome Company",
    description: "This is an awesome company known for its great work culture.",
    location: "New York, NY",
    // Add more details as needed
  };

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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const [reviewData, setReviewData] = useState({
    reviewTitle: "",
    reviewText: "",
    rating: "",
  });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log("Review submitted:", reviewData);
  };

  const [reviews, setReviews] = useState([]);

  //   useEffect(() => {

  //     fetch('/api/reviews?employerId=123')
  //       .then(response => response.json())
  //       .then(data => setReviews(data));
  //   }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center mt-[50px] bg-gray-100 p-4">
        <div className="w-full max-w-4xl p-4 rounded-lg  flex flex-col md:flex-row">
          <div className="flex-1 flex items-start space-x-4">
            <div className="w-24 h-24 bg-gray-300 rounded-md"> 
              <img
                src="https://via.placeholder.com/150"
                alt="Job Image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Job Info */}
            <div>
              <h1 className="text-xl font-bold">
                Junior Graphic Designer (Web)
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                <div className="flex items-center">
                  <FaBriefcase />
                  <span className="font-medium ml-4">Design, Development</span>
                </div>

                <div className="flex items-center">
                  <FaMapMarker />
                  <span className="font-medium ml-4">New York</span>
                </div>

                <div className="flex items-center">
                  <FaPhone />
                  <span className="font-medium ml-4">123 456 *** </span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope />
                  <span className="font-medium ml-4">udamy@apus.com</span>
                </div>
              </p>

              {/* Buttons */}
              <div className="mt-4 space-x-2">
                <span className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Open Job - 1
                </span>
              </div>
            </div>
          </div>

          {/* Right side: Apply and Shortlist buttons */}
          <div className="flex mt-4 md:mt-0 md:ml-4 md:flex-col justify-end">
            <button className="px-6 py-2 bg-blue-500 mb-2 mr-2 text-white rounded-md w-36 h-12">
              Apply
            </button>
            <FaBookmark className="py-2 bg-gray-100 text-black items-center justify-center rounded-md w-36 h-12" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-4">
          {/* Sidebar */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <ul>
              <li className="mb-2">
                <span className="font-semibold">About Company</span>
                <p>
                  As a Product Designer, you will work within a Product Delivery
                  Team fused with UX, engineering, product and data talent. You
                  will help the team design beautiful interfaces that solve
                  business challenges for our clients. We work with a number of
                  Tier 1 banks on building web-based applications for AML, KYC
                  and Sanctions List management workflows. This role is ideal if
                  you are looking to segue your career into the FinTech or Big
                  Data arenas.
                </p>
              </li>

              <li>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                  <span className="font-semibold">Share this post :</span>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">
                      <FaFacebook className="mr-2" /> Facebook
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-md">
                      <FaTwitter className="mr-2" /> Twitter
                    </button>
                    <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md">
                      <FaPinterest className="mr-2" /> Pinterest
                    </button>
                  </div>
                </div>
              </li>
              <li className="mb-6">
                <span className="font-semibold">Portfolio</span>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                    <img
                      className="w-full sm:w-auto flex items-center text-white rounded-md"
                      src={img1}
                      alt="image"
                    />
                    <img
                      className="w-full sm:w-auto flex items-center text-white rounded-md"
                      src={img1}
                      alt="image"
                    />
                    <img
                      className="w-full sm:w-auto flex items-center text-white rounded-md"
                      src={img1}
                      alt="image"
                    />
                  </div>
                </div>
              </li>
              <span className="font-semibold">Open Position</span>
              <li className="mt-6 mb-8">
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
          <div className="bg-gray-50 p-4">
            <div className="bg-white p-4 md rounded-md">
              <ul>
                <li className="mb-2 mt-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="font-semibold">Categories:</span>
                    <a className="hover:cursor-pointer">
                      <span className="text-gray-700">Advertising</span>
                    </a>
                  </div>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="font-semibold">Founded Date:</span>
                    <a className="hover:cursor-pointer">
                      <span className="text-gray-700">2011</span>
                    </a>
                  </div>
                </li>
                <li className="mb-2 mt-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="font-semibold">Company Size:</span>
                    <a className="hover:cursor-pointer">
                      <span className="text-gray-700">50-100</span>
                    </a>
                  </div>
                </li>

                <li className="mb-2 mt-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="font-semibold">Location:</span>
                    <a className="hover:cursor-pointer">
                      <span className="text-gray-700">New York</span>
                    </a>
                  </div>
                </li>

                <li className="mb-2 mt-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="font-semibold">Phone Number:</span>
                    <a className="hover:cursor-pointer">
                      <span className="text-gray-700">123 456 ***</span>
                    </a>
                  </div>
                </li>

                <li className="mb-2 mt-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="font-semibold">Email:</span>
                    <a className="hover:cursor-pointer">
                      <span className="text-gray-700">udamy@apus.com</span>
                    </a>
                  </div>
                </li>

                <li className="mb-2 mt-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="font-semibold">Social Media:</span>
                    <a className="hover:cursor-pointer">
                      <span className="flex text-gray-700 gap-x-2">
                        <FaFacebook /> <FaTwitter /> <FaLinkedin />
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white mt-4 p-4 shadow-md rounded-md">
              <ul>
                <span className="font-semibold">Job Location</span>
                <li className="mb-2">
                  <p></p>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Job Description</span>
                  <p>
                    You have at least 3 years’ experience working as a Product
                    Designer. You have experience using Sketch and InVision or
                    Framer X You have some previous experience working in an
                    agile environment – Think two-week sprints. You are familiar
                    using Jira and Confluence in your workflow
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 mt-4 p-4 shadow-md rounded-md">
              <ul>
                <span className="font-semibold">Job Skills</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDetailsPage;
