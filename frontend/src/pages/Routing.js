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
import LoginSuccess from '../components/Login/LoginSuccess';
//Employer pages
import EmployerProfilePage from "./EmployerProfileAdd";
import CandidateResumeAddPage from "./CandidateResume";
import EmployerSubmitJobPage from "./EmployerSubmitJobPage";
import ProductCart from "./ProductCart";
import Billing from "./BillingPage";
import EmployerMessagePage from "./EmployerMessagePage";
import JobDetails from "./JobDetailsPage";
import EmployerDetails from "./EmployerDetailsPage";

function Landing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainJobList" element={<MainJob/>} />
        <Route path="/employerList" element={<HomeEmployersListPage/>} />
        <Route path="/candidateList" element={<HomeCandidateListPage/>} />
        <Route path="/jobDetails" element={<JobDetails/>} />
        <Route path="/employerDetails" element={<EmployerDetails/>} />
 
        {/* <Route path="/findJobs" element = {<FindJobs/>} /> */}
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/candidate/dashBoard" element = {<DashBoard/>} />
        <Route path="/candidate/candProfile" element = {<CandidateProfilePage/>} />
        <Route path="/candidate/ResumeAdd" element = {<CandidateResumeAddPage/>} />
        <Route path="/candidate/shortlistjobs" element = {<ShortListjobs/>} />
        <Route path="/candidate/applied-jobs" element={<CandidateAppliedJobPage/>} />
        <Route path="/candidate/following-employers" element={<CandidateFollowingEmployer/>} />
        <Route path="/candidate/meetings" element= {< Meeting/>} />
        <Route path="/candidate/change-password" element={<ChangeAccountPassword/>} />
        <Route path="/candidate/delete-profile" element={<DeleteAccount/>} />
        
        <Route path="/product/cartPage" element={<ProductCart/>} />
        <Route path="/product/billing" element={<Billing/>} />
        
       
        <Route path="/employer/empDashBoard" element={< EmpDashBoard/>} />
        <Route path="/employer/empProfile" element={<EmployerProfilePage/>} />
        <Route path="/employer/submitJob" element={<EmployerSubmitJobPage/>} />
        <Route path="/employer/jobPost" element={< Jobpost/>} />
        <Route path="/employer/candidate-alerts" element={<EmployerCandidateAlertPage/>} />
        <Route path="/employer/message" element= {< EmployerMessagePage/>} />
        <Route path="/employer/meetings" element= {< Meeting/>} />

        <Route path="/employer/change-password" element={<ChangeAccountPassword/>} />
        <Route path="/employer/delete-profile" element={<DeleteAccount/>} />
      </Routes>
    </Router>
  );
}

export default Landing;
