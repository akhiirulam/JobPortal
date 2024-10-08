import React, { Component } from 'react';
import JobPost from '../components/employerJobPost/Jobpost';
import Navbar from "../components/Navbar/Navbar";

class Jobpost extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <JobPost />
                </div>
            </div>
        );
    }
}

export default Jobpost;
