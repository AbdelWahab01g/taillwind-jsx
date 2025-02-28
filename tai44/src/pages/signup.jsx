import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Import Lucide icons for password visibility
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#f5f4f4] p-8 rounded-lg shadow-lg w-full max-w-md"> {/* Added shadow-lg */}
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        {/* Full Name Input */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 text-left"> {/* Label aligned left */}
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Birth Date Input */}
        <div className="mb-4">
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 text-left"> {/* Label aligned left */}
            Birth Date
          </label>
          <input
            type="date"
            id="birthDate"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 text-left"> {/* Label aligned left */}
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left"> {/* Label aligned left */}
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left"> {/* Label aligned left */}
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-500" /> // Lucide EyeOff icon
              ) : (
                <Eye className="h-5 w-5 text-gray-500" /> // Lucide Eye icon
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 text-left"> {/* Label aligned left */}
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-500" /> // Lucide EyeOff icon
              ) : (
                <Eye className="h-5 w-5 text-gray-500" /> // Lucide Eye icon
              )}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/" className="text-blue-600 hover:text-blue-500">
                Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;