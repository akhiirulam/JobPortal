import React, { Component } from 'react';
import BillingPage from '../components/ProductCart/BillingPage';
import Navbar from '../components/Navbar/Navbar';


class Billing extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div>
                    <BillingPage />
                </div>
                
            </div>
        );
    }
}

export default Billing;