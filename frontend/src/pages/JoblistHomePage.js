import React, { Component } from 'react';

import Navbar from "../components/Navbar/Navbar";
import PostJob from "../components/employerJobPost/Jobpost"

class JoblistHomePage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <PostJob />
                </div>
            </div>
        );
    }
}

export default JoblistHomePage;
