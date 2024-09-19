import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Select from "react-select";
import axios from "axios";
import toast from "react-hot-toast";
import EmpSidebar from "../EmpSidebar/EmpSidebar";

const EditJob = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [jobData, setJobData] = useState({
        jobTitle: "",
        companyName: "",
        jobDescription: "",
        tag: "",
        jobApplyEmail: "",
        minSalary: "",
        maxSalary: "",
        externalUrl: "",
        applicationDeadline: "",
        address: "",
        location: "",
        category: null,
        jobApplyType: null,
        experience: null,
        qualification: null,
        type: null,
        gender: null,
        salaryType: null,
        careerType: null,
    });

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await axios.get(`/api/jobs/${match.params.id}`);
                setJobData(response.data);
            } catch (error) {
                toast.error("Failed to fetch job data.");
            }
        };
        fetchJobData();
    }, [match.params.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleEditorChange = (content) => {
        setJobData((prevData) => ({ ...prevData, jobDescription: content }));
    };

    const handleSelectChange = (selectedOption, name) => {
        setJobData((prevData) => ({ ...prevData, [name]: selectedOption }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`/api/jobs/${match.params.id}`, jobData);
            toast.success("Job updated successfully!");
        } catch (error) {
            toast.error("Failed to update job.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="edit-job-container">
            <EmpSidebar />
            <form onSubmit={handleSubmit}>
                <h2>Edit Job</h2>
                <input
                    type="text"
                    name="jobTitle"
                    value={jobData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                    required
                />
                <input
                    type="text"
                    name="companyName"
                    value={jobData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                />
                <Editor
                    initialValue={jobData.jobDescription}
                    onEditorChange={handleEditorChange}
                    init={{
                        height: 400,
                        menubar: false,
                        plugins: "link image code",
                        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright | code",
                    }}
                />
                <input
                    type="text"
                    name="tag"
                    value={jobData.tag}
                    onChange={handleChange}
                    placeholder="Tags (comma separated)"
                />
                <input
                    type="email"
                    name="jobApplyEmail"
                    value={jobData.jobApplyEmail}
                    onChange={handleChange}
                    placeholder="Job Apply Email"
                    required
                />
                <input
                    type="number"
                    name="minSalary"
                    value={jobData.minSalary}
                    onChange={handleChange}
                    placeholder="Minimum Salary"
                />
                <input
                    type="number"
                    name="maxSalary"
                    value={jobData.maxSalary}
                    onChange={handleChange}
                    placeholder="Maximum Salary"
                />
                <input
                    type="url"
                    name="externalUrl"
                    value={jobData.externalUrl}
                    onChange={handleChange}
                    placeholder="External URL"
                />
                <input
                    type="date"
                    name="applicationDeadline"
                    value={jobData.applicationDeadline}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={jobData.address}
                    onChange={handleChange}
                    placeholder="Address"
                />
                <input
                    type="text"
                    name="location"
                    value={jobData.location}
                    onChange={handleChange}
                    placeholder="Location"
                />
                <Select
                    value={jobData.category}
                    onChange={(option) => handleSelectChange(option, "category")}
                    options={[/* your category options */]}
                    placeholder="Select Category"
                />
                <Select
                    value={jobData.jobApplyType}
                    onChange={(option) => handleSelectChange(option, "jobApplyType")}
                    options={[/* your job apply type options */]}
                    placeholder="Select Job Apply Type"
                />
                <Select
                    value={jobData.experience}
                    onChange={(option) => handleSelectChange(option, "experience")}
                    options={[/* your experience options */]}
                    placeholder="Select Experience"
                />
                <Select
                    value={jobData.qualification}
                    onChange={(option) => handleSelectChange(option, "qualification")}
                    options={[/* your qualification options */]}
                    placeholder="Select Qualification"
                />
                <Select
                    value={jobData.type}
                    onChange={(option) => handleSelectChange(option, "type")}
                    options={[/* your type options */]}
                    placeholder="Select Job Type"
                />
                <Select
                    value={jobData.gender}
                    onChange={(option) => handleSelectChange(option, "gender")}
                    options={[/* your gender options */]}
                    placeholder="Select Gender"
                />
                <Select
                    value={jobData.salaryType}
                    onChange={(option) => handleSelectChange(option, "salaryType")}
                    options={[/* your salary type options */]}
                    placeholder="Select Salary Type"
                />
                <Select
                    value={jobData.careerType}
                    onChange={(option) => handleSelectChange(option, "careerType")}
                    options={[/* your career type options */]}
                    placeholder="Select Career Type"
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Updating..." : "Update Job"}
                </button>
            </form>
        </div>
    );
};

export default EditJob;
