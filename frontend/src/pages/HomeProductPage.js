import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/HomeProduct/Products';


class HomeProductPage extends Component {
    render() {
        return (
            <div>
            <div className="fixed top-0 w-full bg-white shadow-md z-50">
                <Navbar />
            </div>
            <div className="pt-16">
                <Products />
            </div>
        </div>
        );
    }
}

export default HomeProductPage;