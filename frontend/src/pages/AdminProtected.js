import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode"; 

const isAuthenticated = () => {
  try {
    const token = Cookies.get('token');
    const email = Cookies.get('adminEmail'); 

    if (!token || !email) return false; 

  
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; 

    if (decodedToken.exp && decodedToken.exp < currentTime) {

      Cookies.remove('token');
      Cookies.remove('adminEmail');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error retrieving or verifying token/email:', error);
    return false;
  }
};

const AdminProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminProtectedRoute;
