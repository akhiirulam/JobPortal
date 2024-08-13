import React from "react";
import AppDownload from "../components/AppDownload";
import RecruitingBanner from "../components/RecruitingBanner";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";

const HomePage = () => {
  return (
    <div>
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
  );
};

export default HomePage
