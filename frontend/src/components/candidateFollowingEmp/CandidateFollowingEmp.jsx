import React from 'react';
import Navbar from '../Navbar/Navbar';
import SideBar from '../sideBar/SideBar';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faSuitcase, faLocationDot} from '@fortawesome/free-solid-svg-icons'

const CandidateFollowingEmp = () => {
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
            
                </div>
              </div>
              </div>
              </div>
              </div>
              

  );
}

export default CandidateFollowingEmp;
