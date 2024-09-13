import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const email = params.get('email');

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      console.log("success page:", email);
      navigate('/candidate/candProfile');
    } else {
      navigate('/'); 
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
}

export default LoginSuccess;
