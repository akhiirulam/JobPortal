import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ScheduleMeeting = ({candidateId}) => {

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isZoomMeeting, setIsZoomMeeting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const formData = new FormData();
      formData.append("senderId",Cookies.get('userId'))
      formData.append("receiverId", candidateId)
      formData.append("subject",subject);
      formData.append("message",message);
   try {
    const response = await axios.post("http://localhost:5000/api/v1/message/startMessage", formData,
      {
        headers: {"Content-Type": "application/json"},
      }
    )
   } catch (error) {
    
   }
        
  };

  return (
    <div className="p-4 max-w-md bg-white rounded-lg shadow-lg relative">
      <h1 className="text-2xl font-bold mb-4">Send Message</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Message Subject"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            rows="4"
          />
        </div>

       

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          onClick={handleSubmit}
        >
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default ScheduleMeeting;
