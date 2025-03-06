import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated (e.g., check for a token in localStorage)
  const isAuthenticated = localStorage.getItem('token');

  // If authenticated, render the children (protected component)
  // If not authenticated, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;