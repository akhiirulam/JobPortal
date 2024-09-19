import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PurchaseCardList from '../components/Admin/AdminPurchaseCardManagement/PurchaseCardList';



class AdminPurchaseCardManagement extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div>
                    <PurchaseCardList />
                </div>
                
            </div>
        );
    }
}

export default AdminPurchaseCardManagement;