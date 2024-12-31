import React, { useState } from "react";
import { conditionMedications } from "../data/conditionMedications";

const MedicationForm = ({ user }) => {
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedMedication, setSelectedMedication] = useState("");
  const [selectedDosage, setSelectedDosage] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [numberOfIntakes, setNumberOfIntakes] = useState(0);
  //Drug input by patient so as to and to the backend > drugInputRequest

  // Handle the condition change
  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value);
    setSelectedMedication(""); // Reset medication when condition changes
    setSelectedDosage(""); // Reset dosage when condition changes
    setNumberOfIntakes(0); // Reset number of intakes when condition changes
  };

  // Handle the medication change
  const handleMedicationChange = (e) => {
    setSelectedMedication(e.target.value);
    setSelectedDosage(""); // Reset dosage when condition changes
    setNumberOfIntakes(0); // Reset number of intakes when condition changes
  };

  // Handle the dosage change
  const handleDosageChange = (e) => {
    setSelectedDosage(e.target.value);
    setNumberOfIntakes(0); // Reset number of intakes when condition changes
  };

  const handleIntakeChange = (e) => {
    setNumberOfIntakes(e.target.value);
  };

  const handleTimeChange = (index, value) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index] = value; // Update the specific dose's time
    setSchedule(updatedSchedule);
  };

  // Handle the form submission (add medication)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      condition: selectedCondition,
      medication: selectedMedication,
      dosage: selectedDosage,
      schedule: schedule,
    });
  };

  // Get the relevant medications based on the selected condition
  const medicationsForCondition = conditionMedications[selectedCondition] || [];

  return (
    <div className="flex min-h-screen">
      <form
        className="w-full bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Medication Information
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="healthCondition"
          >
            Select Health Condition
          </label>
          <select
            id="healthCondition"
            value={selectedCondition}
            onChange={handleConditionChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Condition</option>
            {Object.keys(conditionMedications).map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>

        {selectedCondition && (
          <>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="medication"
              >
                Select Medication
              </label>
              <select
                id="medication"
                value={selectedMedication}
                onChange={handleMedicationChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select Medication</option>
                {medicationsForCondition.map((med) => (
                  <option key={med.medicationId} value={med.medicationId}>
                    {med.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedMedication && (
              <>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="dosage"
                  >
                    Select Dosage
                  </label>
                  <select
                    id="dosage"
                    value={selectedDosage}
                    onChange={handleDosageChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  >
                    <option value="">Select Dosage</option>
                    {medicationsForCondition
                      .find((med) => med.medicationId === selectedMedication)
                      ?.dosages.map((dose, index) => (
                        <option key={index} value={dose}>
                          {dose}
                        </option>
                      ))}
                  </select>
                </div>
                {selectedDosage && (
                  <>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="numberOfIntakes"
                      >
                        Input Frequency
                      </label>
                      <input
                        id="numberOfIntakes"
                        value={numberOfIntakes}
                        onChange={handleIntakeChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>

                    {numberOfIntakes > 0 &&
                      Array.from({ length: numberOfIntakes }).map(
                        (_, index) => (
                          <div key={index} className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor={`scheduleTime-${index}`}
                            >
                              Select Schedule Time for Dose {index + 1}
                            </label>
                            <input
                              id={`scheduleTime-${index}`}
                              type="time"
                              value={schedule[index] || ""}
                              onChange={(e) =>
                                handleTimeChange(index, e.target.value)
                              }
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              required
                            />
                          </div>
                        )
                      )}
                  </>
                )}
              </>
            )}
          </>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
        >
          Save Medication
        </button>
      </form>
    </div>
  );
};

export default MedicationForm;
