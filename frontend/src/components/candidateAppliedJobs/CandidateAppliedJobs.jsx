import React from 'react';
<<<<<<< HEAD
import Navbar from '../Navbar/Navbar';
import SideBar from '../sideBar/SideBar';
=======
>>>>>>> origin/doneByBasil

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

<<<<<<< HEAD
const CandidateAppliedJobs = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
        <SideBar/>
        <div className='w-full px-[15px] h-screen bg-[#F5F7FC]'>
          <div className='p-[60px]'>
=======
import {  FaEye, FaTimes } from "react-icons/fa";

const CandidateAppliedJobs = () => {
  return (
    
        <div className='w-full px-[15px] min-h-[calc(-111px_+_100vh)] bg-[#F5F7FC]'>
          <div className='md:p-[60px]'>
>>>>>>> origin/doneByBasil
            <h3 className='mb-[40px] text-3xl leading-[1.3] font-medium'>Applied Jobs</h3>
            <div className='bg-white border p-[30px] mb-[30px] rounded '>
              <div className='w-full h-[47px] mb-[30px] flex w-[1383px] justify-between '>
                <div className=''>
<<<<<<< HEAD
                  <form className=' bg-[#F0F5F7] w-[199px] flex w-fit rounded-lg'>
                    <button type='submit' className='py-[5px] px-[15px] '><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input
                    className='bg-transparent outline-none h-[45px] p-[5px] w-[134px] text-gray-500' 
=======
                  <form className=' bg-[#F0F5F7] md:w-[199px] flex w-fit rounded-lg'>
                    <button type='submit' className='md:py-[5px] md:px-[15px] px-1'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input
                    className='bg-transparent outline-none h-[45px] p-[5px] md:w-[134px] w-[100px] text-gray-500' 
>>>>>>> origin/doneByBasil
                    type='text'
                    placeholder='Search...'
                    />
                  </form>
                </div>
<<<<<<< HEAD
                <div className='self-center text-center w-[230px] h-[45px] flex '>
                  <span className='font-normal self-center'>Sort By:</span>
                  <div className='pr-5 w-[148px] bg-[#F0F5F7] flex  rounded-lg'>
                  <select className='outline-blue-400 bg-transparent pr-[25px] h-[45px] px-5 self-center '>
=======
                <div className='self-center text-center md:w-[230px] h-[45px] flex justify-end'>
                  <span className='hidden md:block  font-normal self-center'>Sort By:</span>
                  <div className='pr-5 pl-1 md:w-[148px] w-[100px] bg-[#F0F5F7] flex  rounded-lg'>
                  <select className='outline-blue-400 bg-transparent pr-[25px] md:h-[45px] md:px-5 self-center '>
>>>>>>> origin/doneByBasil
                    <option>Default</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                  </div>
                  
                </div>
              </div>
<<<<<<< HEAD
            </div>
          </div>
        </div>
        </div>
        
        
        
        
</div>
=======

              <div>
              <table className="min-w-full bg-white mb-[26px]">
                <thead className='h-[68px] bg-[#F5F7FC]'>
                  <tr className="text-xs md:text-base text-[#1967D2]">
                    <th className="px-4 py-2 text-left font-semibold ">
                      Job Title
                    </th>
                    <th className="px-4 py-2 text-left font-semibold ">
                      Date Applied
                    </th>
                    <th className="px-4 py-2 text-left font-semibold ">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left font-semibold ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='overflow-y-auto max-h-[700px]'>
                  <tr className="border-b hover:bg-gray-50 ">
                    <td className="px-4 py-2">
                      <div className="flex items-center space-x-4">
                        <div className=" hidden md:block w-16 h-14">
                          <a href="#">
                            <img
                              src=''
                              alt="Profile Pic"
                              className="rounded-full object-cover w-full h-full"
                            />
                          </a>
                        </div>
                        <div>
                          <h2 className="text-sm sm:text-lg font-semibold">
                            <a
                              href="#"
                              className="text-blue-600 hover:underline"
                            >
                              Product Designer
                            </a>
                          </h2>
                          <div className="hidden md:block text-xs sm:text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <i className="flaticon-briefcase-1"></i>
                              <a href="#">Accounting / Finance</a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <i className="flaticon-location"></i>
                              <a href="#">New York</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-xs sm:text-sm text-gray-600">
                      March 29, 2021
                    </td>
                    <td className="px-4 py-2 text-xs sm:text-sm text-[#F6BF4E]">
                      Pending
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex space-x-2">
                        <button
                          className="text-red-600 hover:text-red-800"
                          data-job_id="1044"
                          data-nonce="ddc42e1639"
                          data-toggle="tooltip"
                          title="Remove"
                        >
                          <FaTimes />
                        </button>
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800"
                          data-toggle="tooltip"
                          title="View Job"
                        >
                          <FaEye />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>


            </div>
          </div>
        </div>
>>>>>>> origin/doneByBasil
  );
}

export default CandidateAppliedJobs;
