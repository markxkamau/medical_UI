import React, { useState } from "react";

export default function PatientInput(props) {
  const [firstName, setFirstName] = useState("login");
  const [lastName, setLastName] = useState("login");
  const [email, setEmail] = useState("login");
  const [condition, setCondition] = useState("login");
  const [drugCount, setDrugCount] = useState("login");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [patients, setPatients] = useState([]);
  const{onLogin} = props;

  function registerPatient(e) {
    e.preventDefault();

    setPatients((currentPatient) => {
      return [
        ...currentPatient,
        {
          id: crypto.randomUUID,
          firstName: firstName,
          lastName: lastName,
          email: email,
          condition: condition,
          drugCount: drugCount,
          password: password,
          confirmPassword: confirmPassword,
        },
      ];
    });
  }

  return (
    <>
      <div className="flex min-h-screen">
        {/* Left side for image or content */}
        <div className="w-1/2 bg-gray-200 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome!</h1>
        </div>

        {/* Right side for registration form */}
        <div className="w-1/2 flex items-center justify-center">
          <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Create Account
            </h2>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => onLogin("firstName")}
              >
                Register
              </button>
            </div>

            <p className="mt-4 text-center text-gray-600 text-sm">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
