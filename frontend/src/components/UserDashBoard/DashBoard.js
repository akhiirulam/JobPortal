import React, { useState } from "react";
import GraphComponent from "./GraphComponent";
import {
  FaEye,
  FaCheck,
  FaTachometerAlt,
  FaUser,
  FaFileAlt,
  FaListUl,
  FaStar,
  FaBriefcase,
  FaBell,
  FaEnvelope,
  FaCalendarAlt,
  FaLock,
  FaTrashAlt,
  FaSignOutAlt,
  FaMapMarkerAlt,
  FaDollarSign,
} from "react-icons/fa";
import img1 from "../../public/member1.jpg";

const NewPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const stats = [
    { icon: FaBriefcase, label: "Applied Jobs", value: 5 },
    { icon: FaStar, label: "Review", value: 2 },
    { icon: FaEye, label: "Views", value: 2408 },
    { icon: FaCheck, label: "Shortlisted", value: 3 },
  ];

  const notification = [{ icon: FaBriefcase, label: "Job Status" }];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-gray-100 ">
      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto bg-white text-gray-600 p-4 transition-transform duration-300 ease-in-out scrollbar-custom
    ${isSidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full"} 
    md:w-96 md:translate-x-0`}
      >
        {/* Sidebar content */}
        <div className="flex items-center space-x-4">
          <img
            className="w-20 h-20 rounded-full"
            src={img1}
            alt="Rounded avatar"
          />
          <div className="flex flex-col p-2 gap-1">
            <span className="text-xl font-bold">Name</span>
            <span className="text-sm">Place</span>
            <button className="text-sm text-white w-24 h-6 rounded-md bg-blue-600">
              View Profile
            </button>
          </div>
        </div>
        {/* User Dashboard */}
        <div className="flex flex-col space-y-2 p-4">
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaTachometerAlt className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">User Dashboard</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaUser className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Profile</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaFileAlt className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">My Resume</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaListUl className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">My Applied</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaStar className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Short Listed</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaBriefcase className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Following Employers</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaBell className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Alerts Jobs</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaEnvelope className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Messages</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaCalendarAlt className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Meetings</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaLock className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Change Password</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaTrashAlt className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Delete Profile</span>
          </div>
          <div className="flex items-center w-full hover:rounded-md hover:bg-blue-100 h-12">
            <FaSignOutAlt className="text-blue-500 ml-4 text-xl" />
            <span className="ml-4">Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-4  ml-0 md:ml-96 overflow-y-auto transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-4">
          <button
            className="md:hidden mb-4 p-2 bg-blue-500 text-white rounded"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
          {/* Main page Cards */}
          <div>
            <div className="flex flex-wrap gap-4 p-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-48"
                >
                  <stat.icon className="text-blue-500 text-4xl mr-4" />
                  <div>
                    <p className="text-2xl  text-blue-600 font-bold">
                      {stat.value}
                    </p>
                    <span className="text-sm font-semibold">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 ml-4 md:ml-4">
            <div className="w-full md:w-7/12 lg:w-9/12">
              <GraphComponent />
            </div>
            <div className="w-full md:w-5/12 lg:w-1/2 bg-white p-4 md:p-8">
              <span className="text-lg md:text-xl font-bold">
                Notifications
              </span>
              <div className="mt-4">
                {notification.map((noti, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-100 rounded-md text-black"
                  >
                    <noti.icon className="text-blue-500 text-xl md:text-2xl" />
                    <span className="ml-2 md:ml-4 text-sm md:text-base">
                      {noti.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 bg-white mt-4 ml-4 border rounded-lg p-4 max-w-full">
            <div>
              <h1 className="text-base md:text-lg lg:text-xl">
                Jobs Applied Recently
              </h1>
            </div>
            <div className="flex border rounded-sm p-4">
              <div className="mr-8">
                <img src={img1} className="w-20 h-20 rounded-full" alt="job1" />
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-xl">Junior Graphic Designer (Web)</span>
                </div>
                <div className="flex flex-row space-x-4 mt-2">
                  <div className="flex items-center mr-2">
                    <FaBriefcase className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm">Design, Development</span>
                  </div>
                  <div className="flex items-center mr-2">
                    <FaMapMarkerAlt className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm">New York</span>
                  </div>
                  <div className="flex items-center">
                    <FaDollarSign className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm">$150 - $180 / week</span>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                    <button className="bg-blue-200 rounded-3xl ml-4 w-24 p-1 "> Full Time </button>
                    <button className="bg-orange-200 rounded-3xl ml-4 w-24 p-1 "> Urgent </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
