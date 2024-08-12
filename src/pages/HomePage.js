import React from "react";
import Companies from "../components/Companies/Companies";

const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto md:w-[1320px]">
        <Companies />
      </div>
      <hr className='w-screen' />
    </div>
  );
};

export default HomePage
