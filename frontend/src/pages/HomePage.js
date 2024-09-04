import React from "react";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Companies from "../components/Companies/Companies";
import FindJob from "../components/FindJob/FindJob";
import Counts from "../components/Counts/Counts";
import NewsArticles from "../components/NewsArticles/NewsArticles";
import Joblist from "../components/JobList/JobList";
import AppDownload from "../components/AppDownload/AppDownload";
import RecruitingBanner from "../components/RecruitingBanner/RecruitingBanner"
import BottomFooter from "../components/Footer/BottomFooter"
import Footer from "../components/Footer/Footer"
<<<<<<< HEAD
=======
import Jobpost from "./Jobpost";
>>>>>>> origin/doneByBasil


const HomePage = () => {
  return (
    <div>
      <div className="w-full">
        <Navbar />
        <Banner />
        <div className="container mx-auto md:w-[1320px]">
        <Joblist />
<<<<<<< HEAD
        {/* <Listjobs /> */}
=======
>>>>>>> origin/doneByBasil
        <Companies />
        </div>
        <hr className='w-screen' />
        <div className="container mx-auto md:w-[1320px]">
          <FindJob />
          <Counts />
        </div>
<<<<<<< HEAD
        <NewsArticles />
        <AppDownload />
       < RecruitingBanner />
       <Footer />
       <BottomFooter/>
=======
        <NewsArticles />   
        <div className="container mx-auto md:w-[1320px]">
        <AppDownload />
        < RecruitingBanner />
        <Footer />
        <BottomFooter/>
        </div>
       
>>>>>>> origin/doneByBasil

      </div>
    </div>
  );
};

export default HomePage
