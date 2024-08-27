import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "../components/Login/Login";
import Employer from "./Employer";
import CandidateAppliedJobs from "../components/candidateAppliedJobs/CandidateAppliedJobs";
import EmployerCandidateAlert from "../components/employerCandidateAlerts/EmployerCandidateAlert";
import ChangePassword from "../components/changePassword/ChangePassword";
import DeleteProfile from "../components/deleteProfile/DeleteProfile";

function Landing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employer" element = {<Employer/>} />
        <Route path="/candidate/applied-jobs" element={<CandidateAppliedJobs/>} />
        <Route path="/employer/candidate-alerts" element={<EmployerCandidateAlert/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
        <Route path="/delete-profile" element={<DeleteProfile/>} />
      </Routes>
    </Router>
  );
}

export default Landing;
