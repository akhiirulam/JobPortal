import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; 


const isAuthenticated = () => {
  try {
    const token = Cookies.get('token');
    return !!token; 
  } catch (error) {
    console.error('Error retrieving authentication token:', error);
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
