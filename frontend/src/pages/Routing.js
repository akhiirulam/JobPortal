import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "../components/Login/Login";
<<<<<<< HEAD
import FindJobs from "./Jobpost";
import MainJob from "./MainJobList";
import EmployerList from "./EmployerList";
import DashBoard from './UserDashBoard';
import ShortListjobs from './ShortListjob';
import Meeting from "./Meeting";
import EmpDashBoard from "./EmpDashboard";
=======
import Employer from "./Employer";
import CandidateAppliedJobs from "../components/candidateAppliedJobs/CandidateAppliedJobs";
>>>>>>> origin/doneByBasil

function Landing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/mainJobList" element={<MainJob/>} />
        <Route path="/findJobs" element = {<FindJobs/>} />
        <Route path="/employerList" element = {<EmployerList/>} />
        <Route path="/dashBoard" element = {<DashBoard/>} />
        <Route path="/shortlistjobs" element = {<ShortListjobs/>} />
        <Route path="/meetings" element= {< Meeting/>} />
        <Route path="/empDashBoard" element={< EmpDashBoard/>} />
=======
        <Route path="/employer" element = {<Employer/>} />
        <Route path="/candidate/applied-jobs" element={<CandidateAppliedJobs/>} />
>>>>>>> origin/doneByBasil
      </Routes>
    </Router>
  );
}

export default Landing;
