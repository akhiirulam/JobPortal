import React, { Component } from "react";
import JobNavDrop from "./JobNavDrop";
import SideBarJobSub from "./SideBarJobSub";
import {
  FaFacebookF,
  FaTwitter,
  FaChevronRight,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      activeMenu: null,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openSubMenu = this.openSubMenu.bind(this);
    this.closeSubMenu = this.closeSubMenu.bind(this);
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

  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="w-screen flex justify-between items-center bg-gradient-to-r from-custom-light to-custom-dark p-2 md:px-4 lg:px-8 relative z-20">
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
            <span>Home</span>
            <JobNavDrop />
            <span>Employers</span>
            <span>Candidates</span>
            <span>Blog</span>
            <span>Pages</span>
          </div>
          <div className="flex space-x-4 md:space-x-8 mr-4">
            <button className="bg-blue-600 h-[40px] w-[120px] text-sm border rounded hidden md:block">
              Login / Register
            </button>
            <button className="bg-blue-600 h-[40px] w-[120px] text-sm border rounded hidden md:block">
              Job Portal
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`container lg:hidden fixed top-0 left-0 h-full w-56 bg-black text-white p-4 transform overflow-y-auto ${
            this.state.isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`}
        >
          <button onClick={this.closeMenu} className="text-2xl mb-4">
            ×
          </button>

          <div className="relative flex flex-col h-full">
            {/* Main Menu */}
            <div
              className={`flex-grow overflow-y-auto transition-transform duration-300 ease-in-out ${
                this.state.activeMenu ? "-translate-x-full" : "translate-x-0"
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

              {/* Jobs Menu Item with Button */}
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("jobDropdown")}
                >
                  Jobs
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              </div>

              {/* Employers Menu Item */}
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("employers")}
                >
                  Employers
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
                
              </div>

              {/* Candidates Menu Item */}
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("candidates")}
                >
                  Candidates
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              
              </div>

              {/* Blog Menu Item */}
              <div className="cursor-pointer w-full flex items-center">
                <button
                  className="flex items-center text-white w-full h-[50px] p-2 transition-colors duration-200"
                  onClick={() => this.openSubMenu("blog")}
                >
                  Blog
                  <FaChevronRight className="ml-auto mr-4" />
                </button>
              
              </div>

              {/* Pages Menu Item */}
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

            {/* Sub Menu */}
            <div
              className={`container absolute -top-8 left-6 w-48 h-auto transition-transform duration-600 ease-in-out transform ${
                this.state.activeMenu ? "translate-x-0" : "translate-x-36"
              }`}
            >
              {this.state.activeMenu && (
                <div className="flex flex-col h-auto">
                  {/* Back Button */}
                  <button onClick={this.closeSubMenu} className="text-xl mt-6 ">
                    Back
                  </button>

                  {/* Sub Menu Items with Scrollbar */}
                  <div className="h-80 mt-4 overflow-y-auto">
                    {this.state.activeMenu === "home" && (
                      <div>
                        <span className="block py-2">Sub-menu Item 1</span>
                        <span className="block py-2">Sub-menu Item 2</span>
                        {/* Add more sub-menu items */}
                      </div>
                    )}
                    {this.state.activeMenu === "jobDropdown" && (
                      <div>
                        {/* Sub-menu items */}
                        <SideBarJobSub />
                      </div>
                    )}
                    {/* Add more sub-menu content here as needed */}
                  </div>
                </div>
              )}
            </div>

            {/* Address at the Bottom */}
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
