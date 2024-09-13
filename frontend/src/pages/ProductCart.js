import React, { Component } from 'react';
import CartPage from '../components/ProductCart/Cart';
import Navbar from '../components/Navbar/Navbar';


class ProductCart extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div>
                    <CartPage />
                </div>
                
            </div>
        );
    }
}

export default ProductCart;