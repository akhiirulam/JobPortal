import React, { Component } from 'react';
import EmployerProfileAdd from '../components/EmployerProfile/EmployerProfileAdd';
import Navbar from '../components/Navbar/Navbar';


class EmployerProfilePage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <EmployerProfileAdd/>
                </div>
            </div>
        );
    }
}

export default EmployerProfilePage;