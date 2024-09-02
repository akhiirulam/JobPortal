import React, { Component } from 'react';

import ShortListJobs from "../components/ShortlistJobs/ShortList"
import Navbar from "../components/Navbar/Navbar";

class ShortListjobs extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <ShortListJobs />
                </div>
            </div>
        );
    }
}

export default ShortListjobs;
