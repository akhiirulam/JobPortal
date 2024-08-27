import React, { Component } from 'react';
import DashBoard from '../components/UserDashBoard/DashBoard'
import Navbar from "../components/Navbar/Navbar";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <DashBoard />
                </div>
            </div>
        );
    }
}

export default Dashboard;