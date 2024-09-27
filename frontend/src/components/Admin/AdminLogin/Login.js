import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const AdminLogin = () => {
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
        "http://localhost:5000/api/v1/admin/adminLogin",
        {
          email,
          password,
        }
      );

      setLoading(false);

      if (response.data.token) {
        toast.success("Login successful");
        Cookies.set("token", response.data.token, { expires: 1 / 12, path: "/" });

        if (response.data.userType === "Admin") {
          console.log(response.data.userType);
          navigate("/adminControl");
        }
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
        navigate("/admin/login");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-2">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden w-full max-w-sm md:max-w-lg lg:max-w-4xl">
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
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
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
          
          <div className="mt-4 text-center">
            <a
              href="/signup"
              className="text-xs text-gray-500 capitalize"
            >
              Don&apos;t have an account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
