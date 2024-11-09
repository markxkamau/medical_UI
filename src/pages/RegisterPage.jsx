import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = useState("");
  const [condition, setCondition] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [user, setUser] = React.useState([]);
  const { onLogin } = props;

  const validateUser = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const user = {
        firstName,
        lastName,
        condition,
        email,
        password,
      };
      setUser(user);
    } else {
      console.log("Passwords do not  match");
    }
    onLogin(firstName);
  };



  return (
    <>
      <div className="flex min-h-screen">
        {/* Left side for image or content */}
        <div className="w-1/2 bg-gray-200 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome!</h1>
        </div>

        {/* Right side for registration form */}
        <div className="w-1/2 flex items-center justify-center">
          <form
            className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
            onSubmit={validateUser}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Create Account
            </h2>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your First Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name{" "}
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your Last Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="condition"
              >
                Condition
              </label>
              <input
                id="condition"
                type="text"
                placeholder="Enter your Condition"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCondition(e.target.value)}
                value={condition}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>

            <p className="mt-4 text-center text-gray-600 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
