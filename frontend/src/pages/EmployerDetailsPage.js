import React, { Component } from "react";
import EmployerDetailsPage from "../components/EmployerDetails/EmployerDetailsPage";
import Navbar from "../components/Navbar/Navbar";


class EmployerDetails extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="fixed top-0 w-full bg-white shadow-md z-50">
            <Navbar />
          </div>
          <div className="pt-16">
            <EmployerDetailsPage />
          </div>
        </div>
      </div>
    );
  }
}

export default EmployerDetails;
