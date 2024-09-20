import React, { Component } from 'react';
import JobpostPage from '../components/EmployerJobPost/Jobpost'
import Navbar from '../components/Navbar/Navbar';


class Jobpost extends Component {
    render() {
        return (
            <div>
            <div className="fixed top-0 w-full bg-white shadow-md z-50">
                <Navbar />
            </div>
            <div className="pt-16">
                <JobpostPage />
            </div>
        </div>
        );
    }
}

export default Jobpost;