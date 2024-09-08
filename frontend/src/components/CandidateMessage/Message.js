import React, { useState, useEffect } from "react";
import axios from "axios";
import CandidateSidebar from "../CandidateSidebar/CandidateSidebar";

const CandidateMessagePage = () => {
  const [selectedSender, setSelectedSender] = useState(null);
  const [filter, setFilter] = useState("all");
  const [chatMessages, setChatMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showFilters, setShowFilters] = useState(false); // New state to toggle filters

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("/api/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  const handleSenderClick = async (sender) => {
    setSelectedSender(sender);
    try {
      const response = await axios.get(`/api/messages/${sender.id}`);
      setChatMessages(response.data);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const newMessage = e.target.elements.message.value;

    if (newMessage.trim() !== "") {
      try {
        await axios.post("/api/messages", {
          senderId: selectedSender.id,
          message: newMessage,
        });
        setChatMessages([...chatMessages, { text: newMessage, sender: true }]);
        e.target.reset();
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const filteredMessages = messages.filter((msg) => {
    if (filter === "all") return true;
    return filter === "read" ? msg.read : !msg.read;
  });

  return (
    <div className="flex flex-col mt-[50px] md:flex-row h-screen">
      {/* Sidebar */}
      <CandidateSidebar className="md:w-1/4 w-full" />

      {/* Filters Sidebar */}
      <div className="md:w-1/4 w-full bg-gray-100 p-4 border-r md:ml-72">
        {/* Toggle Button for mobile view */}
        <div className="md:hidden mb-4">
          <button
            className="block w-full text-left p-2 rounded-md bg-blue-500 text-white"
            onClick={() => setShowFilters(!showFilters)} // Toggle filters visibility
          >
            Filter Messages
          </button>
        </div>

        {/* Filters - Conditionally render on mobile based on toggle state */}
        {showFilters && (
          <div className="md:hidden mb-4 space-y-2">
            <button
              className="block w-full text-left p-2 rounded-md bg-blue-500 text-white"
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className="block w-full text-left p-2 rounded-md bg-green-500 text-white"
              onClick={() => setFilter("read")}
            >
              Read
            </button>
            <button
              className="block w-full text-left p-2 rounded-md bg-red-500 text-white"
              onClick={() => setFilter("unread")}
            >
              Unread
            </button>
          </div>
        )}

        {/* Filters - Shown on desktop */}
        <div className="hidden md:block mb-4 space-y-2">
          <button
            className="block w-full text-left p-2 rounded-md bg-blue-500 text-white"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="block w-full text-left p-2 rounded-md bg-green-500 text-white"
            onClick={() => setFilter("read")}
          >
            Read
          </button>
          <button
            className="block w-full text-left p-2 rounded-md bg-red-500 text-white"
            onClick={() => setFilter("unread")}
          >
            Unread
          </button>
        </div>

        {/* Message List */}
        <h3 className="text-lg font-semibold mb-4">Messages</h3>
        <ul className="space-y-2 overflow-y-auto h-96">
          {filteredMessages.map((msg) => (
            <li
              key={msg.id}
              className={`p-3 rounded-md cursor-pointer ${
                msg.read ? "bg-green-100" : "bg-red-100"
              } ${selectedSender?.id === msg.id ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => handleSenderClick(msg)}
            >
              <div className="font-semibold">{msg.name}</div>
              <div className="text-sm text-gray-600 truncate">
                {msg.lastMessage}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        {selectedSender ? (
          <>
            <h3 className="text-lg font-semibold mb-4">
              Chat with {selectedSender.name}
            </h3>
            <div className="flex-1 overflow-y-auto border p-4 rounded-md mb-4 h-64 md:h-auto">
              {chatMessages.map((chat, index) => (
                <div
                  key={index}
                  className={`p-3 mb-2 rounded-md ${
                    chat.sender
                      ? "bg-blue-100 self-end"
                      : "bg-gray-100 self-start"
                  }`}
                >
                  {chat.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                name="message"
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a sender to view the chat
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateMessagePage;
