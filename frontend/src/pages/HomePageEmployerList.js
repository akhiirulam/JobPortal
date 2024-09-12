import React, { Component } from 'react';

import Navbar from "../components/Navbar/Navbar";
import HomeEmployersPage from '../components/HomeEmployerList/HomeEmployersListPage';

class HomeEmployersListPage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <HomeEmployersPage />
                </div>
            </div>
        );
    }
}

export default HomeEmployersListPage;
