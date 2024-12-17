import React from "react";
import MedicationList from "./MedicationList";
import UserHealthRecords from "./UserHealthRecords";
// Registration Form
const RegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  // Collect basic info
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <select>
        <option value="epilepsy">Epilepsy</option>
        <option value="asthma">Asthma</option>
        {/* Other conditions */}
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

// User Profile Page (After Registration)
const UserProfilePage = ({ user }) => {
  const openAddMedicationForm = () => {
    console.log("// Open a new form to add medication");
  };
  const openAddHealthRecordForm = () => {
    console.log("// Open a new form to add health record");
  };
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <h2>Condition: {user.condition}</h2>

      {/* Medication Management Section */}
      <button onClick={openAddMedicationForm}>Add Medication</button>
      <MedicationList medications={user.medications} />

      {/* Health Records Section */}
      <button onClick={openAddHealthRecordForm}>Add Health Record</button>
      <UserHealthRecords records={user.healthRecords} />
    </div>
  );
};

// Medication Form (Separate Form to Add Medication)
const AddMedicationForm = () => {
  const handleSubmitMedication = () => {
    console.log("Medication Submitted");
  };
  return (
    <form onSubmit={handleSubmitMedication}>
      <select>
        <option value="aspirin">Aspirin</option>
        <option value="ibuprofen">Ibuprofen</option>
        {/* More medications */}
      </select>
      <input type="text" placeholder="Dosage" />
      <input type="time" placeholder="Schedule Time" />
      <button type="submit">Add Medication</button>
    </form>
  );
};

// Health Record Form (Separate Form to Add Health Record)
const AddHealthRecordForm = () => {
  const handleSubmitHealthRecord = () => {
    console.log("Health Record Submitted");
  };
  return (
    <form onSubmit={handleSubmitHealthRecord}>
      <input type="date" />
      <textarea placeholder="Notes" />
      <button type="submit">Add Record</button>
    </form>
  );
};

export default {
  RegistrationForm,
  AddHealthRecordForm,
  AddMedicationForm,
  UserProfilePage,
};
