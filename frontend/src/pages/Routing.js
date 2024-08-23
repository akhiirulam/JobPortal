import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "../components/Login/Login";
import Employer from "./Employer";
import CandidateAppliedJobs from "../components/candidateAppliedJobs/CandidateAppliedJobs";

function Landing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employer" element = {<Employer/>} />
        <Route path="/candidate/applied-jobs" element={<CandidateAppliedJobs/>} />
      </Routes>
    </Router>
  );
}

export default Landing;
