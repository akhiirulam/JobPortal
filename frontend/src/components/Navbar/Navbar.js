import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import { GoBell } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaChevronRight,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Login from "../Login/Login";
import SideBarJobSub from "./SideBarJobSub";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMenu(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  };

  const openSubMenu = (menu) => {
    setActiveMenu(menu);
  };

  const closeSubMenu = () => {
    setActiveMenu(null);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  useEffect(() => {

   const token = Cookies.get("token");
   console.log("Token from cookies:", token);
   setIsLoggedIn(!!token);
      
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/v1/profile/logout",
        {},
        { withCredentials: true }
      );
      Cookies.remove("token"); // Remove JWT token from cookies
      setIsLoggedIn(false); // Update state to reflect the user is logged out
      toast.success("Successfully logged out");
      navigate("/"); // Redirect to home page
    } catch (error) {
      toast.error("Failed to log out");
      console.error("Logout error:", error);
    }
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/job/addJobPage",
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        navigate("/employer/jobPost");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error handling job portal access:", error);
      toast.error("Failed to check access");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="w-screen h-[111px] flex justify-between items-center bg-gradient-to-r from-custom-light to-custom-dark p-2 md:px-4 lg:px-8 relative z-20">
        <div className="flex items-center space-x-4 md:space-x-8 ml-4 md:ml-8">
          <h1 className="text-xl md:text-2xl font-bold">Logo</h1>
        </div>
        <button
          className="lg:hidden text-white text-2xl absolute right-4"
          onClick={toggleMenu}
        >
          <div className="text-black">☰</div>
        </button>
        <div className="hidden lg:flex space-x-8 ml-8">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/mainJobList">
            <span>Find Jobs</span>
          </Link>
          <Link to="/employerList">
            <span>Employers</span>
          </Link>
          <Link to="/candidateList">
            <span>Candidates</span>
          </Link>
          <Link to="">
            <span>Blog</span>
          </Link>
          <Link to="/Products">
            <span>Pages</span>
          </Link>
        </div>
        <div className="flex items-center justify-between md:justify-start md:space-x-8 mr-4">
          <div className="hidden md:flex space-x-4">
          <button
              onClick={isLoggedIn ? handleLogout :toggleLoginModal }             
              className="bg-slate-200 h-[40px] w-[120px] text-md font-normal border rounded-md text-blue-400"
            >
              {isLoggedIn ? "Logout" : "Login / Register"}
            </button>
            <button
              className="bg-blue-600 h-[40px] w-[120px] text-sm border rounded-md"
              onClick={handleClick}
            >
              <span className="text-white">Job Portal</span>
            </button>
          </div>
          <GoBell className="h-[25px] w-[25px] mr-6 sm:mr-12" />
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div
            className="bg-white p-8 rounded-lg shadow-lg"
            style={{ width: "870px" }}
          >
            <button
              onClick={toggleLoginModal}
              className="absolute top-4 right-4 text-2xl"
            >
              ×
            </button>
            <Login />
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`container lg:hidden fixed top-0 left-0 h-full w-56 bg-black text-white p-4 transform overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <button onClick={closeMenu} className="text-2xl mb-4">
          ×
        </button>

        <div className="relative flex flex-col h-full">
          {/* Main Menu */}
          <div
            className={`flex-grow overflow-y-auto transition-transform duration-300 ease-in-out ${
              activeMenu ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="cursor-pointer w-full flex items-center">
              <button
                className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                onClick={() => openSubMenu("home")}
              >
                Home
                <FaChevronRight className="ml-auto mr-4" />
              </button>
            </div>
            <div className="cursor-pointer w-full flex items-center">
              <button
                className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                onClick={() => openSubMenu("jobDropdown")}
              >
                Jobs
                <FaChevronRight className="ml-auto mr-4" />
              </button>
            </div>
            <div className="cursor-pointer w-full flex items-center">
              <button
                className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                onClick={() => openSubMenu("employers")}
              >
                <Link to="/employerList">
                  <span>Employers</span>
                </Link>
                <FaChevronRight className="ml-auto mr-4" />
              </button>
            </div>
            <div className="cursor-pointer w-full flex items-center">
              <button
                className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                onClick={() => openSubMenu("candidates")}
              >
                Candidates
                <FaChevronRight className="ml-auto mr-4" />
              </button>
            </div>
            <div className="cursor-pointer w-full flex items-center">
              <button
                className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                onClick={() => openSubMenu("blog")}
              >
                Blog
                <FaChevronRight className="ml-auto mr-4" />
              </button>
            </div>
            <div className="cursor-pointer w-full flex items-center">
              <button
                className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                onClick={() => openSubMenu("pages")}
              >
                Pages
                <FaChevronRight className="ml-auto mr-4" />
              </button>
            </div>
          </div>

          <div
            className={`container absolute -top-8 left-6 w-48 h-auto transition-transform duration-600 ease-in-out transform ${
              activeMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {activeMenu === "home" && (
              <div>
                <span className="block py-2">Sub-menu Item 1</span>
                <span className="block py-2">Sub-menu Item 2</span>
              </div>
            )}
            {activeMenu === "jobDropdown" && (
              <div>
                <SideBarJobSub />
              </div>
            )}
            {activeMenu === "employers" && (
              <div>
                <span className="block py-2">Sub-menu Item 1</span>
                <span className="block py-2">Sub-menu Item 2</span>
              </div>
            )}
            {activeMenu === "candidates" && (
              <div>
                <span className="block py-2">Sub-menu Item 1</span>
                <span className="block py-2">Sub-menu Item 2</span>
              </div>
            )}
            {activeMenu === "blog" && (
              <div>
                <span className="block py-2">Sub-menu Item 1</span>
                <span className="block py-2">Sub-menu Item 2</span>
              </div>
            )}
            {activeMenu === "pages" && (
              <div>
                <span className="block py-2">Sub-menu Item 1</span>
                <span className="block py-2">Sub-menu Item 2</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
