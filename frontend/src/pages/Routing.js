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
import CandidateProfilePage from "./CandidateProfilePage";

//Employer pages
import EmployerProfilePage from "./EmployerProfileAdd";
import CandidateResumeAddPage from "./CandidateResume";


function Landing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainJobList" element={<MainJob/>} />
        <Route path="/employerList" element={<HomeEmployersListPage/>} />
        <Route path="/candidateList" element={<HomeCandidateListPage/>} />
        {/* <Route path="/findJobs" element = {<FindJobs/>} /> */}
       
        <Route path="/candidate/dashBoard" element = {<DashBoard/>} />
        <Route path="/candidate/candProfile" element = {<CandidateProfilePage/>} />
        <Route path="/candidate/ResumeAdd" element = {<CandidateResumeAddPage/>} />
        <Route path="/candidate/shortlistjobs" element = {<ShortListjobs/>} />
        <Route path="/candidate/applied-jobs" element={<CandidateAppliedJobPage/>} />
        <Route path="/candidate/following-employers" element={<CandidateFollowingEmployer/>} />
        <Route path="/candidate/meetings" element= {< Meeting/>} />
        <Route path="/candidate/change-password" element={<ChangeAccountPassword/>} />
        <Route path="/candidate/delete-profile" element={<DeleteAccount/>} />

        <Route path="/employer/empDashBoard" element={< EmpDashBoard/>} />
        <Route path="/employer/empProfile" element={<EmployerProfilePage/>} />
        <Route path="/employer/jobPost" element={< Jobpost/>} />
        <Route path="/employer/candidate-alerts" element={<EmployerCandidateAlertPage/>} />
        <Route path="/employer/meetings" element= {< Meeting/>} />
        <Route path="/employer/change-password" element={<ChangeAccountPassword/>} />
        <Route path="/employer/delete-profile" element={<DeleteAccount/>} />
      </Routes>
    </Router>
  );
}

export default Landing;
