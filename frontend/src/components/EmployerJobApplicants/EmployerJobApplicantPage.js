import React, { useState } from 'react';
import EmpSidebar from '../EmpSidebar/EmpSidebar';
import { FaCheck, FaDownload, FaPlus, FaRetweet, FaTimes } from 'react-icons/fa';


const JobApplicantListPage = () => {
  // State to manage applicants, jobs, and filters
  const [applicants, setApplicants] = useState([
    { id: 1, name: 'John Doe', status: 'Approved', job: 'Java Developer' },
    { id: 2, name: 'Jane Smith', status: 'Rejected', job: 'React Developer' },
    { id: 3, name: 'Alice Johnson', status: 'Pending', job: 'Java Developer' },
    // More applicants
  ]);

  const [jobs, setJobs] = useState(['Java Developer', 'React Developer', 'Node.js Developer']);
  const [filterJob, setFilterJob] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc
  const [statusFilter, setStatusFilter] = useState('Total');

  // Handle status filtering
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  // Handle job filter
  const handleJobFilter = (e) => {
    setFilterJob(e.target.value);
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle sorting
  const handleSort = () => {
    const sortedApplicants = [...applicants].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setApplicants(sortedApplicants);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Filtered and searched applicants
  const filteredApplicants = applicants
    .filter((applicant) => (statusFilter === 'Total' || applicant.status === statusFilter))
    .filter((applicant) => (filterJob ? applicant.job === filterJob : true))
    .filter((applicant) => applicant.job.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4 sm:p-6 mt-[50px] md:ml-72">

      <h1 className="text-xl sm:text-2xl font-bold mb-4">Job Applicant List</h1>
    < EmpSidebar/>
      {/* Status Filter Buttons */}
      <div className="mb-4 space-x-2 sm:space-x-4 flex flex-wrap gap-2 ">
        <button
          className={`px-3 sm:px-4 py-2 ${statusFilter === 'Total' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-md`}
          onClick={() => handleStatusFilter('Total')}
        >
          Total
        </button>
        <button
          className={`px-3 sm:px-4 py-2 ${statusFilter === 'Approved' ? 'bg-green-500 text-white' : 'bg-gray-200'} rounded-md`}
          onClick={() => handleStatusFilter('Approved')}
        >
          Approved
        </button>
        <button
          className={`px-3 sm:px-4 py-2 ${statusFilter === 'Rejected' ? 'bg-red-500 text-white' : 'bg-gray-200'} rounded-md`}
          onClick={() => handleStatusFilter('Rejected')}
        >
          Rejected
        </button>
      </div>

      {/* Filter and Search Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
        {/* Job Filter */}
        <div className="flex items-center">
          <label className="mr-2 font-medium">Filter by Job:</label>
          <select value={filterJob} onChange={handleJobFilter} className="p-2 border border-gray-300 rounded-md">
            <option value="">All Jobs</option>
            {jobs.map((job, index) => (
              <option key={index} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search for a job..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full sm:w-auto p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Sort Button */}
        <div className="flex items-center">
          <button onClick={handleSort} className="px-3 sm:px-4 py-2 bg-gray-500 text-white rounded-md">
            Sort by Name ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
          </button>
        </div>
      </div>

      {/* Applicants List */}
      <div>
        {filteredApplicants.length > 0 ? (
          <ul className="space-y-2">
            {filteredApplicants.map((applicant) => (
              <li key={applicant.id} className="p-4 border rounded-md bg-white shadow-sm">
                <h3 className="font-bold text-lg">{applicant.name}</h3>
                <p>Status: {applicant.status}</p>
                <p>Job: {applicant.job}</p>
                <p>
                    <div className='flex gap-x-4 '>
                    <FaPlus className='bg-gray-100 h-6 w-6 p-1'/>
                    <FaCheck className='bg-gray-100 h-6 w-6 p-1'/>
                    <FaRetweet className='bg-gray-100 h-6 w-6 p-1'/>
                    <FaDownload className='bg-gray-100 h-6 w-6 p-1'/>
                    <FaTimes className='bg-gray-100 h-6 w-6 p-1'/>
                    </div>
                   
                </p>
              </li>
            ))}
            
          </ul>
        ) : (
          <p>No applicants found.</p>
        )}
      </div>
    </div>
  );
};

export default JobApplicantListPage;
