import React, { Component } from 'react';
import JobpostPage from "../components/employerJobPost/Jobpost"
import Navbar from "../components/Navbar/Navbar";

class Jobpost extends Component {
    render() {
        return (
                <div className="pt-16">
                    <JobpostPage/>
                </div>
        );
    }
}

export default Jobpost;
