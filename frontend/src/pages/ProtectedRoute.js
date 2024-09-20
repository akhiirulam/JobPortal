import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; 


const isAuthenticated = () => {
  try {
    const token = Cookies.get('token');
    const email = Cookies.get('email'); 
    return !!token && !!email; 
  } catch (error) {
    console.error('Error retrieving authentication token or email:', error);
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

