import React, { Component } from "react";
import CandidateDetailsPage from "../components/HomeCandidateDetails/CandidateDetailsPage";
import Navbar from "../components/Navbar/Navbar";


class HomeCandidateDetails extends Component {
  render() {
    return (
      <div>
        <div className="fixed top-0 w-full bg-white shadow-md z-50">
          <Navbar />
        </div>
        <div className="pt-16">
          <CandidateDetailsPage />
        </div>
      </div>
    );
  }
}

export default HomeCandidateDetails;
