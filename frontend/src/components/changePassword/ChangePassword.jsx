import React, { useState } from 'react';
<<<<<<< HEAD
import Navbar from '../Navbar/Navbar';
import SideBar from '../sideBar/SideBar';
=======
>>>>>>> origin/doneByBasil

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
<<<<<<< HEAD
    <>
    <Navbar/>
    <div className='flex'>
        <SideBar/>
        <div className='w-full px-[15px] h-[calc(-111px_+_100vh)]  bg-[#F5F7FC]'>
          <div className='p-[60px]'>
          <h3 className='mb-[40px] text-3xl leading-[1.3] font-medium'>Change Password </h3>
          <div className='bg-white border p-[30px] mb-[30px] rounded shadow-sm '>
            <form>
                <div className='w-[50%] mb-[30px]'>
=======
    
        <div className='w-full px-[15px] h-[calc(-111px_+_100vh)]  bg-[#F5F7FC]'>
          <div className='md:p-[60px]'>
          <h3 className='mb-[40px] text-3xl leading-[1.3] font-medium'>Change Password </h3>
          <div className='bg-white border p-[30px] mb-[30px] rounded shadow-sm '>
            <form>
                <div className='xl:w-[50%] mb-[30px]'>
>>>>>>> origin/doneByBasil
                <div className='mb-2.5'><label  for='old-password'>Old password</label></div>
                <div className='flex justify-between items-center'>
                <input
                id='old-password'
                className='py-2.5 px-[25px] text-[#77838F] bg-[#F0F5F7] w-full h-[60px] outline-[#1451a4] outline-1 focus:bg-white'
                type={(toggleOPassword === false) ? 'password':'text' }
                />
                <div onClick={()=>setToggleOPassword(!toggleOPassword)} className='ml-[-3rem] mr-[2rem] hover:text-[#1967D2] w-[2rem] p-[1px] z-10 hover:cursor-pointer'>
                {toggleOPassword?<FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}</div>
                </div>
                </div>
<<<<<<< HEAD
                <div className='w-[50%] mb-[30px]'>
=======
                <div className='xl:w-[50%] mb-[30px]'>
>>>>>>> origin/doneByBasil
                <div className='mb-2.5'><label  for='old-password'>New password</label></div>
                <div className='flex justify-between items-center'>
                <input
                id='old-password'
                className='py-2.5 px-[25px] text-[#77838F] bg-[#F0F5F7] w-full h-[60px] outline-[#1451a4] outline-1 focus:bg-white'
                type={(toggleNPassword === false) ? 'password':'text' }
                />
                <div onClick={()=>setToggleNPassword(!toggleNPassword)} className='ml-[-3rem] mr-[2rem] hover:text-[#1967D2] w-[2rem] p-[1px] z-10 hover:cursor-pointer'>
                    {toggleNPassword?<FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}</div>
                </div>
                </div>
<<<<<<< HEAD
                <div className='w-[50%] mb-[30px]'>
=======
                <div className='xl:w-[50%] mb-[30px]'>
>>>>>>> origin/doneByBasil
                <div className='mb-2.5'><label  for='old-password'>Confirm new password</label></div>
                <div className='flex justify-between items-center'>
                <input
                id='old-password'
                className='py-2.5 px-[25px] text-[#77838F] bg-[#F0F5F7] w-full h-[60px] outline-[#1451a4] outline-1 focus:bg-white'
                type={(toggleCNPassword === false) ? 'password':'text' }
                />
                <div onClick={()=>setToggleCNPassword(!toggleCNPassword)} className='ml-[-3rem] mr-[2rem] hover:text-[#1967D2] w-[2rem] p-[1px] z-10 hover:cursor-pointer'>
                {toggleCNPassword?<FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}</div>
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
<<<<<<< HEAD
    </div>
    </>
=======
>>>>>>> origin/doneByBasil
  );
};

export default ChangePassword;
