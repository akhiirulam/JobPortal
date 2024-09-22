// src/components/CompanyList.jsx
import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';


function JobList({data}) {





  return (
    <div className="space-y-4">
      {data?.map((job, index) => (
        <CompanyCard
          key={job._id}
          jobId={job._id}
          image={job.featuredImage} // Use a default image if job.image is not available
          company={job.company}
          title={job.title}
          address={job.address}
          minSalary={job.minSalary}
          salaryType={job.salaryType}
          buttonText={job.buttonText}
        />
      ))}
    </div>
  );
}

export default JobList;
