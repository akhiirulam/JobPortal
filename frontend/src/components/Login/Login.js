import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Email before login request:", email);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/v1/profile/login",
        {
          email,
          password,
        }
      );

      setLoading(false);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful");
        if(response.data.userType === 'Candidate')
        {
          navigate("/candidate/dashBoard");
        }
        else if(response.data.userType === 'Employer')
        {
          navigate("/employer/empDashBoard");
        }
        
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
        navigate("/login");
      }
    }
  };

  const handleGoogleLogin = async(event) =>
    {
      console.log("Hello");
      window.location.href = 'http://localhost:5000/api/v1/profile/google';
    }

  return (
    <div className="flex items-center justify-center h-screen w-[800px] px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a
                href="/"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forget Password?
              </a>
            </div>
            <div className="mt-8">
              <button
                disabled={loading}
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
          <button className="button google" onClick={handleGoogleLogin}>
            <i className="fa fa-google"> Login with Google</i>
          </button>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/signup"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
