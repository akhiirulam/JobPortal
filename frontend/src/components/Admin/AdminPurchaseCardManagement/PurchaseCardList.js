import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const PurchaseCardList = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  // Fetch existing plan data
  const fetchPurchaseCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/admin/viewPurchaseCard');
      setCards(response.data); // Setting the fetched data to cards state
      setLoading(false);
    } catch (error) {
      console.error('Error fetching PurchaseCards:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchaseCards();
  }, []);

  const handleEdit = async (id) => {
 
      navigate(`/adminPurchaseCardEdit/${id}`); 
  
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this purchase card?')) {
      try {
        await axios.delete(`http://localhost:5000/api/v1/admin/removePurchaseCard/${id}`);
        setCards(cards.filter((card) => card._id !== id));
        console.log(`Purchase card with id ${id} deleted.`);
      } catch (error) {
        console.error('Error deleting purchase card:', error);
      }
    }
  };

  if (loading) {
    return <div className="mt-[115px]">Loading...</div>; // Loading indicator
  }

  return (
    <div className="mt-[115px]">
      <Sidebar />
      {/* Overlay for mobile */}
      <div className="p-4 md:ml-72 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-2xl font-bold mb-4">Purchase Card List</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Name</th>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Amount</th>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Job Posting</th>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Job Validity</th>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cards.map((card) => (
                  <tr key={card._id} className="text-gray-700 text-center">
                    <td className="py-3 px-4 border-b">{card.name}</td>
                    <td className="py-3 px-4 border-b">{card.amount}</td>
                    <td className="py-3 px-4 border-b">{card.jobPosting}</td>
                    <td className="py-3 px-4 border-b">{card.jobValidity}</td>
                    <td className="py-3 px-4 border-b">
                    <button
                        onClick={() => handleEdit(card._id)}
                        className="bg-blue-500 text-white px-3 py-1 w-16 rounded mr-2 hover:bg-blue-700 mb-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(card._id)}
                        className="bg-red-500 text-white px-3 py-1 w-16 rounded mr-2 hover:bg-red-700"
                      >
                        Delete
                      </button>
                      {/* Add Edit Button Here */}
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

export default PurchaseCardList;
