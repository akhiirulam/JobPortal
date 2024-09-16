import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaClock, FaHourglass, FaTimes, FaSpinner } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import EmpSidebar from "../EmpSidebar/EmpSidebar";
import ScheduleMeeting from './ScheduleMeeting';
import Modal from './Modal';

const Meeting = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showScheduleMeeting, setShowScheduleMeeting] = useState(false);
  const [selectedMeetingId, setSelectedMeetingId] = useState(null);  // Add state for selected meeting ID

  const toggleScheduleMeeting = (meetingId) => {
    setSelectedMeetingId(meetingId);  // Set the selected meeting ID
    setShowScheduleMeeting(!showScheduleMeeting);
  };

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/meeting/showMeeting");
        setMeetings(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meetings:", error);
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[50px] bg-[#F5F7FC] min-h-screen">
      <EmpSidebar />
      <div className="lg:ml-72 md:ml-0 px-4 md:px-8">
        <h3 className="py-4 text-base md:text-2xl">Scheduled Meetings</h3>
        {meetings.length === 0 ? (
          <p>No meetings scheduled.</p>
        ) : (
          <div className="overflow-x-auto"> {/* Make the table scrollable on mobile */}
            <table className="min-w-full bg-white border-collapse">
              <tbody>
                {meetings.map((meeting) => (
                  <tr key={meeting._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4 sm:px-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="w-20 h-20 sm:w-24 sm:h-24">
                          <div className="bg-blue-600 flex justify-center rounded-t-lg p-2">
                            <span className="text-4xl font-bold">
                              {new Date(meeting.date).getDate()}
                            </span>
                          </div>
                          <div className="bg-gray-200 flex justify-center rounded-b-lg h-8">
                            <span className="text-sm text-gray-600 mt-2">
                              {new Date(meeting.date).toLocaleString('default', {
                                month: 'short',
                              })}{" "}
                              - {new Date(meeting.date).getFullYear()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h2 className="text-md sm:text-lg font-semibold">
                            <a href="/" className="text-blue-600 hover:underline">
                              {meeting.message}
                              {meeting._id}
                            </a>
                          </h2>
                          <div className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">
                            <div className="flex items-center space-x-2">
                              <span>Meeting with: {meeting.isZoomMeeting ? "Zoom" : "In-person"}</span>
                            </div>
                            <div className="flex flex-wrap items-center space-x-2 mt-1 sm:mt-1.5">
                              <div className="flex items-center space-x-2">
                                <span className="flex items-center text-gray-600">
                                  <FaClock className="mr-2 text-blue-500" />
                                  {meeting.time}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="flex items-center text-gray-600">
                                  <FaHourglass className="mr-2 text-blue-500" />
                                  {meeting.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 sm:px-6">
                      <div className="flex space-x-4">
                        <button
                          className="text-red-600 hover:text-red-800"
                          title="Messages"
                        >
                          <FaMessage />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          title="Reschedule"
                          onClick={() => toggleScheduleMeeting(meeting._id)}  // Pass meeting ID here
                        >
                          <FaSpinner />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          title="Remove"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pass the selected meeting ID to ScheduleMeeting component */}
      <Modal isOpen={showScheduleMeeting} onClose={toggleScheduleMeeting}>
        <ScheduleMeeting id={selectedMeetingId} />
      </Modal>
    </div>
  );
};

export default Meeting;
