import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "../components/Login/Login";
// import FindJobs from "./JoblistHomePage";
import MainJob from "./MainJobList";
// import EmployerList from "./EmployerList";
import DashBoard from './UserDashBoard';
import ShortListjobs from './ShortListjob';
import Meeting from "./Meeting";
import EmpDashBoard from "./EmpDashboard";
import Jobpost from "./JoblistHomePage";
import CandidateFollowingEmployer from "./CandidateFollowingEmployer";
import CandidateAppliedJobPage from "./CandidateAppliedJobPage";
import DeleteAccount from "./DeleteAccount";
import ChangeAccountPassword from "./ChangeAccountPassword";
import EmployerCandidateAlertPage from "./EmployerCandidateAlertPage";
import HomeEmployersListPage from "./HomePageEmployerList";
import HomeCandidateListPage from "./homePageCandidateList";


function Landing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainJobList" element={<MainJob/>} />
        {/* <Route path="/findJobs" element = {<FindJobs/>} /> */}
        <Route path="/employerList" element={<HomeEmployersListPage/>} />
        <Route path="/candidateList" element={<HomeCandidateListPage/>} />
        <Route path="/dashBoard" element = {<DashBoard/>} />
        <Route path="/shortlistjobs" element = {<ShortListjobs/>} />
        <Route path="/meetings" element= {< Meeting/>} />
        <Route path="/empDashBoard" element={< EmpDashBoard/>} />
        <Route path="/jobPost" element={< Jobpost/>} />
        <Route path="/candidate/applied-jobs" element={<CandidateAppliedJobPage/>} />
        <Route path="/candidate/following-employers" element={<CandidateFollowingEmployer/>} />
        <Route path="/employer/candidate-alerts" element={<EmployerCandidateAlertPage/>} />
        <Route path="/change-password" element={<ChangeAccountPassword/>} />
        <Route path="/delete-profile" element={<DeleteAccount/>} />
      </Routes>
    </Router>
  );
}

export default Landing;
