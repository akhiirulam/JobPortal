import React from "react";
import SideBar from "./SideBar";
import JobCard from "./JobCard";
import Record from "./record.json";

const Mainjob = () => {
  return (
    <div>
      <div className="w-full mt-12 h-32 flex items-center justify-center bg-gray-200">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-1 text-black">jobList</h1>
          <p className="text-sm text-black">JobPath</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4">
        <div className="flex-none w-full md:w-1/4 lg:w-1/5 mb-4 md:mb-0">
          <SideBar />
        </div>

        <div className="flex-auto w-full md:w-3/4 lg:w-4/5">
        <div className="flex-auto w-full h-12 bg-red-500 gap-4 p-1 ">
          <p>show all 
            {/* {no of jobcards}  */}
             results</p>  
        </div>
          <section>
            <div className="grid grid-cols-1 gap-4">
              {Record.map((job, index) => (
                <JobCard
                  key={index}
                  logo={job.logo}
                  title={job.title}
                  feature={job.feature}
                  details={job.details}
                  location={job.location}
                  salary={job.salary}
                  type={job.type}
                  urgent={job.urgent}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Mainjob;