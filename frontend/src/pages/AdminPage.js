import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdminDashboard from '../components/Admin/AdminPages/AdminDashboard';


class AdminControlPage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div>
                    <AdminDashboard />
                </div>
                
            </div>
        );
    }
}

export default AdminControlPage;