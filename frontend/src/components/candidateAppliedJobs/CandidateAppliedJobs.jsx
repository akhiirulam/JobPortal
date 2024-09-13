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
<<<<<<< HEAD
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
=======
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="mt-[50px] bg-[#F5F7FC] h-screen">
      <EmpSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Applied Jobs</h3>
        <div className="bg-white p-4 md:p-[30px] rounded">
          <div className="w-full mb-6 flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <form className="bg-gray-100 w-full md:w-[210px] flex rounded-lg">
                <button type="submit" className="py-2 px-4">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                  className="bg-transparent outline-none h-10 p-2 w-full md:w-[134px] text-gray-500"
                  type="text"
                  placeholder="Search..."
                />
              </form>
            </div>
            <div className="flex items-center">
              <span className="font-normal mr-2">Sort By:</span>
              <div className="w-auto md:w-[148px] bg-gray-100 flex rounded-lg">
                <select className="outline-blue-400 bg-transparent w-full mr-2 h-10 px-4">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile-specific horizontal scroll */}
          <div className="overflow-x-auto sm:overflow-x-hidden">
            <table className="min-w-full bg-white mb-6">
              <thead className="h-12 bg-gray-100">
                <tr className="text-blue-400">
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Job Title
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Date Applied
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Status
                  </th>
                  <th className="px-2 py-2 text-left font-semibold sm:px-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 py-2 sm:px-4">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10">
                        <a href="/">
                          <img
                            src={img1}
                            alt="Description"
                            className="rounded-full object-cover w-full h-full"
                          />
                        </a>
                      </div>
                      <div>
                        <h2 className="text-sm sm:text-lg font-semibold">
                          <a href="/" className="hover:underline">
                            Product Designer
                          </a>
                        </h2>
                        <div className="text-xs sm:text-sm text-gray-600">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <i className="flaticon-briefcase-1"></i>
                            <a href="/">Accounting / Finance</a>
                          </div>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <i className="flaticon-location"></i>
                            <a href="/">New York</a>
>>>>>>> origin/akhilChandran
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
};

export default CandidateAppliedJobs;
