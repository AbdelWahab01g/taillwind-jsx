import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom";


const Sidebaradmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Bouton pour ouvrir la sidebar */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 bg-[#00b6ce] text-white p-2 rounded-lg shadow-lg z-50"
      >
        <Menu size={28} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[#002341] text-white w-64 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg flex flex-col`}
      >
        {/* Bouton pour fermer la sidebar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-white"
        >
          <X size={28} />
        </button>

        {/* User Info */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-400">Admin</p>
        </div>

        {/* Sidebar Options */}
        <div className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
            <Link to="/inscription">
              <a
                href="#"
                className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition duration-200"
              >
                <span>Inscription List</span>
              </a>
            </Link>
            </li>
            <li>
            <Link to="/insertrole">
              <a
                href="#"
                className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition duration-200"
              >
                <span>Insert Role</span>
              </a>
            </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition duration-200"
              >
                <span>Profile Info</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Log Out Button (placé en bas) */}
        <div className="p-4 border-t border-gray-700 flex justify-center mb-4">
          <button
            className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
          >
            <div
              className="bg-[#00b6ce] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000000"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2">Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebaradmin;
