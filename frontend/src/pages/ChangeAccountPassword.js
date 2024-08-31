import React from 'react';
import ChangePassword from '../components/changePassword/ChangePassword';
import SideBar from '../components/sideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';

const ChangeAccountPassword = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
    <SideBar/>
    <ChangePassword/>
    </div>
    </>
  );
}

export default ChangeAccountPassword;
