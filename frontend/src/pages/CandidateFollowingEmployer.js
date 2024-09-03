import React, { Component } from 'react';
import CandidateFollowingEmp from '../components/candidateFollowingEmp/CandidateFollowingEmp';
import Navbar from "../components/Navbar/Navbar";

class CandidateFollowingEmployer extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <CandidateFollowingEmp />
                </div>
            </div>
        );
    }
}

export default CandidateFollowingEmployer;


