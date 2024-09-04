import React from 'react';
import EmployerCandidateAlert from '../components/employerCandidateAlerts/EmployerCandidateAlert';
import SideBar from '../components/sideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';

const EmployerCandidateAlertPage = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
    <SideBar/>
    <EmployerCandidateAlert/>
    </div>
    </>
  );
}

export default EmployerCandidateAlertPage;
