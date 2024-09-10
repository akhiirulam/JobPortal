import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userMode, setUserMode] = useState("Candidate"); // Tracks whether it's Candidate or Employer
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Toggle between Candidate and Employer
  const toggleUserMode = () => {
    setUserMode((prevMode) =>
      prevMode === "Candidate" ? "Employer" : "Candidate"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError(""); // Clear previous errors

      let response;

      if (userMode === "Employer") {
        response = await axios.post(
          "http://localhost:5000/api/v1/profile/employer/signup",
          {
            email,
            password,
            userMode,
          }
        );
      } else if (userMode === "Candidate") {
        response = await axios.post(
          "http://localhost:5000/api/v1/profile/candidate/signup",
          {
            email,
            password,
            userMode,
          }
        );
      }

      setLoading(false);

      if (response.data.message) {
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (err) {
      setLoading(false);

      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-5 sm:px-2">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg border overflow-hidden w-full max-w-md lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-6 md:p-8 lg:w-1/2">
          <div className="user-toggle mt-4">
            <p className="text-sm">Want to register as a different type?</p>
            <button
              onClick={toggleUserMode}
              className="w-full p-2 mt-2 bg-gray-500 text-white rounded"
            >
              Switch to {userMode === "Candidate" ? "Employer" : "Candidate"}
            </button>
          </div>
          <p className="text-xl text-gray-600 text-center">{`Register as a ${userMode}`}</p>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mt-4 flex items-center">
              <input type="checkbox" required className="mr-2" />
              <label className="text-sm text-gray-700">
                You accept our Terms and Conditions and Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-700">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
