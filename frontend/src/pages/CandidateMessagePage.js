import React, { Component } from 'react';
import CandidateMessagePage from '../components/CandidateMessage/Message';
import Navbar from '../components/Navbar/Navbar';


class CandidateMessage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div className="pt-16">
                    <CandidateMessagePage />
                </div>
            </div>
        );
    }
}

export default CandidateMessage;