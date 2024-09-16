import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ScheduleMeeting = ({id}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');
  const [isZoomMeeting, setIsZoomMeeting] = useState(false);
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);

   const handleSubmit = async (e) => {
    e.preventDefault();
   
    const meetingData = {
      date,
      time,
      duration,
      message,
      isZoomMeeting
    };
   try {
    const response = await axios.post(`http://localhost:5000/api/v1/meeting/rescheduleMeeting`,meetingData, {
      params: {
        meetingId: id 
      }
    });
    if (response.data.success) {
      alert("Meeting scheduled successfully!");
      window.location.href = "http://localhost:3000/employer/meetings";
  }
    
   } catch (error) {
    console.error("Error scheduling meeting:", error);
   }
        
  };

  return (
    <div className="p-4 max-w-md bg-white rounded-lg shadow-lg relative">
      <h1 className="text-2xl font-bold mb-4">Create Meeting</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Time Duration
          </label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder={id}
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

        <div className="flex items-center">
          <input
            type="checkbox"
            id="zoomMeeting"
            checked={isZoomMeeting}
            onChange={(e) => setIsZoomMeeting(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="zoomMeeting" className="text-sm font-medium text-gray-700">
            Zoom Meeting
          </label>
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
