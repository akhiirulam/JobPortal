import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faUser, faFile, faBookmark, faComments, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faBullhorn, faBoxesPacking, faUserTie, faLock, faUserXmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import img1 from "../../public/emplyer.png";
import { FaEdit, FaRegEdit, FaUnlock } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MyJobs = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [aboutCompany, setAboutCompany] = useState(`
    <p>
      We are a leading company in the industry, committed to providing high-quality products and exceptional customer service. 
      Our mission is to innovate and offer solutions that meet the needs of our customers.
      With a dedicated team of professionals, we strive to maintain our position as a market leader while continuously improving and expanding our services.
    </p>
  `);


    const sideBarItems = [
        { id: 1, icon: faAddressBook, description: "User Dashboard", link: "/empDashboard" },
        { id: 2, icon: faUserTie, description: "Profile", link: "/emp-profile" },
        { id: 3, icon: faFile, description: "My Jobs", link: "/myJobs" },
        { id: 4, icon: faBullhorn, description: "Submit Job", link: "/applied-jobs" },
        { id: 5, icon: faBookmark, description: "Applicants Jobs", link: "/shortlisted-jobs" },
        { id: 6, icon: faUser, description: "Shortlist Candidates", link: "/following-employee" },
        { id: 7, icon: faBullhorn, description: "Candidate Alerts ", link: "/alert-jobs" },
        { id: 8, icon: faBoxesPacking, description: "Packages", link: "/messages" },
        { id: 9, icon: faComments, description: "Messages", link: "/messages" },
        { id: 10, icon: faHandshake, description: "Meetings", link: "/meetings" },
        { id: 11, icon: faLock, description: "Change Password", link: "/change-password" },
        { id: 12, icon: faUserXmark, description: "Delete Profile", link: "/delete-profile" },
        { id: 13, icon: faArrowRightFromBracket, description: "Logout", link: "/" }
    ];

    const profilePhotos = [
        { id: 1, photo: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, photo: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, photo: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 5, photo: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" },
    ]
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-gray-100 ">
            {/* Sidebar */}
            <div
                className={`fixed top-[115px] left-0 h-[calc(100vh-4rem)] overflow-y-auto bg-white text-gray-600 p-4 transition-transform duration-300 ease-in-out scrollbar-custom
          ${isSidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full"} 
          md:w-96 md:translate-x-0`}
            >
                {/* Sidebar content */}
                <div className="flex items-center space-x-4">
                    <img
                        className="w-20 h-20 rounded-lg"
                        src={img1}
                        alt="avatar"
                    />
                    <div className="flex flex-col p-2 gap-1">
                        <span className="text-xl font-bold">Employer</span>
                        <span className="text-sm">New York</span>
                        <button className="text-sm text-white w-24 h-6 rounded-md bg-blue-600">
                            View Profile
                        </button>
                    </div>
                </div>
                {/* User Dashboard */}
                <div className="flex flex-col space-y-2 p-4 mb-16">
                    <ul className=''>
                        {sideBarItems.map((item) => (
                            <NavLink to={item.link} activeClassName="active" key={item.id}>
                                <li className='mb-0.5 px-5 py-[13px] flex hover:text-[#1967D2] hover:bg-[#E8F0FA] text-[#696696] rounded-lg cursor-pointer'>
                                    <div className='mr-[15px] '><FontAwesomeIcon icon={item.icon} size="xl" /></div>
                                    <div>{item.description}</div>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`flex-1 p-4 mt-[50px] ml-0 md:ml-96 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-0"
                    }`}
            >
                <div className="p-4">
                    <button
                        className="md:hidden mb-4 p-2 bg-blue-500 text-white rounded"
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
                    </button>
                    {/* Main page  */}
                    <div className="w-full p-4">
                        <h2 className="text-3xl font-bold">Manage Jobs</h2>
                    </div>

                    {/* my profile edit form */}
                    <div className="w-full p-6 bg-white my-8 rounded-md">
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="outline-none border-none bg-custom-light p-4"
                                />
                            </div>
                            <div className="flex gap-2 items-center">
                                <p>Sort by:</p>
                                <select className="outline-none border-none bg-custom-light p-4">
                                    <option value="1">Newest</option>
                                    <option value="2">Oldest</option>
                                    <option value="3">Most Viewed</option>
                                    <option value="4">Least Viewed</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full my-8">
                            <table className="w-full">
                                <thead className="bg-custom-light">
                                    <tr className="text-primary">
                                        <th className="p-4">Title</th>
                                        <th className="p-4">Applicants</th>
                                        <th className="p-4">Created & Expired</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td className="p-4 font-medium">Junior Graphic Designer Web</td>
                                        <td className="p-4 text-primary">500 Applicats</td>
                                        <td className="p-4">Jan 1, 2021 - Dec 31, 2021</td>
                                        <td className="p-4 text-green-500
                                        ">Published</td>
                                        <td className="p-4 flex gap-4 justify-center">
                                            <button className="button bg-custom-dark py-2 px-2 rounded-md text-primary "><FaUnlock /></button>
                                            <button className="button bg-custom-dark py-2 px-2 rounded-md text-primary "><FaEdit /></button>
                                            <button className="button bg-custom-dark py-2 px-2 rounded-md text-primary "><IoMdClose /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 text-center">© 2024 Superio. All Right Reserved.</p>
                </div>
            </div>
        </div >
    );
};

export default MyJobs;
