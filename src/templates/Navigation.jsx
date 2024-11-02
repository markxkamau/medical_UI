import React from "react";

export default function Navigation(param) {
  return (
    <nav className="bg-white w-full flex relative justify-between items-center px-8 h-20">
      {/* Logo */}
      <div
        style={{
          justifyContent: "space-between",
          fontSize: "x-large",
          textAlign: "center",
        }}
      >
        <i className="fa-solid fa-house"></i>
        <p className="fa-solid">My Profile</p>
      </div>
      {/* End Logo */}
      <div className="bg-gray-200 rounded-full p-3 border">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="flex-initial drop-down w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-3">
        {/* Dropdown List */}
        <ul>
          {/* TO DO:  Add dropdown list items  1.  Profile 2. Logout */}

          <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <button type="button"></button>
          </li>
          <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-red-600">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
            <button type="button">
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
