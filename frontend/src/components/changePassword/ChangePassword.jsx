import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import EmpSidebar from "../EmpSidebar/EmpSidebar";

const ChangePassword = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [toggleOPassword, setToggleOPassword] = useState(false);
  const [toggleNPassword, setToggleNPassword] = useState(false);
  const [toggleCNPassword, setToggleCNPassword] = useState(false);
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

  return (
    <div className="mt-[50px] bg-[#F5F7FC] h-[calc(-111px_+_100vh)]">
      <EmpSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Change Password</h3>
        <div className="bg-white p-4 md:p-[30px] rounded">
          <div className="w-full mb-6 flex flex-wrap justify-between items-center">
            <form className="max-w-full md:max-w-xs mx-auto">
              <div className="mb-6">
                <label htmlFor="old-password" className="block mb-2.5">
                  Old password
                </label>
                <div className="relative">
                  <input
                    id="old-password"
                    className="py-2.5 px-4 text-[#77838F] bg-[#F0F5F7] md:w-80 sm:w-full h-[40px] rounded outline-[#1451a4] outline-1 focus:bg-white"
                    type={toggleOPassword ? "text" : "password"}
                  />
                  <div
                    onClick={() => setToggleOPassword(!toggleOPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1967D2] hover:text-[#1451A4] cursor-pointer"
                  >
                    {toggleOPassword ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="new-password" className="block mb-2.5">
                  New password
                </label>
                <div className="relative">
                  <input
                    id="new-password"
                    className="py-2.5 px-4 text-[#77838F] bg-[#F0F5F7] md:w-80 sm:w-full h-[40px] rounded outline-[#1451a4] outline-1 focus:bg-white"
                    type={toggleNPassword ? "text" : "password"}
                  />
                  <div
                    onClick={() => setToggleNPassword(!toggleNPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1967D2] hover:text-[#1451A4] cursor-pointer"
                  >
                    {toggleNPassword ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="confirm-new-password" className="block mb-2.5">
                  Confirm new password
                </label>
                <div className="relative">
                  <input
                    id="confirm-new-password"
                    className="py-2.5 px-4 text-[#77838F] bg-[#F0F5F7] md:w-80 sm:w-full h-[40px] rounded outline-[#1451a4] outline-1 focus:bg-white"
                    type={toggleCNPassword ? "text" : "password"}
                  />
                  <div
                    onClick={() => setToggleCNPassword(!toggleCNPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1967D2] hover:text-[#1451A4] cursor-pointer"
                  >
                    {toggleCNPassword ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#1967D2] hover:bg-[#1451A4] text-white font-medium"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
