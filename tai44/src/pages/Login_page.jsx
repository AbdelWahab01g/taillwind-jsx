import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Import Lucide icons (only Eye and EyeOff)
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Forestimg from '../imgs/Forest-img.jpg'; // Import your image

const Login = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // State for error message
  const [error, setError] = useState('');

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send POST request to backend
      const response = await axios.post('http://your-backend-api.com/login', {
        username,
        password,
      });

      // Check if the response contains a JWT token
      if (response.data.token) {
        // Store the JWT token in local storage
        localStorage.setItem('token', response.data.token);

        // Redirect or perform other actions (e.g., navigate to dashboard)
        console.log('Login successful! Token:', response.data.token);
        setError(''); // Clear any previous errors
      } else {
        // Handle case where token is not returned
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      // Handle errors (e.g., invalid credentials, network issues)
      setError('Invalid username or password. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[900px] h-[564px] bg-white rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] flex overflow-hidden">
        {/* Image Section */}
        <img
          className="w-[450px] h-[564px] object-cover"
          src={Forestimg}
          alt="Login Visual"
        />

        {/* Login Form Section */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-10">
          {/* Login Title */}
          <div className="flex-col justify-start items-start flex">
          <div className="text-neutral-800 text-[28px] font-bold font-['Poppins']">
            Login
          </div>
          </div>

          {/* Form Fields */}
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full flex-col justify-start items-end gap-5 flex">
              {/* Username Field */}
              <div className="w-full h-[70px] flex-col justify-start items-start gap-[5px] flex">
                <div className="text-neutral-800 text-[16px] font-bold font-['Poppins']">
                  User Name
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

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm font-medium font-['Poppins']">
                  {error}
                </div>
              )}

              {/* Forgot Password */}
              <div className="text-neutral-600 text-sm font-semibold font-['Poppins'] cursor-pointer">
                Forgot password?
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full px-5 py-2.5 bg-[#d90429] rounded-[5px] justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-[#c00424] transition-colors"
              >
                <div className="text-white text-base font-bold font-['Poppins']">
                  Login
                </div>
              </button>
            </div>
          </form>

          {/* Divider and Register Section */}
          <div className="w-full flex-col justify-start items-start gap-2.5 flex">
            {/* Divider */}
            <div className="w-full justify-start items-center inline-flex">
              <div className="grow shrink basis-0 h-[0px] border border-[#666666]"></div>
              <div className="px-2.5 py-[5px] bg-white flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-[#535353] text-xs font-light font-['Poppins']">
                  or
                </div>
              </div>
              <div className="grow shrink basis-0 h-[0px] border border-[#7c7c7c]"></div>
            </div>

            {/* Register Button */}
            <div className="w-full px-5 py-2.5 bg-[#8d99ae] rounded-[5px] justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-[#7a869a] transition-colors">
              <Link to="/signup" className="text-[#edf2f4] text-base font-medium font-['Poppins']">
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;