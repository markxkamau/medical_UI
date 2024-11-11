import React from "react";

function Design(props) {
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

  const handleTakeMedication = (medId) => {
    // Logic to mark the medication as taken
    console.log(`Medication ${medId} marked as taken.`);
  };

  const handleReorderMedication = (medId) => {
    // Logic to trigger a reorder action
    console.log(`Reorder triggered for Medication ${medId}.`);
  };

  return (
    <>
      {/* Patient Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Patient Information
        </h3>
        <div className="flex items-center">
          {/* Optional Profile Image */}
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
            {/* <img src={patient.profilePicture || '/default-avatar.png'} alt="Patient" className="w-full h-full object-cover" /> */}
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">patient.name</p>
            <p className="text-gray-600">Age: patient.age</p>
            <p className="text-gray-600">Medical ID: patient.medical</p>
            <p className="text-gray-600">Contact: patient.contactNumber</p>
            {/* {patient.allergies && (
              <p className="text-gray-600 mt-2">Allergies: {patient.allergies}</p>
            )} */}
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Dashboard Overview
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Current Medications</h4>
            <p className="text-gray-600">{medications.length} Active</p>
          </div>
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Current Medications
            </h3>
            <div className="space-y-4">
              {medications.map((med, index) => (
                <div key={index} className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold">{med.name}</h4>
                  <p className="text-gray-600">Dosage: {med.dosage}</p>
                  <p className="text-gray-600">Frequency: {med.frequency}</p>
                </div>
              ))}
            </div> */}
          {/* </div> */}
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Next Dose</h4>
            <p className="text-gray-600">{medications.nextDoseTime}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Stock Alerts</h4>
            <p className="text-gray-600">
              {medications.stock ? "Stock Low!" : "All Medications Stocked"}
            </p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Missed Doses</h4>
            <p className="text-gray-600">{medications.missedDoses} Missed</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* <h3 className="text-xl font-bold text-gray-800 mb-4">
          Medication Schedule
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Morning</h4>
              <p className="text-gray-600">Medication: ABC</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Take Now
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Afternoon</h4>
              <p className="text-gray-600">Medication: XYZ</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Take Now
            </button>
          </div> */}
        {/* Add more as needed */}
        {/* </div> */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Medication Schedule
          </h3>
          <div className="space-y-4">
            {medications.map((med, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{med.name}</h4>
                  <p className="text-gray-600">Next Dose: {med.nextDoseTime}</p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleTakeMedication(med.id)}
                >
                  Take Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Medication Stock
        </h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Medication</th>
              <th className="px-4 py-2 text-left">Stock Level</th>
              <th className="px-4 py-2 text-left">Expiration Date</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((med, index) => (
              <tr key={index} className={med.stock <= 5 ? "bg-red-100" : ""}>
                <td className="px-4 py-2">{med.name}</td>
                <td className="px-4 py-2">{med.stock}</td>
                <td className="px-4 py-2">{med.expiration}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Reorder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Medication Stock</h3>
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Medication</th>
                    <th className="px-4 py-2 text-left">Stock Level</th>
                    <th className="px-4 py-2 text-left">Expiration Date</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {medications.map((med, index) => (
                    <tr key={index} className={med.stock <= 5 ? "bg-red-100" : ""}>
                      <td className="px-4 py-2">{med.name}</td>
                      <td className="px-4 py-2">{med.stock}</td>
                      <td className="px-4 py-2">{med.expiration}</td>
                      <td className="px-4 py-2">
                        <button 
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleReorderMedication(med.id)}>
                          Reorder
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
        {/* </div> */}
      </div>
      {/* <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Health Stats</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Medication Adherence</h4>
            {/* <LineChart data={medicationAdherenceData} /> */}
      {/* </div>
          <div>
            <h4 className="font-semibold">Health Metrics (Blood Pressure)</h4>
            {/* <BarChart data={healthMetricsData} /> */}
      {/* </div>
        </div>
      </div> */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Health Stats</h3>
        <div className="space-y-4">
          {medications.map((med, index) => (
            <div key={index}>
              <h4 className="font-semibold">{med.name} Adherence</h4>
              {/* You can add charts or data for each medication */}
              <p className="text-gray-600">Adherence: {med.adherence}%</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Notifications</h3>
        <div className="space-y-4">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-gray-800">
              Your medication stock for ABC is low. Please reorder soon.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Reorder
            </button>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-800">
              Your next dose of XYZ is due in 2 hours.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Take Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
