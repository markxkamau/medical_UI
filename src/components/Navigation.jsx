import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userName }) => {
  return (
      
      <nav className="bg-white w-full flex relative justify-between items-center px-8 h-20">
          {/* Logo */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-house text-xl"></i>
        <p className="text-xl font-bold">{userName}</p>
      </div>
      <ul className="relative flex space-x-4">
        
        <li>
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        </li>
        {/* <li>
          <Link to="/drug" className="text-gray-700 hover:text-blue-500">Drug</Link>
        </li>
        <li>
          <Link to="/data" className="text-gray-700 hover:text-blue-500">Data</Link>
        </li>
        <li>
          <Link to="/test" className="text-gray-700 hover:text-blue-500">Test</Link>
        </li>
        <li>
          <Link to="/stock" className="text-gray-700 hover:text-blue-500">Stock</Link>
        </li> */}
        <li> 
          {userName === 'Company Name' ? (
            <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link> // If not logged in
          ) : (
            <>
              <span>Welcome, {userName}</span>
              <Link to="/logout" className="text-gray-700 hover:text-blue-500">Logout</Link> {/* If logged in */}
            </>
          )}
        </li>
        <li>
          <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
