import React, { Component } from 'react';
import EmployersList from '../components/EmployerList/EmployersList';
import Navbar from "../components/Navbar/Navbar";

class Employerslist extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <EmployersList />
                </div>
            </div>
        );
    }
}

export default Employerslist;