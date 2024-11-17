import React from "react";
import PatientInfo from "../components/PatientData";
import MedicationList from "../components/DrugList";
import DrugSchedule from "../components/DrugSchedule";
import DrugStock from "../components/DrugStock";
import HealthStatus from "../components/HealthStatus";
import Notification from "../components/Notification";
function UserDashboard({patientInfo}) {

  //Drug input by patient so as to and to the backend > drugInputRequest
  // const drugList = [
  //   {
  //     name: "Clobazam",
  //     scientificName: "Clobazam",
  //     size: 10,
  //     packaging: "Tablet",
  //     purpose: "Minor Seizures",
  //     dosage: "10mg",
  //     time: ["2100", "0200", "9000"],
  //   },
  // ];

  //Patient Login and Registration to Capture this information > patientDataRequest
  // const patientInfo = {
  //   name: "Mark Kamau",
  //   email: "markxkamau@gmail.com",
  //   condition: "Epilepsy",
  //   image: "Not Found",
  // };

  //Backend request to capture this information > medicationListRequest
  const medications = [
    {
      id: 1,
      name: "Medication A",
      dosage: "50mg",
      frequency: "Once a day",
      nextDoseTime: "8:00 AM",
      stock: 10,
      expiration: "2025-12-31",
      adherence: 95,
    },
    {
      id: 2,
      name: "Medication B",
      dosage: "100mg",
      frequency: "Twice a day",
      nextDoseTime: "12:00 PM",
      stock: 3,
      expiration: "2024-06-15",
      adherence: 88,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Content */}
      <main className="container mx-auto py-2 ">
        <div className=" p-3 rounded-lg ">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Dashboard Overview
          </h3>
          {/* Add more cards for each feature as needed */}
          <PatientInfo patient={patientInfo} />
          <MedicationList medications={medications} />
          <DrugSchedule medications={medications} />
          <DrugStock medications={medications} />
          <HealthStatus medications={medications} />
          <Notification medications={medications} />
        </div>
      </main>
    </div>
  );
}

const variable = () => {
  return (
    <>
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
        <p className="text-gray-600">Brief description of another feature.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Feature 2
        </button>
      </div>
    </>
  );
};
export default UserDashboard;
