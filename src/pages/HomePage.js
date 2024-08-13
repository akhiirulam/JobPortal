import React from "react";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Companies from "../components/Companies/Companies";
import FindJob from "../components/FindJob/FindJob";
import Counts from "../components/Counts/Counts";
import NewsArticles from "../components/NewsArticles/NewsArticles";
import Joblist from "../components/JobList/JobList";
import AppDownload from "../AppDownload/AppDownload";
import RecruitingBanner from "../components/Banner/RecruitingBanner";
import Footer from "../components/Footer/Footer";
import BottomFooter from "../components/Footer/BottomFooter";
const HomePage = () => {
  return (
    <div>
      <div className="w-full">
        <Navbar />
        <Banner />
      
        <div className="container mx-auto md:w-[1320px]">
        <Joblist />
          <Companies />
        </div>
        <hr className='w-screen' />
        <div className="container mx-auto md:w-[1320px]">
          <FindJob />
          <Counts />
        </div>
        <NewsArticles />
        <div className="container mx-auto md:w-[1320px]">
        <AppDownload/>
        <RecruitingBanner/>
        <Footer/>
      </div>
      <hr className="w-full"/>
      <div className="container mx-auto md:w-[1320px]">
        <BottomFooter/>
        </div> 
      </div>
    </div>
  );
};

export default HomePage
