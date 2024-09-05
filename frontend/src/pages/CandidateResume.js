import React, { Component } from 'react';

import Navbar from "../components/Navbar/Navbar";
import CandidateResumeAdd from '../components/CandidateResume/CandidateResumeAdd';

class CandidateResumeAddPage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <CandidateResumeAdd />
                </div>
            </div>
        );
    }
}

export default CandidateResumeAddPage;


