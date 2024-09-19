import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "../components/Login/Login";

// import FindJobs from "./JoblistHomePage";
import MainJob from "./MainJobList";
// import EmployerList from "./EmployerList";
import DashBoard from "./UserDashBoard";
import ShortListjobs from "./ShortListjob";
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
import LoginSuccess from "../components/Login/LoginSuccess";
//Employer pages
import EmployerProfilePage from "./EmployerProfileAdd";
import CandidateResumeAddPage from "./CandidateResume";
import EmployerSubmitJobPage from "./EmployerSubmitJobPage";
import ProductCart from "./ProductCart";
import Billing from "./BillingPage";
import EmployerMessagePage from "./EmployerMessagePage";
import JobDetails from "./JobDetailsPage";
import EmployerDetails from "./EmployerDetailsPage";
import EmployerJobApplicant from "./EmployerJobApplicant";
import CandidateMessage from "./CandidateMessagePage";
import CandiateAlertJobs from "./CandiateAlertJobsPage";
import EmployerMyJobs from "./EmployerMyJobs";
import EmployerShortlistCandidate from "./EmployerShortlistCandidate";
import Signup from "../components/SignupPage/SignUp";

//
import ProtectedRoute from "./ProtectedRoute";
import HomeProductPage from "./HomeProductPage";
import HomeCandidateDetails from "./HomeCandidateDetails";
import AdminControlPage from "./AdminPage";
import AdminCandidateListPage from "./AdminCandidateList";
import AdminEmployerListPage from "./AdminEmployerList";
import AdminPurchaseCardPage from "./AdminPurchaseCardCreate";
import AdminPurchaseCardEditPage from "./AdminPurchaseCardEdit";
import AdminPurchaseCardManagement from "./AdminPurchaseCardManagement";




function Landing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainJobList" element={<MainJob />} />
        <Route path="/employerList" element={<HomeEmployersListPage />} />
        <Route path="/candidateList" element={<HomeCandidateListPage />} />
        <Route path="/jobDetails" element={<JobDetails />} />
        <Route path="/employerDetails" element={<EmployerDetails />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/Products" element={<HomeProductPage/>}></Route>
        <Route path="/candidateDetails" element={<HomeCandidateDetails/>}></Route>
        <Route path="/adminControl" element={<AdminControlPage/>}></Route>
        <Route path="/adminCandidateList" element={<AdminCandidateListPage/>}></Route>
        <Route path="/adminEmployerList" element={<AdminEmployerListPage/>}></Route>
        <Route path="/adminPurchaseCard" element={<AdminPurchaseCardManagement/>}></Route>
        <Route path="/adminPurchaseCardCreate" element={<AdminPurchaseCardPage/>}></Route>
        <Route path="/adminPurchaseCardEdit/:id" element={<AdminPurchaseCardEditPage/>}></Route>
       

        {/* <Route path="/findJobs" element = {<FindJobs/>} /> */}

        <Route
          path="/candidate/dashBoard"
          element={
            <ProtectedRoute>
              {" "}
              <DashBoard />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/candProfile"
          element={
            <ProtectedRoute>
              {" "}
              <CandidateProfilePage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/ResumeAdd"
          element={
            <ProtectedRoute>
              {" "}
              <CandidateResumeAddPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/applied-jobs"
          element={
            <ProtectedRoute>
              {" "}
              <CandidateAppliedJobPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/shortlistjobs"
          element={
            <ProtectedRoute>
              {" "}
              <ShortListjobs />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/following-employers"
          element={
            <ProtectedRoute>
              {" "}
              <CandidateFollowingEmployer />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/alertJobs"
          element={
            <ProtectedRoute>
              {" "}
              <CandiateAlertJobs />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/message"
          element={
            <ProtectedRoute>
              {" "}
              <CandidateMessage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/meetings"
          element={
            <ProtectedRoute>
              {" "}
              <Meeting />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/change-password"
          element={
            <ProtectedRoute>
              {" "}
              <ChangeAccountPassword />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/delete-profile"
          element={
            <ProtectedRoute>
              {" "}
              <DeleteAccount />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="/product/cartPage" element={<ProductCart />} />
        <Route path="/product/billing" element={<Billing />} />

        <Route
          path="/employer/empDashBoard"
          element={
            <ProtectedRoute>
              {" "}
              <EmpDashBoard />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/empProfile"
          element={
            <ProtectedRoute>
              {" "}
              <EmployerProfilePage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/myJobs"
          element={
            <ProtectedRoute>
              {" "}
              <EmployerMyJobs />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/submitJob"
          element={
            <ProtectedRoute>
              {" "}
              <EmployerSubmitJobPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/jobPost"
          element={
            <ProtectedRoute>
              {" "}
              <Jobpost />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/jobApplicant"
          element={
            <ProtectedRoute>
              {" "}
              <EmployerJobApplicant />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/shortlistCandidate"
          element={
            <ProtectedRoute>
              {" "}
              <EmployerShortlistCandidate />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/candidate-alerts"
          element={
            <ProtectedRoute>
              {" "}
              <EmployerCandidateAlertPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/message"
          element={
            <ProtectedRoute>
              {" "}
              <EmployerMessagePage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer/meetings"
          element={
            <ProtectedRoute>
              {" "}
              <Meeting />{" "}
            </ProtectedRoute>
          }
        />

        <Route
          path="/employer/change-password"
          element={<ChangeAccountPassword />}
        />
        <Route path="/employer/delete-profile" element={<DeleteAccount />} />
      </Routes>
    </Router>
  );
}

export default Landing;
