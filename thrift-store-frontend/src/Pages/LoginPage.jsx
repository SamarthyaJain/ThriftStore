import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Install jwt-decode: npm install jwt-decode

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  // Function to handle Google OAuth success
  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential); // Decode the JWT token
    console.log('Google Login Success:', decoded);
    onLogin(); // Call the onLogin function passed from App.jsx
    navigate('/'); // Redirect to the home page
  };

  // Function to handle Google OAuth errors
  const handleGoogleLoginError = () => {
    console.log('Google Login Failed');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#F8ECD1] to-[#DEB6AB] flex items-center justify-center p-6">
      {/* Login Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
        {/* Graphic Header */}
        <div className="bg-gradient-to-r from-[#85586F] to-[#AC7D88] p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Welcome Back!</h2>
          <p className="text-[#F8ECD1] mt-2">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="p-8">
          {/* Google OAuth Button */}
          <div className="mb-6">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
              useOneTap // Enable one-tap sign-in
            />
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="border-t border-[#DEB6AB] flex-grow"></div>
            <span className="mx-4 text-[#85586F]">OR</span>
            <div className="border-t border-[#DEB6AB] flex-grow"></div>
          </div>

          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-[#85586F] font-semibold mb-2">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-[#DEB6AB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85586F]"
              />
              <FaUser className="absolute right-4 top-3 text-[#85586F]" />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-[#85586F] font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-[#DEB6AB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85586F]"
              />
              <FaLock className="absolute right-4 top-3 text-[#85586F]" />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-[#85586F] border-[#DEB6AB] rounded focus:ring-[#85586F]"
              />
              <label htmlFor="remember" className="ml-2 text-[#85586F]">
                Remember me
              </label>
            </div>
            <a href="#" className="text-[#85586F] hover:text-[#AC7D88] transition duration-300">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#85586F] to-[#AC7D88] text-white px-6 py-2 rounded-lg hover:from-[#AC7D88] hover:to-[#85586F] transition duration-300"
          >
            Login
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-[#85586F]">
          Don't have an account?{' '}
          <a href="#" className="text-[#AC7D88] hover:text-[#85586F] transition duration-300">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;