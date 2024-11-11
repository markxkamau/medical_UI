import React from "react";
const handleTakeMedication = (id) => {};

function DrugSchedule({ medications }) {
  return (
    <>
      <div className="bg-white p-6 m-2 rounded-lg shadow-md">
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
    </>
  );
}

const option2 = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Medication Schedule
        </h3>
        {/* <div className="space-y-4"> */}
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
        </div>
        {/* Add more as needed */}
      </div>
    </>
  );
};
export default DrugSchedule;
