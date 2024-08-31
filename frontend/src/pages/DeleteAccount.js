import React from 'react';
import DeleteProfile from '../components/deleteProfile/DeleteProfile';
import SideBar from '../components/sideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';

const DeleteAccount = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
        <SideBar/>
        <DeleteProfile/>
    </div>
    </>
  );
}

export default DeleteAccount;
