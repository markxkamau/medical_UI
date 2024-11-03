import React from "react";

const UserLogin = (props) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState([]);
  const { onLogin } = props;

  const validateUser = (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return false;
    }

    setUser((currentUser) => {
      return [...currentUser, { username, email, password }];
    });

    onLogin(username);
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
              Log in
            </h2>

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

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>

            <p className="mt-4 text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Clcik to Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
