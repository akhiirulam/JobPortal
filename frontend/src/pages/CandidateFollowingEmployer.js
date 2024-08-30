import React from 'react';
import CandidateFollowingEmp from '../components/candidateFollowingEmp/CandidateFollowingEmp';
import SideBar from '../components/sideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';

const CandidateFollowingEmployer = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
        <SideBar/>
        <CandidateFollowingEmp/>
        </div>
        </div>
  );
}

export default CandidateFollowingEmployer;
