import React, { Component } from "react";

import Navbar from "../components/Navbar/Navbar";
import EmployerPackages from "../components/EmployerPackages/Products";

class EmployerPackagePage extends Component {
  render() {
    return (
      <div>
        <div className="fixed top-0 w-full bg-white shadow-md z-50">
          <Navbar />
        </div>
        <div className="pt-16">
          <EmployerPackages />
        </div>
      </div>
    );
  }
}

export default EmployerPackagePage;
