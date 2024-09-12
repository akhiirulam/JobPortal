// src/components/CompanyList.jsx
import React from 'react';
import CompanyCard from './CompanyCard';
import img1 from '../../public/figma.jpg'; // Import your images

const companyData = [
  {
    image: img1,
    name: 'Airbnb',
    buttonText: 'Vacancy'
  },
  {
    image: img1, // You can use different imported images for different companies
    name: 'Slack',
    buttonText: 'Vacancy'
  },
  // Add more company data as needed
];

const CompanyList = () => (
  <div className="space-y-4">
    {companyData.map((company, index) => (
      <CompanyCard
        key={index}
        image={company.image}
        name={company.name}
        buttonText={company.buttonText}
      />
    ))}
  </div>
);

export default CompanyList;
