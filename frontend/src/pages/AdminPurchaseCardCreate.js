import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdminPurchaseCard from '../components/Admin/AdminPurchaseCardCreate/AdminPurchaseCard';


class AdminPurchaseCardPage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div>
                    <AdminPurchaseCard />
                </div>
                
            </div>
        );
    }
}

export default AdminPurchaseCardPage;