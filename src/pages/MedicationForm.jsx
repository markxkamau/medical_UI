import React, { useState } from 'react';

const conditionMedications = {
  asthma: [
    { medicationId: "med1", name: "Albuterol", dosages: ["100mcg", "200mcg", "300mcg"] },
    { medicationId: "med2", name: "Fluticasone", dosages: ["50mcg", "100mcg"] },
    { medicationId: "med3", name: "Montelukast", dosages: ["10mg", "5mg"] },
    { medicationId: "med4", name: "Budesonide", dosages: ["200mcg", "400mcg"] },
    { medicationId: "med5", name: "Ipratropium", dosages: ["18mcg", "36mcg"] }
  ],
  epilepsy: [
    { medicationId: "med6", name: "Valproic Acid", dosages: ["500mg", "250mg"] },
    { medicationId: "med7", name: "Lamotrigine", dosages: ["100mg", "50mg", "25mg"] },
    { medicationId: "med8", name: "Levetiracetam", dosages: ["500mg", "250mg"] },
    { medicationId: "med9", name: "Carbamazepine", dosages: ["200mg", "400mg"] },
    { medicationId: "med10", name: "Topiramate", dosages: ["50mg", "25mg"] }
  ],
  diabetes: [
    { medicationId: "med11", name: "Metformin", dosages: ["500mg", "1000mg", "850mg"] },
    { medicationId: "med12", name: "Insulin", dosages: ["10 units", "20 units", "50 units"] },
    { medicationId: "med13", name: "Glyburide", dosages: ["2.5mg", "5mg"] },
    { medicationId: "med14", name: "Glipizide", dosages: ["5mg", "10mg"] },
    { medicationId: "med15", name: "Pioglitazone", dosages: ["15mg", "30mg"] }
  ],
  hypertension: [
    { medicationId: "med16", name: "Lisinopril", dosages: ["10mg", "20mg", "40mg"] },
    { medicationId: "med17", name: "Amlodipine", dosages: ["5mg", "10mg"] },
    { medicationId: "med18", name: "Losartan", dosages: ["25mg", "50mg"] },
    { medicationId: "med19", name: "Hydrochlorothiazide", dosages: ["12.5mg", "25mg"] },
    { medicationId: "med20", name: "Metoprolol", dosages: ["50mg", "100mg"] }
  ]
};

const MedicationForm = () => {
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedMedication, setSelectedMedication] = useState('');
  const [selectedDosage, setSelectedDosage] = useState('');
  const [schedule, setSchedule] = useState('');

  // Handle the condition change
  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value);
    setSelectedMedication(''); // Reset medication when condition changes
    setSelectedDosage(''); // Reset dosage when condition changes
  };

  // Handle the medication change
  const handleMedicationChange = (e) => {
    setSelectedMedication(e.target.value);
  };

  // Handle the dosage change
  const handleDosageChange = (e) => {
    setSelectedDosage(e.target.value);
  };

  // Handle the form submission (add medication)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      condition: selectedCondition,
      medication: selectedMedication,
      dosage: selectedDosage,
      schedule: schedule
    });
  };

  // Get the relevant medications based on the selected condition
  const medicationsForCondition = conditionMedications[selectedCondition] || [];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Health Condition:</label>
        <select value={selectedCondition} onChange={handleConditionChange}>
          <option value="">Select Condition</option>
          <option value="asthma">Asthma</option>
          <option value="epilepsy">Epilepsy</option>
          <option value="diabetes">Diabetes</option>
          <option value="hypertension">Hypertension</option>
        </select>
      </div>

      {selectedCondition && (
        <>
          <div>
            <label>Select Medication:</label>
            <select value={selectedMedication} onChange={handleMedicationChange}>
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
              <div>
                <label>Select Dosage:</label>
                <select value={selectedDosage} onChange={handleDosageChange}>
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

              <div>
                <label>Select Schedule Time:</label>
                <input
                  type="time"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                />
              </div>
            </>
          )}
        </>
      )}

      <button type="submit">Save Medication</button>
    </form>
  );
};

export default MedicationForm;
