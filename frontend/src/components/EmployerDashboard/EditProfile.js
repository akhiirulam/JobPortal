import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faUser, faFile, faBookmark, faComments, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faBullhorn, faBoxesPacking, faUserTie, faLock, faUserXmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import img1 from "../../public/emplyer.png";


const EditProfile = () => {
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
                        <h2 className="text-3xl font-bold">Edit Profile</h2>
                    </div>

                    {/* my profile edit form */}
                    <div className="w-full p-6 bg-white my-8 rounded-md">
                        <p className="text-md font-bold">My Profile</p>
                        <p className="text-md font-bold my-8">Logo Image</p>
                        <div className="flex gap-6 w-full items-center">
                            <img src={img1} alt="logo" />
                            <button className="button bg-custom-dark px-8 py-4 rounded-md font-medium text-primary">Browse</button>
                        </div>

                        <p className="text-md font-bold mt-8 mb-1">Cover Photo</p>
                        <button className="button bg-custom-dark px-8 py-4 rounded-md font-medium text-primary">Browse</button>

                        {/* form */}
                        <form className="w-full my-8">
                            <div className="w-full flex gap-10 my-8">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold">Employer Name</label>
                                    <input
                                        type="text"
                                        placeholder="Employer"
                                        className="p-4 bg-slate-100 w-full rounded-md"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold">Email</label>
                                    <input
                                        type="text"
                                        placeholder="employer@gmail.com"
                                        className="p-4 bg-slate-100 w-full rounded-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full flex gap-10 my-8">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold">Phone Number</label>
                                    <input
                                        type="number"
                                        placeholder="123 444 555"
                                        className="p-4 bg-slate-100 w-full rounded-md"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold">Website</label>
                                    <input
                                        type="text"
                                        placeholder="themeforest.net"
                                        className="p-4 bg-slate-100 w-full rounded-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full flex gap-10 my-8">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold">Founded Date</label>
                                    <input
                                        type="number"
                                        placeholder="2005"
                                        className="p-4 bg-slate-100 w-full rounded-md"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold">Company Size</label>
                                    <input
                                        type="text"
                                        placeholder="50-100"
                                        className="p-4 bg-slate-100 w-full rounded-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full flex gap-10 my-8">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold">Categories <span className="text-red-500 text-base">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Employer"
                                        className="p-4 bg-slate-100 w-full rounded-md"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold">Introduction Video URL</label>
                                    <input
                                        type="text"
                                        placeholder="https://www.youtube.com/watch?v=nrJtHemSPW4"
                                        className="p-4 bg-slate-100 w-full rounded-md"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col my-5">
                                <p className="text-md font-bold">Profile url</p>
                                <div className="flex">
                                    <p className="text-gray-500">https://apusthemes.com/wp-demo/superio/employer/acemero/</p>
                                    <a href="#">Edit</a>
                                </div>
                            </div>

                            {/* about company */}
                            <div className="w-full flex gap-10 my-8">
                                <div className="flex flex-col gap-1 w-full">
                                    <label className="font-bold text-md py-6">About Company</label>
                                    <ReactQuill
                                        value={aboutCompany}
                                        onChange={setAboutCompany}
                                        modules={{
                                            toolbar: [
                                                ['bold', 'italic', 'underline', 'strike'],
                                                ['blockquote', 'code-block'],
                                                [{ 'header': 1 }, { 'header': 2 }],
                                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                [{ 'script': 'sub' }, { 'script': 'super' }],
                                                [{ 'indent': '-1' }, { 'indent': '+1' }],
                                                [{ 'direction': 'rtl' }],
                                                [{ 'size': ['small', false, 'large', 'huge'] }],
                                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                                [{ 'color': [] }, { 'background': [] }],
                                                [{ 'align': [] }],
                                                ['clean'],
                                            ],
                                        }}
                                        className="bg-slate-100 w-full h-56 rounded-md"
                                    />
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* Profile Photos section */}
                    <div className="w-full p-6 bg-white my-8 rounded-md">
                        <p className="text-base font-bold">Profile Photos</p>
                        <div className="my-4">
                            <div className="grid grid-cols-4">
                                {profilePhotos.map((photo, index) => (
                                    <div key={index} className="w-[80%] h-[80%] rounded-md overflow-hidden">
                                        <img src={photo.photo} className="w-full h-full object-cover" alt="profile" />
                                    </div>
                                ))}
                            </div>
                            <button className="button bg-custom-dark px-8 py-4 rounded-md font-medium text-primary">Browse</button>
                        </div>
                    </div>

                    {/* member section */}
                    <div className="w-full p-6 bg-white my-8 rounded-md">
                        <label className="text-base font-bold">Members</label>
                        <select className="p-4 bg-slate-100 w-full rounded-md text-bold my-4">
                            <option value="Member 1">Member 1</option>
                            <option value="Member 2">Member 2</option>
                            <option value="Member 3">Member 3</option>
                            <option value="Member 4">Member 4</option>
                        </select>
                        <button className="button bg-custom-dark px-8 py-4 rounded-md font-medium text-primary">Add Another Member</button>
                        <div className="flex flex-col  my-5">
                            <label className="text-base font-bold">Employees</label>
                            <input
                                type="text"
                                placeholder=""
                                className="p-4 bg-slate-100 w-full rounded-md text-bold my-4"
                            />
                        </div>
                    </div>

                    {/* social network section */}
                    <div className="w-full p-6 bg-white my-8 rounded-md">
                        <p className="text-base font-bold mb-7">Social Network</p>
                        <label className="text-base font-bold">Socials</label>
                        <select className="p-4 bg-slate-100 w-full rounded-md text-bold my-4">
                            <option value="Network 1">Network 1</option>
                        </select>
                        <select className="p-4 bg-slate-100 w-full rounded-md text-bold my-4">
                            <option value="Network 1">Network 2</option>
                        </select>
                        <select className="p-4 bg-slate-100 w-full rounded-md text-bold my-4">
                            <option value="Network 1">Network 3</option>
                        </select>
                        <select className="p-4 bg-slate-100 w-full rounded-md text-bold my-4">
                            <option value="Network 1">Network 4</option>
                        </select>
                        <button className="button bg-custom-dark px-8 py-4 rounded-md font-medium text-primary">Add Another Network</button>
                    </div>

                    {/* Contact infromation */}
                    <div className="w-full p-6 bg-white my-8 rounded-md">
                        <p className="text-base font-bold mb-7">Contact Information</p>
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-col">
                                <label className="text-base font-bold">Location</label>
                                <input
                                    type="text"
                                    placeholder="New York"
                                    className="p-4 bg-slate-100 w-full rounded-md text-bold my-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-base font-bold">Friendly Address</label>
                                <input
                                    type="text"
                                    placeholder="41 Ditmars Blvd, East Elmhurst, NY"
                                    className="p-4 bg-slate-100 w-full rounded-md text-bold my-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-base font-bold">Maps Location</label>
                                <input
                                    type="text"
                                    placeholder="104-45-104-41 Ditmars Blvd, East Elmhurst, NY"
                                    className="p-4 bg-slate-100 w-full rounded-md text-bold my-4"
                                />
                            </div>

                            {/* map */}
                            <div className="w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622138956!2d-74.3093241796713!3d40.69701929637387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1725282411486!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: "0" }}
                                    className="w-full h-80 rounded-md"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                            </div>
                            <div className="flex justify-between gap-10">
                                <input
                                    type="text"
                                    placeholder="40.76710812133617"
                                    className="p-4 bg-slate-100 w-full rounded-md text-bold my-4"
                                />
                                <input
                                    type="text"
                                    placeholder="-73.86544865187471"
                                    className="p-4 bg-slate-100 w-full rounded-md text-bold my-4"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="bg-primary text-white px-8 py-4 rounded-md text-bold">Save Profile</button>

                    <p className="text-sm text-gray-500 text-center">© 2024 Superio. All Right Reserved.</p>
                </div>
            </div>
        </div >
    );
};

export default EditProfile;
