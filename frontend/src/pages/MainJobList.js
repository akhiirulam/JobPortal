import React, { Component } from 'react';
import MainJob from '../components/HomeJobList/JoblistMain';
import Navbar from "../components/Navbar/Navbar";

class Mainjob extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <MainJob />
                </div>
            </div>
        );
    }
}

export default Mainjob;