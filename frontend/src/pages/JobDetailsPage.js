import React, { Component } from "react";
import JobDetails from "../components/JobDetails/JobDetailsPage";
import Navbar from "../components/Navbar/Navbar";

class JobDetailsPage extends Component {
  render() {
    return (
      <div>
      
          <div className="fixed top-0 w-full bg-white shadow-md z-50">
            <Navbar />
          </div>
          <div className="pt-16">
            <JobDetails />
          </div>
      
      </div>
    );
  }
}

export default JobDetailsPage;
