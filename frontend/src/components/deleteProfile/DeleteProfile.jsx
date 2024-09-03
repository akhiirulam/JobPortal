import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import EmpSidebar from "../EmpSidebar/EmpSidebar";

const Exm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

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
        <h3 className="py-4 text-base md:text-2xl">Candidate Alert</h3>
        <div className="bg-white p-4 md:p-[30px] rounded">
        <div className="text-lg font-medium">
            Are you sure! You want to delete your profile.
          </div>
          <div className="mb-[15px]">This can't be undone!</div>
          <div className="font-normal text-[#77838F] text-[15px]">
            <div className="mb-[15px]">
              Please enter your login Password to confirm:
            </div>
            <form>
              <div className="lg:w-[50%] mb-[30px]">
                <div className="flex justify-between items-center mb-[30px]">
                  <input
                    id="old-password"
                    className="py-2.5 px-[25px] text-[#77838F] bg-[#F0F5F7] w-full h-[60px] outline-[#1451a4] outline-1 focus:bg-white"
                    type={togglePassword === false ? "password" : "text"}
                  />
                  <div
                    onClick={() => setTogglePassword(!togglePassword)}
                    className="ml-[-3rem] hover:text-[#1967D2] mr-[2rem] w-[2rem] p-[1px] z-10 hover:cursor-pointer"
                  >
                    {togglePassword ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </div>
                </div>
                <button
                  className="h-[48px] py-[9px] px-[30px] bg-[#E44343] rounded-md text-white hover:bg-[#D51F1F]"
                  type="submit"
                >
                  Delete Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exm;
