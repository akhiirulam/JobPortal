import React, { Component } from 'react';
import Navbar from "../components/Navbar/Navbar";
import EmpDashboard from '../components/EmployerDashboard/EmpDashboard';



class Meetings extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <EmpDashboard />
                </div>
            </div>
        );
    }
}

export default Meetings;