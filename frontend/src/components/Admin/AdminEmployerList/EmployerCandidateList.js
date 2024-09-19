// src/components/AdminCandidateList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const AdminEmployerList = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch candidates from backend API
  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/admin/employerList'); 
      setCandidates(response.data);
   
      setLoading(false);
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  // Handle candidate deletion
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this candidate?")) {
      try {
        await axios.delete(`http://localhost:5000/api/v1/admin/removeEmployer/${id}`); 
        setCandidates(candidates.filter((candidate) => candidate._id !== id)); 
        console.log(`Candidate with id ${id} deleted.`);
      } catch (error) {
        console.error("Error deleting candidate:", error);
      }
    }
  };

  // If data is loading
  if (loading) {
    return <div className="text-center mt-[115px]">Loading candidates...</div>;
  }

  return (
    <div className="mt-[115px]">
      <Sidebar />
      {/* Overlay for mobile */}
      <div className="p-4 md:ml-72 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-2xl font-bold mb-4">Candidate List</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Name</th>
                  <th className="w-1/2 py-3 px-4 uppercase font-semibold text-sm">Email</th>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate._id} className="text-gray-700 text-center">
                    <td className="py-3 px-4 border-b">{candidate.name}</td>
                    <td className="py-3 px-4 border-b">{candidate.email}</td>
                   
                    <td className="py-3 px-4 border-b">
                      <button
                        onClick={() => handleDelete(candidate._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-700"
                      >
                        Delete
                      </button>
                      {/* Add Block Button Here */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployerList;
