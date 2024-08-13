import React, { Component } from "react";
import Img from "../public/slider1.png";
import { BiChevronDown } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Dropdown from "./DropDown";

class Banner extends Component {
  render() {
    return (
      <div className="flex justify-center items-center bg-gradient-to-r from-custom-light to-custom-dark w-screen p-4 sm:p-6 lg:p-8 mt-0">
        <div className="flex flex-col md:flex-row justify-between items-center md:p-4">
          <div className="flex-1">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold font-futura-bk">
                There Are{" "}
                <span className="text-blue-500 font-futura-bk">93,178</span>{" "}
                Postings Here For you!
              </h1>
            </div>
            <div>
              <p className="text-xs mt-4 md:mt-6">
                Find Jobs, Employment & Career Opportunities
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white border rounded-lg h-auto md:h-24 p-4 md:px-8 mt-6 md:mt-10 w-full">
              <div className="flex items-center w-full md:w-auto p-2">
                <IoSearchOutline className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Job title, keywords..."
                  className="flex-1 outline-none px-2 py-1"
                />
              </div>
              <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-6">
                <Dropdown
                  options={[
                    "London",
                    "New York",
                    "Paris",
                    "Tokyo",
                    "Delhi",
                    "Bengaluru",
                    "Chennai",
                  ]}
                  placeholder="City or pincode"
                  iconBefore={<CiLocationOn className="mr-2" />}
                  iconAfter={<BiChevronDown className="inline-block ml-2" />}
                />
              </div>

              <div className="flex-1 flex items-center justify-end mt-4 md:mt-0 sm: w-full">
                <button className="p-2 bg-button-clr text-white rounded h-12 w-full md:w-36 border border-button-clr hover:bg-white hover:text-button-clr">
                  Find Jobs
                </button>
              </div>
            </div>
            <div className="flex mt-8 md:mt-12">
              <p className="text-xs">
                Popular Searches: <span>Designer</span> <span>Developer</span>{" "}
                <span>Web</span> <span>IOS</span> <span>PHP</span>{" "}
                <span>Senior</span> <span>Engineer</span>
              </p>
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-16 hidden md:block">
            <img
              src={Img}
              alt="Banner-Image"
              className="w-full h-auto max-w-full md:max-w-[500px] lg:max-w-[700px] object-contain"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
