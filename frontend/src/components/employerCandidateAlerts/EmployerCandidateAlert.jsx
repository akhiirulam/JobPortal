import React from 'react';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const EmployerCandidateAlert = () => {
  return (
        <div className='w-full px-[15px] min-h-[calc(-111px_+_100vh)] bg-[#F5F7FC]'>
          <div className='md:p-[60px]'>
            <h3 className='mb-[40px] text-3xl leading-[1.3] font-medium'>Candidate Alerts</h3>
            <div className='bg-white border p-[30px] mb-[30px] rounded shadow-sm '>
              <div className='w-full h-[47px] mb-[30px] flex w-[1383px] justify-between '>
                <div className=''>
                  <form className=' bg-[#F0F5F7] w-[199px] flex w-fit rounded-lg'>
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
                  <div className='pr-5 w-[148px] bg-[#F0F5F7] flex  rounded-lg'>
                  <select className='outline-blue-400 bg-transparent pr-[25px] h-[45px] px-5 self-center '>
                    <option>Default</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                  </div>
                  
                </div>
              </div>
              <span className='text-[#54595F] leading-7 font-normal font-[15px]'>No candidate alert found</span>
            </div>
          </div>
        </div>
  ) 
}

export default EmployerCandidateAlert;
