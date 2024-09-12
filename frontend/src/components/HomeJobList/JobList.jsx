// src/components/CompanyList.jsx
import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';


function JobList() {
  const [jobListData, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/v1/job/jobs'); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-4">
      {jobListData.map((job, index) => (
        <CompanyCard
          key={index}
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
