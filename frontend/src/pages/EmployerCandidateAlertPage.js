import React, { Component } from 'react';
import EmployerCandidateAlert from '../components/employerCandidateAlerts/EmployerCandidateAlert';
import Navbar from "../components/Navbar/Navbar";

class EmployerCandidateAlertPage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <EmployerCandidateAlert />
                </div>
            </div>
        );
    }
}

export default EmployerCandidateAlertPage;
