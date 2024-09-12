import React, { Component } from 'react';
import ChangePassword from '../components/changePassword/ChangePassword';
import Navbar from "../components/Navbar/Navbar";

class ChangeAccountPassword extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <ChangePassword />
                </div>
            </div>
        );
    }
}

export default ChangeAccountPassword;


