import React from 'react';
import img1 from '../../public/figma.jpg'; // Import your images
import CandidateCard from './CandidateCard'; // Import the card component

const candidateList = [
  {
    image: img1,
    name: 'AAAA',
    title: 'Vacancy',
    location: 'Kochi',
    salary: '25000'
  },
  {
    image: img1, 
    name: 'BBB',
    title: 'Vacancy',
    location: 'Calicut',
    salary: '25000'
  },
  // Add more candidate data as needed
];

const CandidateData = () => (
  <div className="space-y-4">
    {candidateList.map((candidate, index) => (
      <CandidateCard
        key={index}
        image={candidate.image}
        name={candidate.name}
        title={candidate.title}
        location={candidate.location}
        salary={candidate.salary}
      />
    ))}
  </div>
);

export default CandidateData;
