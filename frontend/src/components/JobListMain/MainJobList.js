import React, { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-800 w-64 z-50`}
      >
        <div className="p-4 text-white">
          <button
            className="md:hidden text-white bg-red-500 p-2 rounded focus:outline-none"
            onClick={toggleSidebar}
          >
            Close
          </button>
          <h2 className="text-xl font-semibold">Sidebar</h2>
          <nav>
            <ul>
              <li className="mt-4">Link 1</li>
              <li className="mt-4">Link 2</li>
              <li className="mt-4">Link 3</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="p-4">
          <button
            className="md:hidden text-white bg-blue-500 p-2 rounded focus:outline-none"
            onClick={toggleSidebar}
          >
            Toggle Sidebar
          </button>
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p className="mt-4">This is the main content area.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
