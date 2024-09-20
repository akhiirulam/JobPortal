import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdminEditPurchaseCard from '../components/Admin/AdminPurchaseCardEdit/AdminEditPurchaseCard';



class AdminPurchaseCardEditPage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div>
                    <AdminEditPurchaseCard />
                </div>
                
            </div>
        );
    }
}

export default AdminPurchaseCardEditPage;