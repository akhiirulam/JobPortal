import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdminEmployerList from '../components/Admin/AdminEmployerList/EmployerCandidateList';




class AdminEmployerListPage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div>
                    <AdminEmployerList />
                </div>
                
            </div>
        );
    }
}

export default AdminEmployerListPage;