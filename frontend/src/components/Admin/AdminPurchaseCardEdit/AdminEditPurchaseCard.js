import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';

const AdminEditPurchaseCard = () => {
  const { id } = useParams(); 
  
  // Initialize plan with default values
  const [plan, setPlan] = useState({
    name: '',
    amount: '',
    jobPosting: '',
    feature: '',
    jobValidity: '',
    support: '',
  });

 // Fetch existing plan data based on the id
 
  const fetchPlan = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/admin/editPurchaseCard/${id}`);
      setPlan(response.data);
    } catch (error) {
      console.error('Error fetching plan data:', error);
    }
  };


useEffect(() => {
  fetchPlan();
}, [id]);
    

  const handleChange = (e) => {
    setPlan({
      ...plan,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the updated plan data to the backend
      const response = await axios.put(`http://localhost:5000/api/v1/admin/updatePurchasecard/${id}`, plan, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Purchase Card updated successfully!');
      window.location.href = 'http://localhost:3000/adminPurchaseCard'; // Redirect to the listing page
    } catch (error) {
      console.error('Error updating plan:', error);
    }
  };

  return (
    <div className="mt-[115px]">
      <Sidebar />
      <div className="p-4 md:ml-72 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-2xl font-bold mb-4">Edit Purchase Card</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Plan Name</label>
              <input
                type="text"
                name="name"
                value={plan.name || ''} // Fallback to empty string
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
                value={plan.amount || ''} // Fallback to empty string
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
                value={plan.jobPosting || ''} // Fallback to empty string
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
                value={plan.feature || ''} // Fallback to empty string
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
                value={plan.jobValidity || ''} // Fallback to empty string
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
                value={plan.support || ''} // Fallback to empty string
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Premium Support 24/7"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              onChange={handleSubmit}
            >
              Update Plan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEditPurchaseCard;
