// src/components/CompanyList.jsx
import React from 'react';
import CandidateCard from './CandidateCard';


const CandidateList = ({data}) => (
  <div className="space-y-4">
    {data?.map((candidate, index) => (
      <CandidateCard
        key={index}
        image={candidate.image}
        name={candidate.name}
        category={candidate.category}
        location = {candidate.location }
        salary = {candidate.salary}
        salaryType = {candidate.salaryType}
        jobTags = {candidate.jobTags}
        userId = {candidate.userId}
      />
    ))}
  </div>
);

export default CandidateList;
