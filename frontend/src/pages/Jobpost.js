import React, { Component } from 'react';
import JobPost from '../components/employerJobPost/Jobpost';
import Navbar from "../components/Navbar/Navbar";

class Jobpost extends Component {
    render() {
        return (
                <div className="pt-16">
                    <JobPost />
                </div>
        );
    }
}

export default Jobpost;
