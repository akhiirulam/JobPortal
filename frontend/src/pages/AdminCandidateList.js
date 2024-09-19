import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import AdminCandidateList from '../components/Admin/AdminCandidateList/AdminCandidateList';



class AdminCandidateListPage extends Component {
    render() {
        return (
            <div>
                <div className="fixed top-0 w-full bg-white shadow-md z-50">
                    <Navbar />
                </div>
                <div>
                    <AdminCandidateList />
                </div>
                
            </div>
        );
    }
}

export default AdminCandidateListPage;