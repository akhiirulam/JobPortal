import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../Navbar/Navbar';
import SideBar from '../sideBar/SideBar';

const ChangePassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleOPassword, setToggleOPassword] = useState(false);
  const [toggleNPassword, setToggleNPassword] = useState(false);
  const [toggleCNPassword, setToggleCNPassword] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarElement = document.getElementById('default-sidebar');
      if (sidebarElement && !sidebarElement.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <Navbar />
      <div className='flex'>
        <SideBar />
        <div className='w-full px-[15px] h-[calc(100vh-111px)] bg-[#F5F7FC]'>
          <div className='p-[60px]'>
            <h3 className='mb-[40px] text-3xl leading-[1.3] font-medium'>Change Password</h3>
            <div className='bg-white border p-[30px] mb-[30px] rounded shadow-sm'>
              <form>
                {/* Old Password */}
                <div className='mb-[30px]'>
                  <label htmlFor='old-password' className='mb-2.5 block'>Old password</label>
                  <div className='flex items-center relative'>
                    <input
                      id='old-password'
                      className='py-2.5 px-[25px] text-[#77838F] bg-[#F0F5F7] w-full h-[60px] outline-[#1451a4] outline-1 focus:bg-white'
                      type={toggleOPassword ? 'text' : 'password'}
                    />
                    <div
                      onClick={() => setToggleOPassword(!toggleOPassword)}
                      className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1967D2] hover:text-[#1451A4] cursor-pointer'
                    >
                      {toggleOPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </div>
                  </div>
                </div>

                {/* New Password */}
                <div className='mb-[30px]'>
                  <label htmlFor='new-password' className='mb-2.5 block'>New password</label>
                  <div className='flex items-center relative'>
                    <input
                      id='new-password'
                      className='py-2.5 px-[25px] text-[#77838F] bg-[#F0F5F7] w-full h-[60px] outline-[#1451a4] outline-1 focus:bg-white'
                      type={toggleNPassword ? 'text' : 'password'}
                    />
                    <div
                      onClick={() => setToggleNPassword(!toggleNPassword)}
                      className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1967D2] hover:text-[#1451A4] cursor-pointer'
                    >
                      {toggleNPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </div>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div className='mb-[30px]'>
                  <label htmlFor='confirm-new-password' className='mb-2.5 block'>Confirm new password</label>
                  <div className='flex items-center relative'>
                    <input
                      id='confirm-new-password'
                      className='py-2.5 px-[25px] text-[#77838F] bg-[#F0F5F7] w-full h-[60px] outline-[#1451a4] outline-1 focus:bg-white'
                      type={toggleCNPassword ? 'text' : 'password'}
                    />
                    <div
                      onClick={() => setToggleCNPassword(!toggleCNPassword)}
                      className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1967D2] hover:text-[#1451A4] cursor-pointer'
                    >
                      {toggleCNPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full py-3 rounded-md bg-[#1967D2] hover:bg-[#1451A4] text-white font-medium'
                >
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
