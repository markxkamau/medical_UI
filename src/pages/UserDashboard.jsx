import React from "react";
import DrugList from "../components/DrugList";
import PatientData from "../components/PatientData";

function UserDashboard(props) {
  const { user, handleLogout } = props;

  const drugList = {
    drug1: {
      name: "Clobazam",
      scientificName: "Clobazam",
      size: 10,
      packaging: "Tablet",
      purpose: "Minor Seizures",
      dosage: "10mg",
      time: ["2100", "0200", "9000"],
    },
  };

  const patientInfo = {
    name: "Name",
    email: "email@gmail.com",
    condition: "Unknown",
    image: "Not Found",
  };
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
        <PatientData patient={patientInfo}/>
        <DrugList drugList={drugList} />
      </main>
    </div>
  );
}

export default UserDashboard;
