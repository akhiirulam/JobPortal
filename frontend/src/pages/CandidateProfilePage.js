import React, { Component } from 'react';
import CandidateProfile from '../components/CandiateProfile/CandidateProfileAdd';
import Navbar from "../components/Navbar/Navbar";

class CandidateProfilePage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <CandidateProfile />
                </div>
            </div>
        );
    }
}

export default CandidateProfilePage;


