import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Import Lucide icons
import axios from 'axios'; // Import Axios
import Forestimg from '../imgs/Forest-img.jpg';

const Signup = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for form fields
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for error message
  const [error, setError] = useState('');

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handle form submission for signup
  const handleSignupSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Send POST request to backend
      const response = await axios.post('http://your-backend-api.com/signup', {
        fullName,
        username,
        email,
        number,
        password,
      });

      // Check if the response contains a success message or token
      if (response.data.success) {
        console.log('Signup successful!');
        setError(''); // Clear any previous errors
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (err) {
      // Handle errors (e.g., duplicate username, network issues)
      setError('Signup failed. Please try again.');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[900px] h-[780px] bg-white rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] flex overflow-hidden">
        {/* Image Section */}
        <img
          className="w-[450px] h-[780px] object-cover"
          src={Forestimg}
          alt="Signup Visual"
        />

        {/* Signup Form Section */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-10">
          {/* Title */}
          <div className="flex-col justify-start items-start flex">
          <div className="text-neutral-800 text-[28px] font-bold font-['Poppins']">
            Sign Up
          </div>
          </div>

          {/* Form Fields */}
          <form className="w-full" onSubmit={handleSignupSubmit}>
            <div className="w-full flex-col justify-start items-end gap-5 flex">
              {/* Full Name Field */}
              <div className="w-full h-[70px] flex-col justify-start items-start gap-[5px] flex">
                <div className="text-neutral-800 text-[16px] font-bold font-['Poppins']">
                  Full Name
                </div>
                <div className="w-full px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full text-neutral-800 text-base font-light font-['Poppins'] outline-none"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

              {/* Username Field */}
              <div className="w-full h-[70px] flex-col justify-start items-start gap-[5px] flex">
                <div className="text-neutral-800 text-[16px] font-bold font-['Poppins']">
                  Username
                </div>
                <div className="w-full px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full text-neutral-800 text-base font-light font-['Poppins'] outline-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="w-full h-[70px] flex-col justify-start items-start gap-[5px] flex">
                <div className="text-neutral-800 text-[16px] font-bold font-['Poppins']">
                  Email
                </div>
                <div className="w-full px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full text-neutral-800 text-base font-light font-['Poppins'] outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div className="w-full h-[70px] flex-col justify-start items-start gap-[5px] flex">
                <div className="text-neutral-800 text-[16px] font-bold font-['Poppins']">
                  Phone Number
                </div>
                <div className="w-full px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full text-neutral-800 text-base font-light font-['Poppins'] outline-none"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="w-full h-[70px] flex-col justify-start items-start gap-[5px] flex">
                <div className="text-neutral-800 text-[16px] font-bold font-['Poppins']">
                  Password
                </div>
                <div className="w-full px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle input type
                    placeholder="Enter your password"
                    className="w-full text-neutral-800 text-base font-light font-['Poppins'] outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* Eye Icon to toggle password visibility */}
                  <div
                    className="cursor-pointer text-neutral-500 hover:text-neutral-700"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="w-full h-[70px] flex-col justify-start items-start gap-[5px] flex">
                <div className="text-neutral-800 text-[16px] font-bold font-['Poppins']">
                  Confirm Password
                </div>
                <div className="w-full px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'} // Toggle input type
                    placeholder="Confirm your password"
                    className="w-full text-neutral-800 text-base font-light font-['Poppins'] outline-none"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {/* Eye Icon to toggle confirm password visibility */}
                  <div
                    className="cursor-pointer text-neutral-500 hover:text-neutral-700"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm font-medium font-['Poppins']">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-5 py-2.5 bg-[#d90429] rounded-[5px] justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-[#c00424] transition-colors mt-2"
              >
                <div className="text-white text-base font-medium font-['Poppins']">
                  Sign Up
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;