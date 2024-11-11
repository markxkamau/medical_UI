import React from "react";
function PatientData(props) {
  const{patient} = props;
  return (
    <>
      <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
        </div>
        <div className="flex " style={{ justifyContent: "space-between" }}>
          <div className="w-full">
            <ul className="mt-2 text-gray-700 ">
              {/**th:object="${patient_data}" */}
              <li className="flex border-y py-2">
                <span className="font-bold w-24">Full name:</span>
                <p className="text-gray-700">{patient.name}</p>
                {/**th:text="*{name}" */}
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Email:</span>
                <p className="text-gray-700">{patient.email}</p>
                {/**th:text="*{email}" */}
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Condition:</span>
                <p className="text-gray-700">{patient.condition}</p>
                {/**th:text="*{condition}" */}
              </li>
            </ul>
          </div>
          <div
            className=" border border-gray-400 rounded flex justify-center items-center w-40 h-40"
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
export default PatientData;
