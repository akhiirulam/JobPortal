import React, { Component } from 'react';
import MessagePage from '../components/EmployerMessage/Message';
import Navbar from '../components/Navbar/Navbar';


class EmployerMessagePage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <MessagePage/>
                </div>
            </div>
        );
    }
}

export default EmployerMessagePage;