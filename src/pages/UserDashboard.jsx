import React from "react";

function UserDashboard(props) {
  const { user, handleLogout } = props;
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Content */}
      <main className="container mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Brief description of this feature and how it benefits the user.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to Feature 1
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Brief description of another feature.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to Feature 2
            </button>
          </div>

          {/* Add more cards for each feature as needed */}
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;
