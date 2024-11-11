import React from "react";

function HealthStatus({medications}) {
  return (
    <>
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
      {/* <HelthstatusOrPatientStatus /> */}
      <div className="bg-white p-6 rounded-lg shadow-md m-2">
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
    </>
  );
}

export default HealthStatus;
