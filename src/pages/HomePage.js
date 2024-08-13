import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Companies from "../components/Companies/Companies";
import FindJob from "../components/FindJob/FindJob";
import Counts from "../components/Counts/Counts";
import NewsArticles from "../components/NewsArticles/NewsArticles";

const HomePage = () => {
  return (
    <div>
      <div className="w-full">
        <Navbar />
        <Banner />
        <div className="container mx-auto md:w-[1320px]">
          <Companies />
        </div>
        <hr className='w-screen' />
        <div className="container mx-auto md:w-[1320px]">
          <FindJob />
          <Counts />
        </div>
        <NewsArticles />
      </div>
    </div>
  );
};

export default HomePage
