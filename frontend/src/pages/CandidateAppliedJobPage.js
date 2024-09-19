import React from "react";
import CandidateAppliedJobs from "../components/candidateAppliedJobs/CandidateAppliedJobs";

import Navbar from "../components/Navbar/Navbar";

const CandidateAppliedJobPage = () => {
  return (
    <div>
      <div className="fixed top-0 w-full bg-white shadow-md z-50">
        <Navbar />
      </div>
      <div className="pt-16">
        <CandidateAppliedJobs />
      </div>
    </div>
  );
};

export default CandidateAppliedJobPage;
