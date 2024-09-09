export const handleGoogleLogin = () => {
    console.log("Initiating Google login");
    window.location.href = 'http://localhost:5000/api/v1/profile/google';
  };