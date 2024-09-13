import React, { Component } from 'react';
import CandidateAlertJobs from '../components/CandidateAlertJobs/CandidateAlertJobs';
import Navbar from '../components/Navbar/Navbar';



class CandiateAlertJobs extends Component {
    render() {
        return (
            <div>
            <div className="fixed top-0 w-full bg-white shadow-md z-50">
                <Navbar />
            </div>
            <div className="pt-16">
                <CandidateAlertJobs />
            </div>
        </div>
        );
    }
}

export default CandiateAlertJobs;