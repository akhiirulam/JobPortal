// src/components/CompanyList.jsx
import React from 'react';
import CandidateCard from './CandidateCard';
import img1 from '../../public/figma.jpg'; // Import your images

const candidateData = [
  {
    image: img1,
    name: 'Tharun',
    category: 'Design',
    location:'Kochi',
    salary:'35000',
    salaryType:'Monthly',
    jobTags:['App','Design','Php'],
    userId:'100'
  },
  {
    image: img1, // You can use different imported images for different companies
    name: 'Slack',
    category: 'Developer',
    location:'Trivandrum',
    salary:'45000',
    salaryType:'Monthly',
    jobTags:['React','Node','Php'],
    userId:'101'
  },
  // Add more company data as needed
];

const CandidateList = () => (
  <div className="space-y-4">
    {candidateData.map((candidate, index) => (
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
