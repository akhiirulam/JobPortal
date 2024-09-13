import React, { Component } from 'react';
import JobApplicantListPage from '../components/EmployerJobApplicants/EmployerJobApplicantPage';
import Navbar from '../components/Navbar/Navbar';

class EmployerJobApplicant extends Component {
    render() {
        return (
          <div>
           
              <div className="fixed top-0 w-full bg-white shadow-md z-50">
                <Navbar />
              </div>
              <div className="pt-16">
                <JobApplicantListPage />
              </div>
           
          </div>
        );
      }
}

export default EmployerJobApplicant;