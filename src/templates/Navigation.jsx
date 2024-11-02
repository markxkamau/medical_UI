import React from "react";

export default function Navigation({ onNavigate, userName }) {
  return (
    <nav className="bg-white w-full flex relative justify-between items-center px-8 h-20">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-house text-xl"></i>
        <p className="text-xl font-bold">{userName}</p>
      </div>
      {/* End Logo */}

      {/* User Icon and Dropdown */}
      <div className="relative">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="text-gray-700 hover:text-blue-500"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => onNavigate("login")}
            className="text-gray-700 hover:text-blue-500"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => onNavigate("logout")}
            className="text-gray-700 hover:text-blue-500"
          >
            Logout
          </button>

          <button
            type="button"
            onClick={() => onNavigate("register")}
            className="text-gray-700 hover:text-blue-500"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => onNavigate("patient")}
            className="text-gray-700 hover:text-blue-500"
          >
            Patient
          </button>
          <button
            type="button"
            onClick={() => onNavigate("drug")}
            className="text-gray-700 hover:text-blue-500"
          >
            Drug
          </button>
          <button
            type="button"
            onClick={() => onNavigate("data")}
            className="text-gray-700 hover:text-blue-500"
          >
            Data
          </button>
          <button
            type="button"
            onClick={() => onNavigate("test")}
            className="text-gray-700 hover:text-blue-500"
          >
            Test
          </button>
          <button
            type="button"
            onClick={() => onNavigate("stock")}
            className="text-gray-700 hover:text-blue-500"
          >
            Stock
          </button>
        </div>
      </div>
    </nav>
  );
}
