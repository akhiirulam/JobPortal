import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';


const AdminPurchaseCard = () => {
  const [plan, setPlan] = useState({
    name: '',
    amount: '',
    jobPosting: '',
    feature: '',
    jobValidity: '',
    support: '',
  });

  const handleEdit = (e) => {
    window.location.href = 'http://localhost:3000/adminPurchaseCardPage';
  }

  const handleChange = (e) => {
    setPlan({
      ...plan,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Creating FormData object to append the dynamic data
    const formData = new FormData();
    formData.append('name', plan.name);
    formData.append('amount', plan.amount);
    formData.append('jobPosting', plan.jobPosting);
    formData.append('feature', plan.feature);
    formData.append('jobValidity', plan.jobValidity);
    formData.append('support', plan.support);

    formData.forEach((value,key)=>{
        console.log(key,value);
    })
    

    try {
        const response = await axios.post('http://localhost:5000/api/v1/admin/adminPurchaseCardEdit', plan, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          alert('Purchase Card submitted successfully!');
          window.location.href = 'http://localhost:3000/adminPurchaseCardPage';

    } catch (error) {
      console.error('Error submitting plan:', error);
    }
  };

  return (
    <div className="mt-[115px]">
      <Sidebar />
      {/* Overlay for mobile */}
      <div className="p-4 md:ml-72 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <button className='bg-blue-600 rounded-md w-fit p-2 text-white' onClick={handleEdit}>Edit Purchase Cards</button>
          <h1 className="text-2xl font-bold mb-4">Candidate List</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Plan Name</label>
          <input
            type="text"
            name="name"
            value={plan.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Basic"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amount ($)</label>
          <input
            type="text"
            name="amount"
            value={plan.amount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="199.00"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Postings</label>
          <input
            type="number"
            name="jobPosting"
            value={plan.jobPosting}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="30"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Featured Jobs</label>
          <input
            type="number"
            name="feature"
            value={plan.feature}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="3"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Post Validity (days)</label>
          <input
            type="number"
            name="jobValidity"
            value={plan.jobValidity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="15"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Support Validity</label>
          <input
            type="text"
            name="support"
            value={plan.support}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Premium Support 24/7"
            required
          />
        </div>

        {/* Optional File Upload Field */}
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload File</label>
          <input
            type="file"
            name="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit Plan
        </button>
      </form>
    </div>
    </div></div>
  );
};

export default AdminPurchaseCard;
