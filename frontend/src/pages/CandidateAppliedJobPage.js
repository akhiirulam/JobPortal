import React from 'react';
import CandidateAppliedJobs from '../components/candidateAppliedJobs/CandidateAppliedJobs';
import SideBar from '../components/sideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';

const CandidateAppliedJobPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
          <SideBar/>
        <CandidateAppliedJobs/>
        
    </div>
    </div>
  );
}

export default CandidateAppliedJobPage;
