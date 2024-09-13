import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSuitcase,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import EmpSidebar from "../EmpSidebar/EmpSidebar";

import img1 from "../../public/airbnb.jpg";

const CandidateFollowingEmp = () => {
<<<<<<< HEAD
  return (
        <div className='w-full px-[15px] min-h-[calc(-111px_+_100vh)] bg-[#F5F7FC]'>
          <div className='md:p-[60px]'>
            <h3 className='mb-[40px] text-3xl leading-[1.3] font-medium'>Applied Jobs</h3>
            <div className='bg-white border p-[30px] mb-[30px] rounded '>
              <div className='w-full h-[47px] mb-[30px] flex w-[1383px] justify-between '>
                <div className=''>
                <form className=' bg-[#F0F5F7] md:w-[199px] flex w-fit rounded-lg'>
                    <button type='submit' className='py-[5px] px-[15px] '><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input
                    className='bg-transparent outline-none h-[45px] p-[5px] w-[134px] text-gray-500' 
                    type='text'
                    placeholder='Search...'
                    />
                  </form>
                </div>
                <div className='self-center text-center md:w-[230px] h-[45px] flex justify-end'>
                  <span className='hidden md:block font-normal self-center'>Sort By:</span>
                  <div className='pr-5 pl-1 md:w-[148px] w-[100px] bg-[#F0F5F7] flex  rounded-lg'>
                  <select className='outline-blue-400 bg-transparent pr-[25px] md:h-[45px] md:px-5 self-center '>
                    <option>Default</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                  </div>
                  
                </div>
              </div>
              <div className='w-full p-[30px] mb-[30px] h-[121px] border border-[#ECEDF2] flex rounded-md'>
                <div className='flex justify-center items-center w-full basis-2/3'>
                <div className=" hidden md:block w-16 h-14 ">
                          <a href="#">
                            <img
                              src=''
                              alt="Logo"
                              className="rounded-full object-cover w-full h-full"
                            />
                          </a>
                        </div>
                    <div className='pl-5 w-full' >
                        <div className='font-medium text-lg'>Udamy</div>
                        <div className='flex w-full font-normal leading-7 text-sm text-[#77838F]'>
                            <div className='mr-[30px] flex'>
                                <div className='mr-[5px] hidden md:block'><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div>New York</div>
                            </div>
                            <div className='flex'>
                            <div className='mr-[5px] hidden md:block'><FontAwesomeIcon icon={faSuitcase} /></div>
                            <div>Advertising</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-1/3 flex flex-col justify-items-end text-[13px] grid gap-2'>
                <div className='flex justify-end  '>
                    <div className='px-1 md:px-5 p-py flex items-center w-fit bg-[#E1F2E5] text-[#34A853] rounded-full'>Featured</div>
                </div>
                    
                    <div className='flex justify-end '><div className='px-1 md:px-5 py-0.5 w-fit bg-[#DDE8F8] hover:bg-[#1967D2] flex items-center hover:text-white cursor-pointer text-[#1967D2] rounded-full'>Open Jobs - 1</div></div>
            
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
      <div className="mt-[50px] bg-[#F5F7FC] h-[calc(-111px_+_100vh)]">
      <EmpSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Following Employers</h3>
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

            <div className="w-full p-4 md:p-6 lg:p-[30px] mb-6 lg:mb-[30px] h-auto lg:h-[121px] border border-[#ECEDF2] flex flex-col lg:flex-row rounded-md overflow-x-auto">
              <div className="flex justify-center items-center w-full lg:w-2/3 mb-4 lg:mb-0">
                <div className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] rounded-full flex justify-center items-center">
                  <img src={img1} alt="logo" />
                </div>
                <div className="pl-5 w-full">
                  <div className="text-lg font-semibold">Udamy</div>
                  <div className="flex flex-wrap w-full font-normal leading-7 text-sm text-[#77838F]">
                    <div className="mr-[15px] lg:mr-[30px] flex">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mr-[5px]"
                      />
                      <div>New York</div>
                    </div>
                    <div className="flex">
                      <FontAwesomeIcon icon={faSuitcase} className="mr-[5px]" />
                      <div>Advertising</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-[13px] grid gap-2">
                <div className="flex justify-end">
                  <div className="p-2 w-28 lg:w-36 bg-[#E1F2E5] flex justify-center items-center text-[#34A853] rounded-full">
                    Featured
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="p-2 w-28 lg:w-36 bg-[#DDE8F8] flex justify-center items-center hover:bg-[#1967D2] hover:text-white cursor-pointer text-[#1967D2] rounded-full">
                    Open Job
                  </div>
>>>>>>> origin/akhilChandran
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CandidateFollowingEmp;
