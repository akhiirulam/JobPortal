import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "../components/Login/Login";
import FindJobs from "./Employer";
import MainJob from "./MainJobList";
import EmployerList from "./EmployerList";
import DashBoard from './UserDashBoard'

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
      </Routes>
    </Router>
  );
}

export default Landing;
