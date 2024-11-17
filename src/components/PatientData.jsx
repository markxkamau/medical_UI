import React from "react";
function PatientInfo(props) {
  const { patient } = props;
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mb-3 m-2">
        <h3 className="text-xl font-bold text-gray-800">Patient Information</h3>
        <div className="flex items-center justify-between">
          <div className="w-2/3">
            <ul className="mt-2 text-gray-700 ">
              <li className="flex py-2">
                <span className="font-bold w-24">Full name:</span>
                <p className="text-gray-700">{`${patient.firstName} ${patient.lastName}`}</p>
              </li>
              <li className="flex  py-2">
                <span className="font-bold w-24">Email:</span>
                <p className="text-gray-700 ">{patient.email}</p>
              </li>
              <li className="flex py-2">
                <span className="font-bold w-24">Condition:</span>
                <p className="text-gray-700">{patient.condition}</p>
              </li>
            </ul>
          </div>
          <div
            className="border border-gray-400 rounded flex justify-center w-1/3 "
            style={{ justifyContent: "space-between" }}
          >
            <img src={patient.image} alt="Profile Photo" />
            <p>{patient.image}</p>
          </div>
        </div>
      </div>
    </>
  );
}
const PatientData = ({ patient }) => {
  return (
    <>
      {/* Patient Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-3 m-2">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Patient Information
        </h3>
        <div className="flex items-center">
          {/* Optional Profile Image */}
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
            <img
              src={patient.image || "/default-avatar.png"}
              alt="Patient"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">
              {patient.name}
            </p>
            <p className="text-gray-600">Condition: {patient.condition}</p>

            <p className="text-gray-600">Contact: {patient.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PatientInfo;
