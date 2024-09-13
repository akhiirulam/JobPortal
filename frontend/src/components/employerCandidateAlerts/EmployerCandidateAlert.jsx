import React from 'react';
<<<<<<< HEAD
import Navbar from '../Navbar/Navbar';
import SideBar from '../sideBar/SideBar';
=======

>>>>>>> origin/doneByBasil

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const EmployerCandidateAlert = () => {
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
<<<<<<< HEAD
<<<<<<< HEAD
    <>
    <Navbar/>
    <div className='flex'>
        <SideBar/>
        <div className='w-full px-[15px] h-screen bg-[#F5F7FC]'>
          <div className='p-[60px]'>
=======
        <div className='w-full px-[15px] min-h-[calc(-111px_+_100vh)] bg-[#F5F7FC]'>
          <div className='md:p-[60px]'>
>>>>>>> origin/doneByBasil
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
<<<<<<< HEAD
                <div className='self-center text-center w-[230px] h-[45px] flex '>
                  <span className='font-normal self-center'>Sort By:</span>
=======
                <div className='self-center text-center md:w-[230px] h-[45px] flex justify-end'>
                  <span className='hidden md:block font-normal self-center'>Sort By:</span>
>>>>>>> origin/doneByBasil
                  <div className='pr-5 w-[148px] bg-[#F0F5F7] flex  rounded-lg'>
                  <select className='outline-blue-400 bg-transparent pr-[25px] h-[45px] px-5 self-center '>
                    <option>Default</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                  </div>
                  
                </div>
=======
    <div className="mt-[50px] bg-[#F5F7FC] h-[calc(-111px_+_100vh)]">
      <EmpSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Candidate Alert</h3>
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
              <div className="w-auto md:w-[148px] bg-gray-100  flex rounded-lg">
                <select className="outline-blue-400 bg-transparent w-full mr-2 h-10 px-4">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
>>>>>>> origin/akhilChandran
              </div>
              <span className='text-[#54595F] leading-7 font-normal font-[15px]'>No candidate alert found</span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
    </div>
    </>
=======
>>>>>>> origin/doneByBasil
  ) 
}

export default EmployerCandidateAlert;
