import React from 'react';
import proImg from '../../public/memberProImg.jpg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook,faUser, faFile,faBookmark,faComments,faHandshake} from '@fortawesome/free-regular-svg-icons'
import {faBullhorn,faUserTie,faLock,faUserXmark,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const sideBarItems = [
    {id:1, icon:faAddressBook, description:"User Dashboard",link:"/user"},
    {id:2, icon:faUserTie, description:"Profile",link:"/profile"},
    {id:3, icon:faFile, description:"My Resume",link:"/resume"},
    {id:4, icon:faBullhorn, description:"My Applied",link:"/applied-jobs"},
    {id:5, icon:faBookmark, description:"Shortlist Employee",link:"/shortlisted-jobs"},
    {id:6, icon:faUser, description:"Following Employee",link:"/following-employee"},
    {id:7, icon:faBullhorn, description:"Alert Jobs",link:"/alert-jobs"},
    {id:8,icon:faComments, description:"Messages",link:"/messages"},
    {id:9, icon:faHandshake, description:"Meetings",link:"/meetings"},
    {id:10, icon:faLock, description:"Change Password",link:"/change-password"},
    {id:11, icon:faUserXmark, description:"Delete Profile",link:"/delete-profile"},
    {id:12, icon:faArrowRightFromBracket, description:"Logout",link:"/"}

]


const SideBar = () => {
  return (
    <div className=''>
    <div className=' p-[30px]  w-[350px] h-[calc(-111px_+_100vh)] overflow-y-scroll scrollbar-custom overflow-x-hidden snap-y'>
        <div className='w-[299px] h-[90px] mb-[30px] flex'>
            <div className='w-[90px] h-[90px] mr-[30px] text-center'>
                <img className='rounded-full' src={proImg} alt='Profile-image'/></div>
                <div className='w-[85px] h-[78px]'>
                <div className='font-medium leading-snug text-[18px]'>Candidate</div>
                <div className='text-[15px] font-normal'>New York</div>
                <div className='text-[13px] py-1 px-2 border border-[#1967d2] hover:bg-blue-800 text-white rounded cursor-pointer bg-[#1967d2] '>View Profile</div>
            </div>
            </div>
            <div className='w-[299px] h-fit'>
                <ul className=''>
                    {sideBarItems.map((item)=>(
                    <NavLink to={item.link} activeClassName="active" ><li  key={item.id} className='mb-0.5 px-5 py-[13px] flex hover:text-[#1967D2] hover:bg-[#E8F0FA] text-[#696696] rounded-lg cursor-pointer'>
                        <div className='mr-[15px] '><FontAwesomeIcon icon={item.icon} size="xl" /></div>
                        <div>{item.description}</div>
                    </li>
                    </NavLink>
                    ))}
                </ul>
            </div>
            <div className='mt-[15px] p-[15px]'>
                <h4 className='mb-[15px] text-lg'>Skills Percentage: <span className='font-bold font-medium leading-[1.3rem] text-[#E44343]'>100%</span></h4>
                <div className='w-full h-[7px] bg-[#1967d2]'></div>
            </div>
            
            
            
        </div>
        </div>
      
  );
}

export default SideBar;
