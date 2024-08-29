import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "../components/Login/Login";
import FindJobs from "./Jobpost";
import MainJob from "./MainJobList";
import EmployerList from "./EmployerList";
import DashBoard from './UserDashBoard';
import ShortListjobs from './ShortListjob';
import Meeting from "./Meeting";
import EmpDashBoard from "./EmpDashboard";
import Jobpost from "./Jobpost";

function Landing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainJobList" element={<MainJob/>} />
        <Route path="/findJobs" element = {<FindJobs/>} />
        <Route path="/employerList" element = {<EmployerList/>} />
        <Route path="/dashBoard" element = {<DashBoard/>} />
        <Route path="/shortlistjobs" element = {<ShortListjobs/>} />
        <Route path="/meetings" element= {< Meeting/>} />
        <Route path="/empDashBoard" element={< EmpDashBoard/>} />
        <Route path="/jobPost" element={< Jobpost/>} />
      </Routes>
    </Router>
  );
}

export default Landing;
