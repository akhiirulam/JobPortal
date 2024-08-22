import React, { Component } from 'react';
import MainJob from '../components/JobListMain/MainJob';
import Navbar from "../components/Navbar/Navbar";

class Employer extends Component {
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

export default Employer;