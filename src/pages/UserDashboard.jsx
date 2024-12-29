import React from "react";
import PatientInfo from "../components/PatientData";
import MedicationList from "../components/DrugList";
import DrugSchedule from "../components/DrugSchedule";
import DrugStock from "../components/DrugStock";
import HealthStatus from "../components/HealthStatus";
import Notification from "../components/Notification";

function UserDashboard({ patientInfo }) {
  const [medications, setMedications] = useState([]);

  async function updateMedication() {
    const medList = await fetchMedications();
    setMedications(medList);
  }

  useEffect(() => {}, [medications]);

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

export default UserDashboard;
