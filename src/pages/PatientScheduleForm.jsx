import React, { useState, useEffect } from "react";

// Sample drugs, replace with actual data
const drugs = [
  { id: 1, name: "Aspirin" },
  { id: 2, name: "Paracetamol" },
  { id: 3, name: "Ibuprofen" }
];

const PatientScheduleForm = ({user}) => {
  const [drug, setDrug] = useState("");
  const [intakes, setIntakes] = useState(1);
  const [times, setTimes] = useState([]);
  const [startDate, setStartDate] = useState("");

  // Handle form submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary actions for submitting the form, e.g., calling an API
    console.log("Submitted data:", { drug, intakes, times, startDate });
  };

  // Time picker handler
  const handleTimeChange = (e, index) => {
    const newTimes = [...times];
    newTimes[index] = e.target.value;
    setTimes(newTimes);
  };

  const handleAddTime = () => {
    setTimes([...times, ""]);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Set Medication Schedule</h2>
      <form onSubmit={handleSubmit}>
        {/* Drug Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="drug">
            Select Medication
          </label>
          <select
            id="drug"
            className="w-full p-2 border rounded-md"
            value={drug}
            onChange={(e) => setDrug(e.target.value)}
          >
            <option value="">Select a Drug</option>
            {drugs.map((drug) => (
              <option key={drug.id} value={drug.name}>
                {drug.name}
              </option>
            ))}
          </select>
        </div>

        {/* Number of Intakes */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="intakes">
            Number of Daily Intakes
          </label>
          <input
            type="number"
            id="intakes"
            className="w-full p-2 border rounded-md"
            value={intakes}
            onChange={(e) => setIntakes(e.target.value)}
            min="1"
            max="6"
          />
        </div>

        {/* Medication Times */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Medication Times</label>
          {times.map((time, index) => (
            <div className="flex mb-2" key={index}>
              <input
                type="time"
                value={time}
                onChange={(e) => handleTimeChange(e, index)}
                className="p-2 border rounded-md mr-2"
              />
              <button
                type="button"
                onClick={() => setTimes(times.filter((_, i) => i !== index))}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          {intakes > times.length && (
            <button
              type="button"
              onClick={handleAddTime}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Add Time
            </button>
          )}
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            className="w-full p-2 border rounded-md"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Save Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientScheduleForm;
