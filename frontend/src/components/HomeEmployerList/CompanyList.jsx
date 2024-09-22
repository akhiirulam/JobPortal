// src/components/CompanyList.jsx
import React from 'react';
import CompanyCard from './CompanyCard';


const CompanyList = ({data}) => (
  <div className="space-y-4">
    {data?.map((company, index) => (
      <CompanyCard
        key={index}
        image={company.image}
        name={company.name}
        companyId={company._id}
      />
    ))}
  </div>
);

export default CompanyList;
