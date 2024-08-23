import React, { Component } from "react";
import JobNavDrop from "./JobNavDrop";
import SideBarJobSub from "./SideBarJobSub";
import { GoBell } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaChevronRight, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Login from "../Login/Login"; // Import the Login component
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      activeMenu: null,
      showLoginModal: false, // State to manage login modal visibility
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openSubMenu = this.openSubMenu.bind(this);
    this.closeSubMenu = this.closeSubMenu.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this); // Bind the function to toggle login modal
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
      activeMenu: null,
    }));
  }

  closeMenu() {
    this.setState({ isMenuOpen: false, activeMenu: null });
  }

  openSubMenu(menu) {
    this.setState({ activeMenu: menu });
  }

  closeSubMenu() {
    this.setState({ activeMenu: null });
  }

  toggleLoginModal() {
    this.setState((prevState) => ({
      showLoginModal: !prevState.showLoginModal,
    }));
  }

  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="w-screen h-[111px] flex justify-between items-center bg-gradient-to-r from-custom-light to-custom-dark p-2 md:px-4 lg:px-8 relative z-20">
          <div className="flex items-center space-x-4 md:space-x-8 ml-4 md:ml-8">
            <h1 className="text-xl md:text-2xl font-bold">Logo</h1>
          </div>
          <button
            className="lg:hidden text-white text-2xl absolute right-4"
            onClick={this.toggleMenu}
          >
            <div className="text-black">☰</div>
          </button>
          <div className="hidden lg:flex space-x-8 ml-8">
            <Link to='/'><span>Home</span></Link>
            <JobNavDrop />
            <Link to=''><span>Employers</span></Link>
            <Link to=''><span>Candidates</span></Link>
            <Link to=''><span>Blog</span></Link>
            <Link to=''><span>Pages</span></Link>
          </div>
          <div className="flex items-center justify-between md:justify-start md:space-x-8 mr-4">
            <div className="hidden md:flex space-x-4">
              <button
                onClick={this.toggleLoginModal} // Use the function to toggle login modal
                className="bg-slate-200 h-[40px] w-[120px] text-md font-normal border rounded-md  text-blue-400"
              >
                Login / Register
              </button>
              <button className="bg-blue-600 h-[40px] w-[120px] text-sm border rounded-md  text-white">
                Job Portal
              </button>
            </div>
            <GoBell className="h-[25px] w-[25px] mr-6 sm:mr-12" />
          </div>
        </div>

        {/* Login Modal */}
        {this.state.showLoginModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg" style={{ width: '870px' }}>
              <button
                onClick={this.toggleLoginModal}
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
          className={`container lg:hidden fixed top-0 left-0 h-full w-56 bg-black text-white p-4 transform overflow-y-auto ${this.state.isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-30`}
        >
          <button onClick={this.closeMenu} className="text-2xl mb-4">
            ×
          </button>

          <div className="relative flex flex-col h-full">
            {/* Main Menu */}
            <div
              className={`flex-grow overflow-y-auto transition-transform duration-300 ease-in-out ${this.state.activeMenu ? "-translate-x-full" : "translate-x-0"
                }`}
            >
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("home")}
                >
                  Home
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              </div>
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("jobDropdown")}
                >
                  Jobs
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              </div>
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("employers")}
                >
                  Employers
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              </div>
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("candidates")}
                >
                  Candidates
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              </div>
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("blog")}
                >
                  Blog
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              </div>
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("pages")}
                >
                  Pages
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              </div>
            </div>

            <div
              className={`container absolute -top-8 left-6 w-48 h-auto transition-transform duration-600 ease-in-out transform ${this.state.activeMenu ? "translate-x-0" : "translate-x-36"
                }`}
            >
              {this.state.activeMenu && (
                <div className="flex flex-col h-auto">
                  <button onClick={this.closeSubMenu} className="text-xl mt-6">
                    Back
                  </button>
                  <div className="h-80 mt-4 overflow-y-auto">
                    {this.state.activeMenu === "home" && (
                      <div>
                        <span className="block py-2">Sub-menu Item 1</span>
                        <span className="block py-2">Sub-menu Item 2</span>
                      </div>
                    )}
                    {this.state.activeMenu === "jobDropdown" && (
                      <div>
                        <SideBarJobSub />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 p-4 bg-gray-800">
              <div className="mb-2">
                <button className="bg-button-clr w-full h-[50px]">
                  Post Job
                </button>
              </div>
              <div className="text-center">
                <p className="mb-2">Call Us</p>
                <p className="text-xl mb-2">123456789</p>
                <p>12/34 Patel Nagar, Bengaluru, Karnataka, 560001, India</p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
