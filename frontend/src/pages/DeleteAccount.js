import React, { Component } from 'react';
import DeleteProfile from '../components/deleteProfile/DeleteProfile';
import Navbar from "../components/Navbar/Navbar";

class DeleteAccount extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <DeleteProfile />
                </div>
            </div>
        );
    }
}

export default DeleteAccount;