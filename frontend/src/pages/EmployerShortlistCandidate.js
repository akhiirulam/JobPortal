import React, { Component } from 'react';
import EmployerShortlistCandidatePage from '../components/EmployerShortlistCandidate/EmployerShortlistCandidatePage';
import Navbar from '../components/Navbar/Navbar';

class EmployerShortlistCandidate extends Component {
    render() {
        return (
            <div>
            <div className="fixed top-0 w-full bg-white shadow-md z-50">
              <Navbar />
            </div>
            <div className="pt-16">
              <EmployerShortlistCandidatePage />
            </div>
          </div>
        );
    }
}

export default EmployerShortlistCandidate;