import React from "react";
import DrugValues from "./DrugValues";
import { Link } from "react-router-dom";

function DrugList(props) {
  return (
    <>
      <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
        <h4 className="text-xl text-gray-900 font-bold">
          Medication Prescribed
        </h4>
        <div className="overflow-x-auto w-full my-10">
          <table className="w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Drug Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Drug Scientific Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Drug Size
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Drug Packaging
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Drug Purpose
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Drug Intakes
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Drug Time
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              <DrugValues drugList={props.drugList} />
            </tbody>
          </table>
        </div>
        <Link
          to="/newDrug"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Add Drug
        </Link>
      </div>
    </>
  );
}

//General information of the drugs
const MedicationList = ({ medications }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h4 className="text-lg font-semibold">Current Medications</h4>
          <p className="text-gray-600">{medications.length} Active</p>
        </div>

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
        <div className="bg-red-100 p-4 rounded-lg">
          <h4 className="text-lg font-semibold">Missed Doses</h4>
          <p className="text-gray-600">{medications.missedDoses} Missed</p>
        </div>
      </div>
    </>
  );
};

const values = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
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
        </div>
      </div>
    </>
  );
};

export default MedicationList;
