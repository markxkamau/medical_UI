import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ companyName, callLogout, loginState }) => {
  const handleLogout = (e) => {
    e.preventDefault();

    callLogout(false);
  };
  return (
    <nav className="bg-white w-full flex relative justify-between items-center px-8 h-20">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-house text-xl"></i>
        {loginState ? (
          <p className="text-xl font-bold">{companyName}</p>
        ) : (
          <p className="text-xl font-bold">Company Name</p>
        )}
      </div>
      <ul className="relative flex space-x-4">
        <li>
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
        </li>
        {loginState ? (
          <li>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </Link>
          </li>
        ) : (
          <></>
        )}
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
          {loginState === false ? (
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link> // If not logged in
          ) : (
            <>
              <button
                type="submit"
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-500"
              >
                Logout
              </button>{" "}
              {/* If logged in */}
            </>
          )}
        </li>
        {loginState ? (
          <></>
        ) : (
          <li>
            <Link to="/register" className="text-gray-700 hover:text-blue-500">
              Register
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
