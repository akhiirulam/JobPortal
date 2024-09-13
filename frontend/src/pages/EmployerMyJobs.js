import React, { Component } from "react";
import EmployerMyJobsPage from "../components/EmployerMyJobs/EmployerMyJobsPage";
import Navbar from "../components/Navbar/Navbar";

class EmployerMyJobs extends Component {
  render() {
    return (
      <div>
        <div className="fixed top-0 w-full bg-white shadow-md z-50">
          <Navbar />
        </div>
        <div className="pt-16">
          <EmployerMyJobsPage />
        </div>
      </div>
    );
  }
}

export default EmployerMyJobs;
